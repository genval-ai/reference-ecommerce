import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios, { AxiosInstance } from 'axios';

// Types for our operations
type Product = {
  id?: string;
  title: string;
  body_html?: string;
  vendor?: string;
  product_type?: string;
  variants?: ProductVariant[];
};

type ProductVariant = {
  id?: string;
  product_id?: string;
  title?: string;
  price: string;
  sku?: string;
  inventory_quantity?: number;
};

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

// Implementation of getProduct operation
const getProduct = async (input: GetProductInput): Promise<Product> => {
  const client = setupShopifyClient();
  const response = await client.get(`/products/${input.productId}.json`);
  const shopifyProduct = response.data.product;

  return {
    id: shopifyProduct.id,
    title: shopifyProduct.title,
    body_html: shopifyProduct.body_html,
    vendor: shopifyProduct.vendor,
    product_type: shopifyProduct.product_type,
    variants: shopifyProduct.variants.map((v: any) => ({
      id: v.id,
      product_id: v.product_id,
      title: v.title,
      price: v.price,
      sku: v.sku,
      inventory_quantity: v.inventory_quantity
    }))
  };
};

// Implementation of createProduct operation
const createProduct = async (input: CreateProductInput): Promise<Product> => {
  const client = setupShopifyClient();
  const productData = {
    product: {
      title: input.name,
      body_html: input.description,
      vendor: 'Custom Integration',
      product_type: input.categoryId,
      variants: [
        {
          price: input.price.toString(),
          inventory_quantity: 0,
          inventory_management: 'shopify'
        }
      ]
    }
  };

  const response = await client.post('/products.json', productData);
  return response.data.product;
};

// Implementation of updateProduct operation
const updateProduct = async (input: UpdateProductInput): Promise<{ success: boolean }> => {
  const client = setupShopifyClient();
  const productData: any = {
    product: {}
  };

  if (input.name) productData.product.title = input.name;
  if (input.description) productData.product.body_html = input.description;
  if (input.categoryId) productData.product.product_type = input.categoryId;
  if (input.price) {
    productData.product.variants = [
      {
        id: input.id,
        price: input.price.toString()
      }
    ];
  }

  await client.put(`/products/${input.id}.json`, productData);
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