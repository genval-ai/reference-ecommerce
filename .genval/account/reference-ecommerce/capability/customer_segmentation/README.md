# Customer Segmentation
A capability that enables the categorization and definition of customer segments based on various attributes and behaviors.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `customer_segmentation` |

## Capability Images
| Medium | Small | Square |
|--------|-------|--------|
| ![Customer Segmentation Capability Medium Image](./images/customer_segmentation_medium.png) | ![Customer Segmentation Capability Small Image](./images/customer_segmentation_small.png) | ![Customer Segmentation Capability Square Image](./images/customer_segmentation_square.png) |

## Capability Operations

### Create Customer Segment
Creates a new customer segment based on specified criteria and rules

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_segment` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentName": {
      "type": "string"
    },
    "criteria": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "attribute": {
            "type": "string"
          },
          "operator": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "segmentName",
    "criteria"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "segmentName": {
      "type": "string"
    },
    "customerCount": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "segmentId",
    "segmentName",
    "customerCount",
    "status"
  ]
}
```
### Assign Customers to Segment
Assigns customers to an existing segment based on matching criteria

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `assign_customers` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "customerIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "segmentId",
    "customerIds"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "successCount": {
      "type": "integer"
    },
    "failedCount": {
      "type": "integer"
    },
    "errors": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "successCount",
    "failedCount"
  ]
}
```
### Analyze Segment
Provides analytical insights about a customer segment

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `analyze_segment` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "segmentId"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "segmentSize": {
      "type": "integer"
    },
    "demographics": {
      "type": "object"
    },
    "behaviors": {
      "type": "object"
    },
    "metrics": {
      "type": "object"
    }
  },
  "required": [
    "segmentSize"
  ]
}
```
