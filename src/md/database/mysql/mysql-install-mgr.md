---
title: MYSQL安装步骤
icon: fab fa-markdown
tag:
  - MYSQL
---

# 一、 初始化

```bash
vim /etc/hosts
setenforce 0
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld

# 删除已有mysql
rpm -qa | grep mysql　　#查找是否存在已安装的mysql
yum remove mysql-community-common-x.x.xx-1.el7.x86_64　　#如果找到，则依次卸载全部安装包
find / -name *mysql*　　#查找mysql的残余文件
rm -rf /usr/lib64/mysql　　#如果找到，则依次删除所有残余文件
```


# 二、安装mysql服务

## 1. 下载[MYSQL](https://downloads.mysql.com/archives/community/)
本文选择8.0.20，下载指定环境版本、安装如下文件

	rpm -ivh mysql-community-common-8.0.20-1.el7.x86_64.rpm
	rpm -ivh mysql-community-libs-8.0.20-1.el7.x86_64.rpm
	rpm -ivh mysql-community-client-8.0.20-1.el7.x86_64.rpm
	rpm -ivh mysql-community-server-8.0.20-1.el7.x86_64.rpm


## 2. 启动mysql服务
 
```bash
systemctl start mysqld
# 查看临时密码
cat /var/log/mysqld.log | grep password
# 使用临时密码登录
mysql -uroot -p
```
---
`my.cnf`配置文件如下：
```properties
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove the leading "# " to disable binary logging
# Binary logging captures changes between backups and is enabled by
# default. It's default setting is log_bin=binlog
# disable_log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
#
# Remove leading # to revert to previous value for default_authentication_plugin,
# this will increase compatibility with older clients. For background, see:
# https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin
# default-authentication-plugin=mysql_native_password

datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
binlog_transaction_dependency_tracking=WRITESET
default-storage-engine=INNODB
lower-case-table-names=1
max_connections=5000


#复制框架
server_id=1000
gtid_mode=ON
enforce_gtid_consistency=ON
master_info_repository=TABLE
relay_log_info_repository=TABLE
binlog_checksum=NONE
log_slave_updates=ON
log_bin=binlog
binlog_format=ROW

#组复制设置
plugin_load="group_replication=group_replication.so"
#server必须为每个事务收集写集合，并使用XXHASH64哈希算法将其编码为散列
transaction_write_set_extraction=XXHASH64
#告知插件加入或创建组命名，UUID
loose-group_replication_group_name="f703d586-8d16-11ea-aa98-005090e3c222"
#server启动时不自启组复制,为了避免每次启动自动引导具有相同名称的第二个组,所以设置为OFF。
loose-group_replication_start_on_boot=off
#告诉插件使用IP地址，端口33061用于接收组中其他成员转入连接
loose-group_replication_local_address="192.168.1.200:33061"
#启动组server，种子server，加入组应该连接这些的ip和端口；其他server要加入组得由组成员同意
loose-group_replication_group_seeds="192.168.1.200:33061,192.168.1.201:33061,192.168.1.202:33061"
loose-group_replication_ip_whitelist="192.168.1.200,192.168.1.201,192.168.1.202"
loose-group_replication_bootstrap_group=off
# 使用MGR的单主模式
loose-group_replication_single_primary_mode=on
loose-group_replication_enforce_update_everywhere_checks=off
disabled_storage_engines = MyISAM,BLACKHOLE,FEDERATED,CSV,ARCHIVE
```

## 3. 启动主节点

```bash
# 默认密码的长度最小值为 4 ，由 大/小写字母各一个 + 阿拉伯数字一个 + 特殊字符一个
alter user user() identified by 'P@88w0rd';
SET SQL_LOG_BIN=0;
create user 'admin'@'%' identified WITH mysql_native_password by 'P@88w0rd';
grant all privileges on *.* to 'admin'@'%' with grant option;
flush privileges;

reset master;
SET SQL_LOG_BIN=1;

CHANGE MASTER TO MASTER_USER='admin', MASTER_PASSWORD='P@88w0rd' FOR CHANNEL 'group_replication_recovery';
SET GLOBAL group_replication_bootstrap_group=ON;
START GROUP_REPLICATION;
set global group_replication_bootstrap_group=OFF;
SELECT * FROM performance_schema.replication_group_members;


# 集群恢复
reset master;
SET SQL_LOG_BIN=1;

CHANGE MASTER TO MASTER_USER='admin', MASTER_PASSWORD='P@88w0rd' FOR CHANNEL 'group_replication_recovery';
STOP GROUP_REPLICATION;
SET GLOBAL group_replication_bootstrap_group=ON;
START GROUP_REPLICATION;
set global group_replication_bootstrap_group=OFF;
SELECT * FROM performance_schema.replication_group_members;

```


## 4. 启动从节点

```bash
alter user user() identified by 'P@88w0rd';
SET SQL_LOG_BIN=0;
create user 'admin'@'%' identified WITH mysql_native_password by 'P@88w0rd';
grant all privileges on *.* to 'admin'@'%' with grant option;
flush privileges;
reset master;
SET SQL_LOG_BIN=1;
CHANGE MASTER TO MASTER_USER='admin', MASTER_PASSWORD='P@88w0rd' FOR CHANNEL 'group_replication_recovery';
START GROUP_REPLICATION;
SELECT * FROM performance_schema.replication_group_members;

# 集群恢复
reset master;
SET SQL_LOG_BIN=1;

CHANGE MASTER TO MASTER_USER='admin', MASTER_PASSWORD='P@88w0rd' FOR CHANNEL 'group_replication_recovery';
STOP GROUP_REPLICATION;
START GROUP_REPLICATION;
SELECT * FROM performance_schema.replication_group_members;
```



# 三、搭建MGR集群

```shell
mysqlsh --uri admin@localhost:3306
```

## 1.检查是否满足安装集群的条件

```shell
dba.configureInstance();
```

> 以上命令所有节点都要执行

## 2. master切换mgr_user用户

```shell
var c = dba.createCluster('MGR');

c.addInstance('admin@mysql-1:3306');
c.addInstance('admin@mysql-2:3306');

mysqlrouter --bootstrap admin@192.168.1.200:3306 --user=mysqlrouter
vim /etc/mysqlrouter/mysqlrouter.conf #修改bind ip

systemctl restart mysqlrouter

greatsql@mgr4:3306 [(none)]>set global group_replication_bootstrap_group=ON;
greatsql@mgr4:3306 [(none)]>start group_replication;
-- 启动完MGR后，记得立即将其设置为OFF
greatsql@mgr4:3306 [(none)]>set global group_replication_bootstrap_group=OFF;
```
