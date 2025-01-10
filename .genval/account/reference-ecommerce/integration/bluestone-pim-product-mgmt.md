# Bluestone PIM製品統合
製品データの同期（製品情報の作成、取得、更新を含む）のために、製品管理機能をBluestone PIMと統合します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `bluestone-pim-product-mgmt` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [製品管理](../capability/product-management.md) |
| 機能コード | `product-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Bluestone PIM](../provider/bluestone-pim.md) |
| プロバイダーコード | `bluestone-pim` |
| 接続タイプ名 | [Bluestone PIM](../provider/bluestone-pim.md#bluestone-pim) |
| 接続タイプコード | `bluestone-pim` |

## 統合手順
この統合を実装するには：

1. 認証：
- すべてのリクエストで'api_key'ヘッダーに提供されたAPIキーを使用します
- APIコールのルートエンドポイントとしてbase_urlを使用します

2. 操作マッピング：

製品取得（get_product）：
- エンドポイント：GET {base_url}/products/{productId}
- レスポンスフィールドを出力スキーマに合わせてマッピングし、バリアントデータが適切に構造化されていることを確認します

製品作成（create_product）：
- エンドポイント：POST {base_url}/products
- 入力スキーマをBluestoneのフォーマットに変換し、必要なすべてのフィールドを含めます
- レスポンスで作成された製品IDと詳細を返します

製品更新（update_product）：
- エンドポイント：PUT {base_url}/products/{id}
- リクエストボディには変更されたフィールドのみを送信します
- APIレスポンスに基づいて成功ステータスを返します

機能のスキーマ要件に対する適切なエラーハンドリングとレスポンスの検証を確実に行ってください。