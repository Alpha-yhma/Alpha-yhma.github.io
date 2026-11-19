---
title: Traefik自定义镜像
icon: fab fa-docker
tag: Traefik
---

构建时，请通过 `--build-arg` 传入插件模块路径和仓库地址。

```dockerfile
FROM alpine:3 AS src
ARG PLUGIN_MODULE
ARG PLUGIN_GIT_REPO
RUN apk add --update git && \
    git clone "${PLUGIN_GIT_REPO}" "/plugins-local/src/${PLUGIN_MODULE}" --depth 1 --single-branch --branch master
FROM traefik:v2.9
COPY --from=src /plugins-local /plugins-local
```
