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

// Elastic Path API client setup
const setupElasticPathClient = async (): Promise<AxiosInstance> => {
  const tokenResponse = await axios.post(`${process.env.ELASTIC_PATH_API_BASE_URL}/oauth/access_token`, {
    client_id: process.env.ELASTIC_PATH_CLIENT_ID,
    client_secret: process.env.ELASTIC_PATH_CLIENT_SECRET,
    grant_type: 'client_credentials'
  });

  return axios.create({
    baseURL: process.env.ELASTIC_PATH_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenResponse.data.access_token}`
    }
  });
};

// Implementation of createCart operation
const createCart = async (input: CreateCartInput): Promise<CreateCartOutput> => {
  const client = await setupElasticPathClient();
  const response = await client.post('/v2/carts', {
    data: {
      customer: {
        id: input.customerId
      }
    }
  });

  const cart = response.data.data;
  return {
    cartId: cart.id,
    createdAt: cart.meta.timestamps.created_at
  };
};

// Implementation of addItem operation
const addItem = async (input: AddItemInput): Promise<AddItemOutput> => {
  const client = await setupElasticPathClient();
  const response = await client.post(`/v2/carts/${input.cartId}/items`, {
    data: {
      id: input.productId,
      type: 'cart_item',
      quantity: input.quantity
    }
  });

  const cart = response.data.data;
  return {
    cartId: cart.id,
    items: cart.relationships.items.data.map((item: any) => ({
      productId: item.product_id,
      quantity: item.quantity
    }))
  };
};

// Implementation of getCart operation
const getCart = async (input: GetCartInput): Promise<GetCartOutput> => {
  const client = await setupElasticPathClient();
  const response = await client.get(`/v2/carts/${input.cartId}`);

  const cart = response.data.data;
  return {
    cartId: cart.id,
    customerId: cart.relationships.customer.data.id,
    items: cart.relationships.items.data.map((item: any) => ({
      productId: item.product_id,
      quantity: item.quantity
    })),
    totalAmount: parseFloat(cart.meta.display_price.with_tax.amount)
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