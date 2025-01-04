# Shopify Powered Stack

This project contains an AWS CDK stack that deploys a serverless e-commerce backend powered by Shopify and Elastic Path. The stack includes Lambda functions for product management, order management, and cart management, all exposed through an API Gateway.

## Architecture

![Architecture Diagram](https://mermaid.ink/img/pako:eNqNk01v2zAMhv8K4VMKJEvStE2B3YKhwIAd1mHYZYcFsUzbQmTJkOgkQZH_PtpxnLRNtx18kPj4kqL4kexJrjkhKdmXWBsFlVElaMMLUE4z1Zx789Zog6UyHnO1NeiuQOdOI2sFymGhlOt7_AacUrriRWU0s3gPFdp-0KK9Q1NU3FnUvEADJVhLtgaVQ-lxA1jAj70yzjMJdhAHDEVD0CyTAZyVyqEzLfCCJgPASsAOOmiB5l5oCcxWwIVvlKOhv0aPNppxBysMD0mM7HFPV_TZ4D4jIb7-MRp_CjidZuksoR9Bpo_r0Wg6jeDTeESTLLsImLygk_nqIg4S-ohOV9lqMfoBM8d-Qj_Pp-lvdDL9Np5Nk-SYwXg6W0XwNJ5OsiwdBTAXnmdxvJylp1EAX6eLZRzRJ4vFbLxKQxLf6WU1Hhqvg6CnRCB_HvQQ3YSJOASpcA_O1BV_BuVABUNjcQ-yBInS8OqZGNX8vKn63eT8qXgBpapgmRxseBqNntOuUJj9Q61VKErvZdsdknIEw5ydDYbMNjH3uDGoR9FeqsatqORUQJLc6HbL1XMzq6seLGVJNMwFN6iJZc3p_lOr4qs3_z-X3a-r7RZKEpXOcI1NV5B1b8k21mCVCOmSYaNYQVItvavBXttDmTLaGppRxUVl0R4qp9rkVGmDcsuZcDTtFkH8E5UJcpXs1QH0V3hVGnZK8lI59IqUdE8kKFO_GqnBwO5rEZ7QzZIkSpJk3_YuNNbwSjihKm30oesH7Uu2IbdGN_V5vkPp84N_ZhzevwBkjh2T)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have installed the [AWS CLI](https://aws.amazon.com/cli/) and configured it with your AWS credentials
* You have installed the [AWS CDK CLI](https://docs.aws.amazon.com/cdk/latest/guide/cli.html)

## Installing

To install the Shopify Powered Stack, follow these steps:

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory
   ```
   cd source/reference-ecommerce/stack/shopify-powered
   ```

3. Install the dependencies
   ```
   npm install
   ```

## Configuring

Before deploying, you need to set up the following environment variables:

* `SHOPIFY_SHOP_DOMAIN`: Your Shopify shop domain
* `SHOPIFY_ACCESS_TOKEN`: Your Shopify access token
* `SHOPIFY_API_VERSION`: The Shopify API version you're using
* `ELASTIC_PATH_API_BASE_URL`: Your Elastic Path API base URL
* `ELASTIC_PATH_CLIENT_ID`: Your Elastic Path client ID
* `ELASTIC_PATH_CLIENT_SECRET`: Your Elastic Path client secret

You can set these environment variables in your shell or create a `.env` file in the project root.

## Deploying

To deploy the Shopify Powered Stack, follow these steps:

1. Synthesize the CloudFormation template
   ```
   cdk synth
   ```

2. Deploy the stack
   ```
   cdk deploy
   ```

After the deployment is complete, the CDK will output the URL of your API Gateway. You can use this URL to interact with your e-commerce backend.

## Testing

To run the tests for this project, use the following command:

```
npm test
```

## Usage

The API Gateway exposes the following endpoints:

* `/product-management/*`: Handles product-related operations
* `/order-management/*`: Handles order-related operations
* `/cart-management/*`: Handles cart-related operations

Each endpoint is backed by a separate Lambda function that interacts with either Shopify or Elastic Path APIs.

## Contributing

Contributions to the Shopify Powered Stack are welcome. Please ensure you follow the existing code style and add appropriate tests for any new features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.