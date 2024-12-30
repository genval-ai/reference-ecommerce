import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios, { AxiosInstance } from 'axios';

// Types for our operations
type GetProductInput = {
  productId: string;
};

type CreateProductInput = {
  name: string;
  description?: string;
  price: number;
  categoryId?: string;
};

type UpdateProductInput = {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  categoryId?: string;
};

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId?: string;
  variants?: Array<{
    id: string;
    sku: string;
    attributes: Record<string, any>;
  }>;
};

// Bluestone PIM API client setup
const setupBluestonePIMClient = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.BLUESTONE_PIM_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'api_key': process.env.BLUESTONE_PIM_API_KEY!
    }
  });
};

// Implementation of getProduct operation
const getProduct = async (input: GetProductInput): Promise<Product> => {
  const client = setupBluestonePIMClient();
  const response = await client.get(`/products/${input.productId}`);
  const product = response.data;

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    categoryId: product.category_id,
    variants: product.variants.map((v: any) => ({
      id: v.id,
      sku: v.sku,
      attributes: v.attributes
    }))
  };
};

// Implementation of createProduct operation
const createProduct = async (input: CreateProductInput): Promise<Product> => {
  const client = setupBluestonePIMClient();
  const productData = {
    name: input.name,
    description: input.description,
    price: input.price,
    category_id: input.categoryId
  };

  const response = await client.post('/products', productData);
  const createdProduct = response.data;

  return {
    id: createdProduct.id,
    name: createdProduct.name,
    description: createdProduct.description,
    price: createdProduct.price,
    categoryId: createdProduct.category_id
  };
};

// Implementation of updateProduct operation
const updateProduct = async (input: UpdateProductInput): Promise<{ success: boolean }> => {
  const client = setupBluestonePIMClient();
  const productData: any = {};

  if (input.name) productData.name = input.name;
  if (input.description) productData.description = input.description;
  if (input.price) productData.price = input.price;
  if (input.categoryId) productData.category_id = input.categoryId;

  await client.put(`/products/${input.id}`, productData);
  return { success: true };
};

// Main handler function
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');
    let result;

    switch (event.path) {
      case '/get-product':
        result = await getProduct(body);
        break;
      case '/create-product':
        result = await createProduct(body);
        break;
      case '/update-product':
        result = await updateProduct(body);
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