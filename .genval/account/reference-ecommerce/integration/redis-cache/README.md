# Redis Cache Integration
Implements cache operations using Redis as the underlying distributed cache system, providing high-performance data storage and retrieval.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `redis-cache` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cache](../../capability/cache) |
| Capability Code | `cache` |
| Capability Image | ![Cache Capability Square Image](../../capability/cache/images/cache_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Redis](../../provider/redis) |
| Provider Code | `redis` |
| Provider Image | ![Redis Provider Square Image](../../provider/redis/images/redis_square.png) |
| Connection Type Name | [Redis Standard Connection](../../provider/redis#redis-standard) |
| Connection Type Code | `redis-standard` |

## Integration Instructions
This integration implements the Cache capability using Redis as the backing store. Redis is an open-source, in-memory data structure store that excels at caching scenarios.

## Connection Setup
Before performing any cache operations, establish a connection to Redis using the connection properties:
- [host](../../provider/redis#redis-standard_host) - Redis server address
- [port](../../provider/redis#redis-standard_port) - Redis server port (default: 6379)
- [password](../../provider/redis#redis-standard_password) - Authentication credentials
- [database](../../provider/redis#redis-standard_database) - Redis database number

Maintain this connection as a client instance for subsequent operations.

## Operation Implementations

### [set-cache-item](../../capability/cache#set-cache-item)
Implement using Redis SET command with optional expiration:
1. Format the key as `{cacheName}:{key}` to namespace keys by cache instance
2. Serialize the value object to a string format (recommend JSON)
3. If ttlSeconds is provided, use SET command with EX option
4. Return success based on Redis command response

### [get-cache-item](../../capability/cache#get-cache-item)
Implement using Redis GET command:
1. Format the key as `{cacheName}:{key}`
2. Execute GET command
3. If value exists:
   - Deserialize the string back to an object
   - Return {exists: true, value: deserializedObject}
4. If not found, return {exists: false}

### [delete-cache-item](../../capability/cache#delete-cache-item)
Implement using Redis DEL command:
1. Format the key as `{cacheName}:{key}`
2. Execute DEL command
3. Return success based on command response

### [clear-cache](../../capability/cache#clear-cache)
Implement using Redis SCAN and DEL commands:
1. Use SCAN to iterate through keys matching pattern `{cacheName}:*`
2. Delete all matched keys using DEL command
3. Return success if all deletions complete

## Error Handling
- Handle connection failures gracefully
- Implement retry logic for temporary network issues
- Ensure proper cleanup of resources

For detailed Redis commands reference, see: https://redis.io/commands

## Performance Considerations
1. Maintain persistent connections when possible
2. Consider using connection pooling for high-throughput scenarios
3. Monitor memory usage and implement eviction policies if needed
4. Use pipelining for bulk operations

Refer to Redis best practices: https://redis.io/topics/optimization