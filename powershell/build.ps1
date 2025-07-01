# Build the Docker image
$IMAGE_NAME = "artplace-mongo"

Write-Host "Building Docker image: $IMAGE_NAME"
docker build -t $IMAGE_NAME .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Image built successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
}
