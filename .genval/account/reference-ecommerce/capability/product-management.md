# 製品管理
小売システム内の製品とカテゴリデータを管理し、製品、バリアント、およびカテゴリの作成、読み取り、更新、削除のための操作を提供します。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `product-management` |

## 機能操作

### 製品の取得
IDによる詳細な製品情報の取得

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_product` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    }
  },
  "required": [
    "productId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "sku": {
            "type": "string"
          },
          "attributes": {
            "type": "object"
          }
        }
      }
    }
  },
  "required": [
    "id",
    "name",
    "price"
  ]
}
```
### 製品の作成
システムに新しい製品を作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_product` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "price"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
}
```
### 製品の更新
既存の製品情報を更新します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `update_product` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "categoryId": {
      "type": "string"
    }
  },
  "required": [
    "id"
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
    }
  },
  "required": [
    "success"
  ]
}
```