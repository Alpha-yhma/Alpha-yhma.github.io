---
title: ES语法示例
icon: fab fa-markdown
order: 2
tag: ES
---
### 普通查询
```js
GET /blogs/_search
{
  "query": {
    "match_phrase": {"title":"中华"}
    }
}
```

### 高亮查询
```js
GET /blogs/_search
{
  "query": {
    "match_phrase": {"title":"中华"}
    }
    , "highlight": {
      "fields": {
        "title": {        }
      }
    }
}
```

### 设置索引的字段Mapping映射
```js
PUT /blogs/
{
  "settings": {
    "analysis": {
      "analyzer": {
        "ik":{
          "tokenizer":"ik_max_word"
        }
      }
    }
  },
  "mappings" : {
        "properties" : {
            "title" : {
                "type": "text",
                "analyzer" : "ik"
            }
        }
    }
}
```

### 新建索引，设置索引的主分片/副本分片个数
```js
PUT /website/_settings
{
  "number_of_replicas": 2,
  "number_of_shards": 1
}
```

### 删除索引
```js
DELETE /blogs
```

### 执行批量任务
```js
POST  /blogs/_bulk
{"index":{}}
{"title": "中华人民共和国","text":  "Just trying this out...","date":  "2014/01/04"}
{"index":{}}
{"title": "中国","text":  "Just trying this out...","date":  "2014/01/04"}
{"index":{}}
{"title": "中华人民共和国中央人民政府","text":  "Just trying this out...","date":  "2014/01/04"}
```

### 获取字符串的分词解析结果
```js
GET /_analyze
{
  "text":"中华人民共和国", "analyzer": "ik_max_word"
}
```

### 获取字符串的分词解析结果
```js
GET /_analyze
{
  "text":"中华人民共和国", "analyzer": "standard"
}
```


