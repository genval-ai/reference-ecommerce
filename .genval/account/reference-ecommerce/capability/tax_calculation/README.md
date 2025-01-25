# Tax Calculation
RESTful service for calculating taxes in e-commerce transactions across multiple countries, specializing in Japanese and international market tax computations.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `tax_calculation` |

## Capability Images
| Medium | Small | Square |
|--------|-------|--------|
| ![Tax Calculation Capability Medium Image](./images/tax_calculation_medium.png) | ![Tax Calculation Capability Small Image](./images/tax_calculation_small.png) | ![Tax Calculation Capability Square Image](./images/tax_calculation_square.png) |

## Capability Operations

### Calculate Transaction Tax
Calculates applicable taxes for a given e-commerce transaction based on product details and jurisdiction.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `calculate_tax` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "amount": {
      "type": "number"
    },
    "currency": {
      "type": "string"
    },
    "country": {
      "type": "string"
    },
    "product_type": {
      "type": "string"
    },
    "shipping_address": {
      "type": "object"
    }
  },
  "required": [
    "amount",
    "currency",
    "country"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "total_tax": {
      "type": "number"
    },
    "tax_breakdown": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "tax_type": {
            "type": "string"
          },
          "rate": {
            "type": "number"
          },
          "amount": {
            "type": "number"
          }
        }
      }
    },
    "currency": {
      "type": "string"
    }
  },
  "required": [
    "total_tax",
    "currency"
  ]
}
```
### Get Tax Rates
Retrieves current tax rates for a specific country or region.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_tax_rates` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "country": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "product_type": {
      "type": "string"
    }
  },
  "required": [
    "country"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "country": {
      "type": "string"
    },
    "rates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "rate": {
            "type": "number"
          },
          "effective_date": {
            "type": "string"
          }
        }
      }
    }
  },
  "required": [
    "country",
    "rates"
  ]
}
```
