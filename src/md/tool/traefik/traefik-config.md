---
title: Traefik配置文件示例
icon: fab fa-markdown
tag: Traefik
---

```yaml
global:
  checkNewVersion: false    # 周期性的检查是否有新版本发布
  sendAnonymousUsage: false # 周期性的匿名发送使用统计信息
serversTransport:
  insecureSkipVerify: true  # Traefik忽略验证代理服务的TLS证书
api:
  insecure: true            # 允许HTTP 方式访问API
  dashboard: true           # 启用Dashboard
  debug: false              # 启用Debug调试模式
metrics:
  prometheus:               # 配置Prometheus监控指标数据，并使用默认配置
  addRoutersLabels: true  # 添加routers metrics
  entryPoint: "metrics"   # 指定metrics监听地址
entryPoints:
  web:
  address: ":80"          # 配置80端口，并设置入口名称为web
  forwardedHeaders:
    insecure: true        # 信任所有的forward headers
    websecure:
  address: ":443"         # 配置443端口，并设置入口名称为 websecure
  forwardedHeaders:
    insecure: true
    traefik:
  address: ":9000"        # 配置9000端口，并设置入口名称为 dashboard
    metrics:
  address: ":9100"        # 配置9100端口，作为metrics收集入口
    tcpep:
  address: ":9200"        # 配置9200端口，作为tcp入口
    udpep:
  address: ":9300/udp"    # 配置9300端口，作为udp入口
providers:
  file:
    directory: "conf"       # 读取当前路径下conf文件夹
  kubernetesCRD:            # 启用Kubernetes CRD方式来配置路由规则
  ingressClass: ""        # 指定traefik的ingressClass名称
  allowCrossNamespace: true   #允许跨namespace
  allowEmptyServices: true    #允许空endpoints的service
log:
  filePath: "/etc/traefik/logs/traefik.log" # 设置调试日志文件存储路径，如果为空则输出到控制台
  level: "DEBUG"            # 设置调试日志级别
  format: "common"          # 设置调试日志格式
accessLog:
  filePath: "/etc/traefik/logs/access.log" # 设置访问日志文件存储路径，如果为空则输出到控制台
  format: "common"          # 设置访问调试日志格式
  bufferingSize: 0          # 设置访问日志缓存行数
  filters:
  # statusCodes: ["200"]  # 设置只保留指定状态码范围内的访问日志
  retryAttempts: true     # 设置代理访问重试失败时，保留访问日志
  minDuration: 20         # 设置保留请求时间超过指定持续时间的访问日志
    fields:                   # 设置访问日志中的字段是否保留（keep保留、drop不保留）
  defaultMode: keep       # 设置默认保留访问日志字段
  names:                  # 针对访问日志特别字段特别配置保留模式
    ClientUsername: drop
    StartUTC: drop        # 禁用日志timestamp使用UTC
  headers:                # 设置Header中字段是否保留
    defaultMode: keep     # 设置默认保留Header中字段
    names:                # 针对Header中特别字段特别配置保留模式
    # User-Agent: redact# 可以针对指定agent
    Authorization: drop
    Content-Type: keep
experimental:               # 实验性功能选项
  localPlugins:             # 使用本地插件
  timerplugin:
    moduleName: "github.com/togettoyou/traefik-timer-plugin"
```
