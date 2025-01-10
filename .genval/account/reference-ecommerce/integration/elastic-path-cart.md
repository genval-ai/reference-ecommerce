# Elastic Pathカート統合
REST APIを介してショッピングカートを管理するためのカート管理機能とElastic Patheコマースプラットフォーム間の統合

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `elastic-path-cart` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [カート管理](../capability/cart-management.md) |
| 機能コード | `cart-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Elastic Path](../provider/elastic-path.md) |
| プロバイダーコード | `elastic-path` |
| 接続タイプ名 | [Elastic Pathデフォルト接続](../provider/elastic-path.md#elastic-path-default) |
| 接続タイプコード | `elastic-path-default` |

## 統合手順
この統合を実装するには：

1. 認証：
- client_idとclient_secretを使用してElastic PathからOAuthトークンを取得します
- すべてのリクエストのAuthorizationヘッダーにトークンを含めます

2. 操作マッピング：

create_cart:
- {api_base_url}/v2/cartsにPOSTします
- リクエストボディにcustomerIdを含めます
- レスポンスのcartIdをElastic Pathのカート識別子にマッピングします

add_item:
- {api_base_url}/v2/carts/{cartId}/itemsにPOSTします
- productIdと数量をElastic Pathのアイテムフォーマットに変換します
- レスポンスを処理してカートアイテム配列をマッピングします

get_cart:
- {api_base_url}/v2/carts/{cartId}からGETします
- レスポンスフィールドを機能スキーマに合わせてマッピングします
- アイテム配列からtotalAmountを計算します

スキーマに対する適切なエラー処理とレスポンス検証を確実に行ってください。