# Order Management
Manages order lifecycle including creation, updates, retrieval, and deletion of orders along with related operations for order processing and fulfillment.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `order-management` |
| Capability Image | ![Order Management Capability Small Image](./images/order-management_small.png) |

## Capability Operations

<a name="create_order"></a>
### Create Order
Creates a new order with the specified details

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_order` |

#### Input Schema
```json Create Order operation input schema
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
```json Create Order operation output schema
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
<a name="get_order"></a>
### Get Order
Retrieves order details by order ID

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_order` |

#### Input Schema
```json Get Order operation input schema
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
```json Get Order operation output schema
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
<a name="update_order"></a>
### Update Order
Updates an existing order's details

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_order` |

#### Input Schema
```json Update Order operation input schema
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
```json Update Order operation output schema
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
<a name="delete_order"></a>
### Delete Order
Deletes an existing order

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete_order` |

#### Input Schema
```json Delete Order operation input schema
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
```json Delete Order operation output schema
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
<a name="list_customer_orders"></a>
### List Customer Orders
Retrieves a paginated list of orders for a specific customer

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `list_customer_orders` |

#### Input Schema
```json List Customer Orders operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "pageSize": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "customerId",
    "page",
    "pageSize"
  ]
}
```

#### Output Schema
```json List Customer Orders operation output schema
{
  "type": "object",
  "properties": {
    "orders": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "orderId": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "total": {
            "type": "number"
          },
          "date": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    },
    "totalCount": {
      "type": "integer"
    }
  },
  "required": [
    "orders",
    "totalCount"
  ]
}
```
