import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios, { AxiosInstance } from 'axios';

// Types for our operations
type GetItemPriceInput = {
  itemId: string;
  locationId?: string;
};

type GetItemPriceOutput = {
  price: number;
  currency: string;
  effectiveDate: string;
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

// Implementation of getItemPrice operation
const getItemPrice = async (input: GetItemPriceInput): Promise<GetItemPriceOutput> => {
  const client = await setupElasticPathClient();
  let endpoint = `/catalog/products/${input.itemId}/price`;

  if (input.locationId) {
    endpoint += `?location=${input.locationId}`;
  }

  const response = await client.get(endpoint);
  const priceData = response.data.data;

  return {
    price: parseFloat(priceData.attributes.price.amount),
    currency: priceData.attributes.price.currency,
    effectiveDate: new Date().toISOString() // Elastic Path doesn't provide this, so we use current date
  };
};

// Main handler function
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');
    let result;

    switch (event.path) {
      case '/get-item-price':
        result = await getItemPrice(body);
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