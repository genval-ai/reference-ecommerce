# Stripe Cart Payment Integration
Integrates shopping cart management with Stripe payment processing, enabling seamless payment collection for cart items and total amount calculation.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `stripe_cart_integration` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Cart Management](../capability/cart-management.md) |
| Capability Code | `cart-management` |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Stripe](../provider/stripe.md) |
| Provider Code | `stripe` |
| Connection Type Name | [Stripe API Connection](../provider/stripe.md#stripe_api) |
| Connection Type Code | `stripe_api` |

## Integration Instructions
To implement this integration:

1. Use the 'create_cart' operation to initialize a cart with customer ID
2. Add items to cart using 'add_item' operation
3. Use 'get_cart' to retrieve total amount
4. Create Stripe payment intent using secret_key:
   - Amount should be cart totalAmount * 100 (for cents)
   - Currency should be specified (e.g., 'usd')
   - Customer ID from cart can be used as Stripe customer reference
5. Use publishable_key client-side to complete payment
6. Implement webhook_secret to handle payment confirmations

Ensure API version is compatible with current Stripe payment intent workflows.