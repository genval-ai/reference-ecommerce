# Live Stream Management
Manages the creation, monitoring, and delivery of live streaming content, including stream creation, viewer management, and stream status tracking.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `live-stream-management` |
| Capability Image | ![Live Stream Management Capability Small Image](./images/live-stream-management_small.png) |

## Capability Operations

<a name="create_live_stream"></a>
### Create Live Stream
Creates a new live stream session for a retailer

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_live_stream` |

#### Input Schema
```json Create Live Stream operation input schema
{
  "type": "object",
  "properties": {
    "retailerId": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "scheduledStartTime": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "retailerId",
    "title"
  ]
}
```

#### Output Schema
```json Create Live Stream operation output schema
{
  "type": "object",
  "properties": {
    "streamId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "streamKey": {
      "type": "string"
    }
  },
  "required": [
    "streamId",
    "streamKey"
  ]
}
```
<a name="get_active_streams"></a>
### Get Active Streams
Retrieves a list of currently active live streams

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get_active_streams` |

#### Input Schema
```json Get Active Streams operation input schema
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "pageSize": {
      "type": "integer"
    },
    "category": {
      "type": "string"
    }
  },
  "required": []
}
```

#### Output Schema
```json Get Active Streams operation output schema
{
  "type": "object",
  "properties": {
    "streams": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "streamId": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "retailerId": {
            "type": "string"
          },
          "viewerCount": {
            "type": "integer"
          },
          "startTime": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    },
    "total": {
      "type": "integer"
    }
  },
  "required": [
    "streams",
    "total"
  ]
}
```
<a name="create_stream_comment"></a>
### Create Stream Comment
Creates a new comment on a live stream

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_stream_comment` |

#### Input Schema
```json Create Stream Comment operation input schema
{
  "type": "object",
  "properties": {
    "streamId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "comment": {
      "type": "string"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "streamId",
    "userId",
    "comment"
  ]
}
```

#### Output Schema
```json Create Stream Comment operation output schema
{
  "type": "object",
  "properties": {
    "commentId": {
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
    "commentId",
    "status"
  ]
}
```
<a name="create_stream_reaction"></a>
### Create Stream Reaction
Records a viewer's reaction to a live stream

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_stream_reaction` |

#### Input Schema
```json Create Stream Reaction operation input schema
{
  "type": "object",
  "properties": {
    "streamId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "reactionType": {
      "type": "string"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "streamId",
    "userId",
    "reactionType"
  ]
}
```

#### Output Schema
```json Create Stream Reaction operation output schema
{
  "type": "object",
  "properties": {
    "reactionId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "reactionId",
    "status"
  ]
}
```
