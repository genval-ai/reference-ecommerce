# Elastic Path Product Management Integration
Integrate Product Management capabilities with Elastic Path's commerce platform to manage products, variants, and inventory through their API.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `elastic-path-product-mgmt` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Product Management](../../capability/product-management) |
| Capability Code | `product-management` |
| Capability Image | ![Product Management Capability Square Image](../../capability/product-management/images/product-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Elastic Path](../../provider/elastic-path) |
| Provider Code | `elastic-path` |
| Provider Image | ![Elastic Path Provider Square Image](../../provider/elastic-path/images/elastic-path_square.png) |
| Connection Type Name | [Elastic Path Default Connection](../../provider/elastic-path#elastic-path-default) |
| Connection Type Code | `elastic-path-default` |

## Integration Instructions
To implement this integration:

1. Authentication Setup:
- Use the client_id and client_secret to obtain an OAuth token from Elastic Path
- Include the token in all API requests as a Bearer token

2. API Endpoints:
- Base all API requests on the api_base_url property
- Product endpoints will typically be: {api_base_url}/v2/products/

3. Operation Mappings:

Get Product (get_product):
- HTTP GET to {api_base_url}/v2/products/{productId}
- Map response.data to output schema
- Ensure variant data is properly nested

Create Product (create_product):
- HTTP POST to {api_base_url}/v2/products
- Convert input schema to Elastic Path product format
- Include all required fields in request body

Update Product (update_product):
- HTTP PUT to {api_base_url}/v2/products/{id}
- Send only modified fields in request body
- Check response status for success

Ensure error handling is implemented for all operations with appropriate status code handling and response mapping.