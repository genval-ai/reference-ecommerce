import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as path from 'path';

export class ShopifyPoweredStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'ShopifyPoweredApi', {
      restApiName: 'Shopify Powered API',
      description: 'API for Shopify-powered e-commerce capabilities',
    });

    // Create Lambda functions
    const productManagementLambda = new lambda.Function(this, 'ProductManagementLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../..', 'integration/shopify-product-management')),
      environment: {
        SHOPIFY_SHOP_DOMAIN: process.env.SHOPIFY_SHOP_DOMAIN || '',
        SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN || '',
        SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '',
      },
    });

    const orderManagementLambda = new lambda.Function(this, 'OrderManagementLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../..', 'integration/shopify_order_management')),
      environment: {
        SHOPIFY_SHOP_DOMAIN: process.env.SHOPIFY_SHOP_DOMAIN || '',
        SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN || '',
        SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '',
      },
    });

    const cartManagementLambda = new lambda.Function(this, 'CartManagementLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../..', 'integration/elastic-path-cart')),
      environment: {
        ELASTIC_PATH_API_BASE_URL: process.env.ELASTIC_PATH_API_BASE_URL || '',
        ELASTIC_PATH_CLIENT_ID: process.env.ELASTIC_PATH_CLIENT_ID || '',
        ELASTIC_PATH_CLIENT_SECRET: process.env.ELASTIC_PATH_CLIENT_SECRET || '',
      },
    });

    // Create API Gateway resources and methods
    const productManagementResource = api.root.addResource('product-management');
    const productManagementProxy = productManagementResource.addProxy({
      defaultIntegration: new apigateway.LambdaIntegration(productManagementLambda),
      anyMethod: true,
    });

    const orderManagementResource = api.root.addResource('order-management');
    const orderManagementProxy = orderManagementResource.addProxy({
      defaultIntegration: new apigateway.LambdaIntegration(orderManagementLambda),
      anyMethod: true,
    });

    const cartManagementResource = api.root.addResource('cart-management');
    const cartManagementProxy = cartManagementResource.addProxy({
      defaultIntegration: new apigateway.LambdaIntegration(cartManagementLambda),
      anyMethod: true,
    });

    // Grant API Gateway permission to invoke Lambda functions
    productManagementLambda.grantInvoke(new iam.ServicePrincipal('apigateway.amazonaws.com'));
    orderManagementLambda.grantInvoke(new iam.ServicePrincipal('apigateway.amazonaws.com'));
    cartManagementLambda.grantInvoke(new iam.ServicePrincipal('apigateway.amazonaws.com'));

    // Output the API Gateway URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'URL of the API Gateway',
    });
  }
}