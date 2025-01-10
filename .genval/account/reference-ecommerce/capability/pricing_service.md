# 価格設定サービス
価格ルール、アイテム価格、およびリアルタイムデータフィードを管理し、ダイナミックな価格管理と更新を可能にします。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `pricing_service` |

## 機能操作

### アイテム価格の取得
特定のアイテムの現在の価格を取得します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_item_price` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  },
  "required": [
    "itemId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "price": {
      "type": "number"
    },
    "currency": {
      "type": "string"
    },
    "effectiveDate": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```