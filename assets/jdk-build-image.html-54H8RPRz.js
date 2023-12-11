import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as a}from"./app-xzBMaP5V.js";const l={},s=a(`<div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM frolvlad/alpine-glibc:glibc-2.34

LABEL maintainer=&quot;yhma@amarsoft.com&quot;

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/\${TZ} /etc/localtime &amp;&amp; echo \${TZ} &gt; /etc/timezone

#******************更换Alpine源为mirrors.ustc.edu.cn******************
RUN echo http://mirrors.aliyun.com/alpine/v3.10/main/ &gt; /etc/apk/repositories &amp;&amp; \\
    echo http://mirrors.aliyun.com/alpine/v3.10/community/ &gt;&gt; /etc/apk/repositories
RUN apk update &amp;&amp; apk upgrade
RUN apk --no-cache add bash wget curl &amp;&amp; rm -rf /var/cache/apk/*

ENV LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8  LC_ALL=zh_CN.UTF-8
RUN echo &quot;export LANG=$LANG&quot; &gt; /etc/profile.d/locale.sh

ADD jre1.8.0_201_server /jdk
ENV JAVA_HOME /jdk
ENV PATH \${JAVA_HOME}/bin:\${PATH}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[s];function d(c,m){return i(),n("div",null,r)}const v=e(l,[["render",d],["__file","jdk-build-image.html.vue"]]);export{v as default};
