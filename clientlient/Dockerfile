FROM node:18-alpine

# Set working directory 
WORKDIR /app

# Install the required dependencies 
RUN apk update && apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    musl-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    giflib-dev \
    pixman-dev \
    pkgconfig \
    ttf-freefont \
    fontconfig \
    bash \
    build-base

RUN npm install -g nodemon

COPY package*.json ./

# Install dependencies 
RUN npm install --omit=dev

# Copy files
COPY . .

# Expose the port 
EXPOSE 3001

# Start the Application
CMD ["nodemon", "clientlient.js"]