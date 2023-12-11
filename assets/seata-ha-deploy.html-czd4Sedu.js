import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as n}from"./app-bYae3XOa.js";const r={},i=n(`<h1 id="k8s上部署高可用seata服务端" tabindex="-1"><a class="header-anchor" href="#k8s上部署高可用seata服务端" aria-hidden="true">#</a> K8S上部署高可用Seata服务端</h1><h2 id="_1-前置要求" tabindex="-1"><a class="header-anchor" href="#_1-前置要求" aria-hidden="true">#</a> 1. 前置要求</h2><ul><li>已部署K8S集群，并拥有主节点kubectl权限</li><li>已部署镜像仓库，例如Harbor或Docker Registry。下文假设仓库地址为：harbor.xxx.com</li><li>已部署数据库，支持mysql/redis/postgresql</li></ul><h2 id="_2-上传镜像" tabindex="-1"><a class="header-anchor" href="#_2-上传镜像" aria-hidden="true">#</a> 2. 上传镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加载镜像文件</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> seata-server.tar
<span class="token comment"># 修改镜像tag指向仓库地址，需要保证项目base存在</span>
<span class="token function">docker</span> tag harbor.amarsoft.com/base/seata-server:1.6.1 harbor.xxx.com/base/seata-server:1.6.1
<span class="token comment"># 登录镜像仓库，如果已登录跳过这一步</span>
<span class="token function">docker</span> login harbor.xxx.com
<span class="token comment"># 推送镜像</span>
<span class="token function">docker</span> push harbor.xxx.com/base/seata-server:1.6.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建seata-server的数据库" tabindex="-1"><a class="header-anchor" href="#_3-创建seata-server的数据库" aria-hidden="true">#</a> 3. 创建seata-server的数据库</h2><ul><li>创建数据库用户，假设用户密码为：<code>seata_demo</code>/<code>seata_demo</code></li><li>执行对应数据库脚本，脚本文件位于 <code>seata-server/script/server/db</code></li></ul><h2 id="_4-修改seata-server-yaml" tabindex="-1"><a class="header-anchor" href="#_4-修改seata-server-yaml" aria-hidden="true">#</a> 4. 修改seata-server.yaml</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> seata-server.yaml

<span class="token comment"># 修改namespace（可选） </span>

<span class="token comment"># 修改镜像名称</span>
image: harbor.amarsoft.com/base/seata-server:1.6.1 <span class="token operator">=</span><span class="token operator">&gt;</span> harbor.xxx.com/base/seata-server:1.6.1
<span class="token comment"># 修改数据库配置</span>
db-type: mysql
driver-class-name: com.mysql.cj.jdbc.Driver
url: jdbc:mysql://192.168.65.201:3306/seata_demo?rewriteBatchedStatements<span class="token operator">=</span>true
user: seata_demo
password: seata_demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-部署" tabindex="-1"><a class="header-anchor" href="#_5-部署" aria-hidden="true">#</a> 5. 部署</h2><p>进入K8S master节点执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> seata-server.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-客户端连接" tabindex="-1"><a class="header-anchor" href="#_6-客户端连接" aria-hidden="true">#</a> 6. 客户端连接</h2><p>当前服务暴露出的地址格式为： {service}-{index}.{deployName}.{namespace} 即默认地址如下：</p><ul><li>seata-server-0.seata-server.default</li><li>seata-server-1.seata-server.default</li><li>seata-server-2.seata-server.default</li></ul><p>如果改动了seata-server.yaml中对应配置，上述地址也会对应变动，请自行调整客户端配置。</p>`,16),d=[i];function l(t,c){return a(),s("div",null,d)}const v=e(r,[["render",l],["__file","seata-ha-deploy.html.vue"]]);export{v as default};
