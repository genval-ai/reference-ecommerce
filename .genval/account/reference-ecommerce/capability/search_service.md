# 検索サービス
小売アプリケーション内の検索インデックスを管理およびクエリするためのサービスで、製品発見およびカタログ探索機能をサポートします。

**機能メタデータ**
| プロパティ | 値 |
|----------|------|
| 機能コード | `search_service` |

## 機能操作

### 検索インデックスの作成
指定されたスキーマと設定で新しい検索インデックスを作成します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `create_index` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "indexName": {
      "type": "string"
    },
    "schema": {
      "type": "object"
    },
    "settings": {
      "type": "object"
    }
  },
  "required": [
    "indexName",
    "schema"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "indexId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "indexId",
    "status"
  ]
}
```
### 検索クエリの実行
フィルタリングとファセット機能を備えた、インデックス付きコンテンツ全体での検索クエリを実行します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `search_query` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string"
    },
    "filters": {
      "type": "object"
    },
    "page": {
      "type": "integer"
    },
    "size": {
      "type": "integer"
    }
  },
  "required": [
    "query"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "results": {
      "type": "array"
    },
    "total": {
      "type": "integer"
    },
    "facets": {
      "type": "object"
    }
  },
  "required": [
    "results",
    "total"
  ]
}
```
### インデックスコンテンツの更新
既存の検索インデックスに新しいコンテンツを更新または追加します

**操作メタデータ**
| プロパティ | 値 |
|----------|------|
| 操作コード | `update_index` |

#### 入力スキーマ
```json operation input schema
{
  "type": "object",
  "properties": {
    "indexId": {
      "type": "string"
    },
    "documents": {
      "type": "array"
    }
  },
  "required": [
    "indexId",
    "documents"
  ]
}
```

#### 出力スキーマ
```json operation output schema
{
  "type": "object",
  "properties": {
    "processed": {
      "type": "integer"
    },
    "failed": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ]
}
```