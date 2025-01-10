# Salesforce顧客セグメンテーション統合
Salesforceのデータと基準に基づいて顧客セグメントを作成、管理、分析するために、顧客セグメンテーション機能をSalesforceと統合します。

### 統合メタデータ
| プロパティ | 値 |
|----------|------|
| 統合コード | `salesforce-customer-segmentation` |

### 機能
| プロパティ | 値 |
|----------|------|
| 機能名 | [顧客セグメンテーション](../capability/customer_segmentation.md) |
| 機能コード | `customer_segmentation` |

### プロバイダー接続タイプ
| プロパティ | 値 |
|----------|------|
| プロバイダー名 | [Salesforce](../provider/salesforce.md) |
| プロバイダーコード | `salesforce` |
| 接続タイプ名 | [Salesforce](../provider/salesforce.md#salesforce) |
| 接続タイプコード | `salesforce` |

## 統合手順
この統合を実装するには：

1. Salesforce接続アプリの設定：
- Salesforceで新しい接続アプリを作成します
- API アクセスのためのOAuthスコープを設定します
- 接続プロパティで提供されたclient_idとclient_secretを使用します

2. 操作のマッピング：

create_segment:
- Salesforce SOQLクエリを使用してセグメント基準を定義します
- セグメントを表すCampaignオブジェクトをSalesforceで作成します
- segmentIdをCampaignIdにマッピングします

assign_customers:
- customerIdsをSalesforceのContact/Lead IDに変換します
- CampaignMemberレコードを作成して顧客をセグメントに関連付けます
- CampaignMemberステータスを通じて成功/失敗を追跡します

analyze_segment:
- セグメント分析のためにCampaignMemberレコードをクエリします
- 人口統計的洞察のためにSalesforce Analytics APIを利用します
- 関連オブジェクトから行動データを集計します

3. エラー処理：
- APIレート制限のためのリトライロジックを実装します
- Salesforce固有のエラーコードを処理します
- 失敗した操作のエラーログを維持します