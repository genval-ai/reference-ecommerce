# Memcached Cache Integration
Implements distributed caching capability using Memcached as the underlying provider, supporting key-value storage with optional TTL.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `memcached-cache` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cache](../../capability/cache) |
| Capability Code | `cache` |
| Capability Image | ![Cache Capability Square Image](../../capability/cache/images/cache_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Memcached](../../provider/memcached) |
| Provider Code | `memcached` |
| Provider Image | ![Memcached Provider Square Image](../../provider/memcached/images/memcached_square.png) |
| Connection Type Name | [Memcached Standard Connection](../../provider/memcached#memcached-standard) |
| Connection Type Code | `memcached-standard` |

## Integration Instructions
This integration implements the Cache capability using Memcached as the distributed caching provider. Memcached is a high-performance, distributed memory object caching system ideal for reducing database load and improving application performance.

## Connection Setup
The integration requires a valid Memcached [connection_string](../../provider/memcached#memcached-standard_connection_string) in the format `host:port`. For multiple servers, separate them with commas (e.g., `server1:11211,server2:11211`).

## Operation Implementations

### [set-cache-item](../../capability/cache#set-cache-item)
Implements cache item storage using Memcached's set command:
- `cacheName` is used as a prefix to the key to create isolation between different cache instances
- `key` is combined with cacheName to create the Memcached key: `{cacheName}:{key}`
- `value` is serialized to JSON before storage
- `ttlSeconds` maps directly to Memcached's expiration time. If not provided, 0 is used (no expiration)

The operation returns `{"success": true}` on successful storage, `false` on failure.

### [get-cache-item](../../capability/cache#get-cache-item)
Retrieves items using Memcached's get command:
- Constructs the full key as `{cacheName}:{key}`
- Returns `{"exists": true, "value": deserializedValue}` when found
- Returns `{"exists": false}` when key doesn't exist

### [delete-cache-item](../../capability/cache#delete-cache-item)
Removes items using Memcached's delete command:
- Constructs the full key as `{cacheName}:{key}`
- Returns `{"success": true}` on successful deletion or if key didn't exist

### [clear-cache](../../capability/cache#clear-cache)
Memcached doesn't provide a native command to clear specific cache instances. This operation is implemented by:
1. Maintaining a set of keys for each cache instance
2. When clearing, iterating through the stored keys for the specified `cacheName` and deleting each one
3. Finally, clearing the key set for that cache instance

## Error Handling
- Connection failures should be retried with exponential backoff
- Key length (including cacheName prefix) must not exceed 250 bytes
- Values must be serializable to JSON
- Network timeouts should be set to 2 seconds by default

For more details, refer to the [Memcached protocol specification](https://github.com/memcached/memcached/blob/master/doc/protocol.txt)