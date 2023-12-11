import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,f as a}from"./app-xzBMaP5V.js";const s={},l=a(`<div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM jenkins/inbound-agent:latest-jdk11

ARG MAVEN_VERSION=3.6.3
ARG KUBECTL_VERSION=v1.22.1

USER root

# tool

RUN sed -i &quot;s/deb.debian.org/mirrors.aliyun.com/g&quot; /etc/apt/sources.list
RUN sed -i &quot;s/security.debian.org/mirrors.aliyun.com\\/debian-security/g&quot; /etc/apt/sources.list


RUN apt-get update &amp;&amp; \\
  apt-get install -y curl vim git &amp;&amp; \\
  apt-get clean

# maven
RUN curl -OL https://archive.apache.org/dist/maven/maven-3/\${MAVEN_VERSION}/binaries/apache-maven-\${MAVEN_VERSION}-bin.tar.gz &amp;&amp; \\
  tar -zxf ./apache-maven-\${MAVEN_VERSION}-bin.tar.gz &amp;&amp; \\
  mv apache-maven-\${MAVEN_VERSION} /usr/local &amp;&amp; \\
  rm -f apache-maven-\${MAVEN_VERSION}-bin.tar.gz &amp;&amp; \\
  ln -s /usr/local/apache-maven-\${MAVEN_VERSION}/bin/mvn /usr/bin/mvn &amp;&amp; \\
  ln -s /usr/local/apache-maven-\${MAVEN_VERSION} /usr/local/apache-maven &amp;&amp; \\
  mkdir -p /home/jenkins/.m2  &amp;&amp; \\
  chown -R jenkins:jenkins  /home/jenkins/.m2

# kubectl
RUN curl -OL https://storage.googleapis.com/kubernetes-release/release/\${KUBECTL_VERSION}/bin/linux/amd64/kubectl &amp;&amp; \\
  chmod +x ./kubectl &amp;&amp; \\
  mv ./kubectl /usr/local/bin/kubectl &amp;&amp; \\
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; \\
  echo $TZ &gt; /etc/timezone

VOLUME [ &quot;/home/jenkins/.m2&quot; ]

# USER jenkins

ENTRYPOINT [&quot;/usr/local/bin/jenkins-agent&quot;]

# docker build --build-arg KUBECTL_VERSION=v1.22.3 --build-arg MAVEN_VERSION=3.6.3 -t &quot;yhma/kubectl-maven-agent&quot; .
# docker push yhma/kubectl-maven-agent

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[l];function m(v,c){return e(),i("div",null,d)}const t=n(s,[["render",m],["__file","jenkins-agent-build.html.vue"]]);export{t as default};
