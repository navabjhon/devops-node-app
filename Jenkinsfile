pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "navab86/devops-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/navabjhon/devops-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t navab86/devops-app:latest .'
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push navab86/devops-app:latest'
                    }    
            }
        }

        stage('Start Minikube') {
            steps {
                sh 'minikube status || minikube start --driver=docker --memory=2500 --cpus=2'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
