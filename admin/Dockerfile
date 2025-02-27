FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
RUN apk add --no-cache python3 py3-pip make g++

COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy files
COPY . .

# Expose the  port
EXPOSE 4000

# Start the Application
CMD ["node", "index.js"]