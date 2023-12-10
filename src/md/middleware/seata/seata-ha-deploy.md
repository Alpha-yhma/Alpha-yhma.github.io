---
title: Seata高可用部署
icon: fab fa-markdown
order: 2
tag:
  - 分布式事务
  - seata
---
# K8S上部署高可用Seata服务端

## 1. 前置要求
- 已部署K8S集群，并拥有主节点kubectl权限
- 已部署镜像仓库，例如Harbor或Docker Registry。下文假设仓库地址为：harbor.xxx.com
- 已部署数据库，支持mysql/redis/postgresql

## 2. 上传镜像

```shell
# 加载镜像文件
docker load -i seata-server.tar
# 修改镜像tag指向仓库地址，需要保证项目base存在
docker tag harbor.amarsoft.com/base/seata-server:1.6.1 harbor.xxx.com/base/seata-server:1.6.1
# 登录镜像仓库，如果已登录跳过这一步
docker login harbor.xxx.com
# 推送镜像
docker push harbor.xxx.com/base/seata-server:1.6.1
```

## 3. 创建seata-server的数据库

- 创建数据库用户，假设用户密码为：`seata_demo`/`seata_demo`
- 执行对应数据库脚本，脚本文件位于 `seata-server/script/server/db`

## 4. 修改seata-server.yaml
```shell
vim seata-server.yaml

# 修改namespace（可选） 

# 修改镜像名称
image: harbor.amarsoft.com/base/seata-server:1.6.1 => harbor.xxx.com/base/seata-server:1.6.1
# 修改数据库配置
db-type: mysql
driver-class-name: com.mysql.cj.jdbc.Driver
url: jdbc:mysql://192.168.65.201:3306/seata_demo?rewriteBatchedStatements=true
user: seata_demo
password: seata_demo
```

## 5. 部署
进入K8S master节点执行：
```shell
kubectl apply -f seata-server.yaml
```

## 6. 客户端连接
当前服务暴露出的地址格式为：
{service}-{index}.{deployName}.{namespace}
即默认地址如下：
- seata-server-0.seata-server.default
- seata-server-1.seata-server.default
- seata-server-2.seata-server.default

如果改动了seata-server.yaml中对应配置，上述地址也会对应变动，请自行调整客户端配置。
