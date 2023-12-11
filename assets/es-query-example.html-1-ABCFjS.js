const e=JSON.parse('{"key":"v-c5e6e5e0","path":"/md/middleware/es/es-query-example.html","title":"ES语法示例","lang":"zh-CN","frontmatter":{"title":"ES语法示例","icon":"fab fa-markdown","order":2,"tag":"ES","description":"普通查询 GET /blogs/_search { \\"query\\": { \\"match_phrase\\": {\\"title\\":\\"中华\\"} } }","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/middleware/es/es-query-example.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"ES语法示例"}],["meta",{"property":"og:description","content":"普通查询 GET /blogs/_search { \\"query\\": { \\"match_phrase\\": {\\"title\\":\\"中华\\"} } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T06:41:34.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"ES"}],["meta",{"property":"article:modified_time","content":"2023-12-10T06:41:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES语法示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T06:41:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":3,"title":"普通查询","slug":"普通查询","link":"#普通查询","children":[]},{"level":3,"title":"高亮查询","slug":"高亮查询","link":"#高亮查询","children":[]},{"level":3,"title":"设置索引的字段Mapping映射","slug":"设置索引的字段mapping映射","link":"#设置索引的字段mapping映射","children":[]},{"level":3,"title":"新建索引，设置索引的主分片/副本分片个数","slug":"新建索引-设置索引的主分片-副本分片个数","link":"#新建索引-设置索引的主分片-副本分片个数","children":[]},{"level":3,"title":"删除索引","slug":"删除索引","link":"#删除索引","children":[]},{"level":3,"title":"执行批量任务","slug":"执行批量任务","link":"#执行批量任务","children":[]},{"level":3,"title":"获取字符串的分词解析结果","slug":"获取字符串的分词解析结果","link":"#获取字符串的分词解析结果","children":[]},{"level":3,"title":"获取字符串的分词解析结果","slug":"获取字符串的分词解析结果-1","link":"#获取字符串的分词解析结果-1","children":[]}],"git":{"createdTime":1702190494000,"updatedTime":1702190494000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"md/middleware/es/es-query-example.md","localizedDate":"2023年12月10日","excerpt":"<h3> 普通查询</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token constant\\">GET</span> <span class=\\"token operator\\">/</span>blogs<span class=\\"token operator\\">/</span>_search\\n<span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token string-property property\\">\\"query\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string-property property\\">\\"match_phrase\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string-property property\\">\\"title\\"</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"中华\\"</span><span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};