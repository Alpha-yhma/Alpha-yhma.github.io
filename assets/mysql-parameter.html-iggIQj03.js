import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,f as e,o as t}from"./app-Cp6Zyva7.js";const l={};function p(i,n){return t(),s("div",null,[...n[0]||(n[0]=[e(`<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment"># 基础配置  </span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/data/datafile  </span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock  </span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/data/log/mysqld.log  </span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mysqld/mysqld.pid  </span>
<span class="token key attr-name">character_set_server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8  </span>
<span class="token comment"># 允许任意IP访问  </span>
<span class="token key attr-name">bind-address</span> <span class="token punctuation">=</span> <span class="token value attr-value">0.0.0.0  </span>
<span class="token comment"># 支持大小写  </span>
<span class="token key attr-name">lower_case_table_names</span><span class="token punctuation">=</span><span class="token value attr-value">1  </span>
<span class="token comment"># 二进制配置  </span>
<span class="token key attr-name">server-id</span> <span class="token punctuation">=</span> <span class="token value attr-value">1  </span>
<span class="token key attr-name">log-bin</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/log/mysql-bin.log  </span>
<span class="token key attr-name">log-bin-index</span> <span class="token punctuation">=</span><span class="token value attr-value">/data/log/binlog.index  </span>
<span class="token key attr-name">log_bin_trust_function_creators</span><span class="token punctuation">=</span><span class="token value attr-value">1  </span>
<span class="token key attr-name">expire_logs_days</span><span class="token punctuation">=</span><span class="token value attr-value">7  </span>
<span class="token comment"># InnoDB存储数据字典、内部数据结构的缓冲池，16MB已经足够大了。  </span>
<span class="token key attr-name">innodb_additional_mem_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16M  </span>
<span class="token comment"># InnoDB用于缓存数据、索引、锁、插入缓冲、数据字典等,如果是专用的DB服务器，且以InnoDB引擎为主的场景，通常可设置物理内存的60%, 如果是非专用DB服务器，可以先尝试设置成内存的1/4  </span>
<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4G  </span>
<span class="token comment"># InnoDB的log buffer，通常设置为 64MB 就足够了  </span>
<span class="token key attr-name">innodb_log_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M  </span>
<span class="token comment"># InnoDB redo log大小，通常设置256MB 就足够了  </span>
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M  </span>
<span class="token comment"># InnoDB redo log文件组，通常设置为 2 就足够了  </span>
<span class="token key attr-name">innodb_log_files_in_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">2  </span>
<span class="token comment"># 设置临时表空间最大4G  </span>
<span class="token key attr-name">innodb_temp_data_file_path</span><span class="token punctuation">=</span><span class="token value attr-value">ibtmp1:500M:autoextend:max:4096M  </span>
<span class="token comment"># 启用InnoDB的status file，便于管理员查看以及监控  </span>
<span class="token key attr-name">innodb_status_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">1  </span>
<span class="token comment"># 当设置为0，该模式速度最快，但不太安全，mysqld进程的崩溃会导致上一秒钟所有事务数据的丢失。  </span>
<span class="token comment"># 当设置为1，该模式是最安全的，但也是最慢的一种方式。在mysqld 服务崩溃或者服务器主机crash的情况下，binary log 只有可能丢失最多一个语句或者一个事务。  </span>
<span class="token comment"># 当设置为2，该模式速度较快，也比0安全，只有在操作系统崩溃或者系统断电的情况下，上一秒钟所有事务数据才可能丢失。  </span>
<span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1  </span>
<span class="token comment"># 设置事务隔离级别为 READ-COMMITED，提高事务效率，通常都满足事务一致性要求  </span>
<span class="token key attr-name">transaction_isolation</span> <span class="token punctuation">=</span> <span class="token value attr-value">READ-COMMITTED  </span>
  
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">600  </span>
<span class="token key attr-name">max_connect_errors</span><span class="token punctuation">=</span><span class="token value attr-value">1000  </span>
<span class="token key attr-name">max_user_connections</span><span class="token punctuation">=</span><span class="token value attr-value">400  </span>
<span class="token comment"># 设置临时表最大值，这是每次连接都会分配，不宜设置过大 max_heap_table_size 和 tmp_table_size 要设置一样大  </span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">100M  </span>
<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">100M  </span>
<span class="token comment"># 每个连接都会分配的一些排序、连接等缓冲，一般设置为 2MB 就足够了  </span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M  </span>
<span class="token key attr-name">join_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M  </span>
<span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M  </span>
<span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M  </span>
<span class="token comment"># 建议关闭query cache，有些时候对性能反而是一种损害  </span>
<span class="token key attr-name">query_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0  </span>
<span class="token comment"># 如果是以InnoDB引擎为主的DB，专用于MyISAM引擎的 key_buffer_size 可以设置较小，8MB 已足够  </span>
<span class="token comment"># 如果是以MyISAM引擎为主，可设置较大，但不能超过4G  </span>
<span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8M  </span>
<span class="token comment"># 设置连接超时阀值，如果前端程序采用短连接，建议缩短这2个值，如果前端程序采用长连接，可直接注释掉这两个选项，是用默认配置(8小时)  </span>
<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">1200  </span>
<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">120  </span>
<span class="token comment"># InnoDB使用后台线程处理数据页上读写I/0请求的数量,允许值的范围是1-64  </span>
<span class="token key attr-name">innodb_read_io_threads</span><span class="token punctuation">=</span><span class="token value attr-value">5  </span>
<span class="token key attr-name">innodb_write_io_threads</span><span class="token punctuation">=</span><span class="token value attr-value">3  </span>
<span class="token comment"># 设置慢查询阀值，单位为秒  </span>
<span class="token key attr-name">long_query_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">120  </span>
<span class="token key attr-name">slow_query_log</span><span class="token punctuation">=</span><span class="token value attr-value">1  </span>
<span class="token comment"># 日志输出会写表，也会写日志文件，为了便于程序去统计，所以最好写表  </span>
<span class="token key attr-name">log_output</span><span class="token punctuation">=</span><span class="token value attr-value">table,File  </span>
<span class="token key attr-name">slow_query_log_file</span><span class="token punctuation">=</span><span class="token value attr-value">/data/log/slow.log  </span>
<span class="token comment"># 针对log_queries_not_using_indexes开启后，记录慢sql的频次、每分钟记录的条数  </span>
<span class="token key attr-name">log_throttle_queries_not_using_indexes</span> <span class="token punctuation">=</span> <span class="token value attr-value">5  </span>
<span class="token comment"># 作为从库时生效,从库复制中如何有慢sql也将被记录  </span>
<span class="token key attr-name">log_slow_slave_statements</span> <span class="token punctuation">=</span> <span class="token value attr-value">1  </span>
<span class="token comment"># 检查未使用到索引的sql  </span>
<span class="token key attr-name">log_queries_not_using_indexes</span> <span class="token punctuation">=</span> <span class="token value attr-value">1  </span>
<span class="token comment"># 快速预热缓冲池  </span>
<span class="token key attr-name">innodb_buffer_pool_dump_at_shutdown</span><span class="token punctuation">=</span><span class="token value attr-value">1  </span>
<span class="token key attr-name">innodb_buffer_pool_load_at_startup</span><span class="token punctuation">=</span><span class="token value attr-value">1  </span>
<span class="token comment"># 打印deadlock日志  </span>
<span class="token key attr-name">innodb_print_all_deadlocks</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const u=a(l,[["render",p],["__file","mysql-parameter.html.vue"]]);export{u as default};
