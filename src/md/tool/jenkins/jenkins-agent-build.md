---
title: Jenkins agent镜像构建
icon: fab fa-docker
tag: Jenkins
---

```Dockerfile
FROM jenkins/inbound-agent:latest-jdk11

ARG MAVEN_VERSION=3.6.3
ARG KUBECTL_VERSION=v1.22.1

USER root

# tool

RUN sed -i "s/deb.debian.org/mirrors.aliyun.com/g" /etc/apt/sources.list
RUN sed -i "s/security.debian.org/mirrors.aliyun.com\/debian-security/g" /etc/apt/sources.list


RUN apt-get update && \
  apt-get install -y curl vim git && \
  apt-get clean

# maven
RUN curl -OL https://archive.apache.org/dist/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.tar.gz && \
  tar -zxf ./apache-maven-${MAVEN_VERSION}-bin.tar.gz && \
  mv apache-maven-${MAVEN_VERSION} /usr/local && \
  rm -f apache-maven-${MAVEN_VERSION}-bin.tar.gz && \
  ln -s /usr/local/apache-maven-${MAVEN_VERSION}/bin/mvn /usr/bin/mvn && \
  ln -s /usr/local/apache-maven-${MAVEN_VERSION} /usr/local/apache-maven && \
  mkdir -p /home/jenkins/.m2  && \
  chown -R jenkins:jenkins  /home/jenkins/.m2

# kubectl
RUN curl -OL https://storage.googleapis.com/kubernetes-release/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl && \
  chmod +x ./kubectl && \
  mv ./kubectl /usr/local/bin/kubectl && \
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
  echo $TZ > /etc/timezone

VOLUME [ "/home/jenkins/.m2" ]

# USER jenkins

ENTRYPOINT ["/usr/local/bin/jenkins-agent"]

# docker build --build-arg KUBECTL_VERSION=v1.22.3 --build-arg MAVEN_VERSION=3.6.3 -t "yhma/kubectl-maven-agent" .
# docker push yhma/kubectl-maven-agent

```
