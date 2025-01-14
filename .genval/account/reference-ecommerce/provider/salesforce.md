# Salesforce
Salesforceは、CRM、AI、データ、およびトラストを組み合わせた統一されたEinstein 1プラットフォームを通じて、企業が顧客とつながることを可能にする#1 AI CRMです。

**プロバイダーメタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `salesforce` |

## プロバイダー接続タイプ

### Salesforce
OAuth 2.0認証を使用してSalesforce REST APIにアクセスするためにSalesforceに接続します。

**接続タイプメタデータ**
| プロパティ | 値|
|----------|------|
| 接続タイプコード | `salesforce` |

#### クライアントID
Salesforce接続アプリから取得したOAuth 2.0クライアントID

**接続プロパティメタデータ**
| プロパティ | 値|
|----------|------|
| プロパティコード | `client_id` |
| 機密情報 | いいえ |
| プロパティレベル | クライアント |
| 必須 | はい |
| 例値 | 3MVG9I1Wl1qzKFBXX... |

#### クライアントシークレット
Salesforce接続アプリから取得したOAuth 2.0クライアントシークレット

**接続プロパティメタデータ**
| プロパティ | 値|
|----------|------|
| プロパティコード | `client_secret` |
| 機密情報 | はい |
| プロパティレベル | クライアント |
| 必須 | はい |
| 例値 | ABC123DEF456... |

#### アクセストークン
APIリクエストを認証するためのOAuth 2.0アクセストークン

**接続プロパティメタデータ**
| プロパティ | 値|
|----------|------|
| プロパティコード | `access_token` |
| 機密情報 | はい |
| プロパティレベル | アイデンティティ |
| 必須 | はい |
| 例値 | 00D5i000000iQ7q!AR8AQH4x... |

#### インスタンスURL
SalesforceインスタンスのURL

**接続プロパティメタデータ**
| プロパティ | 値|
|----------|------|
| プロパティコード | `instance_url` |
| 機密情報 | いいえ |
| プロパティレベル | アイデンティティ |
| 必須 | はい |
| 例値 | https://yourorg.my.salesforce.com |

#### リフレッシュトークン
新しいアクセストークンを取得するためのOAuth 2.0リフレッシュトークン

**接続プロパティメタデータ**
| プロパティ | 値|
|----------|------|
| プロパティコード | `refresh_token` |
| 機密情報 | はい |
| プロパティレベル | アイデンティティ |
| 必須 | はい |
| 例値 | 5Aep8616_vXX... |