---
title: Traefik路由配置示例
icon: fab fa-markdown
tag: Traefik
---

```yaml
http:
  # Add the router
  routers:
    my-router:
      entryPoints:
        - web
      middlewares:
        - my-stripprefix
        - my-traefik-timer-plugin
      service: my-service
      rule: PathPrefix(`/`)

  # Add the middleware
  middlewares:
    my-stripprefix:
      stripPrefix:
        prefixes:
          - "/"
    my-traefik-timer-plugin:
      plugin:
        traefik-timer-plugin:
          log: "true"
  # Add the service
  services:
    my-service:
      loadBalancer:
        servers:
          - url: http://localhost:8080/

```
