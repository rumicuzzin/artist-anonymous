# Use Python 3.12 as base image
FROM python:3.12-slim

# Set working directory
WORKDIR /workspace

# Install system dependencies including MongoDB
RUN apt-get update && apt-get install -y \
    gnupg \
    wget \
    curl \
    ca-certificates \
    vim \
    nano \
    git \
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
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Expose MongoDB port
EXPOSE 27017

# Default command
CMD ["bash"]