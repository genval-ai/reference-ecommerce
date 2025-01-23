# Elastic Path Cart Integration
Integration between Cart Management capability and Elastic Path e-commerce platform for managing shopping carts via their REST API

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `elastic-path-cart` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cart Management](../capability/cart-management.md) |
| Capability Code | `cart-management` |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Elastic Path](../provider/elastic-path.md) |
| Provider Code | `elastic-path` |
| Connection Type Name | [Elastic Path Default Connection](../provider/elastic-path.md#elastic-path-default) |
| Connection Type Code | `elastic-path-default` |

## Integration Instructions
To implement this integration:

1. Authentication:
- Use the client_id and client_secret to obtain an OAuth token from Elastic Path
- Include the token in the Authorization header for all requests

2. Operation Mapping:

create_cart:
- POST to {api_base_url}/v2/carts
- Include customerId in request body
- Map response cartId to Elastic Path's cart identifier

add_item:
- POST to {api_base_url}/v2/carts/{cartId}/items
- Transform productId and quantity to Elastic Path's item format
- Handle response to map cart items array

get_cart:
- GET from {api_base_url}/v2/carts/{cartId}
- Map response fields to match capability schema
- Calculate totalAmount from items array

Ensure proper error handling and response validation against schemas.