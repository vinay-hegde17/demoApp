@echo off
echo Starting Minikube cluster...
minikube start

echo Applying Kubernetes manifests...
kubectl apply -f k8s/

echo Forwarding frontend-service to http://127.0.0.1:4040
kubectl port-forward svc/frontend-service 4040:80
