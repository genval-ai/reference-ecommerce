# Elastic Path価格設定統合
クライアント資格情報認証を使用して、リアルタイムの製品価格情報を取得するためにElastic Pathの価格設定APIと統合します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `elastic-path-pricing` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [価格設定サービス](../capability/pricing_service.md) |
| 機能コード | `pricing_service` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Elastic Path](../provider/elastic-path.md) |
| プロバイダーコード | `elastic-path` |
| 接続タイプ名 | [Elastic Pathデフォルト接続](../provider/elastic-path.md#elastic-path-default) |
| 接続タイプコード | `elastic-path-default` |

## 統合手順
この統合を実装するには：

1. クライアント資格情報とAPIベースURLを使用してElastic Path接続を構成します
2. 価格設定サービスのitemIdをElastic Pathの製品IDにマッピングします
3. get_item_price操作を呼び出し、以下を実行します：
   - 提供された資格情報を使用して認証します
   - {api_base_url}/catalog/products/{itemId}/priceにGETリクエストを行います
   - レスポンスを期待される出力スキーマに変換します

注：locationIdパラメータはオプションで、Elastic Path構成で場所固有の価格設定がサポートされている場合に使用できます。