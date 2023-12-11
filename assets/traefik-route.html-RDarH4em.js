import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-giQjudzF.js";const t={},l=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token comment"># Add the router</span>
  <span class="token key atrule">routers</span><span class="token punctuation">:</span>
    <span class="token key atrule">my-router</span><span class="token punctuation">:</span>
      <span class="token key atrule">entryPoints</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> web
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> my<span class="token punctuation">-</span>stripprefix
        <span class="token punctuation">-</span> my<span class="token punctuation">-</span>traefik<span class="token punctuation">-</span>timer<span class="token punctuation">-</span>plugin
      <span class="token key atrule">service</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>service
      <span class="token key atrule">rule</span><span class="token punctuation">:</span> PathPrefix(\`/\`)

  <span class="token comment"># Add the middleware</span>
  <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
    <span class="token key atrule">my-stripprefix</span><span class="token punctuation">:</span>
      <span class="token key atrule">stripPrefix</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefixes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;/&quot;</span>
    <span class="token key atrule">my-traefik-timer-plugin</span><span class="token punctuation">:</span>
      <span class="token key atrule">plugin</span><span class="token punctuation">:</span>
        <span class="token key atrule">traefik-timer-plugin</span><span class="token punctuation">:</span>
          <span class="token key atrule">log</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token comment"># Add the service</span>
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">my-service</span><span class="token punctuation">:</span>
      <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span>
        <span class="token key atrule">servers</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>8080/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(c,u){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","traefik-route.html.vue"]]);export{d as default};
