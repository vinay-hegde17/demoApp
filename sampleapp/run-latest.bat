@echo off
echo Pulling latest images...
docker pull ghcr.io/vinay-hegde17/demoapp-frontend:latest
docker pull ghcr.io/vinay-hegde17/demoapp-backend:latest
docker-compose up -d --force-recreate
echo App is running at http://localhost:8080 (frontend) and http://localhost:5000 (backend)
pause
