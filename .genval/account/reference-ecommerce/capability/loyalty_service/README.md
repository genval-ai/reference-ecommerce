# Loyalty Service
Manages loyalty program members, their transactions, rewards, and promotional activities through a comprehensive API interface.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `loyalty_service` |
| Capability Image | ![Loyalty Service Capability Small Image](./images/loyalty_service_small.png) |

## Capability Operations

<a name="create_member"></a>
### Create Loyalty Member
Register a new loyalty program member with their profile information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_member` |

#### Input Schema
```json Create Loyalty Member operation input schema
{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "phoneNumber": {
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "email"
  ]
}
```

#### Output Schema
```json Create Loyalty Member operation output schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
<a name="record_transaction"></a>
### Record Loyalty Transaction
Record a purchase or transaction for a loyalty member and calculate points

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `record_transaction` |

#### Input Schema
```json Record Loyalty Transaction operation input schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "amount": {
      "type": "number"
    },
    "transactionDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "memberId",
    "amount"
  ]
}
```

#### Output Schema
```json Record Loyalty Transaction operation output schema
{
  "type": "object",
  "properties": {
    "transactionId": {
      "type": "string"
    },
    "pointsEarned": {
      "type": "integer"
    },
    "newBalance": {
      "type": "integer"
    }
  }
}
```
<a name="apply_promotion"></a>
### Apply Promotion
Apply a promotional offer to a loyalty member's account

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `apply_promotion` |

#### Input Schema
```json Apply Promotion operation input schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "promotionCode": {
      "type": "string"
    },
    "appliedDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "memberId",
    "promotionCode"
  ]
}
```

#### Output Schema
```json Apply Promotion operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "bonusPoints": {
      "type": "integer"
    },
    "promotionDetails": {
      "type": "string"
    }
  }
}
```
