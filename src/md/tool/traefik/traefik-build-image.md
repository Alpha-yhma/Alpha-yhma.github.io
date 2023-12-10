---
title: Traefik自定义镜像
icon: fab fa-docker
tag: Traefik
---

```dockerfile
FROM alpine:3 AS src
ARG PLUGIN_MODULE=github.com/traefik/plugindemo
ARG PLUGIN_GIT_REPO=https://github.com/traefik/plugindemo.git
RUN apk add --update git && \
    git clone ${PLUGIN_GIT_REPO} /plugins-local/src/${PLUGIN_MODULE} --depth 1 --single-branch --branch master
FROM traefik:v2.9
COPY --from=src /plugins-local /plugins-local
```
