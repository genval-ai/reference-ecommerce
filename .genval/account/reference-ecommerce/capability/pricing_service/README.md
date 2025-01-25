# Pricing Service
Manages pricing rules, item prices, and real-time data feeds for dynamic pricing management and updates.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `pricing_service` |

## Capability Images
| Medium | Small | Square |
|--------|-------|--------|
| ![Pricing Service Capability Medium Image](./images/pricing_service_medium.png) | ![Pricing Service Capability Small Image](./images/pricing_service_small.png) | ![Pricing Service Capability Square Image](./images/pricing_service_square.png) |

## Capability Operations

### Get Item Price
Retrieves the current price for a specific item

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_item_price` |

#### Input Schema
```json operation input schema
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
```json operation output schema
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
