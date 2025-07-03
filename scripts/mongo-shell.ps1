# Connect to MongoDB shell in the running container
$CONTAINER_NAME = "artplace-mongo-dev"

Write-Host "Connecting to MongoDB shell..."
docker exec -it $CONTAINER_NAME mongosh
