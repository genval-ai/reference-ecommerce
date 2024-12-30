# Shopify Product Management Integration

This AWS Lambda function integrates product management capabilities with Shopify, allowing creation, retrieval, and updates of product information using Shopify's Admin API.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. Set up environment variables:
   - SHOPIFY_SHOP_DOMAIN
   - SHOPIFY_ACCESS_TOKEN
   - SHOPIFY_API_VERSION

4. Deploy the Lambda function using AWS CDK or your preferred method.

## API Endpoints

- GET /get-product: Retrieve product details
- POST /create-product: Create a new product
- PUT /update-product: Update an existing product

Refer to the TypeScript types in the code for the expected input and output schemas for each operation.

## Testing

Run the test suite:
```
npm test
```

## Notes

- This integration uses axios to make HTTP requests to the Shopify Admin API.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional Shopify API endpoints and operations.