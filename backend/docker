# backend/Dockerfile
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install minimal system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy and install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy your Python application
COPY . .

# Expose your Python app port
EXPOSE 8000

# Start your Python application
CMD ["python", "app.py"]
