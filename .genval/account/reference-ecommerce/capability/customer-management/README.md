# Customer Management
API for managing customer records and operations including creation, updates, retrieval and deletion of customer data.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `customer-management` |
| Capability Image | ![Customer Management Capability Small Image](./images/customer-management_small.png) |

## Capability Operations

<a name="get_customer"></a>
### Get Customer Details
Retrieves detailed information for a specific customer by ID

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_customer` |

#### Input Schema
```json Get Customer Details operation input schema
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
```json Get Customer Details operation output schema
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
<a name="create_customer"></a>
### Create New Customer
Creates a new customer record in the system

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_customer` |

#### Input Schema
```json Create New Customer operation input schema
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
```json Create New Customer operation output schema
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
<a name="update_customer"></a>
### Update Customer Information
Updates existing customer information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_customer` |

#### Input Schema
```json Update Customer Information operation input schema
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
```json Update Customer Information operation output schema
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
<a name="delete_customer"></a>
### Delete Customer
Removes a customer record from the system

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete_customer` |

#### Input Schema
```json Delete Customer operation input schema
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
```json Delete Customer operation output schema
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
<a name="authenticate_customer"></a>
### Authenticate Customer
Authenticates a customer's credentials and returns a session token

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `authenticate_customer` |

#### Input Schema
```json Authenticate Customer operation input schema
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
}
```

#### Output Schema
```json Authenticate Customer operation output schema
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "customerId": {
      "type": "string"
    },
    "expiresAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "token",
    "customerId"
  ]
}
```
