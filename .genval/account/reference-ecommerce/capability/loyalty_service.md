# ロイヤルティサービス
包括的なAPIインターフェースを通じて、ロイヤルティプログラムのメンバー、取引、報酬、およびプロモーション活動を管理します。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `loyalty_service` |

## 機能操作

### ロイヤルティメンバーの作成
プロフィール情報を含む新しいロイヤルティプログラムメンバーを登録します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_member` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "phoneNumber": {
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "email"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
### ロイヤルティ取引の記録
ロイヤルティメンバーの購入または取引を記録し、ポイントを計算します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `record_transaction` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "amount": {
      "type": "number"
    },
    "transactionDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "memberId",
    "amount"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "transactionId": {
      "type": "string"
    },
    "pointsEarned": {
      "type": "integer"
    },
    "newBalance": {
      "type": "integer"
    }
  }
}
```
### プロモーションの適用
ロイヤルティメンバーのアカウントにプロモーションオファーを適用します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `apply_promotion` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "memberId": {
      "type": "string"
    },
    "promotionCode": {
      "type": "string"
    },
    "appliedDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "memberId",
    "promotionCode"
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
    "bonusPoints": {
      "type": "integer"
    },
    "promotionDetails": {
      "type": "string"
    }
  }
}
```