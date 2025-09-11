@echo off
echo Starting Minikube cluster...
minikube start

echo Applying Kubernetes manifests...
kubectl apply -f k8s/

echo Cleaning up unused images inside Minikube...
minikube ssh "docker image prune -af"

echo Forwarding frontend-service to http://127.0.0.1:4040
kubectl port-forward svc/frontend-service 4040:80
