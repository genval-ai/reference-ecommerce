# Order Management
Manages order lifecycle including creation, updates, retrieval, and deletion of orders along with related operations for order processing and fulfillment.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `order-management` |

## Capability Operations

### Create Order
Creates a new order with the specified details

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_order` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerID": {
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
          },
          "price": {
            "type": "number"
          }
        }
      }
    },
    "shippingAddress": {
      "type": "object"
    },
    "paymentDetails": {
      "type": "object"
    }
  },
  "required": [
    "customerID",
    "items"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "orderID",
    "status",
    "createdAt"
  ]
}
```
### Get Order
Retrieves order details by order ID

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_order` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "customerID": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "status": {
      "type": "string"
    },
    "total": {
      "type": "number"
    }
  },
  "required": [
    "orderID",
    "status"
  ]
}
```
### Update Order
Updates an existing order's details

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_order` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "orderID",
    "status"
  ]
}
```
### Delete Order
Deletes an existing order

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete_order` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "message": {
      "type": "string"
    }
  },
  "required": [
    "success"
  ]
}
```
