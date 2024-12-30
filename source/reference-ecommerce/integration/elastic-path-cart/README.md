# Elastic Path Cart Integration

This AWS Lambda function integrates cart management capabilities with Elastic Path's e-commerce platform, enabling cart creation, item management, and retrieval through their REST API.

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

- This integration uses Elastic Path's v2 Cart API.
- The implementation handles authentication using client credentials OAuth flow.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional cart-related operations.