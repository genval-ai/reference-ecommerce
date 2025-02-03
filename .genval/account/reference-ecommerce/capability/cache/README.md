# Cache
A distributed cache service allowing storage and retrieval of data using cache keys across different cache instances.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `cache` |
| Capability Image | ![Cache Capability Small Image](./images/cache_small.png) |

## Capability Operations

<a name="set-cache-item"></a>
### Set Cache Item
Stores a value in the cache with an optional time to live (TTL).

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `set-cache-item` |

#### Input Schema
```json Set Cache Item operation input schema
{
  "type": "object",
  "required": [
    "cacheName",
    "key",
    "value"
  ],
  "properties": {
    "cacheName": {
      "type": "string",
      "description": "Name of the cache instance"
    },
    "key": {
      "type": "string",
      "description": "Unique identifier for the cache item"
    },
    "value": {
      "type": "object",
      "description": "The value to store in the cache"
    },
    "ttlSeconds": {
      "type": "integer",
      "description": "Time to live in seconds. If not provided, the item will not expire",
      "minimum": 0
    }
  }
}
```

#### Output Schema
```json Set Cache Item operation output schema
{
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Indicates if the operation was successful"
    }
  }
}
```
<a name="get-cache-item"></a>
### Get Cache Item
Retrieves a value from the cache by its key.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get-cache-item` |

#### Input Schema
```json Get Cache Item operation input schema
{
  "type": "object",
  "required": [
    "cacheName",
    "key"
  ],
  "properties": {
    "cacheName": {
      "type": "string",
      "description": "Name of the cache instance"
    },
    "key": {
      "type": "string",
      "description": "Unique identifier for the cache item"
    }
  }
}
```

#### Output Schema
```json Get Cache Item operation output schema
{
  "type": "object",
  "required": [
    "exists"
  ],
  "properties": {
    "exists": {
      "type": "boolean",
      "description": "Indicates if the item exists in cache"
    },
    "value": {
      "type": "object",
      "description": "The cached value if it exists"
    }
  }
}
```
<a name="delete-cache-item"></a>
### Delete Cache Item
Removes an item from the cache by its key.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete-cache-item` |

#### Input Schema
```json Delete Cache Item operation input schema
{
  "type": "object",
  "required": [
    "cacheName",
    "key"
  ],
  "properties": {
    "cacheName": {
      "type": "string",
      "description": "Name of the cache instance"
    },
    "key": {
      "type": "string",
      "description": "Unique identifier for the cache item"
    }
  }
}
```

#### Output Schema
```json Delete Cache Item operation output schema
{
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Indicates if the operation was successful"
    }
  }
}
```
<a name="clear-cache"></a>
### Clear Cache
Removes all items from a specified cache instance.

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `clear-cache` |

#### Input Schema
```json Clear Cache operation input schema
{
  "type": "object",
  "required": [
    "cacheName"
  ],
  "properties": {
    "cacheName": {
      "type": "string",
      "description": "Name of the cache instance to clear"
    }
  }
}
```

#### Output Schema
```json Clear Cache operation output schema
{
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Indicates if the operation was successful"
    }
  }
}
```
