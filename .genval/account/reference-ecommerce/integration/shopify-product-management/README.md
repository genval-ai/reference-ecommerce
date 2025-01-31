# Shopify Product Management Integration
Integrate Shopify's product management capabilities with your retail system to synchronize product data, variants, and categories between systems.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `shopify-product-management` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Product Management](../../capability/product-management) |
| Capability Code | `product-management` |
| Capability Image | ![Product Management Capability Square Image](../../capability/product-management/images/product-management_square.png) |

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

1. Map Capability Operations:
   - get_product: Use Shopify's GET /admin/api/{version}/products/{id}.json
   - create_product: Use POST /admin/api/{version}/products.json
   - update_product: Use PUT /admin/api/{version}/products/{id}.json

2. Data Mapping:
   - Map product.id to Shopify's product.id
   - Map product.name to Shopify's product.title
   - Map product.price to Shopify's variants[0].price
   - Map product.description to Shopify's product.body_html
   - Map variants array to Shopify's variants array

3. Authentication:
   - Use the access_token in the Authorization header
   - Format: 'X-Shopify-Access-Token: {access_token}'

4. API Version:
   - Use the api_version parameter in the URL
   - Default to latest if not specified

5. Error Handling:
   - Handle 429 rate limiting errors
   - Implement retry logic for failed requests
   - Validate response data against capability schemas