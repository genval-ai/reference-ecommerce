# Stripe
Stripe Payments Platform — Embed financial services, customize revenue models, and build a more profitable business.

**Provider Metadata**
| Property | Value |
|----------|------|
| Provider Code | `stripe` |
| Provider Image |![Stripe Provider Small Image](./images/stripe_small.png) |

## Provider Connection Types

<a name="stripe_api"></a>
### Stripe API Connection
Connect to Stripe's payment processing platform using their official API credentials

**Connection Type Metadata**
| Property | Value|
|----------|------|
| Connection Type Code | `stripe_api` |

<a name="stripe_api_publishable_key"></a>
#### Publishable Key
Your Stripe publishable key starting with 'pk_'

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `publishable_key` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | pk_test_1234567890abcdef |

<a name="stripe_api_secret_key"></a>
#### Secret Key
Your Stripe secret key starting with 'sk_'

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `secret_key` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | sk_test_1234567890abcdef |

<a name="stripe_api_webhook_secret"></a>
#### Webhook Secret
Secret key for validating webhook signatures

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `webhook_secret` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | whsec_1234567890abcdef |

<a name="stripe_api_api_version"></a>
#### API Version
Specific API version to use with Stripe

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `api_version` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | 2023-10-16 |



