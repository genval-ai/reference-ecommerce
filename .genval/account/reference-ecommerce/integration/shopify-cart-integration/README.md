# Shopify Cart Management Integration
Integrate shopping cart operations with Shopify's e-commerce platform, enabling seamless cart creation, item management, and retrieval through Shopify's Admin API.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `shopify-cart-integration` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cart Management](../../capability/cart-management) |
| Capability Code | `cart-management` |
| Capability Image | ![Cart Management Capability Square Image](../../capability/cart-management/images/cart-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Shopify](../../provider/shopify) |
| Provider Code | `shopify` |
| Provider Image | ![Shopify Provider Square Image](../../provider/shopify/images/shopify_square.png) |
| Connection Type Name | [Shopify](../../provider/shopify#shopify) |
| Connection Type Code | `shopify` |

## Integration Instructions
To implement this integration:

1. Authentication:
- Use the Shopify access_token for API authorization
- Include shop_domain to identify the target store
- Use the specified api_version for endpoint URLs

2. Operation Mappings:

create_cart:
- Map to Shopify's Draft Order API
- Create a new draft order using customerId
- Return draft order ID as cartId

add_item:
- Use Draft Order API's line items endpoint
- Convert productId to Shopify's product variant ID
- Update draft order with new line items

get_cart:
- Fetch draft order details using the cartId
- Calculate totalAmount from line items
- Format response to match the capability's output schema

3. Error Handling:
- Implement retry logic for rate limits
- Handle Shopify-specific error responses
- Validate product availability before adding items