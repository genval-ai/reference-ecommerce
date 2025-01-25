# Pricing Service
Manages pricing rules, item prices, and real-time data feeds for dynamic pricing management and updates.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `pricing_service` |
| Capability Image | ![Pricing Service Capability Small Image](./images/pricing_service_small.png) |

## Capability Operations

### Get Item Price
Retrieves the current price for a specific item

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_item_price` |

#### Input Schema
```json Get Item Price operation input schema
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  },
  "required": [
    "itemId"
  ]
}
```

#### Output Schema
```json Get Item Price operation output schema
{
  "type": "object",
  "properties": {
    "price": {
      "type": "number"
    },
    "currency": {
      "type": "string"
    },
    "effectiveDate": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
