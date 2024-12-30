import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios, { AxiosInstance } from 'axios';

// Types for our operations
type CreateCartInput = {
  customerId: string;
};

type CreateCartOutput = {
  cartId: string;
  createdAt: string;
};

type AddItemInput = {
  cartId: string;
  productId: string;
  quantity: number;
};

type AddItemOutput = {
  cartId: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
};

type GetCartInput = {
  cartId: string;
};

type GetCartOutput = {
  cartId: string;
  customerId: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  totalAmount: number;
};

// Shopify API client setup
const setupShopifyClient = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://${process.env.SHOPIFY_SHOP_DOMAIN}/admin/api/${process.env.SHOPIFY_API_VERSION}`,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN!
    }
  });
};

// Implementation of createCart operation
const createCart = async (input: CreateCartInput): Promise<CreateCartOutput> => {
  const client = setupShopifyClient();
  const response = await client.post('/draft_orders.json', {
    draft_order: {
      customer: { id: input.customerId }
    }
  });

  const draftOrder = response.data.draft_order;
  return {
    cartId: draftOrder.id,
    createdAt: draftOrder.created_at
  };
};

// Implementation of addItem operation
const addItem = async (input: AddItemInput): Promise<AddItemOutput> => {
  const client = setupShopifyClient();
  const response = await client.get(`/draft_orders/${input.cartId}.json`);
  const draftOrder = response.data.draft_order;

  const updatedLineItems = [
    ...draftOrder.line_items,
    {
      variant_id: input.productId,
      quantity: input.quantity
    }
  ];

  await client.put(`/draft_orders/${input.cartId}.json`, {
    draft_order: {
      line_items: updatedLineItems
    }
  });

  return {
    cartId: input.cartId,
    items: updatedLineItems.map(item => ({
      productId: item.variant_id,
      quantity: item.quantity
    }))
  };
};

// Implementation of getCart operation
const getCart = async (input: GetCartInput): Promise<GetCartOutput> => {
  const client = setupShopifyClient();
  const response = await client.get(`/draft_orders/${input.cartId}.json`);
  const draftOrder = response.data.draft_order;

  return {
    cartId: draftOrder.id,
    customerId: draftOrder.customer.id,
    items: draftOrder.line_items.map((item: any) => ({
      productId: item.variant_id,
      quantity: item.quantity
    })),
    totalAmount: parseFloat(draftOrder.total_price)
  };
};

// Main handler function
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');
    let result;

    switch (event.path) {
      case '/create-cart':
        result = await createCart(body);
        break;
      case '/add-item':
        result = await addItem(body);
        break;
      case '/get-cart':
        result = await getCart(body);
        break;
      default:
        throw new Error('Invalid path');
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};