# Promotions
Manage and retrieve promotions in an e-commerce context, supporting international commerce with localization features for creating, updating, and applying promotional offers.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `promotions` |
| Capability Image | ![Promotions Capability Small Image](./images/promotions_small.png) |

## Capability Operations

<a name="create_promotion"></a>
### Create Promotion
Create a new promotional offer with specified rules, conditions, and rewards.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_promotion` |

#### Input Schema
```json Create Promotion operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    },
    "discountType": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed",
        "bogo"
      ]
    },
    "discountValue": {
      "type": "number"
    },
    "conditions": {
      "type": "object"
    },
    "locales": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "name",
    "startDate",
    "endDate",
    "discountType",
    "discountValue"
  ]
}
```

#### Output Schema
```json Create Promotion operation output schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "created": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "id",
    "status",
    "created"
  ]
}
```
<a name="get_applicable_promotions"></a>
### Get Applicable Promotions
Retrieve all valid promotions applicable to a specific cart or user.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_applicable_promotions` |

#### Input Schema
```json Get Applicable Promotions operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "locale": {
      "type": "string"
    }
  },
  "required": [
    "cartId"
  ]
}
```

#### Output Schema
```json Get Applicable Promotions operation output schema
{
  "type": "object",
  "properties": {
    "promotions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "discountValue": {
            "type": "number"
          }
        }
      }
    },
    "totalDiscount": {
      "type": "number"
    }
  },
  "required": [
    "promotions",
    "totalDiscount"
  ]
}
```
<a name="update_promotion"></a>
### Update Promotion
Modify an existing promotion's details, rules, or conditions.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_promotion` |

#### Input Schema
```json Update Promotion operation input schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    },
    "discountValue": {
      "type": "number"
    },
    "conditions": {
      "type": "object"
    }
  },
  "required": [
    "id"
  ]
}
```

#### Output Schema
```json Update Promotion operation output schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "updated": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "id",
    "status",
    "updated"
  ]
}
```
<a name="delete_promotion"></a>
### Delete Promotion
Remove a promotion from the system.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete_promotion` |

#### Input Schema
```json Delete Promotion operation input schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
}
```

#### Output Schema
```json Delete Promotion operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "deletedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "success",
    "deletedAt"
  ]
}
```
