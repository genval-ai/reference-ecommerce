# カート管理
ショッピングカートとカートアイテムを管理するためのREST APIサービスで、カートデータの作成、変更、取得を可能にします。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `cart-management` |

## 機能操作

### カート作成
顧客のために新しい空のショッピングカートを作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_cart` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    }
  },
  "required": [
    "customerId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "cartId",
    "createdAt"
  ]
}
```
### カートにアイテムを追加
既存のショッピングカートに商品アイテムを追加します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `add_item` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "productId": {
      "type": "string"
    },
    "quantity": {
      "type": "integer",
      "minimum": 1
    }
  },
  "required": [
    "cartId",
    "productId",
    "quantity"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "productId": {
            "type": "string"
          },
          "quantity": {
            "type": "integer"
          }
        }
      }
    }
  },
  "required": [
    "cartId",
    "items"
  ]
}
```
### カート詳細の取得
ショッピングカートの現在の状態を取得します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_cart` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    }
  },
  "required": [
    "cartId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "customerId": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "totalAmount": {
      "type": "number"
    }
  },
  "required": [
    "cartId",
    "customerId",
    "items",
    "totalAmount"
  ]
}
```