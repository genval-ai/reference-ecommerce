# Pipe17 Order Management Integration
Integrates order management capabilities with Pipe17's unified order operations platform for seamless order processing and fulfillment across multiple sales channels.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `p17_order_mgmt` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Order Management](../../capability/order-management) |
| Capability Code | `order-management` |
| Capability Image | ![Order Management Capability Square Image](../../capability/order-management/images/order-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Pipe17](../../provider/pipe17) |
| Provider Code | `pipe17` |
| Provider Image | ![Pipe17 Provider Square Image](../../provider/pipe17/images/pipe17_square.png) |
| Connection Type Name | [Pipe17 Connection](../../provider/pipe17#pipe17_default) |
| Connection Type Code | `pipe17_default` |

## Integration Instructions
This integration enables order management operations through Pipe17's unified platform. Before implementing, ensure you have valid [api_key](../../provider/pipe17#pipe17_default_api_key) credentials and have configured the correct [environment](../../provider/pipe17#pipe17_default_environment).

## Authentication
All API requests to Pipe17 require the API key to be included in the Authorization header:
```
Authorization: Bearer {api_key}
```

## Operation Implementation Details

### Creating Orders
To implement [create_order](../../capability/order-management#create_order), map the capability's order input to Pipe17's order creation endpoint:
- Map `customerID` to Pipe17's `customer_reference`
- Transform `items` array to Pipe17's line item format
- Include shipping and payment details in respective Pipe17 order objects

Endpoint: `POST https://api.pipe17.com/v1/orders`

### Retrieving Orders
Implement [get_order](../../capability/order-management#get_order) by querying Pipe17's order detail endpoint using the provided orderID:
- Pipe17 returns comprehensive order details including status, items, and customer information
- Map response fields to match capability output schema

Endpoint: `GET https://api.pipe17.com/v1/orders/{orderID}`

### Updating Orders
For [update_order](../../capability/order-management#update_order) operations:
- Only specified fields in the input schema should be included in update payload
- Status updates follow Pipe17's order status lifecycle
- Partial updates are supported

Endpoint: `PATCH https://api.pipe17.com/v1/orders/{orderID}`

### Deleting Orders
Implement [delete_order](../../capability/order-management#delete_order) with caution:
- Pipe17 supports soft deletion of orders
- Returns success response when order is marked for deletion

Endpoint: `DELETE https://api.pipe17.com/v1/orders/{orderID}`

## Webhook Integration
To receive real-time order updates:
1. Configure the [webhook_url](../../provider/pipe17#pipe17_default_webhook_url) in your connection settings
2. Pipe17 will POST order event notifications to this URL
3. Implement webhook handler to process order status changes and updates

## Error Handling
Pipe17 uses standard HTTP status codes:
- 400: Bad Request - Invalid input
- 401: Unauthorized - Invalid API key
- 404: Not Found - Order doesn't exist
- 429: Too Many Requests - Rate limit exceeded
- 500: Internal Server Error

Implement appropriate error handling and retries for failed requests.

For detailed API documentation, visit: https://docs.pipe17.com/api