@echo off
set IMAGE=ghcr.io/vinay-hegde17/demoapp-react:latest

echo Pulling latest image...
docker pull %IMAGE%

echo Stopping old container (if running)...
docker stop demoapp 2>nul
docker rm demoapp 2>nul

echo Starting fresh container...
docker run -d --name demoapp -p 8080:80 %IMAGE%

echo App is running at http://localhost:8080
pause
