# Cart Management
REST API service for managing shopping carts and cart items, enabling creation, modification and retrieval of cart data.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `cart-management` |

## Capability Operations

### Create Cart
Creates a new empty shopping cart for a customer

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_cart` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    }
  },
  "required": [
    "customerId"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "cartId",
    "createdAt"
  ]
}
```
### Add Item to Cart
Adds a product item to an existing shopping cart

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `add_item` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "productId": {
      "type": "string"
    },
    "quantity": {
      "type": "integer",
      "minimum": 1
    }
  },
  "required": [
    "cartId",
    "productId",
    "quantity"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "productId": {
            "type": "string"
          },
          "quantity": {
            "type": "integer"
          }
        }
      }
    }
  },
  "required": [
    "cartId",
    "items"
  ]
}
```
### Get Cart Details
Retrieves the current state of a shopping cart

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_cart` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    }
  },
  "required": [
    "cartId"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "customerId": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "totalAmount": {
      "type": "number"
    }
  },
  "required": [
    "cartId",
    "customerId",
    "items",
    "totalAmount"
  ]
}
```
