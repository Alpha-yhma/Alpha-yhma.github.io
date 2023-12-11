---
title: MYSQL搭建
icon: fab fa-markdown
tag:
  - MYSQL
---

## 初始化

```shell
setenforce 0
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

## 解压mysql
```shell
tar -zxvf mysql-5.7.35-linux-glibc2.12-x86_64.tar.gz
cp -r mysql-5.7.35-linux-glibc2.12-x86_64 /usr/local/mysql
```

## 添加用户组和用户
```shell
groupadd mysql && useradd -r -g mysql mysql
```

## 创建数据目录并赋予权限
```shell
mkdir -p /var/lib/mysql
chown mysql:mysql -R /var/lib/mysql
```

## 修改配置文件  vim /etc/my.cnf
```properties
[mysqld]
bind-address=0.0.0.0
port=3306
user=mysql
basedir=/usr/local/mysql


max_connections=1500
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
log-error=/var/lib/mysqld.log
pid-file=/var/lib/mysql/mysqld.pid
default-storage-engine=INNODB
lower-case-table-names=1
log_bin=binlog
```

## 初始化mysql
```shell
cd /usr/local/mysql/bin
./mysqld --defaults-file=/etc/my.cnf --basedir=/usr/local/mysql/ --datadir=/var/lib/mysql/ --user=mysql --initialize
```

## 启动mysql
```shell
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
chmod +x /etc/init.d/mysqld
systemctl enable mysqld
systemctl start mysqld
```

## 使用临时密码登录
```shell
cat /var/lib/mysql/mysqld.log | grep password
mysql -uroot -p
alter user user() identified by 'P@88w0rd';
create user 'admin'@'%' identified WITH mysql_native_password by 'P@88w0rd';
grant all privileges on *.* to 'admin'@'%' with grant option;
flush privileges;
```

## 修改临时密码为自己指定密码

```shell
alter user user() identified by 'P@88w0rd'; #默认密码的长度最小值为 4 ，由 大/小写字母各一个 + 阿拉伯数字一个 + 特殊字符一个
```

## 创建用户，赋予权限
```shell
alter user user() identified by 'P@88w0rd';
create user 'admin'@'%' identified WITH mysql_native_password by 'P@88w0rd';
grant all privileges on *.* to 'admin'@'%' with grant option;
flush privileges;
```




