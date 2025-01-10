# Elastic Path製品管理統合
APIを通じて製品、バリアント、および在庫を管理するために、製品管理機能をElastic Pathのコマースプラットフォームと統合します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `elastic-path-product-mgmt` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [製品管理](../capability/product-management.md) |
| 機能コード | `product-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Elastic Path](../provider/elastic-path.md) |
| プロバイダーコード | `elastic-path` |
| 接続タイプ名 | [Elastic Pathデフォルト接続](../provider/elastic-path.md#elastic-path-default) |
| 接続タイプコード | `elastic-path-default` |

## 統合手順
この統合を実装するには：

1. 認証設定：
- client_idとclient_secretを使用してElastic PathからOAuthトークンを取得します
- すべてのAPIリクエストにBearerトークンとしてトークンを含めます

2. APIエンドポイント：
- すべてのAPIリクエストはapi_base_urlプロパティに基づいて行います
- 製品エンドポイントは通常：{api_base_url}/v2/products/となります

3. 操作マッピング：

製品の取得（get_product）：
- {api_base_url}/v2/products/{productId}にHTTP GETを行います
- response.dataを出力スキーマにマッピングします
- バリアントデータが適切にネストされていることを確認します

製品の作成（create_product）：
- {api_base_url}/v2/productsにHTTP POSTを行います
- 入力スキーマをElastic Pathの製品フォーマットに変換します
- リクエストボディに必要なすべてのフィールドを含めます

製品の更新（update_product）：
- {api_base_url}/v2/products/{id}にHTTP PUTを行います
- リクエストボディには変更されたフィールドのみを送信します
- 成功のためにレスポンスステータスを確認します

すべての操作に対して、適切なステータスコード処理とレスポンスマッピングを含むエラー処理が実装されていることを確認してください。