# YouTube Live
YouTube's live streaming platform that allows content creators to broadcast live video content to their audience.

**Provider Metadata**
| Property | Value |
|----------|------|
| Provider Code | `youtube-live` |
| Provider Image |![YouTube Live Provider Small Image](./images/youtube-live_small.png) |

## Provider Connection Types

<a name="youtube-api"></a>
### YouTube API Connection
Connection for YouTube Live Streaming API

**Connection Type Metadata**
| Property | Value|
|----------|------|
| Connection Type Code | `youtube-api` |

<a name="youtube-api_api_key"></a>
#### API Key
Your YouTube Data API key

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `api_key` |
| IsSecret | True |
| Property Level | client |
| Requried | True |
| Example Value | AIzaSyB123456789 |

<a name="youtube-api_oauth_credentials"></a>
#### OAuth Credentials
OAuth 2.0 credentials for YouTube API access

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `oauth_credentials` |
| IsSecret | True |
| Property Level | identity |
| Requried | True |
| Example Value | client_secret.json content |



