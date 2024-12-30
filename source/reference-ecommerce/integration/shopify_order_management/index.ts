import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios, { AxiosInstance } from 'axios';

// Types for our operations
type CreateOrderInput = {
  customerID: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress: Record<string, any>;
  paymentDetails: Record<string, any>;
};

type CreateOrderOutput = {
  orderID: string;
  status: string;
  createdAt: string;
};

type GetOrderInput = {
  orderID: string;
};

type GetOrderOutput = {
  orderID: string;
  customerID: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  status: string;
  total: number;
};

type UpdateOrderInput = {
  orderID: string;
  items?: Array<{
    productId: string;
    quantity: number;
  }>;
  status?: string;
};

type UpdateOrderOutput = {
  orderID: string;
  status: string;
  updatedAt: string;
};

type DeleteOrderInput = {
  orderID: string;
};

type DeleteOrderOutput = {
  success: boolean;
  message: string;
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

// Implementation of createOrder operation
const createOrder = async (input: CreateOrderInput): Promise<CreateOrderOutput> => {
  const client = setupShopifyClient();
  const response = await client.post('/orders.json', {
    order: {
      customer: { id: input.customerID },
      line_items: input.items.map(item => ({
        variant_id: item.productId,
        quantity: item.quantity,
        price: item.price.toString()
      })),
      shipping_address: input.shippingAddress,
      financial_status: 'paid',
      transactions: [
        {
          kind: 'sale',
          status: 'success',
          amount: input.items.reduce((total, item) => total + item.price * item.quantity, 0)
        }
      ]
    }
  });

  const order = response.data.order;
  return {
    orderID: order.id,
    status: order.financial_status,
    createdAt: order.created_at
  };
};

// Implementation of getOrder operation
const getOrder = async (input: GetOrderInput): Promise<GetOrderOutput> => {
  const client = setupShopifyClient();
  const response = await client.get(`/orders/${input.orderID}.json`);
  const order = response.data.order;

  return {
    orderID: order.id,
    customerID: order.customer.id,
    items: order.line_items.map((item: any) => ({
      productId: item.variant_id,
      quantity: item.quantity
    })),
    status: order.financial_status,
    total: parseFloat(order.total_price)
  };
};

// Implementation of updateOrder operation
const updateOrder = async (input: UpdateOrderInput): Promise<UpdateOrderOutput> => {
  const client = setupShopifyClient();
  const updateData: any = {};

  if (input.items) {
    updateData.line_items = input.items.map(item => ({
      variant_id: item.productId,
      quantity: item.quantity
    }));
  }

  if (input.status) {
    updateData.financial_status = input.status;
  }

  const response = await client.put(`/orders/${input.orderID}.json`, { order: updateData });
  const updatedOrder = response.data.order;

  return {
    orderID: updatedOrder.id,
    status: updatedOrder.financial_status,
    updatedAt: updatedOrder.updated_at
  };
};

// Implementation of deleteOrder operation
const deleteOrder = async (input: DeleteOrderInput): Promise<DeleteOrderOutput> => {
  const client = setupShopifyClient();
  await client.delete(`/orders/${input.orderID}.json`);

  return {
    success: true,
    message: `Order ${input.orderID} has been successfully deleted.`
  };
};

// Main handler function
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');
    let result;

    switch (event.path) {
      case '/create-order':
        result = await createOrder(body);
        break;
      case '/get-order':
        result = await getOrder(body);
        break;
      case '/update-order':
        result = await updateOrder(body);
        break;
      case '/delete-order':
        result = await deleteOrder(body);
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