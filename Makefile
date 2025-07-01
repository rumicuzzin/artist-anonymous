# Docker image name
IMAGE_NAME = artplace-mongo

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run:
	docker run -d \
		--name artplace-mongo-container \
		-p 27017:27017 \
		-p 8000:8000 \
		-v artplace_mongo_data:/data/db \
		$(IMAGE_NAME)

# Stop the container
stop:
	docker stop artplace-mongo-container || true
	docker rm artplace-mongo-container || true

# Clean up (remove container and image)
clean: stop
	docker rmi $(IMAGE_NAME) || true
	docker volume rm artplace_mongo_data || true

# View logs
logs:
	docker logs -f artplace-mongo-container

# Execute bash shell in running container
shell:
	docker exec -it artplace-mongo-container bash

# Connect to MongoDB shell
mongo-shell:
	docker exec -it artplace-mongo-container mongosh

# Restart the container
restart: stop run

.PHONY: build run stop clean logs shell mongo-shell restart