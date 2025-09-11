@echo off
echo === Starting Minikube cluster ===
minikube start

if %errorlevel% neq 0 (
    echo Minikube failed to start. Exiting...
    exit /b %errorlevel%
)

echo === Applying Kubernetes manifests ===
kubectl apply -f k8s/

echo === Waiting for frontend deployment to be ready ===
kubectl wait --for=condition=available --timeout=120s deployment/frontend-deployment

if %errorlevel% neq 0 (
    echo Frontend deployment did not become ready in time. Exiting...
    exit /b %errorlevel%
)

echo === Forwarding frontend-service to http://127.0.0.1:4040 ===
kubectl port-forward svc/frontend-service 4040:80
