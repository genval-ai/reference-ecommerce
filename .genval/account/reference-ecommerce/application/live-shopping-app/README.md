# Live Shopping App
A real-time shopping application that enables users to watch live streams from retailers and purchase products directly during the broadcast.

**Application Metadata**
| Property | Value |
|----------|------|
| Application Code | `live-shopping-app` |
| Application Image | ![Live Shopping App Application Square Image](./images/live-shopping-app_small.png) |

## Application Features


### Live Stream Viewing
Allows users to watch live product demonstrations and presentations from retailers

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `live-stream-viewing` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| View Live Stream | `view-live-stream` | shopper | watch live product demonstrations | I can see products being demonstrated in real-time |
| Browse Active Streams | `browse-active-streams` | shopper | see a list of currently active streams | I can choose which product demonstration to watch |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Live Stream Management | [`get_active_streams`](../../capability/live-stream-management#get_active_streams) | The get_active_streams operation perfectly matches the browse-active-streams story requirement, allowing shoppers to see currently available streams |


### Real-time Purchase
Enables users to purchase products while watching the live stream

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `real-time-purchase` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Purchase During Stream | `purchase-during-stream` | shopper | click on and purchase the product being shown | I can buy items immediately while watching the demonstration |
| View Product Details | `view-product-details` | shopper | see detailed product information during the stream | I can make informed purchase decisions |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Cart Management | [`create_cart`](../../capability/cart-management#create_cart) | The create_cart operation would be essential for initializing a shopping cart when users want to make purchases during a live stream |
| Cart Management | [`add_item`](../../capability/cart-management#add_item) | This operation is necessary to add products to the cart during live stream viewing |
| Product Management | [`get_product`](../../capability/product-management#get_product) | This operation will support the view-product-details story by retrieving detailed product information during streams |


### Stream Interaction
Allows viewers to interact with the stream through comments and reactions

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `stream-interaction` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Comment on Stream | `comment-on-stream` | viewer | post comments during the live stream | I can ask questions and interact with the seller |
| React to Stream | `react-to-stream` | viewer | send reactions during the stream | I can express my interest and engagement |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|


### Retailer Broadcasting
Enables retailers to create and manage their live streams

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `retailer-broadcasting` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Start Stream | `start-stream` | retailer | start a live product demonstration | I can showcase my products to potential customers |
| Manage Product Showcase | `manage-product-showcase` | retailer | add and update products during the stream | I can display accurate product information to viewers |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Live Stream Management | [`create_live_stream`](../../capability/live-stream-management#create_live_stream) | The create_live_stream operation directly supports the start-stream story by enabling retailers to initialize a live product demonstration stream |

