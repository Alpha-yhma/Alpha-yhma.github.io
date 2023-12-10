---
title: Jenkins pipeline示例
icon: fab fa-markdown
tag: Jenkins
---
```groovy
def label = "slave-${UUID.randomUUID().toString()}"
 
podTemplate(label: label, containers: [
  containerTemplate(name: 'maven', image: 'maven:latest', command: 'cat', ttyEnabled: true),
  containerTemplate(name: 'docker', image: 'docker:latest', command: 'cat', ttyEnabled: true),
  containerTemplate(name: 'kubectl', image: 'kubesphere/kubectl', command: 'cat', ttyEnabled: true)
], serviceAccount: 'jenkins', volumes: [
  hostPathVolume(mountPath: '/root/.m2', hostPath: '/root/.m2'),
  hostPathVolume(mountPath: '/root/.kube', hostPath: '/root/.kube'),
  hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
]) {
  node(label) {
 
    stage('单元测试') {
      echo "测试阶段"
    }
    stage('代码编译打包') {
      container('maven') {
          
        //   git 'https://github.com/mybatis/spring-boot-starter.git'
          
          withCredentials([file(credentialsId: 'maven-settings', variable: 'SETTINGS')]) {
              echo "查看 K8S 集群 Pod 列表"
              sh "mkdir -p ~/.m2 && cp ${SETTINGS} ~/.m2/settings.xml"
            //   sh 'mvn clean compile -DskipTests -T10'
            }

      }
    }
    stage('构建 Docker 镜像') {
      container('docker') {
        echo "构建 Docker 镜像阶段"
        sh 'docker ps'
      }
    }
    stage('运行 Kubectl') {
      container('kubectl') {
        echo "查看 K8S 集群 Pod 列表"
        // sh 'echo $USER'
        sh "kubectl get pods"
      }
    }
  }
}
```
