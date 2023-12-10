---
title: nginx编译安装
icon: fab fa-markdown
order: 2
tag: Nginx
---

### 1. 安装编译环境
```shell
yum -y install gcc gcc-c++ make ncurses ncurses-devel
```

### 2. 安装pcre软件包（使nginx支持http rewrite模块）
```shell
yum install -y pcre pcre-devel
```

### 3. 安装openssl-devel（使nginx支持ssl）
```shell
yum install -y openssl openssl-devel
```

### 4. 安装zlib
```shell
yum install -y zlib zlib-devel
```

### 5. 下载nginx源码安装
```shell
wget https://nginx.org/download/nginx-1.24.0.tar.gz
tar -zxf nginx-1.24.0.tar.gz
cd nginx-1.24.0
useradd nginx
./configure --prefix=/usr/local/nginx --group=nginx --user=nginx --sbin-path=/usr/local/nginx/sbin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log

make && make install
```

