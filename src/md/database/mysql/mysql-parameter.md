---
title: MYSQL优化参数说明
icon: fab fa-markdown
tag:
  - MYSQL
---

```properties

# 基础配置  
datadir=/data/datafile  
socket=/var/lib/mysql/mysql.sock  
log-error=/data/log/mysqld.log  
pid-file=/var/run/mysqld/mysqld.pid  
character_set_server=utf8  
# 允许任意IP访问  
bind-address = 0.0.0.0  
# 支持大小写  
lower_case_table_names=1  
# 二进制配置  
server-id = 1  
log-bin = /data/log/mysql-bin.log  
log-bin-index =/data/log/binlog.index  
log_bin_trust_function_creators=1  
expire_logs_days=7  
# InnoDB存储数据字典、内部数据结构的缓冲池，16MB已经足够大了。  
innodb_additional_mem_pool_size = 16M  
# InnoDB用于缓存数据、索引、锁、插入缓冲、数据字典等,如果是专用的DB服务器，且以InnoDB引擎为主的场景，通常可设置物理内存的60%, 如果是非专用DB服务器，可以先尝试设置成内存的1/4  
innodb_buffer_pool_size = 4G  
# InnoDB的log buffer，通常设置为 64MB 就足够了  
innodb_log_buffer_size = 64M  
# InnoDB redo log大小，通常设置256MB 就足够了  
innodb_log_file_size = 256M  
# InnoDB redo log文件组，通常设置为 2 就足够了  
innodb_log_files_in_group = 2  
# 设置临时表空间最大4G  
innodb_temp_data_file_path=ibtmp1:500M:autoextend:max:4096M  
# 启用InnoDB的status file，便于管理员查看以及监控  
innodb_status_file = 1  
# 当设置为0，该模式速度最快，但不太安全，mysqld进程的崩溃会导致上一秒钟所有事务数据的丢失。  
# 当设置为1，该模式是最安全的，但也是最慢的一种方式。在mysqld 服务崩溃或者服务器主机crash的情况下，binary log 只有可能丢失最多一个语句或者一个事务。  
# 当设置为2，该模式速度较快，也比0安全，只有在操作系统崩溃或者系统断电的情况下，上一秒钟所有事务数据才可能丢失。  
innodb_flush_log_at_trx_commit = 1  
# 设置事务隔离级别为 READ-COMMITED，提高事务效率，通常都满足事务一致性要求  
transaction_isolation = READ-COMMITTED  
  
max_connections=600  
max_connect_errors=1000  
max_user_connections=400  
# 设置临时表最大值，这是每次连接都会分配，不宜设置过大 max_heap_table_size 和 tmp_table_size 要设置一样大  
max_heap_table_size = 100M  
tmp_table_size = 100M  
# 每个连接都会分配的一些排序、连接等缓冲，一般设置为 2MB 就足够了  
sort_buffer_size = 2M  
join_buffer_size = 2M  
read_buffer_size = 2M  
read_rnd_buffer_size = 2M  
# 建议关闭query cache，有些时候对性能反而是一种损害  
query_cache_size = 0  
# 如果是以InnoDB引擎为主的DB，专用于MyISAM引擎的 key_buffer_size 可以设置较小，8MB 已足够  
# 如果是以MyISAM引擎为主，可设置较大，但不能超过4G  
key_buffer_size = 8M  
# 设置连接超时阀值，如果前端程序采用短连接，建议缩短这2个值，如果前端程序采用长连接，可直接注释掉这两个选项，是用默认配置(8小时)  
interactive_timeout = 1200  
wait_timeout = 120  
# InnoDB使用后台线程处理数据页上读写I/0请求的数量,允许值的范围是1-64  
innodb_read_io_threads=5  
innodb_write_io_threads=3  
# 设置慢查询阀值，单位为秒  
long_query_time = 120  
slow_query_log=1  
# 日志输出会写表，也会写日志文件，为了便于程序去统计，所以最好写表  
log_output=table,File  
slow_query_log_file=/data/log/slow.log  
# 针对log_queries_not_using_indexes开启后，记录慢sql的频次、每分钟记录的条数  
log_throttle_queries_not_using_indexes = 5  
# 作为从库时生效,从库复制中如何有慢sql也将被记录  
log_slow_slave_statements = 1  
# 检查未使用到索引的sql  
log_queries_not_using_indexes = 1  
# 快速预热缓冲池  
innodb_buffer_pool_dump_at_shutdown=1  
innodb_buffer_pool_load_at_startup=1  
# 打印deadlock日志  
innodb_print_all_deadlocks=1
```