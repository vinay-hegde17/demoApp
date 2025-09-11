@echo off
echo Pulling latest images...
docker pull ghcr.io/vinay-hegde17/demoapp-frontend:latest
docker pull ghcr.io/vinay-hegde17/demoapp-backend:latest

echo Starting containers with Docker Compose...
docker-compose up -d --force-recreate

echo Cleaning up dangling images...
docker image prune -af

echo App is running at:
echo   Frontend -^> http://localhost:3030
echo   Backend  -^> http://localhost:5000
pause
