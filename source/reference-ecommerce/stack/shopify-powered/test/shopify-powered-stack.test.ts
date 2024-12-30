import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ShopifyPoweredStack from '../lib/shopify-powered-stack';

test('API Gateway Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new ShopifyPoweredStack.ShopifyPoweredStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::ApiGateway::RestApi', {
    Name: 'Shopify Powered API'
  });
});

test('Lambda Functions Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new ShopifyPoweredStack.ShopifyPoweredStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 3);
});

test('API Gateway Resources Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new ShopifyPoweredStack.ShopifyPoweredStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::ApiGateway::Resource', 6);  // 3 main resources + 3 proxy resources
});

test('Lambda Permissions Granted', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new ShopifyPoweredStack.ShopifyPoweredStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Permission', 3);
});