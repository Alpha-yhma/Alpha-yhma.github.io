---
title: JDK基础镜像构建
icon: fab fa-docker
tag: JDK
---

```Dockerfile
FROM frolvlad/alpine-glibc:glibc-2.34

LABEL maintainer="yhma@amarsoft.com"

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone

#******************更换Alpine源为mirrors.ustc.edu.cn******************
RUN echo http://mirrors.aliyun.com/alpine/v3.10/main/ > /etc/apk/repositories && \
    echo http://mirrors.aliyun.com/alpine/v3.10/community/ >> /etc/apk/repositories
RUN apk update && apk upgrade
RUN apk --no-cache add bash wget curl && rm -rf /var/cache/apk/*

ENV LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8  LC_ALL=zh_CN.UTF-8
RUN echo "export LANG=$LANG" > /etc/profile.d/locale.sh

ADD jre1.8.0_201_server /jdk
ENV JAVA_HOME /jdk
ENV PATH ${JAVA_HOME}/bin:${PATH}

```
