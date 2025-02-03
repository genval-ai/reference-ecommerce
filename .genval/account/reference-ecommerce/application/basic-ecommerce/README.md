# Basic E-commerce Application
An e-commerce platform allowing users to browse, purchase products and manage their orders

**Application Metadata**
| Property | Value |
|----------|------|
| Application Code | `basic-ecommerce` |
| Application Image | ![Basic E-commerce Application Application Square Image](./images/basic-ecommerce_small.png) |

## Application Features


### Product Browsing
Allow users to browse and search products in the catalog

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `prod-browsing` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| View Product Catalog | `view-products` | Shopper | browse through available products | I can find items I'm interested in purchasing |
| View Product Details | `product-details` | Shopper | view detailed information about a specific product | I can make an informed purchase decision |
| View Product Recommendations | `product-recommendations` | Shopper | see related or recommended products | I can discover additional items I might be interested in |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Search Service | [`search_query`](../../capability/search_service#search_query) | The search_query operation enables product browsing and searching functionality with filtering capabilities |
| Product Management | [`get_product`](../../capability/product-management#get_product) | The get_product operation provides detailed product information needed for the product details view |
| Inventory Service | [`get_inventory_level`](../../capability/inventory_service#get_inventory_level) | The product browsing feature should display inventory availability to shoppers. This operation would enable showing stock levels on product listing and detail pages. |
| Pricing Service | [`get_item_price`](../../capability/pricing_service#get_item_price) | Can provide real-time pricing information when displaying products in the catalog and detail views. |


### Shopping Cart Management
Enable users to manage items in their shopping cart

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `shopping-cart` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Add to Cart | `add-to-cart` | Shopper | add items to my shopping cart | I can collect items I want to purchase |
| Modify Cart | `modify-cart` | Shopper | update quantities or remove items from my cart | I can adjust my intended purchase before checkout |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Cart Management | [`update_cart_item`](../../capability/cart-management#update_cart_item) | Enables modifying quantities and removing items from cart |
| Cart Management | [`add_item`](../../capability/cart-management#add_item) | Enables adding items to the shopping cart |
| Cart Management | [`create_cart`](../../capability/cart-management#create_cart) | Required to initialize a shopping cart for users |
| Promotions | [`get_applicable_promotions`](../../capability/promotions#get_applicable_promotions) | The shopping cart should display applicable promotions to help customers understand available discounts. |
| Tax Calculation | [`calculate_tax`](../../capability/tax_calculation#calculate_tax) | The shopping cart should show estimated tax calculations to provide accurate total costs to shoppers. |


### Checkout Process
Allow users to complete their purchase

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `checkout` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Complete Purchase | `complete-purchase` | Shopper | securely complete my purchase | I can buy the items in my cart |
| Provide Shipping Information | `shipping-info` | Shopper | enter my shipping address | I can receive my purchased items |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Order Management | [`create_order`](../../capability/order-management#create_order) | Enables order creation during checkout process |


### Account Management
Enable users to manage their account and view order history

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `account-mgmt` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Create Account | `create-account` | Shopper | create a new account | I can manage my orders and shopping history |
| Login to Account | `login` | Registered User | log into my account | I can access my personal information and order history |
| View Order History | `view-orders` | Registered User | view my previous orders | I can track my purchase history |
| Track Order Status | `track-order` | Registered User | check the status of my current orders | I can know when to expect my purchases |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Order Management | [`get_order`](../../capability/order-management#get_order) | Enables viewing detailed order information and tracking |
| Order Management | [`list_customer_orders`](../../capability/order-management#list_customer_orders) | Provides order history viewing functionality |
| Customer Management | [`authenticate_customer`](../../capability/customer-management#authenticate_customer) | Provides login functionality for registered users |
| Customer Management | [`create_customer`](../../capability/customer-management#create_customer) | Handles new account creation for shoppers |

