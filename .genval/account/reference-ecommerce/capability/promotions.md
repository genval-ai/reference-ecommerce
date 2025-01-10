# プロモーション
eコマースコンテキストでプロモーションを管理および取得し、プロモーションオファーの作成、更新、適用のためのローカライゼーション機能を備えた国際商取引をサポートします。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `promotions` |

## 機能操作

### プロモーションの作成
指定されたルール、条件、報酬で新しいプロモーションオファーを作成します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_promotion` |

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
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    },
    "discountType": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed",
        "bogo"
      ]
    },
    "discountValue": {
      "type": "number"
    },
    "conditions": {
      "type": "object"
    },
    "locales": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "name",
    "startDate",
    "endDate",
    "discountType",
    "discountValue"
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
    "status": {
      "type": "string"
    },
    "created": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "id",
    "status",
    "created"
  ]
}
```
### 適用可能なプロモーションの取得
特定のカートまたはユーザーに適用可能なすべての有効なプロモーションを取得します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_applicable_promotions` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "locale": {
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
    "promotions": {
      "type": "array",
      "items": {
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
          "discountValue": {
            "type": "number"
          }
        }
      }
    },
    "totalDiscount": {
      "type": "number"
    }
  },
  "required": [
    "promotions",
    "totalDiscount"
  ]
}
```
### プロモーションの更新
既存のプロモーションの詳細、ルール、または条件を変更します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `update_promotion` |

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
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    },
    "discountValue": {
      "type": "number"
    },
    "conditions": {
      "type": "object"
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
    "id": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "updated": {
      "type": "string",
      "format":"date-time"
    }
  },
  "required": [
    "id",
    "status",
    "updated"
  ]
}
```
### プロモーションの削除
システムからプロモーションを削除します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `delete_promotion` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "id": {
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
    },
    "deletedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "success",
    "deletedAt"
  ]
}
```