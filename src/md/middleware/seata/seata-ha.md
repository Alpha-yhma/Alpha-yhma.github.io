---
title: Seata高可用方案
icon: fab fa-markdown
order: 2
tag:
  - 分布式事务
  - seata
---
# Seata高可用部署方案

## 1. Seata简单介绍
Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式。
此次OSF改造基于AT事务模式，实现非业务侵入的全局事务管理。

## 2. 高可用部署架构图
![](https://iikaros-picgo.oss-cn-shanghai.aliyuncs.com/seata%E9%83%A8%E7%BD%B2%E6%9E%B6%E6%9E%84%E5%9B%BE.png)

Seata的高可用分为两部分：
* 服务端：服务端需要启动多个实例，通过高可用的数据存储实现数据共享，数据存储方式支持redis以及db。
* 客户端：客户端需要动态感知服务端的上下线，为了实现这个目的，需要客户端和服务端同时注册到注册中心，注册中心可以选用nacos/redis/zk等。如果使用K8S平台进行部署，可以采用K8S自带的svc服务发现机制。

## 3. 注意事项
* 客户端数据库需要添加`undo_log`表，用于记录AT模式下的事务回滚日志。
* 客户端支持的数据库为mysql/oracle/postgresql以及其他可以兼容上述协议的数据库，例如TIDB等。
