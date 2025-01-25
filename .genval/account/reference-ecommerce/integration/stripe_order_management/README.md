# Stripe Order Management Integration
Integrate order management capabilities with Stripe's payment processing system to handle order creation, payment processing, and order fulfillment tracking.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `stripe_order_management` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Order Management](../../capability/order-management) |
| Capability Code | `order-management` |
| Capability Image | ![Order Management Capability Square Image](../../capability/order-management/images/order-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Stripe](../../provider/stripe) |
| Provider Code | `stripe` |
| Provider Image | ![Stripe Provider Square Image](../../provider/stripe/images/stripe_square.png) |
| Connection Type Name | [Stripe API Connection](../../provider/stripe#stripe_api) |
| Connection Type Code | `stripe_api` |

## Integration Instructions
To implement this integration:

1. Map the create_order operation to Stripe's PaymentIntent API:
   - Use customerID to retrieve or create a Stripe Customer
   - Calculate total from items array
   - Create PaymentIntent using secret_key
   - Store order details with Stripe metadata

2. For get_order:
   - Query Stripe PaymentIntent using orderID
   - Retrieve associated metadata and order details

3. For update_order:
   - Update PaymentIntent metadata
   - Handle status changes through Stripe's status updates

4. For delete_order:
   - Cancel associated PaymentIntent if not completed
   - Mark order as cancelled in Stripe metadata

5. Configure webhook_secret for real-time updates
   - Listen to payment.succeeded events
   - Update order status accordingly

Ensure proper error handling and validation using Stripe's API version specified in the connection.