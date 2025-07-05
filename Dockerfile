# Use Python 3.12 as base image
FROM python:3.12-slim

# Set working directory
WORKDIR /scripts

# Install minimal system dependencies
RUN apt-get update && apt-get install -y \
    gnupg \
    wget \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Add MongoDB repository and install MongoDB
RUN wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
    && apt-get update \
    && apt-get install -y mongodb-org \
    && rm -rf /var/lib/apt/lists/*

# Create MongoDB data directory
RUN mkdir -p /data/db

# Copy and install Python requirements
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy your Python scripts and other files
COPY . .

# Simple startup script
RUN echo '#!/bin/bash\n\
mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db\n\
echo "MongoDB started on port 27017"\n\
# Keep container running by following the log\n\
tail -f /var/log/mongodb.log' > /start.sh && chmod +x /start.sh

# Expose MongoDB port and any Python app port
EXPOSE 27017 8000

ENTRYPOINT ["/start.sh"]