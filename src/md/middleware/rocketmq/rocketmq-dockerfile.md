---
title: Dockerfile示例
icon: fab fa-docker
order: 4
tag: RocketMQ
---
### 1. Broker
Dockerfile-mq:
```dockerfile
FROM openjdk/linux/amd64/openjdk:11.0.13  
MAINTAINER yhma@amarsoft.com  
ADD rocketmq-4.9.3 /rocketmq  
expose 30909 30911 40911
RUN mkdir /data
ENV JAVA_OPT " -Xms2g -Xmx2g "  
ENV JAVA_OPT_EXT " --add-opens java.base/jdk.internal.misc=ALL-UNNAMED --add-exports java.base/jdk.internal.ref=ALL-UNNAMED "  
CMD exec /rocketmq/bin/mqbroker -c /conf/${HOSTNAME}.conf
```

### 2. Console
Dockerfile-console:
```dockerfile
FROM harbor.amarsoft.com/rd-zhxd/als/als9/jdk:8u201
MAINTAINER yhma@amarsoft.com
ADD rocketmq-console-ng-1.0.1.jar /app.jar
ENV server.port 8080
ENV JAVA_OPT " -Xms256m -Xmx512m "
CMD exec java ${JAVA_OPT} -jar app.jar
```

### 3. NameServer
Dockerfile-namesrv:
```dockerfile
FROM openjdk/linux/amd64/openjdk:11.0.13
MAINTAINER yhma@amarsoft.com
ADD rocketmq-4.9.3 /rocketmq
expose 9876
ENV JAVA_OPT " -Xms512m -Xmx512m "
ENV JAVA_OPT_EXT " --add-opens java.base/jdk.internal.misc=ALL-UNNAMED "
CMD ["/bin/sh","-c","/rocketmq/bin/mqnamesrv"]
```
