---
title: redis编译安装
icon: fab fa-markdown
order: 2
tag: Redis
---

### 1. 安装编译环境
```shell
yum -y install gcc
wget https://github.com/redis/redis/archive/7.0.11.tar.gz
tar -zxf redis-7.0.11.tar.gz
cd redis-7.0.11
make MALLOC=libc
make install PREFIX=/usr/local/redis
```
