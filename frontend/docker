
# frontend/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose React development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]