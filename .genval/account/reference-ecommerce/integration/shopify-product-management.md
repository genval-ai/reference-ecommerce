# Shopify製品管理統合
Shopifyの製品管理機能を小売システムと統合し、システム間で製品データ、バリアント、およびカテゴリを同期します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `shopify-product-management` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [製品管理](../capability/product-management.md) |
| 機能コード | `product-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Shopify](../provider/shopify.md) |
| プロバイダーコード | `shopify` |
| 接続タイプ名 | [Shopify](../provider/shopify.md#shopify) |
| 接続タイプコード | `shopify` |

## 統合手順
この統合を実装するには：

1. 機能操作のマッピング：
   - get_product: Shopifyの GET /admin/api/{version}/products/{id}.json を使用
   - create_product: POST /admin/api/{version}/products.json を使用
   - update_product: PUT /admin/api/{version}/products/{id}.json を使用

2. データマッピング：
   - product.id を Shopify の product.id にマッピング
   - product.name を Shopify の product.title にマッピング
   - product.price を Shopify の variants[0].price にマッピング
   - product.description を Shopify の product.body_html にマッピング
   - variants 配列を Shopify の variants 配列にマッピング

3. 認証：
   - Authorization ヘッダーに access_token を使用
   - フォーマット：'X-Shopify-Access-Token: {access_token}'

4. API バージョン：
   - URL に api_version パラメータを使用
   - 指定がない場合は最新版をデフォルトとする

5. エラー処理：
   - 429 レート制限エラーを処理
   - 失敗したリクエストのリトライロジックを実装
   - レスポンスデータを機能スキーマに対して検証