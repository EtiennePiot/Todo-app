# Todo App Backend API

## Overview

The Todo App Backend API is a demonstration project that showcases a RESTful API for managing a todo list. This project is intended for testing and educational purposes, illustrating how to build, deploy, and run a backend service using modern development practices and tools.

## Features

- **Create Todo Items**: Easily add new tasks to your todo list.
- **Retrieve Todo Items**: Fetch a list of all tasks or a specific task by its ID.
- **Update Todo Items**: Modify the details of an existing task.
- **Delete Todo Items**: Remove tasks that are no longer relevant.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Docker Compose**: Used for defining and running multi-container Docker applications. With a single command, you can start all the services defined in the `docker-compose.yaml` file.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Docker and Docker Compose

### Installation

1. **Clone the Repository**

    ```sh
    git clone https://github.com/EtiennePiot/Todo-app.git
    cd Todo-app
    ```

2. **Install Dependencies**

    Inside the project directory, install the required npm packages:

    ```sh
    npm install
    ```

### Using Docker Compose

Docker Compose is used to simplify the deployment process. Ensure you have `docker-compose` installed and configured correctly.

1. **Start the Application**

    With the `docker-compose.yaml` file in place, start the application by running:

    ```sh
    docker-compose up
    ```

    This command starts all services defined in your `docker-compose.yaml`. Your backend API should now be running and accessible.

2. **Access the Application**

    Once the containers are up, your Todo App Backend should be accessible at `http://localhost:3000`.

3. **Stop the Application**

    To stop and remove all the containers, networks, and volumes created by `docker-compose up`, run:

    ```sh
    docker-compose down
    ```

    This command cleans up by stopping all the containers and removing them along with the networks and volumes they used.

## API Endpoints

- `GET /todos`: Fetch all todo items.
- `GET /todos/:id`: Fetch a single todo item by ID.
- `POST /todos`: Create a new todo item.
- `PUT /todos/:id`: Update a todo item by ID.
- `DELETE /todos/:id`: Delete a todo item by ID.

