---
title: redis编译安装
icon: fab fa-markdown
order: 2
tag: Redis
---

### 1. 安装编译环境
执行下载前，请将 `REDIS_ARCHIVE_URL` 设为 Redis 7.0.11 源码包地址。

```shell
yum -y install gcc
wget -O redis-7.0.11.tar.gz "${REDIS_ARCHIVE_URL}"
tar -zxf redis-7.0.11.tar.gz
cd redis-7.0.11
make MALLOC=libc
make install PREFIX=/usr/local/redis
```
