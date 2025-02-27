# Node.js Microservices - Dockerized Setup

This repository contains three Node.js microservices that have been Dockerized for easy deployment. Each service runs inside its own container, and they are orchestrated using Docker Compose.

# Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

# Clone the Repository

git clone https://github.com/AnilBai/docker-task.git

cd docker-task


# Running the Services with Docker

To run the microservices using Docker, follow the steps below:

1. Build the Docker images  
Run the following command in the root directory:

docker-compose build


2. Start the services  
To bring up all microservices:

docker-compose up 

3. Running in detached mode  
If you want to run containers in the background:

docker-compose up -d


4. Check running containers  
To verify the containers are running:

docker ps


5. Stop the services  
To stop all running containers:

docker-compose down
