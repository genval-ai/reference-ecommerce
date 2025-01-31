# Product Management
Manages product and category data within the retail system, providing operations for creating, reading, updating and deleting products, variants and categories.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `product-management` |
| Capability Image | ![Product Management Capability Small Image](./images/product-management_small.png) |

## Capability Operations

<a name="get_product"></a>
### Get Product
Retrieves detailed product information by ID

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_product` |

#### Input Schema
```json Get Product operation input schema
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    }
  },
  "required": [
    "productId"
  ]
}
```

#### Output Schema
```json Get Product operation output schema
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
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "sku": {
            "type": "string"
          },
          "attributes": {
            "type": "object"
          }
        }
      }
    }
  },
  "required": [
    "id",
    "name",
    "price"
  ]
}
```
<a name="create_product"></a>
### Create Product
Creates a new product in the system

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_product` |

#### Input Schema
```json Create Product operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "price"
  ]
}
```

#### Output Schema
```json Create Product operation output schema
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
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
}
```
<a name="update_product"></a>
### Update Product
Updates an existing product's information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_product` |

#### Input Schema
```json Update Product operation input schema
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
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
}
```

#### Output Schema
```json Update Product operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ]
}
```
