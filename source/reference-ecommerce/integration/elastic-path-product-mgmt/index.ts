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

// Implementation of getProduct operation
const getProduct = async (input: GetProductInput): Promise<Product> => {
  const client = await setupElasticPathClient();
  const response = await client.get(`/v2/products/${input.productId}`);
  const product = response.data.data;

  return {
    id: product.id,
    name: product.attributes.name,
    description: product.attributes.description,
    price: parseFloat(product.meta.display_price.with_tax.amount),
    categoryId: product.relationships.categories.data[0]?.id,
    variants: product.relationships.variations.data.map((v: any) => ({
      id: v.id,
      sku: v.attributes.sku,
      attributes: v.attributes
    }))
  };
};

// Implementation of createProduct operation
const createProduct = async (input: CreateProductInput): Promise<Product> => {
  const client = await setupElasticPathClient();
  const productData = {
    data: {
      type: 'product',
      attributes: {
        name: input.name,
        description: input.description,
        commodity_type: 'physical'
      },
      relationships: input.categoryId ? {
        categories: {
          data: [{ type: 'category', id: input.categoryId }]
        }
      } : undefined
    }
  };

  const response = await client.post('/v2/products', productData);
  const createdProduct = response.data.data;

  // Create a price for the product
  await client.post(`/v2/products/${createdProduct.id}/variations`, {
    data: {
      type: 'product-variation',
      attributes: {
        sku: `SKU-${createdProduct.id}`,
        price: {
          amount: input.price,
          currency: 'USD'
        }
      }
    }
  });

  return {
    id: createdProduct.id,
    name: createdProduct.attributes.name,
    description: createdProduct.attributes.description,
    price: input.price,
    categoryId: input.categoryId
  };
};

// Implementation of updateProduct operation
const updateProduct = async (input: UpdateProductInput): Promise<{ success: boolean }> => {
  const client = await setupElasticPathClient();
  const updateData: any = {
    data: {
      type: 'product',
      id: input.id
    }
  };

  if (input.name || input.description) {
    updateData.data.attributes = {};
    if (input.name) updateData.data.attributes.name = input.name;
    if (input.description) updateData.data.attributes.description = input.description;
  }

  if (input.categoryId) {
    updateData.data.relationships = {
      categories: {
        data: [{ type: 'category', id: input.categoryId }]
      }
    };
  }

  await client.put(`/v2/products/${input.id}`, updateData);

  if (input.price) {
    const variations = await client.get(`/v2/products/${input.id}/variations`);
    const mainVariation = variations.data.data[0];
    await client.put(`/v2/products/${input.id}/variations/${mainVariation.id}`, {
      data: {
        type: 'product-variation',
        id: mainVariation.id,
        attributes: {
          price: {
            amount: input.price,
            currency: 'USD'
          }
        }
      }
    });
  }

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