# Docker compose project name
PROJECT_NAME = artplace

# Build all services
build:
	@echo "Building all services..."
	docker-compose build

# Build individual services
build-backend:
	@echo "Building backend service..."
	docker-compose build backend

build-frontend:
	@echo "Building frontend service..."
	docker-compose build frontend

# Start all services (development mode)
dev:
	@echo "Starting development environment..."
	docker-compose up --build

# Start services in background
start:
	@echo "Starting services in background..."
	docker-compose up -d --build

# Stop all services
stop:
	@echo "Stopping all services..."
	docker-compose down

# Restart all services
restart:
	@echo "Restarting all services..."
	docker-compose restart

# View logs from all services
logs:
	docker-compose logs -f

# View logs from specific services
logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

logs-mongodb:
	docker-compose logs -f mongodb

# Enter shell in running containers
shell-backend:
	docker-compose exec backend bash

shell-frontend:
	docker-compose exec frontend sh

# Connect to MongoDB shell
mongo:
	docker-compose exec mongodb mongosh artplace

# Database operations
db-backup:
	@echo "Creating database backup..."
	docker-compose exec mongodb mongodump --db artplace --out /tmp/backup
	docker cp artplace-mongodb:/tmp/backup ./backups/

db-restore:
	@echo "Restoring database from backup..."
	docker cp ./backups/artplace artplace-mongodb:/tmp/restore/
	docker-compose exec mongodb mongorestore --db artplace /tmp/restore/artplace

# Clean up everything
clean:
	@echo "Cleaning up containers, images, and volumes..."
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -f

# Reset development environment
reset: clean build start

# Status of services
status:
	docker-compose ps

# Quick commands for development workflow
quick-restart-backend:
	docker-compose restart backend

quick-restart-frontend:
	docker-compose restart frontend

# Install dependencies (run when package.json or requirements.txt changes)
install-deps:
	@echo "Rebuilding services with fresh dependencies..."
	docker-compose build --no-cache

# Show help
help:
	@echo "ArtPlace Development Environment Commands:"
	@echo ""
	@echo "Main Commands:"
	@echo "  build           - Build all services"
	@echo "  dev             - Start development environment (recommended)"
	@echo "  start           - Start services in background"
	@echo "  stop            - Stop all services"
	@echo "  restart         - Restart all services"
	@echo "  status          - Show service status"
	@echo ""
	@echo "Individual Service Commands:"
	@echo "  build-backend   - Build only backend"
	@echo "  build-frontend  - Build only frontend"
	@echo "  shell-backend   - Enter backend container shell"
	@echo "  shell-frontend  - Enter frontend container shell"
	@echo ""
	@echo "Logging:"
	@echo "  logs            - View logs from all services"
	@echo "  logs-backend    - View backend logs"
	@echo "  logs-frontend   - View frontend logs"
	@echo "  logs-mongodb    - View MongoDB logs"
	@echo ""
	@echo "Database:"
	@echo "  mongo           - Connect to MongoDB shell"
	@echo "  db-backup       - Backup database"
	@echo "  db-restore      - Restore database"
	@echo ""
	@echo "Maintenance:"
	@echo "  install-deps    - Rebuild with fresh dependencies"
	@echo "  clean           - Remove all containers and images"
	@echo "  reset           - Clean and rebuild everything"
	@echo ""
	@echo "Quick Development Workflow:"
	@echo "  1. make build"
	@echo "  2. make dev"
	@echo "  3. Open browser: http://localhost:3000 (frontend)"
	@echo "  4. API available at: http://localhost:8000 (backend)"
	@echo "  5. MongoDB: localhost:27017"

.PHONY: build build-backend build-frontend dev start stop restart logs logs-backend logs-frontend logs-mongodb shell-backend shell-frontend mongo db-backup db-restore clean reset status quick-restart-backend quick-restart-frontend install-deps help