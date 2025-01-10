# Shopifyカート管理統合
ショッピングカート操作をShopifyのeコマースプラットフォームと統合し、Shopifyの管理APIを通じてシームレスなカート作成、アイテム管理、および取得を可能にします。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `shopify-cart-integration` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [カート管理](../capability/cart-management.md) |
| 機能コード | `cart-management` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Shopify](../provider/shopify.md) |
| プロバイダーコード | `shopify` |
| 接続タイプ名 | [Shopify](../provider/shopify.md#shopify) |
| 接続タイプコード | `shopify` |

## 統合手順
この統合を実装するには：

1. 認証：
- API認証にShopifyのaccess_tokenを使用します
- ターゲットストアを識別するためにshop_domainを含めます
- エンドポイントURLに指定されたapi_versionを使用します

2. 操作マッピング：

create_cart:
- ShopifyのドラフトオーダーAPIにマッピングします
- customerIdを使用して新しいドラフトオーダーを作成します
- ドラフトオーダーIDをcartIdとして返します

add_item:
- ドラフトオーダーAPIのラインアイテムエンドポイントを使用します
- productIdをShopifyの製品バリアントIDに変換します
- 新しいラインアイテムでドラフトオーダーを更新します

get_cart:
- cartIdを使用してドラフトオーダーの詳細を取得します
- ラインアイテムからtotalAmountを計算します
- レスポンスを機能の出力スキーマに合わせてフォーマットします

3. エラー処理：
- レート制限のためのリトライロジックを実装します
- Shopify固有のエラーレスポンスを処理します
- アイテムを追加する前に製品の利用可能性を検証します