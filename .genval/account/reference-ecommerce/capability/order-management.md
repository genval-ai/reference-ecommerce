# 注文管理
注文の作成、更新、取得、削除を含む注文ライフサイクルの管理と、注文処理および履行に関連する操作を管理します。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `order-management` |

## 機能操作

### 注文作成
指定された詳細で新しい注文を作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_order` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerID": {
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
          },
          "price": {
            "type": "number"
          }
        }
      }
    },
    "shippingAddress": {
      "type": "object"
    },
    "paymentDetails": {
      "type": "object"
    }
  },
  "required": [
    "customerID",
    "items"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "orderID",
    "status",
    "createdAt"
  ]
}
```
### 注文取得
注文IDによる注文詳細の取得

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_order` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "customerID": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "status": {
      "type": "string"
    },
    "total": {
      "type": "number"
    }
  },
  "required": [
    "orderID",
    "status"
  ]
}
```
### 注文更新
既存の注文の詳細を更新します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `update_order` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "items": {
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "orderID",
    "status"
  ]
}
```
### 注文削除
既存の注文を削除します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `delete_order` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "orderID": {
      "type": "string"
    }
  },
  "required": [
    "orderID"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "message": {
      "type": "string"
    }
  },
  "required": [
    "success"
  ]
}
```