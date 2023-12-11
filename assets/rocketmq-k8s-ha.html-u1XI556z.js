const e=JSON.parse('{"key":"v-24ca5bc6","path":"/md/middleware/rocketmq/rocketmq-k8s-ha.html","title":"RocketMQ高可用K8S部署方案","lang":"zh-CN","frontmatter":{"title":"RocketMQ高可用K8S部署方案","icon":"fab fa-markdown","order":2,"tag":"RocketMQ","description":"1. 前言 本部分主要基于[[RocketMQ高可用部署方案]]的基础上，介绍K8S上的单DLedger集群部署方案。 2. 镜像构建 2.1 nameserver镜像构建 Dockerfile文件内容如下，参考文件Dockerfile-namesrv： FROM openjdk/linux/amd64/openjdk:11.0.13 MAINTAINER yhma@amarsoft.com ADD rocketmq-4.9.3 /rocketmq expose 9876 ENV JAVA_OPT \\" -Xms512m -Xmx512m \\" ENV JAVA_OPT_EXT \\" --add-opens java.base/jdk.internal.misc=ALL-UNNAMED \\" CMD [\\"/bin/sh\\",\\"-c\\",\\"/rocketmq/bin/mqnamesrv\\"]","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/middleware/rocketmq/rocketmq-k8s-ha.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"RocketMQ高可用K8S部署方案"}],["meta",{"property":"og:description","content":"1. 前言 本部分主要基于[[RocketMQ高可用部署方案]]的基础上，介绍K8S上的单DLedger集群部署方案。 2. 镜像构建 2.1 nameserver镜像构建 Dockerfile文件内容如下，参考文件Dockerfile-namesrv： FROM openjdk/linux/amd64/openjdk:11.0.13 MAINTAINER yhma@amarsoft.com ADD rocketmq-4.9.3 /rocketmq expose 9876 ENV JAVA_OPT \\" -Xms512m -Xmx512m \\" ENV JAVA_OPT_EXT \\" --add-opens java.base/jdk.internal.misc=ALL-UNNAMED \\" CMD [\\"/bin/sh\\",\\"-c\\",\\"/rocketmq/bin/mqnamesrv\\"]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T06:41:34.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:modified_time","content":"2023-12-10T06:41:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ高可用K8S部署方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T06:41:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":3,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":3,"title":"2. 镜像构建","slug":"_2-镜像构建","link":"#_2-镜像构建","children":[]},{"level":3,"title":"3. 准备broker配置文件","slug":"_3-准备broker配置文件","link":"#_3-准备broker配置文件","children":[]},{"level":3,"title":"4. K8S上部署应用","slug":"_4-k8s上部署应用","link":"#_4-k8s上部署应用","children":[]}],"git":{"createdTime":1702190494000,"updatedTime":1702190494000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1466},"filePathRelative":"md/middleware/rocketmq/rocketmq-k8s-ha.md","localizedDate":"2023年12月10日","excerpt":"<h3> 1. 前言</h3>\\n<p>本部分主要基于[[RocketMQ高可用部署方案]]的基础上，介绍K8S上的单DLedger集群部署方案。</p>\\n<h3> 2. 镜像构建</h3>\\n<h4> 2.1 nameserver镜像构建</h4>\\n<p>Dockerfile文件内容如下，参考文件<code>Dockerfile-namesrv</code>：</p>\\n<div class=\\"language-Dockerfile line-numbers-mode\\" data-ext=\\"Dockerfile\\"><pre class=\\"language-Dockerfile\\"><code>FROM openjdk/linux/amd64/openjdk:11.0.13\\nMAINTAINER yhma@amarsoft.com\\nADD rocketmq-4.9.3 /rocketmq\\nexpose 9876\\nENV JAVA_OPT \\" -Xms512m -Xmx512m \\"\\nENV JAVA_OPT_EXT \\" --add-opens java.base/jdk.internal.misc=ALL-UNNAMED \\"\\nCMD [\\"/bin/sh\\",\\"-c\\",\\"/rocketmq/bin/mqnamesrv\\"]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};