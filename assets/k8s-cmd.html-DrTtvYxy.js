import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as n,o as l}from"./app-Cp6Zyva7.js";const t={};function i(r,e){return l(),a("div",null,[...e[0]||(e[0]=[n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://download.docker.com/linux/static/stable/x86_64/</span>

 kubeadm init --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
   <span class="token builtin class-name">exit</span>
   kubectl get svc <span class="token parameter variable">-n</span> kube-system
   kubectl get svc
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
kubectl get nodes
systemctl start kubectl
systemctl start kubelet
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet
   kubectl get nodes
   kubectl
   kubectl get nodes
   kubelet
   kubectl get nodes
   systemctl status kubelet
   systemctl status kubectl
   <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf
   systemctl status kubectl
   kubectl get nodes
   <span class="token function">ls</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
   <span class="token builtin class-name">source</span> ~/.bash_profile
   kubectl get nodes
   kubectl get nodes <span class="token parameter variable">-a</span>
   kubectl get pods
   kubectl get pods --all-namespaces
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
   kubectl get pods --all-namespaces
   kubectl get nodes
   kubectl get pods --all-namespaces
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
   kubectl proxy
   kubectl proxy <span class="token parameter variable">--help</span>
   kubectl proxy <span class="token parameter variable">--address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8009</span>
   kubectl proxy <span class="token parameter variable">--address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8009</span> --accept-hosts<span class="token operator">=</span><span class="token string">&#39;^*$&#39;</span>
   openssl genrsa <span class="token parameter variable">-out</span> tls.key <span class="token number">2048</span>
   openssl req <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-x509</span> -days-key tls.key <span class="token parameter variable">-out</span> tls.crt
   kubectl proxy <span class="token parameter variable">--address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8009</span> --accept-hosts<span class="token operator">=</span><span class="token string">&#39;^*$&#39;</span>
   kubectl get svc <span class="token parameter variable">-n</span> kube-system
   kubectl proxy <span class="token parameter variable">--address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8009</span> --accept-hosts<span class="token operator">=</span><span class="token string">&#39;^*$&#39;</span>
   <span class="token function">docker</span> images
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
   kubectl get svc <span class="token parameter variable">-n</span> 
   kubectl get svc <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl proxy <span class="token parameter variable">--address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8009</span> --accept-hosts<span class="token operator">=</span><span class="token string">&#39;^*$&#39;</span>
   kubectl get pods --
   <span class="token function">history</span><span class="token operator">|</span><span class="token function">grep</span> pods
   kubectl get pods --all-namespaces
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard edit svn kubernetes-dashboard
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get svc
   kubectl <span class="token parameter variable">-n</span> kube-system get svc
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get svc
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard edit svc kubernetes-dashboard
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get svc
   kubectl create serviceaccount dashboard <span class="token operator">=</span>n kubernetes-dashboard
   kubectl create serviceaccount dashboard <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl create rolebinding def-ns-admin <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>default:def-ns-admin
   kubectl create clusterrolebinding dashboard-cluster-admin -- <span class="token assign-left variable">clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>kubernetes-dashboard:dashboard
   kubectl create clusterrolebinding dashboard-cluster-admin <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>kubernetes-dashboard:dashboard
   kubectl describe sa dashboard <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl describe secret dashboard-token-vtncb <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl describe secret dashboard-token-4vqkm <span class="token parameter variable">-n</span> kubernetes-dashboard
   kubectl get services nginx
   kubectl get services <span class="token builtin class-name">test</span>
    kubectl <span class="token parameter variable">-n</span> default
   kubectl <span class="token parameter variable">-n</span> default get svc
   kubectl <span class="token parameter variable">-n</span> default edit svc <span class="token builtin class-name">test</span>
   kubectl <span class="token parameter variable">-n</span> default get svc
   <span class="token function">wget</span>
   <span class="token function">wget</span> node1:8000
   <span class="token function">wget</span> node1:30000
   <span class="token function">docker</span> <span class="token function">ps</span>
   kubectl get ingress
   kubectl get ingress <span class="token parameter variable">-n</span> kube-system
   kubectl get ingress <span class="token parameter variable">-n</span> all-namespaces
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
   kubectl gett pods <span class="token parameter variable">-n</span> ingress-nginx
   kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx
   kubectl get ingress
   kubectl describe ingress nginx-web
   kubectl get ingress nginx-web
   kubectl get pods --all-namespaces<span class="token operator">|</span><span class="token function">grep</span> nginx
   helm
   kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/aws/deploy.yaml
  kubectl get pods --all-namespaces<span class="token operator">|</span><span class="token function">grep</span> nginx
  kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/aws/deploy.yaml
  kubectl get p
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-o</span> wide
  kubectl delete namespaces ingress-nginx
  <span class="token function">wget</span> https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
  <span class="token function">ls</span>
  <span class="token function">vim</span> deploy.yaml 
  kubectl apply <span class="token parameter variable">-f</span> deploy.yaml 
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-l</span> app.kubernetes.io/name<span class="token operator">=</span>ingress-nginx <span class="token parameter variable">--watch</span>
  kubectl get ingress
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-l</span> app.kubernetes.io/name<span class="token operator">=</span>ingress-nginx <span class="token parameter variable">--watch</span>
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-l</span> 
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx
  kubectl get pods <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-o</span> wide
  kubectl get namespace
  kubectl get <span class="token function">node</span>
  kubectl get pods
  kubectl get pods <span class="token parameter variable">-o</span> wide
  kubectl get deployment
  kubectl get deployments
  kubectl get pods <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">node</span>
  kubectl get nodes
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  kubectl get nodes
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  <span class="token function">history</span><span class="token operator">|</span><span class="token function">grep</span> dashboard
  kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-o</span> wide
  kubectl get pods --all-namespaces <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">service</span> --all-namespaces <span class="token parameter variable">-o</span> wide
  kubectl get pods --all-namespaces <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide <span class="token parameter variable">-w</span>
  kubectl get <span class="token function">service</span> <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide
  kubectl get pods <span class="token parameter variable">-n</span> kubernetes-dashboard <span class="token parameter variable">-o</span> wide <span class="token parameter variable">-w</span>
  <span class="token function">ls</span>
  <span class="token function">wget</span> https://github.com/kubesphere/ks-installer/releases/download/v3.0.0/kubesphere-installer.yaml
  kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml 
  <span class="token function">wget</span> https://github.com/kubesphere/ks-installer/releases/download/v3.0.0/cluster-configuration.yaml
  <span class="token function">ls</span>
  <span class="token function">vim</span> cluster-configuration.yaml 
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  <span class="token function">docker</span> pull kubesphere/ks-installer:v3.0.0
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml 
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  <span class="token function">vim</span> cluster-configuration.yaml 
  kubectl get svc/ks-console <span class="token parameter variable">-n</span> kubesphere-system
  kubectl get svc <span class="token parameter variable">-n</span> kubesphere-system
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl get pod --all-namespaces
  kubectl get svc --all-namespaces
  kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml 
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml 
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl <span class="token parameter variable">-v</span>
  kubectl <span class="token parameter variable">-version</span>
  kubectl <span class="token parameter variable">--version</span>
  kubectl
  kubectl version
  kubectl get <span class="token function">node</span>
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubectl-1.18.6 kubelet-1.18.6 kubeadm-1.18.6
  kubectl version
  <span class="token function">history</span><span class="token operator">|</span><span class="token function">grep</span> adm
  kubeadm init --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
  kubeadm reset
  kubeadm init --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
  <span class="token function">history</span><span class="token operator">|</span><span class="token function">grep</span> apply
  kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
  kubeadm get <span class="token function">node</span>
  kubectl get <span class="token function">node</span>
  kubectl apply <span class="token parameter variable">-f</span> kubesphere-installer.yaml 
  kubectl apply <span class="token parameter variable">-f</span> cluster-configuration.yaml 
  kubectl get svc --all-namespaces
  kubectl get <span class="token function">node</span> --all-namespaces
  kubectl get pod --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const o=s(t,[["render",i],["__file","k8s-cmd.html.vue"]]);export{o as default};
