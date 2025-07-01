# Docker image and container names
IMAGE_NAME = artplace-dev
CONTAINER_NAME = artplace-dev-container

# Build the development environment
build:
	@echo "Building development environment..."
	docker build -t $(IMAGE_NAME) .

# Start interactive development container
run:
	@echo "Starting development container..."
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-p 27017:27017 \
		-v "$(PWD)":/workspace \
		-w /workspace \
		$(IMAGE_NAME) bash

# Start container in background (for longer sessions)
start:
	@echo "Starting container in background..."
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p 27017:27017 \
		-v "$(PWD)":/workspace \
		-w /workspace \
		$(IMAGE_NAME) \
		tail -f /dev/null

# Enter running container
shell:
	docker exec -it $(CONTAINER_NAME) bash

# Stop background container
stop:
	@echo "Stopping container..."
	docker stop $(CONTAINER_NAME) 2>/dev/null || true
	docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Start MongoDB in container (run this inside the container)
mongo-start:
	@echo "Starting MongoDB..."
	mongod --bind_ip_all --dbpath /data/db --logpath /var/log/mongodb.log --fork

# Connect to MongoDB shell
mongo:
	mongosh

# Clean up
clean: stop
	@echo "Cleaning up..."
	docker rmi $(IMAGE_NAME) 2>/dev/null || true

# Show help
help:
	@echo "Development Environment Commands:"
	@echo ""
	@echo "  build     - Build the development environment"
	@echo "  dev       - Start interactive development session (recommended)"
	@echo "  start     - Start container in background"
	@echo "  shell     - Enter running background container"
	@echo "  stop      - Stop background container"
	@echo "  clean     - Remove image and container"
	@echo ""
	@echo "Commands to use INSIDE the container:"
	@echo "  make mongo-start  - Start MongoDB"
	@echo "  make mongo        - Connect to MongoDB shell"
	@echo ""
	@echo "Quick start:"
	@echo "  1. make build"
	@echo "  2. make dev"
	@echo "  3. make mongo-start (inside container)"

.PHONY: build dev start shell stop mongo-start mongo clean help