# Stripe Tax Integration
Implements tax calculation and rate retrieval for Stripe payments using Stripe API credentials and webhook validation.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `stripe_tax_integration` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Tax Calculation](../capability/tax_calculation.md) |
| Capability Code | `tax_calculation` |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Stripe](../provider/stripe.md) |
| Provider Code | `stripe` |
| Connection Type Name | [Stripe API Connection](../provider/stripe.md#stripe_api) |
| Connection Type Code | `stripe_api` |

## Integration Instructions
To integrate tax calculation with Stripe:

1. Configure Stripe API credentials:
   - Use secret_key for server-side tax calculations
   - Use webhook_secret to validate tax-related webhooks
   - Ensure api_version is compatible with tax endpoints

2. For calculate_tax operation:
   - Pass transaction amount from Stripe payment intent
   - Include customer's shipping_address from Stripe checkout session
   - Map product_type to Stripe tax codes
   - Currency must match Stripe payment currency

3. For get_tax_rates operation:
   - Use country/region from customer's billing details
   - Map returned rates to Stripe tax rate IDs
   - Cache results according to Stripe's rate limits

4. Implementation steps:
   - Initialize Stripe client with secret_key
   - Validate webhooks using webhook_secret
   - Use tax calculation before finalizing payments
   - Store tax calculations with payment records