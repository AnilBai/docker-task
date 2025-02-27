FROM node:20-alpine

# Set working directory 
WORKDIR /app

# Install dependencies 
RUN apk add --no-cache python3 py3-pip make g++

COPY package*.json ./

RUN npm install --omit=dev

# Copy files
COPY . .

# Expose the port
EXPOSE 3200

# Start the Application
CMD ["node", "client-steaming.js"]