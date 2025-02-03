# Local Cache Integration
Implements cache operations using in-memory storage within the local compute environment, providing fast access to cached data within the same execution context.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `local-cache` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cache](../../capability/cache) |
| Capability Code | `cache` |
| Capability Image | ![Cache Capability Square Image](../../capability/cache/images/cache_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Local Compute](../../provider/local-compute) |
| Provider Code | `local-compute` |
| Provider Image | ![Local Compute Provider Square Image](../../provider/local-compute/images/local-compute_square.png) |
| Connection Type Name | [Local Connection](../../provider/local-compute#local-connection) |
| Connection Type Code | `local-connection` |

## Integration Instructions
This integration implements a local in-memory cache within the execution context of the local compute environment. It provides thread-safe operations for storing and retrieving cached data.

## Implementation Guidelines

### Cache Storage
Implement a thread-safe concurrent dictionary or similar data structure to store cache items. Each cache name should have its own storage instance to maintain isolation between different cache contexts.

For items with TTL:
- Store both the value and expiration timestamp
- Implement a background cleanup process or check expiration during retrieval

### Operation Implementations

#### Set Cache Item
When implementing [set-cache-item](../../capability/cache#set-cache-item):
- Create the cache instance if it doesn't exist
- Store the value with expiration time if ttlSeconds is provided
- Use atomic operations when updating the cache
- Return success=true if the operation completes successfully

#### Get Cache Item
For [get-cache-item](../../capability/cache#get-cache-item):
- Check if the cache instance exists
- Verify if the key exists and hasn't expired
- Return exists=true and the value if found
- Return exists=false if not found or expired

#### Delete Cache Item
Implement [delete-cache-item](../../capability/cache#delete-cache-item):
- Remove the item from the specified cache instance
- Return success=true if the item was found and removed
- Return success=true if the item didn't exist (idempotent operation)

#### Clear Cache
For [clear-cache](../../capability/cache#clear-cache):
- Remove all items from the specified cache instance
- If the cache instance doesn't exist, create an empty one
- Return success=true after operation completion

## Performance Considerations
- Implement cache cleanup to prevent memory leaks
- Use appropriate synchronization mechanisms for thread safety
- Consider implementing size limits per cache instance

## Limitations
- Cache is not persistent and will be cleared when the process restarts
- Cache is not shared between different processes or compute instances
- Memory usage grows with cached data size