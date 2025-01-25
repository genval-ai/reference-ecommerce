# Search Service
Service for managing and querying search indices within retail applications, supporting product discovery and catalog exploration functionality.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `search_service` |

## Capability Images
| Medium | Small | Square |
|--------|-------|--------|
| ![Search Service Capability Medium Image](./images/search_service_medium.png) | ![Search Service Capability Small Image](./images/search_service_small.png) | ![Search Service Capability Square Image](./images/search_service_square.png) |

## Capability Operations

### Create Search Index
Creates a new search index with specified schema and configuration

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create_index` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "indexName": {
      "type": "string"
    },
    "schema": {
      "type": "object"
    },
    "settings": {
      "type": "object"
    }
  },
  "required": [
    "indexName",
    "schema"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "indexId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "indexId",
    "status"
  ]
}
```
### Execute Search Query
Performs a search query across indexed content with filtering and faceting capabilities

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `search_query` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string"
    },
    "filters": {
      "type": "object"
    },
    "page": {
      "type": "integer"
    },
    "size": {
      "type": "integer"
    }
  },
  "required": [
    "query"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "results": {
      "type": "array"
    },
    "total": {
      "type": "integer"
    },
    "facets": {
      "type": "object"
    }
  },
  "required": [
    "results",
    "total"
  ]
}
```
### Update Index Content
Updates or adds new content to an existing search index

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update_index` |

#### Input Schema
```json operation input schema
{
  "type": "object",
  "properties": {
    "indexId": {
      "type": "string"
    },
    "documents": {
      "type": "array"
    }
  },
  "required": [
    "indexId",
    "documents"
  ]
}
```

#### Output Schema
```json operation output schema
{
  "type": "object",
  "properties": {
    "processed": {
      "type": "integer"
    },
    "failed": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ]
}
```
