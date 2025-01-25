# Salesforce
Salesforce, the #1 AI CRM, enables companies to connect with customers through a unified Einstein 1 platform that combines CRM, AI, Data, and Trust.

**Provider Metadata**
| Property | Value |
|----------|------|
| Capability Code | `salesforce` |

## Provider Images
| Medium | Small | Square |
|--------|-------|--------|
| ![Salesforce Provider Medium Image](./images/salesforce_medium.png) | ![Salesforce Provider Small Image](./images/salesforce_small.png) | ![Salesforce Provider Square Image](./images/salesforce_square.png) |

## Provider Connection Types

### Salesforce
Connect to Salesforce using OAuth 2.0 authentication to access the Salesforce REST API.

**Connection Type Metadata**
| Property | Value|
|----------|------|
| Connection Type Code | `salesforce` |

#### Client ID
The OAuth 2.0 client ID obtained from your Salesforce Connected App

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `client_id` |
| IsSecret | False |
| Property Level | client |
| Requried | True |
| Example Value | 3MVG9I1Wl1qzKFBXX... |

#### Client Secret
The OAuth 2.0 client secret obtained from your Salesforce Connected App

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `client_secret` |
| IsSecret | True |
| Property Level | client |
| Requried | True |
| Example Value | ABC123DEF456... |

#### Access Token
The OAuth 2.0 access token for authenticating API requests

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `access_token` |
| IsSecret | True |
| Property Level | identity |
| Requried | True |
| Example Value | 00D5i000000iQ7q!AR8AQH4x... |

#### Instance URL
The URL of your Salesforce instance

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `instance_url` |
| IsSecret | False |
| Property Level | identity |
| Requried | True |
| Example Value | https://yourorg.my.salesforce.com |

#### Refresh Token
The OAuth 2.0 refresh token for obtaining new access tokens

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `refresh_token` |
| IsSecret | True |
| Property Level | identity |
| Requried | True |
| Example Value | 5Aep8616_vXX... |



