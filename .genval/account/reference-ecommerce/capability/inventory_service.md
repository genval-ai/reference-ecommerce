# 在庫サービス
システム内の在庫、アイテム、製品バリアント、および場所を管理し、包括的な在庫管理と追跡機能を提供します。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `inventory_service` |

## 機能操作

### 在庫レベルの取得
特定の場所における特定の製品バリアントの現在の在庫レベルを取得します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `get_inventory_level` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "variantId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  },
  "required": [
    "variantId",
    "locationId"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "quantity": {
      "type": "number"
    },
    "availableQuantity": {
      "type": "number"
    },
    "reservedQuantity": {
      "type": "number"
    }
  }
}
```
### 在庫の調整
特定の場所における特定の製品バリアントの在庫数量を更新します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `adjust_inventory` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "variantId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "adjustment": {
      "type": "number"
    },
    "reason": {
      "type": "string"
    }
  },
  "required": [
    "variantId",
    "locationId",
    "adjustment"
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
    "newQuantity": {
      "type": "number"
    }
  }
}
```
### 場所の作成
システムに新しい在庫場所を作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_location` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "object"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "locationId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  }
}
```
### 製品バリアントの追加
在庫追跡に新しい製品バリアントを追加します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `add_product_variant` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    },
    "sku": {
      "type": "string"
    },
    "attributes": {
      "type": "object"
    }
  },
  "required": [
    "productId",
    "sku"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "variantId": {
      "type": "string"
    },
    "sku": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  }
}
```