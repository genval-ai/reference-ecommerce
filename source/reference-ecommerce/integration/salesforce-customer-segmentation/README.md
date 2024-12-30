# Salesforce Customer Segmentation Integration

This AWS Lambda function integrates customer segmentation capabilities with Salesforce, allowing creation, management, and analysis of customer segments based on Salesforce data and criteria.

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
   - SALESFORCE_USERNAME
   - SALESFORCE_PASSWORD
   - SALESFORCE_SECURITY_TOKEN

4. Deploy the Lambda function using AWS CDK or your preferred method.

## API Endpoints

- POST /create-segment: Create a new customer segment
- POST /assign-customers: Assign customers to an existing segment
- GET /analyze-segment: Analyze a customer segment

Refer to the TypeScript types in the code for the expected input and output schemas for each operation.

## Testing

Run the test suite:
```
npm test
```

## Notes

- This integration uses the jsforce library to interact with Salesforce.
- Error handling and logging have been implemented for easier troubleshooting.
- The code structure allows for easy expansion with additional segment analysis metrics.