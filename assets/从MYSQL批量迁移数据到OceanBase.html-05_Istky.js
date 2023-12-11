import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-giQjudzF.js";const t={},p=e(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><ul><li>mig.sh</li><li>template.json</li><li>als <ul><li>env.txt</li><li>tables.txt</li></ul></li></ul><h2 id="mig-sh" tabindex="-1"><a class="header-anchor" href="#mig-sh" aria-hidden="true">#</a> mig.sh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;请输入需要导入的目录地址！&#39;</span>  
  <span class="token builtin class-name">exit</span>  
<span class="token keyword">fi</span>  
  
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>  
<span class="token builtin class-name">cd</span> <span class="token variable">$dir</span>  
  
<span class="token comment"># 检查env.txt文件是否存在  </span>
<span class="token function">ls</span> <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">grep</span> env.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-V</span> <span class="token function">grep</span>  
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;指定目录下没有env.txt文件，请检查！&#39;</span>  
  <span class="token builtin class-name">exit</span>  
<span class="token keyword">fi</span>  
<span class="token comment"># 检查tables.txt文件是否存在  </span>
<span class="token function">ls</span> <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">grep</span> tables.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-V</span> <span class="token function">grep</span>  
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;指定目录下没有tables.txt文件，请检查！&#39;</span>  
  <span class="token builtin class-name">exit</span>  
<span class="token keyword">fi</span>  
  
<span class="token assign-left variable">DATAX_HOME</span><span class="token operator">=</span><span class="token string">&#39;/home&#39;</span>  
<span class="token comment"># 设置需要进行模板替换的变量  </span>
<span class="token builtin class-name">source</span> <span class="token variable">$1</span>/env.txt  
  
<span class="token assign-left variable">buildDir</span><span class="token operator">=</span><span class="token variable">$1</span>/build  
<span class="token assign-left variable">logDir</span><span class="token operator">=</span><span class="token variable">$1</span>/log  
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$buildDir</span> <span class="token variable">$logDir</span>  
<span class="token function">mkdir</span> <span class="token variable">$buildDir</span> <span class="token variable">$logDir</span>  
<span class="token comment"># 读取需要其按哦已的数据表集合，进行模板变量替换  </span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> table  
<span class="token keyword">do</span>  
<span class="token assign-left variable">file_text</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span> ./template.json<span class="token variable">)</span></span>  
<span class="token builtin class-name">eval</span> <span class="token string">&quot;cat &lt;&lt;EOF  
<span class="token variable">$file_text</span>  
EOF&quot;</span> <span class="token operator">&gt;</span> <span class="token variable">$buildDir</span>/<span class="token variable">$table</span>.json  
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">$1</span>/tables.txt  
  
<span class="token comment"># ---------------------------多线程处理---------------------------  </span>
<span class="token comment"># 线程数量  </span>
<span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">10</span>  
<span class="token comment"># mkfifo 创建有名管道  </span>
<span class="token assign-left variable">myfifo</span><span class="token operator">=</span><span class="token string">&quot;/tmp/migfd&quot;</span>  
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$myfifo</span>  
<span class="token function">mkfifo</span> <span class="token variable">$myfifo</span>  
<span class="token comment"># 创建文件描述符，以可读（&lt;）和可写（&gt;）关联管道文件  </span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&lt;&gt;</span><span class="token variable">$myfifo</span>  
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$myfifo</span>  
  
<span class="token comment"># 为文件描述符创建占位信息  </span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>\${threads}<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>  
<span class="token keyword">do</span>  
  <span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>  
<span class="token keyword">done</span>  
<span class="token comment"># ---------------------------多线程处理---------------------------  </span>
  
<span class="token comment"># 根据变量startTable判断是否需要跳过开头的某些表，用于断点续跑  </span>
<span class="token assign-left variable">skip</span><span class="token operator">=</span><span class="token number">1</span>  
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$startTable</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
  <span class="token assign-left variable">skip</span><span class="token operator">=</span><span class="token number">0</span>  
<span class="token keyword">fi</span>  
<span class="token comment"># 开始表数据迁移  </span>
<span class="token keyword">for</span> <span class="token for-or-select variable">table</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $1/tables.txt<span class="token variable">\`</span></span>  
<span class="token keyword">do</span>  
  <span class="token comment"># 跳过已经迁移成功的表  </span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$skip</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$table</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable">$startTable</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
      <span class="token assign-left variable">skip</span><span class="token operator">=</span><span class="token number">0</span>  
    <span class="token keyword">else</span>  
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------跳过表：<span class="token variable">\${table}</span>---------------------------&quot;</span>  
    <span class="token keyword">fi</span>  
  <span class="token keyword">fi</span>  
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-u2</span>  
  <span class="token punctuation">{</span>  
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------开始迁移表：<span class="token variable">\${table}</span>---------------------------&quot;</span>  
    python <span class="token variable">$DATAX_HOME</span>/bin/datax.py <span class="token variable">$buildDir</span>/<span class="token variable">$table</span>.json <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&gt;</span> <span class="token variable">$logDir</span>/<span class="token variable">$table</span>.log  
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------迁移表：<span class="token variable">\${table}</span>失败！---------------------------&quot;</span>  
    <span class="token keyword">fi</span>  
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------迁移表：<span class="token variable">\${table}</span>结束---------------------------&quot;</span>  
    <span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>  
  <span class="token punctuation">}</span><span class="token operator">&amp;</span>  
<span class="token keyword">done</span>  
  
<span class="token function">wait</span>  
<span class="token comment"># 关闭文件描述符的读写  </span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&lt;&amp;</span>-  
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&amp;</span>-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template-json" tabindex="-1"><a class="header-anchor" href="#template-json" aria-hidden="true">#</a> template.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>  
  <span class="token property">&quot;core&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token property">&quot;byte&quot;</span><span class="token operator">:</span> <span class="token number">10485760</span>  
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>  
        <span class="token property">&quot;byte&quot;</span><span class="token operator">:</span> <span class="token number">52428800</span>  
      <span class="token punctuation">}</span><span class="token punctuation">,</span>  
      <span class="token property">&quot;errorLimit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token property">&quot;record&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  
        <span class="token property">&quot;percentage&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span>  
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
      <span class="token punctuation">{</span>  
        <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysqlreader&quot;</span><span class="token punctuation">,</span>  
          <span class="token property">&quot;parameter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${read_username}&quot;</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${read_password}&quot;</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;connection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
              <span class="token punctuation">{</span>  
                <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${table}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
                <span class="token property">&quot;jdbcUrl&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
                  <span class="token string">&quot;\${read_url}&quot;</span>  
                <span class="token punctuation">]</span>  
              <span class="token punctuation">}</span>  
            <span class="token punctuation">]</span>  
          <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;oceanbasev10writer&quot;</span><span class="token punctuation">,</span>  
          <span class="token property">&quot;parameter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token property">&quot;obWriteMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;preSql&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;truncate table \${table}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;connection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
              <span class="token punctuation">{</span>  
                <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${table}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
                <span class="token property">&quot;jdbcUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${write_url}&quot;</span>  
              <span class="token punctuation">}</span>  
            <span class="token punctuation">]</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${write_username}&quot;</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${write_password}&quot;</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;writeThreadCount&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;batchSize&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>  
            <span class="token property">&quot;memstoreThreshold&quot;</span><span class="token operator">:</span> <span class="token number">0.9</span>  
          <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>  
    <span class="token punctuation">]</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="env-txt" tabindex="-1"><a class="header-anchor" href="#env-txt" aria-hidden="true">#</a> env.txt</h2><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 源数据库jdbc URL  </span>
<span class="token key attr-name">read_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://20.15.71.68:3306/als93cdev?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=GMT%2B8  </span>
<span class="token comment"># 源数据库登录用户名  </span>
<span class="token key attr-name">read_username</span><span class="token punctuation">=</span><span class="token value attr-value">root  </span>
<span class="token comment"># 源数据库登录密码  </span>
<span class="token key attr-name">read_password</span><span class="token punctuation">=</span><span class="token value attr-value">amarsoft  </span>
<span class="token comment"># 目标数据库jdbc URL  </span>
<span class="token key attr-name">write_url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:oceanbase://20.14.133.11:2883/CREDIT?useLocalSessionState=true&amp;allowBatch=true&amp;allowMultiQueries=true&amp;rewriteBatchedStatements=true  </span>
<span class="token comment"># 目标数据库登录用户名  </span>
<span class="token key attr-name">write_username</span><span class="token punctuation">=</span><span class="token value attr-value">CREDIT@dev_crcsdb#testcluster  </span>
<span class="token comment"># 目标数据库登录密码  </span>
<span class="token key attr-name">write_password</span><span class="token punctuation">=</span><span class="token value attr-value">CREDIT@@abcd1234  </span>
<span class="token comment"># 从哪张表开始迁移，用于断点续跑  </span>
<span class="token key attr-name">startTable</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tables-txt" tabindex="-1"><a class="header-anchor" href="#tables-txt" aria-hidden="true">#</a> tables.txt</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>business_apply  
customer_info

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[p];function o(i,c){return n(),a("div",null,l)}const d=s(t,[["render",o],["__file","从MYSQL批量迁移数据到OceanBase.html.vue"]]);export{d as default};
