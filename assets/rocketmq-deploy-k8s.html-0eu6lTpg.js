import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-PZddbQnF.js";const t={},p=e(`<h3 id="_1-k8s的yaml部署文件" tabindex="-1"><a class="header-anchor" href="#_1-k8s的yaml部署文件" aria-hidden="true">#</a> 1. K8S的yaml部署文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function c(i,u){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","rocketmq-deploy-k8s.html.vue"]]);export{r as default};
