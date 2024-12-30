# Shopify Order Management Integration
Integrate Order Management capabilities with Shopify's order processing system to synchronize and manage orders across platforms.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `shopify_order_management` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Order Management](../capability/order-management.md) |
| Capability Code | `order-management` |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Shopify](../provider/shopify.md) |
| Provider Code | `shopify` |
| Connection Type Name | [Shopify](../provider/shopify.md#shopify) |
| Connection Type Code | `shopify` |

## Integration Instructions
To implement this integration:

1. Map Capability Operations to Shopify Endpoints:
   - create_order → POST /admin/api/{version}/orders.json
   - get_order → GET /admin/api/{version}/orders/{id}.json
   - update_order → PUT /admin/api/{version}/orders/{id}.json
   - delete_order → DELETE /admin/api/{version}/orders/{id}.json

2. Data Transformations Required:
   - Convert capability's order schema to Shopify's order format
   - Map customerID to Shopify's customer_id
   - Transform items array to Shopify's line_items format
   - Convert addresses to Shopify's shipping_address format

3. Authentication:
   - Use the provided access_token in the Authorization header
   - Format: 'X-Shopify-Access-Token: {access_token}'

4. API Version Handling:
   - Use the api_version from connection properties
   - Construct base URL: https://{shop_domain}/admin/api/{api_version}/

5. Error Handling:
   - Handle Shopify-specific error codes
   - Implement retry logic for rate limits
   - Validate response formats match capability schemas