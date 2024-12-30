# Shopify Order Management Integration

This AWS Lambda function integrates Order Management capabilities with Shopify's order processing system to synchronize and manage orders across platforms.

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

- POST /create-order: Create a new order
- GET /get-order: Retrieve order details
- PUT /update-order: Update an existing order
- DELETE /delete-order: Delete an order

Refer to the TypeScript types in the code for the expected input and output schemas for each operation.

## Testing

Run the test suite:
```
npm test
```

## Notes

- This integration uses Shopify's Admin API to manage orders.
- The implementation uses axios for making HTTP requests to the Shopify API.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional order-related operations.