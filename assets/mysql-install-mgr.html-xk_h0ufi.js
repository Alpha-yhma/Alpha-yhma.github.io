import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as p,a as n,d as s,b as o,f as a}from"./app-bYae3XOa.js";const c={},r=a(`<h1 id="一、-初始化" tabindex="-1"><a class="header-anchor" href="#一、-初始化" aria-hidden="true">#</a> 一、 初始化</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/hosts
setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld

<span class="token comment"># 删除已有mysql</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql　　<span class="token comment">#查找是否存在已安装的mysql</span>
yum remove mysql-community-common-x.x.xx-1.el7.x86_64　　<span class="token comment">#如果找到，则依次卸载全部安装包</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> *mysql*　　<span class="token comment">#查找mysql的残余文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib64/mysql　　<span class="token comment">#如果找到，则依次删除所有残余文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、安装mysql服务" tabindex="-1"><a class="header-anchor" href="#二、安装mysql服务" aria-hidden="true">#</a> 二、安装mysql服务</h1>`,3),u={id:"_1-下载mysql",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#_1-下载mysql","aria-hidden":"true"},"#",-1),m={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>本文选择8.0.20，下载指定环境版本、安装如下文件</p><pre><code>rpm -ivh mysql-community-common-8.0.20-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.20-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.20-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-8.0.20-1.el7.x86_64.rpm
</code></pre><h2 id="_2-启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_2-启动mysql服务" aria-hidden="true">#</a> 2. 启动mysql服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld
<span class="token comment"># 查看临时密码</span>
<span class="token function">cat</span> /var/log/mysqld.log <span class="token operator">|</span> <span class="token function">grep</span> password
<span class="token comment"># 使用临时密码登录</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><code>my.cnf</code>配置文件如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># For advice on how to change settings please see</span>
<span class="token comment"># http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html</span>

[mysqld]
<span class="token comment">#</span>
<span class="token comment"># Remove leading # and set to the amount of RAM for the most important data</span>
<span class="token comment"># cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.</span>
<span class="token comment"># innodb_buffer_pool_size = 128M</span>
<span class="token comment">#</span>
<span class="token comment"># Remove the leading &quot;# &quot; to disable binary logging</span>
<span class="token comment"># Binary logging captures changes between backups and is enabled by</span>
<span class="token comment"># default. It&#39;s default setting is log_bin=binlog</span>
<span class="token comment"># disable_log_bin</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to set options mainly useful for reporting servers.</span>
<span class="token comment"># The server defaults are faster for transactions and fast SELECTs.</span>
<span class="token comment"># Adjust sizes as needed, experiment to find the optimal values.</span>
<span class="token comment"># join_buffer_size = 128M</span>
<span class="token comment"># sort_buffer_size = 2M</span>
<span class="token comment"># read_rnd_buffer_size = 2M</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to revert to previous value for default_authentication_plugin,</span>
<span class="token comment"># this will increase compatibility with older clients. For background, see:</span>
<span class="token comment"># https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin</span>
<span class="token comment"># default-authentication-plugin=mysql_native_password</span>

<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>

<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysqld.log</span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mysqld/mysqld.pid</span>
<span class="token key attr-name">binlog_transaction_dependency_tracking</span><span class="token punctuation">=</span><span class="token value attr-value">WRITESET</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token key attr-name">lower-case-table-names</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>


<span class="token comment">#复制框架</span>
<span class="token key attr-name">server_id</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">gtid_mode</span><span class="token punctuation">=</span><span class="token value attr-value">ON</span>
<span class="token key attr-name">enforce_gtid_consistency</span><span class="token punctuation">=</span><span class="token value attr-value">ON</span>
<span class="token key attr-name">master_info_repository</span><span class="token punctuation">=</span><span class="token value attr-value">TABLE</span>
<span class="token key attr-name">relay_log_info_repository</span><span class="token punctuation">=</span><span class="token value attr-value">TABLE</span>
<span class="token key attr-name">binlog_checksum</span><span class="token punctuation">=</span><span class="token value attr-value">NONE</span>
<span class="token key attr-name">log_slave_updates</span><span class="token punctuation">=</span><span class="token value attr-value">ON</span>
<span class="token key attr-name">log_bin</span><span class="token punctuation">=</span><span class="token value attr-value">binlog</span>
<span class="token key attr-name">binlog_format</span><span class="token punctuation">=</span><span class="token value attr-value">ROW</span>

<span class="token comment">#组复制设置</span>
<span class="token key attr-name">plugin_load</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;group_replication=group_replication.so&quot;</span>
<span class="token comment">#server必须为每个事务收集写集合，并使用XXHASH64哈希算法将其编码为散列</span>
<span class="token key attr-name">transaction_write_set_extraction</span><span class="token punctuation">=</span><span class="token value attr-value">XXHASH64</span>
<span class="token comment">#告知插件加入或创建组命名，UUID</span>
<span class="token key attr-name">loose-group_replication_group_name</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;f703d586-8d16-11ea-aa98-005090e3c222&quot;</span>
<span class="token comment">#server启动时不自启组复制,为了避免每次启动自动引导具有相同名称的第二个组,所以设置为OFF。</span>
<span class="token key attr-name">loose-group_replication_start_on_boot</span><span class="token punctuation">=</span><span class="token value attr-value">off</span>
<span class="token comment">#告诉插件使用IP地址，端口33061用于接收组中其他成员转入连接</span>
<span class="token key attr-name">loose-group_replication_local_address</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;192.168.1.200:33061&quot;</span>
<span class="token comment">#启动组server，种子server，加入组应该连接这些的ip和端口；其他server要加入组得由组成员同意</span>
<span class="token key attr-name">loose-group_replication_group_seeds</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;192.168.1.200:33061,192.168.1.201:33061,192.168.1.202:33061&quot;</span>
<span class="token key attr-name">loose-group_replication_ip_whitelist</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;192.168.1.200,192.168.1.201,192.168.1.202&quot;</span>
<span class="token key attr-name">loose-group_replication_bootstrap_group</span><span class="token punctuation">=</span><span class="token value attr-value">off</span>
<span class="token comment"># 使用MGR的单主模式</span>
<span class="token key attr-name">loose-group_replication_single_primary_mode</span><span class="token punctuation">=</span><span class="token value attr-value">on</span>
<span class="token key attr-name">loose-group_replication_enforce_update_everywhere_checks</span><span class="token punctuation">=</span><span class="token value attr-value">off</span>
<span class="token key attr-name">disabled_storage_engines</span> <span class="token punctuation">=</span> <span class="token value attr-value">MyISAM,BLACKHOLE,FEDERATED,CSV,ARCHIVE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-启动主节点" tabindex="-1"><a class="header-anchor" href="#_3-启动主节点" aria-hidden="true">#</a> 3. 启动主节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认密码的长度最小值为 4 ，由 大/小写字母各一个 + 阿拉伯数字一个 + 特殊字符一个</span>
alter user user<span class="token punctuation">(</span><span class="token punctuation">)</span> identified by <span class="token string">&#39;P@88w0rd&#39;</span><span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
create user <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> identified WITH mysql_native_password by <span class="token string">&#39;P@88w0rd&#39;</span><span class="token punctuation">;</span>
grant all privileges on *.* to <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> with grant option<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>

reset master<span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

CHANGE MASTER TO <span class="token assign-left variable">MASTER_USER</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>, <span class="token assign-left variable">MASTER_PASSWORD</span><span class="token operator">=</span><span class="token string">&#39;P@88w0rd&#39;</span> FOR CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
SET GLOBAL <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
START GROUP_REPLICATION<span class="token punctuation">;</span>
<span class="token builtin class-name">set</span> global <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>OFF<span class="token punctuation">;</span>
SELECT * FROM performance_schema.replication_group_members<span class="token punctuation">;</span>


<span class="token comment"># 集群恢复</span>
reset master<span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

CHANGE MASTER TO <span class="token assign-left variable">MASTER_USER</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>, <span class="token assign-left variable">MASTER_PASSWORD</span><span class="token operator">=</span><span class="token string">&#39;P@88w0rd&#39;</span> FOR CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
STOP GROUP_REPLICATION<span class="token punctuation">;</span>
SET GLOBAL <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
START GROUP_REPLICATION<span class="token punctuation">;</span>
<span class="token builtin class-name">set</span> global <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>OFF<span class="token punctuation">;</span>
SELECT * FROM performance_schema.replication_group_members<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-启动从节点" tabindex="-1"><a class="header-anchor" href="#_4-启动从节点" aria-hidden="true">#</a> 4. 启动从节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alter user user<span class="token punctuation">(</span><span class="token punctuation">)</span> identified by <span class="token string">&#39;P@88w0rd&#39;</span><span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
create user <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> identified WITH mysql_native_password by <span class="token string">&#39;P@88w0rd&#39;</span><span class="token punctuation">;</span>
grant all privileges on *.* to <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> with grant option<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
reset master<span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
CHANGE MASTER TO <span class="token assign-left variable">MASTER_USER</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>, <span class="token assign-left variable">MASTER_PASSWORD</span><span class="token operator">=</span><span class="token string">&#39;P@88w0rd&#39;</span> FOR CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
START GROUP_REPLICATION<span class="token punctuation">;</span>
SELECT * FROM performance_schema.replication_group_members<span class="token punctuation">;</span>

<span class="token comment"># 集群恢复</span>
reset master<span class="token punctuation">;</span>
SET <span class="token assign-left variable">SQL_LOG_BIN</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

CHANGE MASTER TO <span class="token assign-left variable">MASTER_USER</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>, <span class="token assign-left variable">MASTER_PASSWORD</span><span class="token operator">=</span><span class="token string">&#39;P@88w0rd&#39;</span> FOR CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
STOP GROUP_REPLICATION<span class="token punctuation">;</span>
START GROUP_REPLICATION<span class="token punctuation">;</span>
SELECT * FROM performance_schema.replication_group_members<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、搭建mgr集群" tabindex="-1"><a class="header-anchor" href="#三、搭建mgr集群" aria-hidden="true">#</a> 三、搭建MGR集群</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqlsh <span class="token parameter variable">--uri</span> admin@localhost:3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-检查是否满足安装集群的条件" tabindex="-1"><a class="header-anchor" href="#_1-检查是否满足安装集群的条件" aria-hidden="true">#</a> 1.检查是否满足安装集群的条件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dba.configureInstance<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>以上命令所有节点都要执行</p></blockquote><h2 id="_2-master切换mgr-user用户" tabindex="-1"><a class="header-anchor" href="#_2-master切换mgr-user用户" aria-hidden="true">#</a> 2. master切换mgr_user用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>var c <span class="token operator">=</span> dba.createCluster<span class="token punctuation">(</span><span class="token string">&#39;MGR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

c.addInstance<span class="token punctuation">(</span><span class="token string">&#39;admin@mysql-1:3306&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c.addInstance<span class="token punctuation">(</span><span class="token string">&#39;admin@mysql-2:3306&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mysqlrouter <span class="token parameter variable">--bootstrap</span> admin@192.168.1.200:3306 <span class="token parameter variable">--user</span><span class="token operator">=</span>mysqlrouter
<span class="token function">vim</span> /etc/mysqlrouter/mysqlrouter.conf <span class="token comment">#修改bind ip</span>

systemctl restart mysqlrouter

greatsql@mgr4:3306 <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>set global <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
greatsql@mgr4:3306 <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>start group_replication<span class="token punctuation">;</span>
-- 启动完MGR后，记得立即将其设置为OFF
greatsql@mgr4:3306 <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>set global <span class="token assign-left variable">group_replication_bootstrap_group</span><span class="token operator">=</span>OFF<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function k(b,g){const e=l("ExternalLinkIcon");return i(),p("div",null,[r,n("h2",u,[d,s(" 1. 下载"),n("a",m,[s("MYSQL"),o(e)])]),v])}const f=t(c,[["render",k],["__file","mysql-install-mgr.html.vue"]]);export{f as default};
