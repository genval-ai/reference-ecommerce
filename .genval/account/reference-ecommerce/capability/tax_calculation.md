# 税金計算
複数の国にわたるeコマース取引の税金を計算するためのRESTfulサービス。日本および国際市場の税金計算に特化しています。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `tax_calculation` |

## 機能操作

### 取引税の計算
製品詳細と管轄に基づいて、特定のeコマース取引に適用される税金を計算します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `calculate_tax` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "amount": {
      "type": "number"
    },
    "currency": {
      "type": "string"
    },
    "country": {
      "type": "string"
    },
    "product_type": {
      "type": "string"
    },
    "shipping_address": {
      "type": "object"
    }
  },
  "required": [
    "amount",
    "currency",
    "country"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "total_tax": {
      "type": "number"
    },
    "tax_breakdown": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "tax_type": {
            "type": "string"
          },
          "rate": {
            "type": "number"
          },
          "amount": {
            "type": "number"
          }
        }
      }
    },
    "currency": {
      "type": "string"
    }
  },
  "required": [
    "total_tax",
    "currency"
  ]
}
```
### 税率の取得
特定の国または地域の現在の税率を取得します。

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_tax_rates` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "country": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "product_type": {
      "type": "string"
    }
  },
  "required": [
    "country"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "country": {
      "type": "string"
    },
    "rates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "rate": {
            "type": "number"
          },
          "effective_date": {
            "type": "string"
          }
        }
      }
    }
  },
  "required": [
    "country",
    "rates"
  ]
}
```