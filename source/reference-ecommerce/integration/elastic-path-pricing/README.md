# Elastic Path Pricing Integration

This AWS Lambda function integrates with Elastic Path's pricing API to retrieve real-time product pricing information using client credentials authentication.

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

- GET /get-item-price: Retrieve pricing information for a specific item

Refer to the TypeScript types in the code for the expected input and output schemas for each operation.

## Testing

Run the test suite:
```
npm test
```

## Notes

- This integration uses Elastic Path's Catalog API to fetch product pricing.
- The implementation handles authentication using client credentials OAuth flow.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional pricing-related operations.