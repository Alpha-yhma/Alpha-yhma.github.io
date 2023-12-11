import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-bYae3XOa.js";const e={},p=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> <strong>前言</strong></h2><p>K8s + springBoot实现零宕机发布：健康检查+滚动更新+优雅停机+弹性伸缩+Prometheus监控+配置分离（镜像复用）</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> <strong>配置</strong></h2><h3 id="健康检查" tabindex="-1"><a class="header-anchor" href="#健康检查" aria-hidden="true">#</a> <strong>健康检查</strong></h3><ul><li>健康检查类型：就绪探针（readiness）+ 存活探针（liveness）</li><li>探针类型：exec（进入容器执行脚本）、tcpSocket（探测端口）、httpGet（调用接口）</li></ul><h3 id="业务层面" tabindex="-1"><a class="header-anchor" href="#业务层面" aria-hidden="true">#</a> <strong>业务层面</strong></h3><p>项目依赖 pom.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义访问端口、路径及权限 application.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">50000</span>                         <span class="token comment"># 启用独立运维端口</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>                             <span class="token comment"># 开启health端点</span>
	<span class="token key atrule">health</span><span class="token punctuation">:</span>
	  <span class="token key atrule">probes</span><span class="token punctuation">:</span>
		<span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
	<span class="token key atrule">web</span><span class="token punctuation">:</span>
	  <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
		<span class="token key atrule">base-path</span><span class="token punctuation">:</span> /actuator            <span class="token comment"># 指定上下文路径，启用相应端点</span>
		<span class="token key atrule">include</span><span class="token punctuation">:</span> health
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将暴露<code>/actuator/health/readiness</code>和<code>/actuator/health/liveness</code>两个接口，访问方式如下：</p><pre><code>http://127.0.0.1:50000/actuator/health/readiness
http://127.0.0.1:50000/actuator/health/liveness
</code></pre><h3 id="运维层面" tabindex="-1"><a class="header-anchor" href="#运维层面" aria-hidden="true">#</a> <strong>运维层面</strong></h3><p>k8s部署模版deployment.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>IMAGE_URL<span class="token punctuation">}</span>
		<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
		<span class="token key atrule">ports</span><span class="token punctuation">:</span>
		<span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_PORT<span class="token punctuation">}</span>
		<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">50000</span>         <span class="token comment"># 应用管理端口</span>
		<span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>                <span class="token comment"># 就绪探针</span>
		  <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
			<span class="token key atrule">path</span><span class="token punctuation">:</span> /actuator/health/readiness
			<span class="token key atrule">port</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>      <span class="token comment"># 延迟加载时间</span>
		  <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>            <span class="token comment"># 重试时间间隔</span>
		  <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>            <span class="token comment"># 超时时间设置</span>
		  <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>          <span class="token comment"># 健康阈值</span>
		  <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">6</span>          <span class="token comment"># 不健康阈值</span>
		<span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>                 <span class="token comment"># 存活探针</span>
		  <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
			<span class="token key atrule">path</span><span class="token punctuation">:</span> /actuator/health/liveness
			<span class="token key atrule">port</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>      <span class="token comment"># 延迟加载时间</span>
		  <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>            <span class="token comment"># 重试时间间隔</span>
		  <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>            <span class="token comment"># 超时时间设置</span>
		  <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>          <span class="token comment"># 健康阈值</span>
		  <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">6</span>          <span class="token comment"># 不健康阈值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滚动更新" tabindex="-1"><a class="header-anchor" href="#滚动更新" aria-hidden="true">#</a> <strong>滚动更新</strong></h3><p>k8s资源调度之滚动更新策略，若要实现零宕机发布，需支持健康检查</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
	<span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
	<span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
	  <span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>REPLICAS<span class="token punctuation">}</span>    <span class="token comment"># Pod副本数</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
	<span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate    <span class="token comment"># 滚动更新策略</span>
	<span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
	  <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span>                   <span class="token comment"># 升级过程中最多可以比原先设置的副本数多出的数量</span>
	  <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span>             <span class="token comment"># 升级过程中最多有多少个POD处于无法提供服务的状态</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优雅停机" tabindex="-1"><a class="header-anchor" href="#优雅停机" aria-hidden="true">#</a> <strong>优雅停机</strong></h3><p>在K8s中，当我们实现滚动升级之前，务必要实现应用级别的优雅停机。否则滚动升级时，还是会影响到业务。使应用关闭线程、释放连接资源后再停止服务</p><h3 id="业务层面-1" tabindex="-1"><a class="header-anchor" href="#业务层面-1" aria-hidden="true">#</a> <strong>业务层面</strong></h3><p>项目依赖 pom.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义访问端口、路径及权限 application.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
	<span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;xxx<span class="token punctuation">&gt;</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
	<span class="token key atrule">active</span><span class="token punctuation">:</span> @profileActive@
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
	<span class="token key atrule">timeout-per-shutdown-phase</span><span class="token punctuation">:</span> 30s     <span class="token comment"># 停机过程超时时长设置30s，超过30s，直接停机</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">shutdown</span><span class="token punctuation">:</span> graceful                    <span class="token comment"># 默认为IMMEDIATE，表示立即关机；GRACEFUL表示优雅关机</span>

<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">50000</span>                         <span class="token comment"># 启用独立运维端口</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>                             <span class="token comment"># 开启shutdown和health端点</span>
	<span class="token key atrule">shutdown</span><span class="token punctuation">:</span>
	  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
	<span class="token key atrule">health</span><span class="token punctuation">:</span>
	  <span class="token key atrule">probes</span><span class="token punctuation">:</span>
		<span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
	<span class="token key atrule">web</span><span class="token punctuation">:</span>
	  <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
		<span class="token key atrule">base-path</span><span class="token punctuation">:</span> /actuator            <span class="token comment"># 指定上下文路径，启用相应端点</span>
		<span class="token key atrule">include</span><span class="token punctuation">:</span> health<span class="token punctuation">,</span>shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将暴露<code>/actuator/shutdown</code>接口，调用方式如下：</p><pre><code>curl -X POST 127.0.0.1:50000/actuator/shutdown
</code></pre><h3 id="运维层面-1" tabindex="-1"><a class="header-anchor" href="#运维层面-1" aria-hidden="true">#</a> <strong>运维层面</strong></h3><p>确保<strong>Dockerfile</strong>模版集成curl工具，否则无法使用curl命令</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM openjdk:8-jdk-alpine
#构建参数
ARG JAR_FILE
ARG WORK_PATH=&quot;/app&quot;
ARG EXPOSE_PORT=8080

#环境变量
ENV java_OPTS=&quot;&quot;
	JAR_FILE=\${JAR_FILE}

#设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime &amp;&amp; echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone
RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g&#39; /etc/apk/repositories  
	&amp;&amp; apk add --no-cache curl
#将maven目录的jar包拷贝到docker中，并命名为for_docker.jar
COPY target/$JAR_FILE $WORK_PATH/

#设置工作目录
WORKDIR $WORK_PATH

# 指定于外界交互的端口
EXPOSE $EXPOSE_PORT
# 配置容器，使其可执行化
ENTRYPOINT exec java $JAVA_OPTS -jar $JAR_FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s部署模版deployment.yaml</p><blockquote><p>注：经验证，java项目可省略结束回调钩子的配置</p></blockquote><p>此外，若需使用回调钩子，需保证镜像中包含curl工具，且需注意应用管理端口（50000）不能暴露到公网</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>IMAGE_URL<span class="token punctuation">}</span>
		<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
		<span class="token key atrule">ports</span><span class="token punctuation">:</span>
		<span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_PORT<span class="token punctuation">}</span>
		<span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">50000</span>
		<span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
		  <span class="token key atrule">preStop</span><span class="token punctuation">:</span>       <span class="token comment"># 结束回调钩子</span>
			<span class="token key atrule">exec</span><span class="token punctuation">:</span>
			  <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-XPOST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:50000/actuator/shutdown&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹性伸缩" tabindex="-1"><a class="header-anchor" href="#弹性伸缩" aria-hidden="true">#</a> <strong>弹性伸缩</strong></h3><p>为pod设置资源限制后，创建HPA</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
	<span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>IMAGE_URL<span class="token punctuation">}</span>
		<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
		<span class="token key atrule">resources</span><span class="token punctuation">:</span>                     <span class="token comment"># 容器资源管理</span>
		  <span class="token key atrule">limits</span><span class="token punctuation">:</span>                      <span class="token comment"># 资源限制（监控使用情况）</span>
			<span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">0.5</span>
			<span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi
		  <span class="token key atrule">requests</span><span class="token punctuation">:</span>                    <span class="token comment"># 最小可用资源（灵活调度）</span>
			<span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">0.15</span>
			<span class="token key atrule">memory</span><span class="token punctuation">:</span> 300Mi
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler            <span class="token comment"># 弹性伸缩控制器</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2beta2
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>
	<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
	<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
	<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>REPLICAS<span class="token punctuation">}</span>                <span class="token comment"># 缩放范围</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">6</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
	<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> Resource
	  <span class="token key atrule">resource</span><span class="token punctuation">:</span>
		<span class="token key atrule">name</span><span class="token punctuation">:</span> cpu                        <span class="token comment"># 指定资源指标</span>
		<span class="token key atrule">target</span><span class="token punctuation">:</span>
		  <span class="token key atrule">type</span><span class="token punctuation">:</span> Utilization
		  <span class="token key atrule">averageUtilization</span><span class="token punctuation">:</span> <span class="token number">50</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prometheus集成" tabindex="-1"><a class="header-anchor" href="#prometheus集成" aria-hidden="true">#</a> <strong>Prometheus集成</strong></h3><h3 id="业务层面-2" tabindex="-1"><a class="header-anchor" href="#业务层面-2" aria-hidden="true">#</a> <strong>业务层面</strong></h3><p>项目依赖 pom.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入Spring boot的监控机制--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.micrometer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>micrometer-registry-prometheus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义访问端口、路径及权限 application.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">50000</span>                         <span class="token comment"># 启用独立运维端口</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
	<span class="token key atrule">tags</span><span class="token punctuation">:</span>
	  <span class="token key atrule">application</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
	<span class="token key atrule">web</span><span class="token punctuation">:</span>
	  <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
		<span class="token key atrule">base-path</span><span class="token punctuation">:</span> /actuator            <span class="token comment"># 指定上下文路径，启用相应端点</span>
		<span class="token key atrule">include</span><span class="token punctuation">:</span> metrics<span class="token punctuation">,</span>prometheus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将暴露<code>/actuator/metric</code>和<code>/actuator/prometheus</code>接口，访问方式如下：</p><pre><code>http://127.0.0.1:50000/actuator/metric
http://127.0.0.1:50000/actuator/prometheus
</code></pre><h3 id="运维层面-2" tabindex="-1"><a class="header-anchor" href="#运维层面-2" aria-hidden="true">#</a> <strong>运维层面</strong></h3><p>deployment.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
	  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
		<span class="token key atrule">prometheus:io/port</span><span class="token punctuation">:</span> <span class="token string">&quot;50000&quot;</span>
		<span class="token key atrule">prometheus.io/path</span><span class="token punctuation">:</span> /actuator/prometheus  <span class="token comment"># 在流水线中赋值</span>
		<span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>              <span class="token comment"># 基于pod的服务发现</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置分离" tabindex="-1"><a class="header-anchor" href="#配置分离" aria-hidden="true">#</a> <strong>配置分离</strong></h3><p>方案：通过configmap挂载外部配置文件，并指定激活环境运行</p><p>作用：配置分离，避免敏感信息泄露；镜像复用，提高交付效率</p><p>通过文件生成configmap</p><pre><code># 通过dry-run的方式生成yaml文件
kubectl create cm -n &lt;namespace&gt; &lt;APP_NAME&gt; --from-file=application-test.yaml --dry-run=1 -oyaml &gt; configmap.yaml

# 更新
kubectl apply -f configmap.yaml
</code></pre><p>挂载configmap并指定激活环境</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
	<span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>IMAGE_URL<span class="token punctuation">}</span>
		<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
		<span class="token key atrule">env</span><span class="token punctuation">:</span>
		  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRING_PROFILES_ACTIVE   <span class="token comment"># 指定激活环境</span>
			<span class="token key atrule">value</span><span class="token punctuation">:</span> test
		<span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>                      <span class="token comment"># 挂载configmap</span>
		<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> conf
		  <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/app/config&quot;</span>         <span class="token comment"># 与Dockerfile中工作目录一致</span>
		  <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
	  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> conf
		<span class="token key atrule">configMap</span><span class="token punctuation">:</span>
		  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>汇总配置</strong></p><h3 id="业务层面-3" tabindex="-1"><a class="header-anchor" href="#业务层面-3" aria-hidden="true">#</a> <strong>业务层面</strong></h3><p>项目依赖 pom.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入Spring boot的监控机制--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.micrometer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>micrometer-registry-prometheus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义访问端口、路径及权限 application.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
	<span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>sample
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
	<span class="token key atrule">active</span><span class="token punctuation">:</span> @profileActive@
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
	<span class="token key atrule">timeout-per-shutdown-phase</span><span class="token punctuation">:</span> 30s     <span class="token comment"># 停机过程超时时长设置30s，超过30s，直接停机</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">shutdown</span><span class="token punctuation">:</span> graceful                    <span class="token comment"># 默认为IMMEDIATE，表示立即关机；GRACEFUL表示优雅关机</span>

<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">50000</span>                         <span class="token comment"># 启用独立运维端口</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
	<span class="token key atrule">tags</span><span class="token punctuation">:</span>
	  <span class="token key atrule">application</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>                             <span class="token comment"># 开启shutdown和health端点</span>
	<span class="token key atrule">shutdown</span><span class="token punctuation">:</span>
	  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
	<span class="token key atrule">health</span><span class="token punctuation">:</span>
	  <span class="token key atrule">probes</span><span class="token punctuation">:</span>
		<span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
	<span class="token key atrule">web</span><span class="token punctuation">:</span>
	  <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
		<span class="token key atrule">base-path</span><span class="token punctuation">:</span> /actuator            <span class="token comment"># 指定上下文路径，启用相应端点</span>
		<span class="token key atrule">include</span><span class="token punctuation">:</span> health<span class="token punctuation">,</span>shutdown<span class="token punctuation">,</span>metrics<span class="token punctuation">,</span>prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运维层面-3" tabindex="-1"><a class="header-anchor" href="#运维层面-3" aria-hidden="true">#</a> <strong>运维层面</strong></h3><p>确保dockerfile模版集成curl工具，否则无法使用curl命令</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM openjdk:8-jdk-alpine
#构建参数
ARG JAR_FILE
ARG WORK_PATH=&quot;/app&quot;
ARG EXPOSE_PORT=8080

#环境变量
ENV JAVA_OPTS=&quot;&quot;
	JAR_FILE=\${JAR_FILE}

#设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime &amp;&amp; echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone
RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g&#39; /etc/apk/repositories  
	&amp;&amp; apk add --no-cache curl
#将maven目录的jar包拷贝到docker中，并命名为for_docker.jar
COPY target/$JAR_FILE $WORK_PATH/

#设置工作目录
WORKDIR $WORK_PATH

# 指定于外界交互的端口
EXPOSE $EXPOSE_PORT
# 配置容器，使其可执行化
ENTRYPOINT exec java $JAVA_OPTS -jar $JAR_FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s部署模版deployment.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
	<span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
	<span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
	  <span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>REPLICAS<span class="token punctuation">}</span>                            <span class="token comment"># Pod副本数</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
	<span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate                           <span class="token comment"># 滚动更新策略</span>
	<span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
	  <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span>
	  <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
	<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
	  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
	  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
		<span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
	  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
		<span class="token key atrule">timestamp</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>TIMESTAMP<span class="token punctuation">}</span>
		<span class="token key atrule">prometheus.io/port</span><span class="token punctuation">:</span> <span class="token string">&quot;50000&quot;</span>               <span class="token comment"># 不能动态赋值</span>
		<span class="token key atrule">prometheus.io/path</span><span class="token punctuation">:</span> /actuator/prometheus
		<span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>              <span class="token comment"># 基于pod的服务发现</span>
	<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>                                   <span class="token comment"># 设置调度策略，采取多主机/多可用区部署</span>
		<span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span>
		  <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
		  <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span>
			<span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span>
			  <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
				<span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
				<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app
				  <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
				  <span class="token key atrule">values</span><span class="token punctuation">:</span>
				  <span class="token punctuation">-</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
			  <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> <span class="token string">&quot;kubernetes.io/hostname&quot;</span> <span class="token comment"># 多可用区为&quot;topology.kubernetes.io/zone&quot;</span>
	  <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>             <span class="token comment"># 优雅终止宽限期</span>
	  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>IMAGE_URL<span class="token punctuation">}</span>
		<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
		<span class="token key atrule">ports</span><span class="token punctuation">:</span>
		<span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_PORT<span class="token punctuation">}</span>
		<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">50000</span>         <span class="token comment"># 应用管理端口</span>
		<span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>                <span class="token comment"># 就绪探针</span>
		  <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
			<span class="token key atrule">path</span><span class="token punctuation">:</span> /actuator/health/readiness
			<span class="token key atrule">port</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>      <span class="token comment"># 延迟加载时间</span>
		  <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>            <span class="token comment"># 重试时间间隔</span>
		  <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>            <span class="token comment"># 超时时间设置</span>
		  <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>          <span class="token comment"># 健康阈值</span>
		  <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">9</span>          <span class="token comment"># 不健康阈值</span>
		<span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>                 <span class="token comment"># 存活探针</span>
		  <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
			<span class="token key atrule">path</span><span class="token punctuation">:</span> /actuator/health/liveness
			<span class="token key atrule">port</span><span class="token punctuation">:</span> management<span class="token punctuation">-</span>port
		  <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>      <span class="token comment"># 延迟加载时间</span>
		  <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>            <span class="token comment"># 重试时间间隔</span>
		  <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">1</span>            <span class="token comment"># 超时时间设置</span>
		  <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>          <span class="token comment"># 健康阈值</span>
		  <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">6</span>          <span class="token comment"># 不健康阈值</span>
		<span class="token key atrule">resources</span><span class="token punctuation">:</span>                     <span class="token comment"># 容器资源管理</span>
		  <span class="token key atrule">limits</span><span class="token punctuation">:</span>                      <span class="token comment"># 资源限制（监控使用情况）</span>
			<span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">0.5</span>
			<span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi
		  <span class="token key atrule">requests</span><span class="token punctuation">:</span>                    <span class="token comment"># 最小可用资源（灵活调度）</span>
			<span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">0.1</span>
			<span class="token key atrule">memory</span><span class="token punctuation">:</span> 200Mi
		<span class="token key atrule">env</span><span class="token punctuation">:</span>
		  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> TZ
			<span class="token key atrule">value</span><span class="token punctuation">:</span> Asia/Shanghai
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler            <span class="token comment"># 弹性伸缩控制器</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2beta2
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>
	<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
	<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
	<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>APP_NAME<span class="token punctuation">}</span>
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>REPLICAS<span class="token punctuation">}</span>                <span class="token comment"># 缩放范围</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">6</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
	<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> Resource
	  <span class="token key atrule">resource</span><span class="token punctuation">:</span>
		<span class="token key atrule">name</span><span class="token punctuation">:</span> cpu                        <span class="token comment"># 指定资源指标</span>
		<span class="token key atrule">target</span><span class="token punctuation">:</span>
		  <span class="token key atrule">type</span><span class="token punctuation">:</span> Utilization
		  <span class="token key atrule">averageUtilization</span><span class="token punctuation">:</span> <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66),l=[p];function c(i,o){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","k8s-zero-down.html.vue"]]);export{r as default};
