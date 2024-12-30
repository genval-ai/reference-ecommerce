# Customer Management
API for managing customer records and operations including creation, updates, retrieval and deletion of customer data.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `customer-management` |

## Capability Operations

### Get Customer Details
Retrieves detailed information for a specific customer by ID

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_customer` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Unique identifier for the customer"
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
    "customerId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "customerId",
    "name"
  ]
}
```
### Create New Customer
Creates a new customer record in the system

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_customer` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
    }
  },
  "required": [
    "name",
    "email"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    },
    "success": {
      "type": "boolean"
    }
  },
  "required": [
    "customerId",
    "success"
  ]
}
```
### Update Customer Information
Updates existing customer information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_customer` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
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
    "success": {
      "type": "boolean"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "success"
  ]
}
```
### Delete Customer
Removes a customer record from the system

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete_customer` |

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
    "success": {
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ]
}
```
