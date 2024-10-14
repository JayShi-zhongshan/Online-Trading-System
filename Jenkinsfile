pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([azureServicePrincipal]) {
          sh 'kubectl apply -f kubernetes/deployment.yaml'
        }
      }
    }
  }
}
