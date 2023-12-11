const a=JSON.parse('{"key":"v-0763c876","path":"/md/tool/traefik/traefik-build-image.html","title":"Traefik自定义镜像","lang":"zh-CN","frontmatter":{"title":"Traefik自定义镜像","icon":"fab fa-docker","tag":"Traefik","description":"FROM alpine:3 AS src ARG PLUGIN_MODULE=github.com/traefik/plugindemo ARG PLUGIN_GIT_REPO=https://github.com/traefik/plugindemo.git RUN apk add --update git &amp;&amp; \\\\ git clone ${PLUGIN_GIT_REPO} /plugins-local/src/${PLUGIN_MODULE} --depth 1 --single-branch --branch master FROM traefik:v2.9 COPY --from=src /plugins-local /plugins-local","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/tool/traefik/traefik-build-image.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"Traefik自定义镜像"}],["meta",{"property":"og:description","content":"FROM alpine:3 AS src ARG PLUGIN_MODULE=github.com/traefik/plugindemo ARG PLUGIN_GIT_REPO=https://github.com/traefik/plugindemo.git RUN apk add --update git &amp;&amp; \\\\ git clone ${PLUGIN_GIT_REPO} /plugins-local/src/${PLUGIN_MODULE} --depth 1 --single-branch --branch master FROM traefik:v2.9 COPY --from=src /plugins-local /plugins-local"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"Traefik"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Traefik自定义镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":0.18,"words":53},"filePathRelative":"md/tool/traefik/traefik-build-image.md","localizedDate":"2023年12月10日","excerpt":"<div class=\\"language-docker line-numbers-mode\\" data-ext=\\"docker\\"><pre class=\\"language-docker\\"><code><span class=\\"token instruction\\"><span class=\\"token keyword\\">FROM</span> alpine:3 <span class=\\"token keyword\\">AS</span> src</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">ARG</span> PLUGIN_MODULE=github.com/traefik/plugindemo</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">ARG</span> PLUGIN_GIT_REPO=https://github.com/traefik/plugindemo.git</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> apk add --update git &amp;&amp; <span class=\\"token operator\\">\\\\</span>\\n    git clone <span class=\\"token variable\\">${PLUGIN_GIT_REPO}</span> /plugins-local/src/<span class=\\"token variable\\">${PLUGIN_MODULE}</span> --depth 1 --single-branch --branch master</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">FROM</span> traefik:v2.9</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">COPY</span> <span class=\\"token options\\"><span class=\\"token property\\">--from</span><span class=\\"token punctuation\\">=</span><span class=\\"token string\\">src</span></span> /plugins-local /plugins-local</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};