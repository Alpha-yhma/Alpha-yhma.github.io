---
title: K8S命令案例
icon: fab fa-markdown
tag: K8S
---
执行下载或部署命令前，请先将对应的 URL 环境变量设为实际地址。

```bash
# https://download.docker.com/linux/static/stable/x86_64/

 kubeadm init --pod-network-cidr=10.244.0.0/16
   kubectl apply -f "${FLANNEL_MANIFEST_URL}"
   exit
   kubectl get svc -n kube-system
   kubectl get svc
   kubectl apply -f "${FLANNEL_MANIFEST_URL}"
kubectl get nodes
systemctl start kubectl
systemctl start kubelet
systemctl enable --now kubelet
   kubectl get nodes
   kubectl
   kubectl get nodes
   kubelet
   kubectl get nodes
   systemctl status kubelet
   systemctl status kubectl
   export KUBECONFIG=/etc/kubernetes/admin.conf
   systemctl status kubectl
   kubectl get nodes
   ls
   echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >> ~/.bash_profile
   source ~/.bash_profile
   kubectl get nodes
   kubectl get nodes -a
   kubectl get pods
   kubectl get pods --all-namespaces
   kubectl apply -f "${FLANNEL_MANIFEST_URL}"
   kubectl get pods --all-namespaces
   kubectl get nodes
   kubectl get pods --all-namespaces
   kubectl apply -f "${DASHBOARD_MANIFEST_URL}"
   kubectl proxy
   kubectl proxy --help
   kubectl proxy --address=0.0.0.0 --port=8009
   kubectl proxy --address=0.0.0.0 --port=8009 --accept-hosts='^*$'
   openssl genrsa -out tls.key 2048
   openssl req -sha256 -new -x509 -days-key tls.key -out tls.crt
   kubectl proxy --address=0.0.0.0 --port=8009 --accept-hosts='^*$'
   kubectl get svc -n kube-system
   kubectl proxy --address=0.0.0.0 --port=8009 --accept-hosts='^*$'
   docker images
   kubectl apply -f "${DASHBOARD_MANIFEST_URL}"
   kubectl get svc -n 
   kubectl get svc -n kubernetes-dashboard
   kubectl proxy --address=0.0.0.0 --port=8009 --accept-hosts='^*$'
   kubectl get pods --
   history|grep pods
   kubectl get pods --all-namespaces
   kubectl -n kubernetes-dashboard edit svn kubernetes-dashboard
   kubectl -n kubernetes-dashboard get svc
   kubectl -n kube-system get svc
   kubectl -n kubernetes-dashboard get svc
   kubectl -n kubernetes-dashboard edit svc kubernetes-dashboard
   kubectl -n kubernetes-dashboard
   kubectl -n kubernetes-dashboard get svc
   kubectl create serviceaccount dashboard =n kubernetes-dashboard
   kubectl create serviceaccount dashboard -n kubernetes-dashboard
   kubectl create rolebinding def-ns-admin --clusterrole=admin --serviceaccount=default:def-ns-admin
   kubectl create clusterrolebinding dashboard-cluster-admin -- clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard
   kubectl create clusterrolebinding dashboard-cluster-admin --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard
   kubectl describe sa dashboard -n kubernetes-dashboard
   kubectl describe secret dashboard-token-vtncb -n kubernetes-dashboard
   kubectl describe secret dashboard-token-4vqkm -n kubernetes-dashboard
   kubectl get services nginx
   kubectl get services test
    kubectl -n default
   kubectl -n default get svc
   kubectl -n default edit svc test
   kubectl -n default get svc
   wget
   wget node1:8000
   wget node1:30000
   docker ps
   kubectl get ingress
   kubectl get ingress -n kube-system
   kubectl get ingress -n all-namespaces
   kubectl apply -f "${INGRESS_NGINX_CLOUD_MANIFEST_URL}"
   kubectl gett pods -n ingress-nginx
   kubectl get pods -n ingress-nginx
   kubectl get ingress
   kubectl describe ingress nginx-web
   kubectl get ingress nginx-web
   kubectl get pods --all-namespaces|grep nginx
   helm
   kubectl apply -f "${INGRESS_NGINX_AWS_MANIFEST_URL}"
  kubectl get pods --all-namespaces|grep nginx
  kubectl apply -f "${INGRESS_NGINX_AWS_MANIFEST_URL}"
  kubectl get p
  kubectl get pods -n ingress-nginx -o wide
  kubectl delete namespaces ingress-nginx
  wget -O deploy.yaml "${INGRESS_NGINX_CLOUD_MANIFEST_URL}"
  ls
  vim deploy.yaml 
  kubectl apply -f deploy.yaml 
  kubectl get pods -n ingress-nginx -o wide
  kubectl get pods -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx --watch
  kubectl get ingress
  kubectl get pods -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx --watch
  kubectl get pods -n ingress-nginx -l 
  kubectl get pods -n ingress-nginx
  kubectl get pods -n ingress-nginx -o wide
  kubectl get namespace
  kubectl get node
  kubectl get pods
  kubectl get pods -o wide
  kubectl get deployment
  kubectl get deployments
  kubectl get pods -o wide
  kubectl get service -o wide
  kubectl get node
  kubectl get nodes
  kubectl get service -o wide
  kubectl get nodes
  kubectl get service -o wide
  kubectl get pods -o wide
  kubectl get service -o wide
  kubectl get pods -o wide
  kubectl get service -o wide
  history|grep dashboard
  kubectl apply -f "${DASHBOARD_MANIFEST_URL}"
  kubectl get service -o wide
  kubectl get pods -o wide
  kubectl get pods --all-namespaces -o wide
  kubectl get service --all-namespaces -o wide
  kubectl get pods --all-namespaces -o wide
  kubectl get pods -n kubernetes-dashboard -o wide
  kubectl get service -n kubernetes-dashboard -o wide
  kubectl get pods -n kubernetes-dashboard -o wide
  kubectl get pods -n kubernetes-dashboard -o wide -w
  kubectl get service -n kubernetes-dashboard -o wide
  kubectl get pods -n kubernetes-dashboard -o wide -w
  ls
  wget -O kubesphere-installer.yaml "${KUBESPHERE_INSTALLER_URL}"
  kubectl apply -f kubesphere-installer.yaml 
  wget -O cluster-configuration.yaml "${KUBESPHERE_CONFIG_URL}"
  ls
  vim cluster-configuration.yaml 
  kubectl apply -f cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  docker pull kubesphere/ks-installer:v3.0.0
  kubectl apply -f cluster-configuration.yaml 
  kubectl apply -f kubesphere-installer.yaml 
  kubectl apply -f cluster-configuration.yaml 
  vim cluster-configuration.yaml 
  kubectl get svc/ks-console -n kubesphere-system
  kubectl get svc -n kubesphere-system
  kubectl apply -f cluster-configuration.yaml 
  kubectl get pod --all-namespaces
  kubectl get svc --all-namespaces
  kubectl apply -f kubesphere-installer.yaml 
  kubectl apply -f cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  kubectl apply -f kubesphere-installer.yaml 
  kubectl apply -f cluster-configuration.yaml 
  kubectl -v
  kubectl -version
  kubectl --version
  kubectl
  kubectl version
  kubectl get node
  yum install -y kubectl-1.18.6 kubelet-1.18.6 kubeadm-1.18.6
  kubectl version
  history|grep adm
  kubeadm init --pod-network-cidr=10.244.0.0/16
  kubeadm reset
  kubeadm init --pod-network-cidr=10.244.0.0/16
  history|grep apply
  kubectl apply -f "${FLANNEL_MANIFEST_URL}"
  kubeadm get node
  kubectl get node
  kubectl apply -f kubesphere-installer.yaml 
  kubectl apply -f cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  kubectl get node --all-namespaces
  kubectl get pod --all-namespaces
```
