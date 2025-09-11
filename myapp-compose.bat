@echo off
echo Stopping and removing old containers...
docker-compose down

echo Cleaning up unused containers and images...
docker container prune -f
docker image prune -af

echo Pulling latest images...
docker-compose pull

echo Starting containers with Docker Compose...
docker-compose up -d --force-recreate

echo App is running at:
echo   Frontend -^> http://localhost:3030
echo   Backend  -^> http://localhost:5000
pause
