# 顧客管理
顧客記録と操作を管理するためのAPI。顧客データの作成、更新、取得、削除を含みます。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `customer-management` |

## 機能操作

### 顧客詳細の取得
IDによる特定の顧客の詳細情報を取得します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_customer` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "顧客の一意の識別子"
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
    "customerId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "customerId",
    "name"
  ]
}
```
### 新規顧客の作成
システムに新しい顧客記録を作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_customer` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
    }
  },
  "required": [
    "name",
    "email"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    },
    "success": {
      "type": "boolean"
    }
  },
  "required": [
    "customerId",
    "success"
  ]
}
```
### 顧客情報の更新
既存の顧客情報を更新します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `update_customer` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "address": {
      "type": "object"
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
    "success": {
      "type": "boolean"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "success"
  ]
}
```
### 顧客の削除
システムから顧客記録を削除します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `delete_customer` |

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
    "success": {
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ]
}
```