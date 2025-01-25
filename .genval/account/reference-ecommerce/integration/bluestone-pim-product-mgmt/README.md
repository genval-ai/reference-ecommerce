# Bluestone PIM Product Integration
Integrate product management capabilities with Bluestone PIM to synchronize product data, including creation, retrieval, and updates of product information.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `bluestone-pim-product-mgmt` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Product Management](../../capability/product-management) |
| Capability Code | `product-management` |
| Capability Image | ![Product Management Capability Square Image](../../capability/product-management/images/product-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Bluestone PIM](../../provider/bluestone-pim) |
| Provider Code | `bluestone-pim` |
| Provider Image | ![Bluestone PIM Provider Square Image](../../provider/bluestone-pim/images/bluestone-pim_square.png) |
| Connection Type Name | [Bluestone PIM](../../provider/bluestone-pim#bluestone-pim) |
| Connection Type Code | `bluestone-pim` |

## Integration Instructions
To implement this integration:

1. Authentication:
- Use the provided API Key in the 'api_key' header for all requests
- Use the base_url as the root endpoint for API calls

2. Operation Mappings:

Get Product (get_product):
- Endpoint: GET {base_url}/products/{productId}
- Map the response fields to match the output schema, ensuring variant data is properly structured

Create Product (create_product):
- Endpoint: POST {base_url}/products
- Convert the input schema to Bluestone's format, including all required fields
- Return the created product ID and details in the response

Update Product (update_product):
- Endpoint: PUT {base_url}/products/{id}
- Send only modified fields in the request body
- Return success status based on the API response

Ensure proper error handling and validation of responses against the capability's schema requirements.