# Run the container with your scripts folder mounted
$IMAGE_NAME = "artplace-mongo"
$CONTAINER_NAME = "artplace-mongo-scripts"

Write-Host "Starting MongoDB container with scripts..."

# Stop and remove existing container if it exists
docker stop $CONTAINER_NAME 2>$null
docker rm $CONTAINER_NAME 2>$null

# Run the container with your project folder mounted to /scripts
docker run -it `
    --name $CONTAINER_NAME `
    -v "${PWD}:/scripts" `
    -v artplace_mongo_data:/data/db `
    $IMAGE_NAME

Write-Host "Container session ended."
