# VTEX Product Management Integration
Integrates VTEX's product catalog management capabilities, enabling seamless product creation, updates, and retrieval through VTEX's REST APIs.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `vtex-product-management` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Product Management](../../capability/product-management) |
| Capability Code | `product-management` |
| Capability Image | ![Product Management Capability Square Image](../../capability/product-management/images/product-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Vtex](../../provider/vtex) |
| Provider Code | `vtex` |
| Provider Image | ![Vtex Provider Square Image](../../provider/vtex/images/vtex_square.png) |
| Connection Type Name | [VTEX Default API](../../provider/vtex#vtex-default) |
| Connection Type Code | `vtex-default` |

## Integration Instructions
To implement this integration:

1. Authentication:
- Use the provided VTEX app_key and app_token for API authentication
- Include these in the request headers as X-VTEX-API-AppKey and X-VTEX-API-AppToken

2. Operation Mappings:

get_product:
- Maps to VTEX's GET /api/catalog/pvt/product/{productId}
- Transforms VTEX's response to match the capability's output schema

create_product:
- Maps to VTEX's POST /api/catalog/pvt/product
- Convert capability input to VTEX's product creation payload

update_product:
- Maps to VTEX's PUT /api/catalog/pvt/product/{productId}
- Format the update payload according to VTEX specifications

get_related_products:
- Maps to VTEX's GET /api/catalog/pvt/product/{productId}/similar
- Transform the response to match the required related products schema

3. Error Handling:
- Implement proper error handling for VTEX API responses
- Map VTEX error codes to appropriate integration responses