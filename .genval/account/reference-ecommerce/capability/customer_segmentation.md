# 顧客セグメンテーション
様々な属性や行動に基づいて顧客セグメントを分類および定義する機能を提供します。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `customer_segmentation` |

## 機能操作

### 顧客セグメントの作成
指定された基準とルールに基づいて新しい顧客セグメントを作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_segment` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentName": {
      "type": "string"
    },
    "criteria": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "attribute": {
            "type": "string"
          },
          "operator": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "segmentName",
    "criteria"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "segmentName": {
      "type": "string"
    },
    "customerCount": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "segmentId",
    "segmentName",
    "customerCount",
    "status"
  ]
}
```
### セグメントへの顧客の割り当て
一致する基準に基づいて既存のセグメントに顧客を割り当てます

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `assign_customers` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "customerIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "segmentId",
    "customerIds"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "successCount": {
      "type": "integer"
    },
    "failedCount": {
      "type": "integer"
    },
    "errors": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "successCount",
    "failedCount"
  ]
}
```
### セグメントの分析
顧客セグメントに関する分析的洞察を提供します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `analyze_segment` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "segmentId": {
      "type": "string"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "segmentId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "segmentSize": {
      "type": "integer"
    },
    "demographics": {
      "type": "object"
    },
    "behaviors": {
      "type": "object"
    },
    "metrics": {
      "type": "object"
    }
  },
  "required": [
    "segmentSize"
  ]
}
```