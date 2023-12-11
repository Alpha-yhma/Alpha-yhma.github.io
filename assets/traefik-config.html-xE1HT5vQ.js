import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-xzBMaP5V.js";const t={},p=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">checkNewVersion</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>    <span class="token comment"># 周期性的检查是否有新版本发布</span>
  <span class="token key atrule">sendAnonymousUsage</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 周期性的匿名发送使用统计信息</span>
<span class="token key atrule">serversTransport</span><span class="token punctuation">:</span>
  <span class="token key atrule">insecureSkipVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># Traefik忽略验证代理服务的TLS证书</span>
<span class="token key atrule">api</span><span class="token punctuation">:</span>
  <span class="token key atrule">insecure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>            <span class="token comment"># 允许HTTP 方式访问API</span>
  <span class="token key atrule">dashboard</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>           <span class="token comment"># 启用Dashboard</span>
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>              <span class="token comment"># 启用Debug调试模式</span>
<span class="token key atrule">metrics</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus</span><span class="token punctuation">:</span>               <span class="token comment"># 配置Prometheus监控指标数据，并使用默认配置</span>
  <span class="token key atrule">addRoutersLabels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 添加routers metrics</span>
  <span class="token key atrule">entryPoint</span><span class="token punctuation">:</span> <span class="token string">&quot;metrics&quot;</span>   <span class="token comment"># 指定metrics监听地址</span>
<span class="token key atrule">entryPoints</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:80&quot;</span>          <span class="token comment"># 配置80端口，并设置入口名称为web</span>
  <span class="token key atrule">forwardedHeaders</span><span class="token punctuation">:</span>
    <span class="token key atrule">insecure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>        <span class="token comment"># 信任所有的forward headers</span>
    <span class="token key atrule">websecure</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:443&quot;</span>         <span class="token comment"># 配置443端口，并设置入口名称为 websecure</span>
  <span class="token key atrule">forwardedHeaders</span><span class="token punctuation">:</span>
    <span class="token key atrule">insecure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">traefik</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:9000&quot;</span>        <span class="token comment"># 配置9000端口，并设置入口名称为 dashboard</span>
    <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:9100&quot;</span>        <span class="token comment"># 配置9100端口，作为metrics收集入口</span>
    <span class="token key atrule">tcpep</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:9200&quot;</span>        <span class="token comment"># 配置9200端口，作为tcp入口</span>
    <span class="token key atrule">udpep</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;:9300/udp&quot;</span>    <span class="token comment"># 配置9300端口，作为udp入口</span>
<span class="token key atrule">providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">directory</span><span class="token punctuation">:</span> <span class="token string">&quot;conf&quot;</span>       <span class="token comment"># 读取当前路径下conf文件夹</span>
  <span class="token key atrule">kubernetesCRD</span><span class="token punctuation">:</span>            <span class="token comment"># 启用Kubernetes CRD方式来配置路由规则</span>
  <span class="token key atrule">ingressClass</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>        <span class="token comment"># 指定traefik的ingressClass名称</span>
  <span class="token key atrule">allowCrossNamespace</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>   <span class="token comment">#允许跨namespace</span>
  <span class="token key atrule">allowEmptyServices</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>    <span class="token comment">#允许空endpoints的service</span>
<span class="token key atrule">log</span><span class="token punctuation">:</span>
  <span class="token key atrule">filePath</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/traefik/logs/traefik.log&quot;</span> <span class="token comment"># 设置调试日志文件存储路径，如果为空则输出到控制台</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span> <span class="token string">&quot;DEBUG&quot;</span>            <span class="token comment"># 设置调试日志级别</span>
  <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;common&quot;</span>          <span class="token comment"># 设置调试日志格式</span>
<span class="token key atrule">accessLog</span><span class="token punctuation">:</span>
  <span class="token key atrule">filePath</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/traefik/logs/access.log&quot;</span> <span class="token comment"># 设置访问日志文件存储路径，如果为空则输出到控制台</span>
  <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;common&quot;</span>          <span class="token comment"># 设置访问调试日志格式</span>
  <span class="token key atrule">bufferingSize</span><span class="token punctuation">:</span> <span class="token number">0</span>          <span class="token comment"># 设置访问日志缓存行数</span>
  <span class="token key atrule">filters</span><span class="token punctuation">:</span>
  <span class="token comment"># statusCodes: [&quot;200&quot;]  # 设置只保留指定状态码范围内的访问日志</span>
  <span class="token key atrule">retryAttempts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>     <span class="token comment"># 设置代理访问重试失败时，保留访问日志</span>
  <span class="token key atrule">minDuration</span><span class="token punctuation">:</span> <span class="token number">20</span>         <span class="token comment"># 设置保留请求时间超过指定持续时间的访问日志</span>
    <span class="token key atrule">fields</span><span class="token punctuation">:</span>                   <span class="token comment"># 设置访问日志中的字段是否保留（keep保留、drop不保留）</span>
  <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> keep       <span class="token comment"># 设置默认保留访问日志字段</span>
  <span class="token key atrule">names</span><span class="token punctuation">:</span>                  <span class="token comment"># 针对访问日志特别字段特别配置保留模式</span>
    <span class="token key atrule">ClientUsername</span><span class="token punctuation">:</span> drop
    <span class="token key atrule">StartUTC</span><span class="token punctuation">:</span> drop        <span class="token comment"># 禁用日志timestamp使用UTC</span>
  <span class="token key atrule">headers</span><span class="token punctuation">:</span>                <span class="token comment"># 设置Header中字段是否保留</span>
    <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> keep     <span class="token comment"># 设置默认保留Header中字段</span>
    <span class="token key atrule">names</span><span class="token punctuation">:</span>                <span class="token comment"># 针对Header中特别字段特别配置保留模式</span>
    <span class="token comment"># User-Agent: redact# 可以针对指定agent</span>
    <span class="token key atrule">Authorization</span><span class="token punctuation">:</span> drop
    <span class="token key atrule">Content-Type</span><span class="token punctuation">:</span> keep
<span class="token key atrule">experimental</span><span class="token punctuation">:</span>               <span class="token comment"># 实验性功能选项</span>
  <span class="token key atrule">localPlugins</span><span class="token punctuation">:</span>             <span class="token comment"># 使用本地插件</span>
  <span class="token key atrule">timerplugin</span><span class="token punctuation">:</span>
    <span class="token key atrule">moduleName</span><span class="token punctuation">:</span> <span class="token string">&quot;github.com/togettoyou/traefik-timer-plugin&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function o(c,i){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","traefik-config.html.vue"]]);export{r as default};
