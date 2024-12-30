# Elastic Path Product Management Integration

This AWS Lambda function integrates Product Management capabilities with Elastic Path's commerce platform to manage products, variants, and inventory through their API.

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
   - ELASTIC_PATH_API_BASE_URL
   - ELASTIC_PATH_CLIENT_ID
   - ELASTIC_PATH_CLIENT_SECRET

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

- This integration uses Elastic Path's v2 Product API.
- The implementation handles authentication using client credentials OAuth flow.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional product-related operations.