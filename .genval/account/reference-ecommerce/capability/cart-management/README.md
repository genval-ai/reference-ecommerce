# Cart Management
REST API service for managing shopping carts and cart items, enabling creation, modification and retrieval of cart data.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `cart-management` |
| Capability Image | ![Cart Management Capability Small Image](./images/cart-management_small.png) |

## Capability Operations

<a name="create_cart"></a>
### Create Cart
Creates a new empty shopping cart for a customer

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_cart` |

#### Input Schema
```json Create Cart operation input schema
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
```json Create Cart operation output schema
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
<a name="add_item"></a>
### Add Item to Cart
Adds a product item to an existing shopping cart

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `add_item` |

#### Input Schema
```json Add Item to Cart operation input schema
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
```json Add Item to Cart operation output schema
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
<a name="get_cart"></a>
### Get Cart Details
Retrieves the current state of a shopping cart

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_cart` |

#### Input Schema
```json Get Cart Details operation input schema
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
```json Get Cart Details operation output schema
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
<a name="update_cart_item"></a>
### Update Cart Item
Updates the quantity of an item in the cart or removes it if quantity is 0

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_cart_item` |

#### Input Schema
```json Update Cart Item operation input schema
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
      "minimum": 0
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
```json Update Cart Item operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "updated": {
      "type": "boolean"
    },
    "items": {
      "type": "array"
    }
  },
  "required": [
    "cartId",
    "updated",
    "items"
  ]
}
```
