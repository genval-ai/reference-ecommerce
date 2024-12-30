# Elastic Path Pricing Integration
Integrates with Elastic Path's pricing API to retrieve real-time product pricing information using client credentials authentication.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `elastic-path-pricing` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Pricing Service](../capability/pricing_service.md) |
| Capability Code | `pricing_service` |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Elastic Path](../provider/elastic-path.md) |
| Provider Code | `elastic-path` |
| Connection Type Name | [Elastic Path Default Connection](../provider/elastic-path.md#elastic-path-default) |
| Connection Type Code | `elastic-path-default` |

## Integration Instructions
To implement this integration:

1. Configure the Elastic Path connection with your client credentials and API base URL
2. Map the itemId from the pricing service to your Elastic Path product ID
3. Call the get_item_price operation, which will:
   - Authenticate using the provided credentials
   - Make a GET request to {api_base_url}/catalog/products/{itemId}/price
   - Transform the response to match the expected output schema

Note: The locationId parameter is optional and can be used to get location-specific pricing if supported by your Elastic Path configuration.