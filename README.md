# 🚀 End-to-End DevOps CI/CD Pipeline using Jenkins, Docker & Kubernetes

* Build → Test → Docker Build → Push → Deploy to K8s

## 📌 Overview

End-to-end CI/CD pipeline for a Node.js application using Jenkins, Docker, and Kubernetes on AWS EC2 with automated build, image push, and deployment.

---

## 🎯 Why this project?

This project was created to implement a complete CI/CD workflow that automates the application deployment process from code commit to production.

It demonstrates how tools like Jenkins, Docker, and Kubernetes can be integrated to reduce manual effort, improve deployment consistency, and enable faster and reliable releases.

The objective was to replicate a real-world DevOps pipeline used in modern application delivery.

---

## 🔄 CI/CD Workflow

1. Code pushed to GitHub
2. Jenkins triggers pipeline
3. Docker image built & pushed
4. Kubernetes deploys updated image

---

## 🏗️ Architecture

```
Developer → GitHub → Jenkins → Docker → Docker Hub → Kubernetes
```

---

## ⚙️ Tech Stack

* **Version Control:** GitHub
* **CI/CD Tool:** Jenkins
* **Containerization:** Docker
* **Container Registry:** Docker Hub
* **Orchestration:** Kubernetes (Minikube)
* **Cloud Platform:** AWS EC2
* **Application:** Node.js

---

## CI/CD Pipeline Workflow

1. Developer pushes code to GitHub
2. Jenkins pipeline is triggered
3. Jenkins pulls latest code
4. Docker image is built
5. Image is pushed to Docker Hub
6. Kubernetes deployment is updated
7. Application is deployed automatically

---

## 📁 Project Structure

```
devops-node-app/
│── app.js
│── package.json
│── Dockerfile
│── Jenkinsfile
│── deployment.yaml
│── service.yaml
│── README.md
```

---

## 🛠️ Docker Setup

### Build Image

```
docker build -t navab86/devops-app:latest .
```

### Run Container

```
docker run -d -p 3000:3000 navab86/devops-app:latest
```

---

## Jenkins Pipeline

The Jenkins pipeline automates:

* Code checkout from GitHub
* Docker image build
* Push image to Docker Hub
* Deployment to Kubernetes

---

## Kubernetes Deployment

### Apply Deployment

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Verify

```
kubectl get pods
kubectl get svc
```

---

## Access Application

```
minikube ip
```

Open in browser:

```
http://<minikube-ip>:30007
```

---

## 📸 Screenshots

* Docker image in Docker Hub
  <img width="1457" height="507" alt="image" src="https://github.com/user-attachments/assets/a251f97d-a238-425c-92c3-a0088eae976b" />

* Application output in browser
  <img width="1919" height="376" alt="image" src="https://github.com/user-attachments/assets/091658c4-9ed0-421d-9a2b-e510b8c734c7" />


---

## 🧠 Challenges Faced

* Jenkins permission issues with Docker daemon
* Kubernetes access issues due to kubeconfig permissions
* Minikube instability due to resource constraints
* Networking issues between Jenkins and Kubernetes

---

##  🧠  Key Learnings

* Built end-to-end CI/CD pipeline from scratch
* Gained hands-on experience with Jenkins, Docker, and Kubernetes
* Understood real-world DevOps troubleshooting scenarios
* Learned to debug infrastructure, permissions, and deployment issues

---

##  📌 Key Highlights

* Reduced manual deployment effort
* Automated CI/CD workflow
* Improved deployment consistency

---

##  🔐 Future Improvements

* Deploy on AWS EKS instead of Minikube
* Implement Infrastructure as Code using Terraform
* Add monitoring (Prometheus + Grafana)
* Implement rolling updates and auto-scaling

---

## Author

**Navab Jhon Shaik**
GitHub: https://github.com/navabjhon
