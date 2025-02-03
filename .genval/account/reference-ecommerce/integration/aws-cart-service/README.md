# AWS Cart Service Integration
Implements cart management operations using AWS serverless services including DynamoDB for storage and Lambda for business logic

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `aws-cart-service` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cart Management](../../capability/cart-management) |
| Capability Code | `cart-management` |
| Capability Image | ![Cart Management Capability Square Image](../../capability/cart-management/images/cart-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Amazon Web Services](../../provider/aws) |
| Provider Code | `aws` |
| Provider Image | ![Amazon Web Services Provider Square Image](../../provider/aws/images/aws_square.png) |
| Connection Type Name | [AWS IAM Role Authentication](../../provider/aws#aws-role) |
| Connection Type Code | `aws-role` |

## Integration Instructions
This integration implements a serverless shopping cart service using AWS services. It utilizes DynamoDB for cart data persistence and Lambda functions for operation handling.

## Architecture Overview
- DynamoDB Tables:
  - `Carts`: Stores cart metadata and customer associations
  - `CartItems`: Stores items within carts
- Lambda Functions: One function per operation, utilizing IAM role authentication

## Implementation Details

### [create_cart](../../capability/cart-management#create_cart)
1. Create a new entry in the Carts DynamoDB table
   - PartitionKey: cartId (UUID v4)
   - customerId: from input
   - createdAt: current timestamp (ISO format)
2. Return the cartId and createdAt timestamp

### [add_item](../../capability/cart-management#add_item)
1. Verify cart exists in Carts table
2. Add/update item in CartItems table:
   - PartitionKey: cartId
   - SortKey: productId
   - quantity: from input
3. Return updated cart items list

### [get_cart](../../capability/cart-management#get_cart)
1. Query Carts table for cart metadata
2. Query CartItems table for all items (GSI on cartId)
3. Calculate totalAmount (implement pricing logic)
4. Return combined cart details

### [update_cart_item](../../capability/cart-management#update_cart_item)
1. Update item quantity in CartItems table
2. If quantity is 0, delete the item
3. Return updated cart status and items

## AWS Configuration

### DynamoDB Schema
```
Carts Table:
  cartId (String) - Partition Key
  customerId (String)
  createdAt (String)

CartItems Table:
  cartId (String) - Partition Key
  productId (String) - Sort Key
  quantity (Number)
```

### Required IAM Permissions
The IAM role requires the following permissions:
- dynamodb:GetItem
- dynamodb:PutItem
- dynamodb:UpdateItem
- dynamodb:DeleteItem
- dynamodb:Query

Refer to [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html) for detailed DynamoDB usage.

For Lambda implementation details, see [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

### Error Handling
- Handle DynamoDB conditional check failures
- Implement retry logic for transient failures
- Return appropriate HTTP status codes:
  - 404: Cart/Item not found
  - 400: Invalid input
  - 500: Internal server error