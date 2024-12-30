# Shopify Cart Integration

This AWS Lambda function integrates shopping cart operations with Shopify's e-commerce platform, enabling seamless cart creation, item management, and retrieval through Shopify's Admin API.

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

- POST /create-cart: Create a new shopping cart
- POST /add-item: Add an item to an existing cart
- GET /get-cart: Retrieve cart details

Refer to the TypeScript types in the code for the expected input and output schemas for each operation.

## Testing

Run the test suite:
```
npm test
```

## Notes

- This integration uses Shopify's Draft Orders API to represent shopping carts.
- The implementation uses axios for making HTTP requests to the Shopify Admin API.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional cart-related operations.