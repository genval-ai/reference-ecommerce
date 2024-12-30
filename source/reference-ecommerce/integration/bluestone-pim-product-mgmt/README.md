# Bluestone PIM Product Integration

This AWS Lambda function integrates product management capabilities with Bluestone PIM to synchronize product data, including creation, retrieval, and updates of product information.

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
   - BLUESTONE_PIM_BASE_URL
   - BLUESTONE_PIM_API_KEY

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

- This integration uses axios to make HTTP requests to the Bluestone PIM API.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional Bluestone PIM API endpoints and operations.