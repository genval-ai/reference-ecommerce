# Shopify注文管理統合
プラットフォーム間で注文を同期および管理するために、注文管理機能をShopifyの注文処理システムと統合します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `shopify_order_management` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [注文管理](../capability/order-management.md) |
| 機能コード | `order-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Shopify](../provider/shopify.md) |
| プロバイダーコード | `shopify` |
| 接続タイプ名 | [Shopify](../provider/shopify.md#shopify) |
| 接続タイプコード | `shopify` |

## 統合手順
この統合を実装するには：

1. 機能操作をShopifyエンドポイントにマッピング：
   - create_order → POST /admin/api/{version}/orders.json
   - get_order → GET /admin/api/{version}/orders/{id}.json
   - update_order → PUT /admin/api/{version}/orders/{id}.json
   - delete_order → DELETE /admin/api/{version}/orders/{id}.json

2. 必要なデータ変換：
   - 機能の注文スキーマをShopifyの注文フォーマットに変換
   - customerIDをShopifyのcustomer_idにマッピング
   - items配列をShopifyのline_itemsフォーマットに変換
   - アドレスをShopifyのshipping_addressフォーマットに変換

3. 認証：
   - AuthorizationヘッダーにLするaccess_tokenを使用
   - フォーマット：'X-Shopify-Access-Token: {access_token}'

4. APIバージョン処理：
   - 接続プロパティからapi_versionを使用
   - ベースURLを構築：https://{shop_domain}/admin/api/{api_version}/

5. エラー処理：
   - Shopify固有のエラーコードを処理
   - レート制限のためのリトライロジックを実装
   - レスポンスフォーマットが機能スキーマに一致することを検証