import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-PZddbQnF.js";const t={},l=e(`<p>elasticsearch.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elasticsearch
<span class="token comment"># 配置的集群名称，默认是elasticsearch，es服务会通过广播方式自动连接在同一网段下的es服务，通过多播方式进行通信，同一网段下可以有多个集群，通过集群名称这个属性来区分不同的集群。</span>

<span class="token key atrule">a.name</span><span class="token punctuation">:</span> <span class="token string">&quot;Franz Kafka&quot;</span>
<span class="token comment"># 当前配置所在机器的节点名，你不设置就默认随机指定一个name列表中名字，该name列表在es的jar包中config文件夹里name.txt文件中，其中有很多作者添加的有趣名字。</span>

<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 指定该节点是否有资格被选举成为node（注意这里只是设置成有资格， 不代表该node一定就是master），默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master。</span>

<span class="token key atrule">a.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 指定该节点是否存储索引数据，默认为true。</span>

<span class="token key atrule">index.number_of_shards</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment"># 设置默认索引分片个数，默认为5片。</span>

<span class="token key atrule">index.number_of_replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment"># 设置默认索引副本个数，默认为1个副本。如果采用默认设置，而你集群只配置了一台机器，那么集群的健康度为yellow，也就是所有的数据都是可用的，但是某些复制没有被分配</span>
<span class="token comment"># （健康度可用 curl &#39;localhost:9200/_cat/health?v&#39; 查看， 分为绿色、黄色或红色。绿色代表一切正常，集群功能齐全，黄色意味着所有的数据都是可用的，但是某些复制没有被分配，红色则代表因为某些原因，某些数据不可用）。</span>

<span class="token key atrule">path.conf</span><span class="token punctuation">:</span> /path/to/conf
<span class="token comment"># 设置配置文件的存储路径，默认是es根目录下的config文件夹。</span>

<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /path/to/data
<span class="token comment"># 设置索引数据的存储路径，默认是es根目录下的data文件夹，可以设置多个存储路径，用逗号隔开，例：</span>
<span class="token comment"># path.data: /path/to/data1,/path/to/data2</span>

<span class="token key atrule">path.work</span><span class="token punctuation">:</span> /path/to/work
<span class="token comment"># 设置临时文件的存储路径，默认是es根目录下的work文件夹。</span>

<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /path/to/logs
<span class="token comment"># 设置日志文件的存储路径，默认是es根目录下的logs文件夹 </span>

<span class="token key atrule">path.plugins</span><span class="token punctuation">:</span> /path/to/plugins
<span class="token comment"># 设置插件的存放路径，默认是es根目录下的plugins文件夹, 插件在es里面普遍使用，用来增强原系统核心功能。</span>

<span class="token key atrule">bootstrap.mlockall</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 设置为true来锁住内存不进行swapping。因为当jvm开始swapping时es的效率 会降低，所以要保证它不swap，可以把ES_MIN_MEM和ES_MAX_MEM两个环境变量设置成同一个值，并且保证机器有足够的内存分配给es。 同时也要允许elasticsearch的进程可以锁住内# # 存，linux下启动es之前可以通过\`ulimit -l unlimited\`命令设置。</span>

<span class="token key atrule">network.bind_host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment"># 设置绑定的ip地址，可以是ipv4或ipv6的，默认为0.0.0.0，绑定这台机器的任何一个ip。</span>

<span class="token key atrule">network.publish_host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment"># 设置其它节点和该节点交互的ip地址，如果不设置它会自动判断，值必须是个真实的ip地址。</span>

<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment"># 这个参数是用来同时设置bind_host和publish_host上面两个参数。</span>

<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment"># 设置节点之间交互的tcp端口，默认是9300。</span>

<span class="token key atrule">transport.tcp.compress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 设置是否压缩tcp传输时的数据，默认为false，不压缩。</span>

<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment"># 设置对外服务的http端口，默认为9200。</span>

<span class="token key atrule">http.max_content_length</span><span class="token punctuation">:</span> 100mb
<span class="token comment"># 设置内容的最大容量，默认100mb</span>

<span class="token key atrule">http.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 是否使用http协议对外提供服务，默认为true，开启。</span>

<span class="token key atrule">gateway.type</span><span class="token punctuation">:</span> local
<span class="token comment"># gateway的类型，默认为local即为本地文件系统，可以设置为本地文件系统，分布式文件系统，hadoop的HDFS，和amazon的s3服务器等。</span>

<span class="token key atrule">gateway.recover_after_nodes</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment"># 设置集群中N个节点启动时进行数据恢复，默认为1。</span>

<span class="token key atrule">gateway.recover_after_time</span><span class="token punctuation">:</span> 5m
<span class="token comment"># 设置初始化数据恢复进程的超时时间，默认是5分钟。</span>

<span class="token key atrule">gateway.expected_nodes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment"># 设置这个集群中节点的数量，默认为2，一旦这N个节点启动，就会立即进行数据恢复。</span>

<span class="token key atrule">cluster.routing.allocation.node_initial_primaries_recoveries</span><span class="token punctuation">:</span> <span class="token number">4</span>
<span class="token comment"># 初始化数据恢复时，并发恢复线程的个数，默认为4。</span>

<span class="token key atrule">cluster.routing.allocation.node_concurrent_recoveries</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment"># 添加删除节点或负载均衡时并发恢复线程的个数，默认为4。</span>

<span class="token key atrule">indices.recovery.max_size_per_sec</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token comment"># 设置数据恢复时限制的带宽，如入100mb，默认为0，即无限制。</span>

<span class="token key atrule">indices.recovery.concurrent_streams</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment"># 设置这个参数来限制从其它分片恢复数据时最大同时打开并发流的个数，默认为5。</span>

<span class="token key atrule">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment"># 设置这个参数来保证集群中的节点可以知道其它N个有master资格的节点。默认为1，对于大的集群来说，可以设置大一点的值（2-4）</span>

<span class="token key atrule">discovery.zen.ping.timeout</span><span class="token punctuation">:</span> 3s
<span class="token comment"># 设置集群中自动发现其它节点时ping连接超时时间，默认为3秒，对于比较差的网络环境可以高点的值来防止自动发现时出错。</span>

<span class="token key atrule">discovery.zen.ping.multicast.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 设置是否打开多播发现节点，默认是true。</span>

<span class="token key atrule">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;host1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host2:port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host3[portX-portY]&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 设置集群中master节点的初始列表，可以通过这些节点来自动发现新加入集群的节点。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function c(p,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","es-config-file.html.vue"]]);export{d as default};
