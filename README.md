# DevOps “Hello World”

This repository showcases a minimal **Hello World** application (frontend + backend) with a strong emphasis on **DevOps practices**—including containerization, automated testing, and continuous deployment.

## Table of Contents
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Local Setup](#local-setup)  
5. [CI/CD Workflow](#cicd-workflow)
6. [Deployment](#deployment)  

---

## Overview
This project consists of:
- A minimal **backend** (Node.js/Express) that serves a basic “Hello from the server!” message.
- A simple **frontend** (React + Vite) that displays “Hello World” and optionally fetches the message from the backend.

While the application itself is simple, the goal is to demonstrate:
1. **CI/CD Pipelines** with GitHub Actions. 
2. **Containerization** using Docker.  
3. **Orchestration** with Kubernetes for a more advanced deployment approach.

---

## Tech Stack
- **Frontend**: React + Vite
- **Backend**: Node.js/Express 
- **CI/CD**: GitHub Actions
- **Containerization**: Docker  
- **Hosting**: AWS ECS
- **Orchestration**: Kubernetes for advanced orchestration

---

## Features
1. **Automated Testing**  
   Basic unit tests for frontend and backend, ensuring each commit maintains quality.
2. **Continuous Integration**  
   Every push triggers a pipeline to build, test, and (optionally) push container images.
3. **Containerized Deployment**  
   Both services run in Docker containers, facilitating easy scaling and portability.
4. **Scalable Setup**  
   Deploy to Kubernetes, showing how the app scales in a container orchestrator.

---

## Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **Docker** installed and running (if you plan to test containers locally).
- A GitHub account if you want to leverage the CI/CD pipeline.

### Local Setup
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yapzhanrui2/DevOps-Deployment.git
   cd devops-deployment
   ```

2. **Install Dependencies**
   Backend 
   ```bash
   cd server
   npm install
   ```

   Frontend
   ```bash
   cd hello-world
   npm install
   ```

3. **Run the Application (Local without Docker)**
   Backend
   ```bash
   cd server
   npm start
   ```
   By default, the backend will run on port 5172.

   Frontend
   ```bash
   cd hello-world
   npm run dev
   ```
   By default, the frontend will run on port 5173.

4. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`. You should see the “Hello World” message displayed and the backend message fetched.

## CI/CD Workflow

A sample GitHub Actions workflow file is included (e.g., .github/workflows/ci-cd.yml):

1.	**Build**
Checks out the repository, installs dependencies, and builds each service.
2.	**Test**
Runs unit tests for both frontend and backend. If any tests fail, the build fails.
3.	**Docker Build & Push**
Builds Docker images and pushes them to a registry (Docker Hub, GitHub Container Registry, or AWS ECR) once tests pass.

You can customize triggers (e.g., on push and pull_request events) or add environment-specific deployment steps.

## Deployment
Docker (Local or Cloud)

Backend Dockerfile and Frontend Dockerfile are included in their respective folders.
To build and run the containers locally:
```bash
cd server
docker build -t devops-backend .
docker run -p 5172:5172 devops-backend
```

Frontend Dockerfile is also included in the hello-world folder.
To build and run the container locally:
```bash
cd hello-world
docker build -t devops-frontend .
docker run -p 5173:5173 devops-frontend
```