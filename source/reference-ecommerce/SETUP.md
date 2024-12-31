# Setup Guide

This guide will walk you through the process of setting up and deploying the Shopify-Powered E-commerce Reference Implementation.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- AWS CLI
- AWS CDK CLI (v2.x)
- Git

You will also need:

- An AWS account with appropriate permissions
- A Shopify store and API credentials
- An Elastic Path account and API credentials

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd source/reference-ecommerce
```

## Step 2: Install Dependencies

Navigate to the stack directory and install the required npm packages:

```bash
cd stack/shopify-powered
npm install
```

## Step 3: Configure Environment Variables

Create a `.env` file in the `stack/shopify-powered` directory with the following content:

```
SHOPIFY_SHOP_DOMAIN=your-shop.myshopify.com
SHOPIFY_ACCESS_TOKEN=your_access_token
SHOPIFY_API_VERSION=2023-04
ELASTIC_PATH_API_BASE_URL=https://api.elasticpath.com
ELASTIC_PATH_CLIENT_ID=your_client_id
ELASTIC_PATH_CLIENT_SECRET=your_client_secret
```

Replace the placeholder values with your actual credentials.

## Step 4: Configure AWS CLI

Ensure your AWS CLI is configured with the correct credentials and region:

```bash
aws configure
```

## Step 5: Bootstrap AWS CDK

If you haven't used CDK in this AWS account and region before, you need to bootstrap it:

```bash
cdk bootstrap
```

## Step 6: Build the Project

Compile the TypeScript code:

```bash
npm run build
```

## Step 7: Deploy the Stack

Deploy the CDK stack to your AWS account:

```bash
cdk deploy
```

This command will show you a summary of the changes and ask for confirmation before deploying.

## Step 8: Note the API Endpoint

After successful deployment, CDK will output the URL of your API Gateway. Note this URL as you'll need it to interact with your API.

## Step 9: Test the Deployment

You can now test your deployed API using tools like curl or Postman. For example:

```bash
curl -X GET https://<your-api-id>.execute-api.<region>.amazonaws.com/prod/product-management/products
```

Replace `<your-api-id>` and `<region>` with the appropriate values from your deployment.

## Troubleshooting

- If you encounter permission issues, ensure your AWS CLI is configured with credentials that have sufficient permissions to create the required resources.
- For any deployment errors, check the CloudFormation console in the AWS Management Console for detailed error messages.
- Ensure all environment variables are correctly set before deployment.

## Next Steps

- Review the [README.md](./README.md) file for an overview of the system architecture and available services.
- Explore the individual service implementations in the `source/reference-ecommerce/integration/` directory.
- Check out the API specifications in the `source/reference-ecommerce/capability/` directory to understand the available endpoints and their usage.

For any additional help or to report issues, please refer to the project's issue tracker on GitHub.