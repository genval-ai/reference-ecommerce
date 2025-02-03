# Logging Service
A logging service for logging message and errors

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `logging-service` |
| Capability Image | ![Logging Service Capability Small Image](./images/logging-service_small.png) |

## Capability Operations

<a name="log-message"></a>
### Log Message
Logs a message with specified severity level and metadata

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `log-message` |

#### Input Schema
```json Log Message operation input schema
{
  "type": "object",
  "required": [
    "message",
    "level"
  ],
  "properties": {
    "message": {
      "type": "string",
      "description": "The message to log"
    },
    "level": {
      "type": "string",
      "enum": [
        "debug",
        "info",
        "warning",
        "error"
      ],
      "description": "The severity level of the log"
    },
    "metadata": {
      "type": "object",
      "description": "Additional contextual information"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "Optional timestamp of when the event occurred"
    }
  }
}
```

#### Output Schema
```json Log Message operation output schema
{
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean"
    },
    "logId": {
      "type": "string",
      "description": "Unique identifier for the logged message"
    }
  }
}
```
<a name="log-error"></a>
### Log Error
Logs an error with stack trace and context information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `log-error` |

#### Input Schema
```json Log Error operation input schema
{
  "type": "object",
  "required": [
    "error"
  ],
  "properties": {
    "error": {
      "type": "string",
      "description": "The error message"
    },
    "stackTrace": {
      "type": "string",
      "description": "The stack trace of the error"
    },
    "source": {
      "type": "string",
      "description": "The source of the error"
    },
    "metadata": {
      "type": "object",
      "description": "Additional contextual information"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "Optional timestamp of when the error occurred"
    }
  }
}
```

#### Output Schema
```json Log Error operation output schema
{
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean"
    },
    "errorId": {
      "type": "string",
      "description": "Unique identifier for the logged error"
    }
  }
}
```
<a name="query-logs"></a>
### Query Logs
Retrieves logs based on specified criteria

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `query-logs` |

#### Input Schema
```json Query Logs operation input schema
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    },
    "level": {
      "type": "string",
      "enum": [
        "debug",
        "info",
        "warning",
        "error"
      ]
    },
    "source": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "offset": {
      "type": "integer"
    }
  }
}
```

#### Output Schema
```json Query Logs operation output schema
{
  "type": "object",
  "required": [
    "logs",
    "total"
  ],
  "properties": {
    "logs": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "level": {
            "type": "string"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          },
          "metadata": {
            "type": "object"
          }
        }
      }
    },
    "total": {
      "type": "integer"
    }
  }
}
```
