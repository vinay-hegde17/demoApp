@echo off
echo Starting Minikube cluster...
minikube start

echo Applying Kubernetes manifests...
kubectl apply -f k8s/

echo Getting frontend service URL...
minikube service frontend-service --url

pause
