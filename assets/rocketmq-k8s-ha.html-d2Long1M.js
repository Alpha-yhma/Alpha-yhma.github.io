import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as i,b as a,w as e,f as n,d as t}from"./app-giQjudzF.js";const o="/assets/img_2-KP48DV2q.png",u={},r=n(`<h3 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h3><p>本部分主要基于[[RocketMQ高可用部署方案]]的基础上，介绍K8S上的单DLedger集群部署方案。</p><h3 id="_2-镜像构建" tabindex="-1"><a class="header-anchor" href="#_2-镜像构建" aria-hidden="true">#</a> 2. 镜像构建</h3><h4 id="_2-1-nameserver镜像构建" tabindex="-1"><a class="header-anchor" href="#_2-1-nameserver镜像构建" aria-hidden="true">#</a> 2.1 nameserver镜像构建</h4><p>Dockerfile文件内容如下，参考文件<code>Dockerfile-namesrv</code>：</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM openjdk/linux/amd64/openjdk:11.0.13
MAINTAINER yhma@amarsoft.com
ADD rocketmq-4.9.3 /rocketmq
expose 9876
ENV JAVA_OPT &quot; -Xms512m -Xmx512m &quot;
ENV JAVA_OPT_EXT &quot; --add-opens java.base/jdk.internal.misc=ALL-UNNAMED &quot;
CMD [&quot;/bin/sh&quot;,&quot;-c&quot;,&quot;/rocketmq/bin/mqnamesrv&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开始构建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> harbor.amarsoft.com/rd-zhxd/als/rocketmq-namesrv:4.9.3 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-broker镜像构建" tabindex="-1"><a class="header-anchor" href="#_2-2-broker镜像构建" aria-hidden="true">#</a> 2.2 broker镜像构建</h4><p>Dockerfile文件内容如下，参考文件<code>Dockerfile</code>：</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM openjdk/linux/amd64/openjdk:11.0.13  
MAINTAINER yhma@amarsoft.com  
ADD rocketmq-4.9.3 /rocketmq  
expose 30909 30911 40911
RUN mkdir /data
ENV JAVA_OPT &quot; -Xms2g -Xmx2g &quot;  
ENV JAVA_OPT_EXT &quot; --add-opens java.base/jdk.internal.misc=ALL-UNNAMED --add-exports java.base/jdk.internal.ref=ALL-UNNAMED &quot;  
CMD exec /rocketmq/bin/mqbroker -c /conf/\${HOSTNAME}.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像前请删除rocketmq-4.9.3/bin/runbroker.sh中的内存配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">## 修改前</span>
<span class="token key attr-name">JAVA_OPT</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\${JAVA_OPT} -server -Xms8g -Xmx8g&quot;</span>
<span class="token comment">## 修改后</span>
<span class="token key attr-name">JAVA_OPT</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;\${JAVA_OPT} -server &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开始构建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> harbor.amarsoft.com/rd-zhxd/als/rocketmq-broker:4.9.3 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-console镜像构建" tabindex="-1"><a class="header-anchor" href="#_2-3-console镜像构建" aria-hidden="true">#</a> 2.3 console镜像构建</h4><p>Dockerfile文件内容如下，参考文件<code>Dockerfile-console</code>：</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM harbor.amarsoft.com/rd-zhxd/als/als9/jdk:8u201
MAINTAINER yhma@amarsoft.com
ADD rocketmq-console-ng-1.0.1.jar /app.jar
ENV server.port 8080
ENV JAVA_OPT &quot; -Xms256m -Xmx512m &quot;
CMD exec java \${JAVA_OPT} -jar app.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),k=n(`<p>开始构建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> harbor.amarsoft.com/rd-zhxd/als/rocketmq-console:1.0.1 <span class="token parameter variable">-f</span> Dockerfile-console <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-准备broker配置文件" tabindex="-1"><a class="header-anchor" href="#_3-准备broker配置文件" aria-hidden="true">#</a> 3. 准备broker配置文件</h3><p>配置文件需要准备3份，分别为broker-0.conf、broker-1.conf 和 broker-2.conf。</p><p>broker-0.conf</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">brokerClusterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">RaftCluster</span>
<span class="token key attr-name">brokerName</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">listenPort</span><span class="token punctuation">=</span><span class="token value attr-value">30911</span>
<span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
<span class="token key attr-name">namesrvAddr</span><span class="token punctuation">=</span><span class="token value attr-value">namesrv-0.mqnamesrv-headless:9876;namesrv-1.mqnamesrv-headless:9876</span>
<span class="token key attr-name">storePathRootDir</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node</span>
<span class="token key attr-name">storePathCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node/commitlog</span>
<span class="token key attr-name">enableDLegerCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">dLegerGroup</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">dLegerPeers</span><span class="token punctuation">=</span><span class="token value attr-value">n0-broker-0.mqbroker-svc:40911;n1-broker-1.mqbroker-svc:40911;n2-broker-2.mqbroker-svc:40911</span>
<span class="token comment">## must be unique</span>
<span class="token key attr-name">dLegerSelfId</span><span class="token punctuation">=</span><span class="token value attr-value">n0</span>
<span class="token key attr-name">sendMessageThreadPoolNums</span><span class="token punctuation">=</span><span class="token value attr-value">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>broker-1.conf</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">brokerClusterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">RaftCluster</span>
<span class="token key attr-name">brokerName</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">listenPort</span><span class="token punctuation">=</span><span class="token value attr-value">30911</span>
<span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
<span class="token key attr-name">namesrvAddr</span><span class="token punctuation">=</span><span class="token value attr-value">namesrv-0.mqnamesrv-headless:9876;namesrv-1.mqnamesrv-headless:9876</span>
<span class="token key attr-name">storePathRootDir</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node</span>
<span class="token key attr-name">storePathCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node/commitlog</span>
<span class="token key attr-name">enableDLegerCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">dLegerGroup</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">dLegerPeers</span><span class="token punctuation">=</span><span class="token value attr-value">n0-broker-0.mqbroker-svc:40911;n1-broker-1.mqbroker-svc:40911;n2-broker-2.mqbroker-svc:40911</span>
<span class="token comment">## must be unique</span>
<span class="token key attr-name">dLegerSelfId</span><span class="token punctuation">=</span><span class="token value attr-value">n1</span>
<span class="token key attr-name">sendMessageThreadPoolNums</span><span class="token punctuation">=</span><span class="token value attr-value">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>broker-0.conf</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">brokerClusterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">RaftCluster</span>
<span class="token key attr-name">brokerName</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">listenPort</span><span class="token punctuation">=</span><span class="token value attr-value">30911</span>
<span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
<span class="token key attr-name">namesrvAddr</span><span class="token punctuation">=</span><span class="token value attr-value">namesrv-0.mqnamesrv-headless:9876;namesrv-1.mqnamesrv-headless:9876</span>
<span class="token key attr-name">storePathRootDir</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node</span>
<span class="token key attr-name">storePathCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">/data/rmqstore/node/commitlog</span>
<span class="token key attr-name">enableDLegerCommitLog</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">dLegerGroup</span><span class="token punctuation">=</span><span class="token value attr-value">beijing@broker</span>
<span class="token key attr-name">dLegerPeers</span><span class="token punctuation">=</span><span class="token value attr-value">n0-broker-0.mqbroker-headless:40911;n1-broker-1.mqbroker-headless:40911;n2-broker-2.mqbroker-headless:40911</span>
<span class="token comment">## must be unique</span>
<span class="token key attr-name">dLegerSelfId</span><span class="token punctuation">=</span><span class="token value attr-value">n2</span>
<span class="token key attr-name">sendMessageThreadPoolNums</span><span class="token punctuation">=</span><span class="token value attr-value">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕后，将3份配置文件放到k8s平台ConfigMap里。</p><h3 id="_4-k8s上部署应用" tabindex="-1"><a class="header-anchor" href="#_4-k8s上部署应用" aria-hidden="true">#</a> 4. K8S上部署应用</h3><h4 id="_4-1-部署文件准备" tabindex="-1"><a class="header-anchor" href="#_4-1-部署文件准备" aria-hidden="true">#</a> 4.1 部署文件准备</h4><p>部署文件内容如下所示，具体参见文件<code>rocketmq-deploy.yaml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>broker
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">broker-0.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    brokerClusterName = RaftCluster
    brokerName=beijing@broker
    listenPort=30911
    <span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
    namesrvAddr=namesrv<span class="token punctuation">-</span>0.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>9876;namesrv<span class="token punctuation">-</span>1.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">9876</span>
    storePathRootDir=/data/rmqstore/node
    storePathCommitLog=/data/rmqstore/node/commitlog
    enableDLegerCommitLog=true
    dLegerGroup=beijing@broker
    dLegerPeers=n0<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>0.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n1<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>1.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n2<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>2.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">40911</span>
    <span class="token comment">## must be unique</span>
    dLegerSelfId=n0
    sendMessageThreadPoolNums=16
  <span class="token key atrule">broker-1.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    brokerClusterName = RaftCluster
    brokerName=beijing@broker
    listenPort=30911
    <span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
    namesrvAddr=namesrv<span class="token punctuation">-</span>0.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>9876;namesrv<span class="token punctuation">-</span>1.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">9876</span>
    storePathRootDir=/data/rmqstore/node
    storePathCommitLog=/data/rmqstore/node/commitlog
    enableDLegerCommitLog=true
    dLegerGroup=beijing@broker
    dLegerPeers=n0<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>0.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n1<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>1.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n2<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>2.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">40911</span>
    <span class="token comment">## must be unique</span>
    dLegerSelfId=n1
    sendMessageThreadPoolNums=16
  <span class="token key atrule">broker-2.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    brokerClusterName = RaftCluster
    brokerName=beijing@broker
    listenPort=30911
    <span class="token comment"># nameserver地址，多个地址以;分隔，k8s环境下配置为对应的svc端口</span>
    namesrvAddr=namesrv<span class="token punctuation">-</span>0.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>9876;namesrv<span class="token punctuation">-</span>1.mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">9876</span>
    storePathRootDir=/data/rmqstore/node
    storePathCommitLog=/data/rmqstore/node/commitlog
    enableDLegerCommitLog=true
    dLegerGroup=beijing@broker
    dLegerPeers=n0<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>0.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n1<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>1.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span>40911;n2<span class="token punctuation">-</span>broker<span class="token punctuation">-</span>2.mqbroker<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">40911</span>
    <span class="token comment">## must be unique</span>
    dLegerSelfId=n2
    sendMessageThreadPoolNums=16
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> broker
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mqbroker<span class="token punctuation">-</span>headless
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">clusterIPs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> None
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">30909</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">30909</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">30909</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">30911</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">30911</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">30911</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">40911</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">40911</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">40911</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> broker
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
<span class="token key atrule">status</span><span class="token punctuation">:</span>
  <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> namesrv
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mqnamesrv<span class="token punctuation">-</span>headless
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">clusterIPs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> None
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>web
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9876</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9876</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> namesrv
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
<span class="token key atrule">status</span><span class="token punctuation">:</span>
  <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.101.246.113
  <span class="token key atrule">clusterIPs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.101.246.113
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Cluster
  <span class="token key atrule">internalTrafficPolicy</span><span class="token punctuation">:</span> Cluster
  <span class="token key atrule">ipFamilies</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> IPv4
  <span class="token key atrule">ipFamilyPolicy</span><span class="token punctuation">:</span> SingleStack
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>web
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
<span class="token key atrule">status</span><span class="token punctuation">:</span>
  <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
    <span class="token key atrule">kubemate.io/description</span><span class="token punctuation">:</span> RocketMQ Broker
    <span class="token key atrule">kubemate.io/updator</span><span class="token punctuation">:</span> als91c
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> broker
  <span class="token key atrule">name</span><span class="token punctuation">:</span> broker
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">podManagementPolicy</span><span class="token punctuation">:</span> OrderedReady
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> broker
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> <span class="token string">&#39;mqbroker-headless&#39;</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> broker
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> harbor.amarsoft.com/rd<span class="token punctuation">-</span>zhxd/als/rocketmq<span class="token punctuation">-</span>broker<span class="token punctuation">:</span>4.9.3
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
        <span class="token key atrule">name</span><span class="token punctuation">:</span> container<span class="token punctuation">-</span>vzqnna
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">30909</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">30909</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">30911</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">30911</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">40911</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp<span class="token punctuation">-</span><span class="token number">40911</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 3Gi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 50m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500Mi
        <span class="token key atrule">terminationMessagePath</span><span class="token punctuation">:</span> /dev/termination<span class="token punctuation">-</span>log
        <span class="token key atrule">terminationMessagePolicy</span><span class="token punctuation">:</span> File
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/localtime
          <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data/rmqstore
          <span class="token key atrule">name</span><span class="token punctuation">:</span> broker<span class="token punctuation">-</span>store
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /conf
          <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>rvjtp6
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> harbor
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always
      <span class="token key atrule">schedulerName</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>scheduler
      <span class="token key atrule">securityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> default
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> default
      <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time
      <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> <span class="token number">420</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>broker
        <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>rvjtp6
  <span class="token key atrule">updateStrategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
  <span class="token key atrule">volumeClaimTemplates</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> broker<span class="token punctuation">-</span>store
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ReadWriteOnce
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">requests</span><span class="token punctuation">:</span>
          <span class="token key atrule">storage</span><span class="token punctuation">:</span> <span class="token string">&#39;10&#39;</span>
      <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> managed<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>storage
      <span class="token key atrule">volumeMode</span><span class="token punctuation">:</span> Filesystem

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
    <span class="token key atrule">kubemate.io/description</span><span class="token punctuation">:</span> RocketMQ Nameserver
    <span class="token key atrule">kubemate.io/updator</span><span class="token punctuation">:</span> als91c
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> namesrv
  <span class="token key atrule">name</span><span class="token punctuation">:</span> namesrv
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">podManagementPolicy</span><span class="token punctuation">:</span> OrderedReady
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> namesrv
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> <span class="token string">&#39;mqnamesrv-headless&#39;</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">amarsoft.kubemate/restartAt</span><span class="token punctuation">:</span> 2023/07/10 20<span class="token punctuation">:</span><span class="token datetime number">14:07</span>
        <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
        <span class="token key atrule">kubemate.io/description</span><span class="token punctuation">:</span> RocketMQ Nameserver
        <span class="token key atrule">kubemate.io/updator</span><span class="token punctuation">:</span> als91c
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> namesrv
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> harbor.amarsoft.com/rd<span class="token punctuation">-</span>zhxd/als/rocketmq<span class="token punctuation">-</span>namesrv<span class="token punctuation">:</span>4.9.3
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
        <span class="token key atrule">name</span><span class="token punctuation">:</span> container<span class="token punctuation">-</span>vkzb37
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9876</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>web
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 50m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500Mi
        <span class="token key atrule">terminationMessagePath</span><span class="token punctuation">:</span> /dev/termination<span class="token punctuation">-</span>log
        <span class="token key atrule">terminationMessagePolicy</span><span class="token punctuation">:</span> File
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/localtime
          <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> harbor
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always
      <span class="token key atrule">schedulerName</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>scheduler
      <span class="token key atrule">securityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> default
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> default
      <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time
  <span class="token key atrule">updateStrategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
    <span class="token key atrule">kubemate.io/updator</span><span class="token punctuation">:</span> als91c
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> als91c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">progressDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token number">600</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> 25%
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> 25%
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubemate.io/creator</span><span class="token punctuation">:</span> als91c
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> mq<span class="token punctuation">-</span>console
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketmq.config.namesrvAddr
          <span class="token key atrule">value</span><span class="token punctuation">:</span> mqnamesrv<span class="token punctuation">-</span>headless<span class="token punctuation">:</span><span class="token number">9876</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> harbor.amarsoft.com/rd<span class="token punctuation">-</span>zhxd/als/rocketmq<span class="token punctuation">-</span>console<span class="token punctuation">:</span>1.0.1
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always
        <span class="token key atrule">name</span><span class="token punctuation">:</span> container<span class="token punctuation">-</span>pjdcoq
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>web
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 50m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500Mi
        <span class="token key atrule">terminationMessagePath</span><span class="token punctuation">:</span> /dev/termination<span class="token punctuation">-</span>log
        <span class="token key atrule">terminationMessagePolicy</span><span class="token punctuation">:</span> File
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/localtime
          <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> harbor
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always
      <span class="token key atrule">schedulerName</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>scheduler
      <span class="token key atrule">securityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> default
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> default
      <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/localtime
        <span class="token key atrule">name</span><span class="token punctuation">:</span> host<span class="token punctuation">-</span>local<span class="token punctuation">-</span>time


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=n(`<h4 id="_4-2-部署应用" tabindex="-1"><a class="header-anchor" href="#_4-2-部署应用" aria-hidden="true">#</a> 4.2 部署应用</h4><p>复制部署文件到K8S主节点，执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> rocketmq-deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-3-验证安装" tabindex="-1"><a class="header-anchor" href="#_4-3-验证安装" aria-hidden="true">#</a> 4.3 验证安装</h4><p>在kubemate中找到mq-console对应的服务：</p><p><img src="`+o+'" alt="" loading="lazy"> 通过NodePort访问控制台，如图所示，访问地址为：http://10.2.64.64:31097</p>',6);function v(m,b){const s=l("font");return c(),i("div",null,[r,a(s,{color:"#ff0000"},{default:e(()=>[t("注意：rocketmq-console不支持jdk11，故使用jdk8作为基础镜像。")]),_:1}),k,a(s,{color:"#ff0000"},{default:e(()=>[t("部署时请自行修改文件中namespace以及镜像地址。")]),_:1}),d])}const g=p(u,[["render",v],["__file","rocketmq-k8s-ha.html.vue"]]);export{g as default};
