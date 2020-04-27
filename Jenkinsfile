pipeline {
  agent any
  environment{
    DOCKER_IMAGE = 'tatp-react-frontend'
    DOCKER_NAME = 'react'
  }
  stages{
    stage('Build') {
      steps{
        checkout scm
        sh 'docker build -t ${DOCKER_IMAGE} --build-arg http_proxy=http://hklxdv47:20101 --build-arg https_proxy=http://hklxdv47:20101 .'
      }
    }
    stage('Deploy') {
      steps{
        sh 'docker container ls -a -fname=${DOCKER_NAME}-dev -q | xargs -r docker container rm --force'
        sh 'docker run --rm -d -p 9200:80 --name ${DOCKER_NAME}-dev ${DOCKER_IMAGE}'
        sh 'docker system prune -f'
      }
    }
    stage('Deploy to production'){
      steps{
        input "Deploy to prod?"
        sh 'docker container ls -a -fname=${DOCKER_NAME}-production -q | xargs -r docker container rm --force'
        sh 'docker run -d -p 80:80 --name ${DOCKER_NAME}-production -e REACT_APP_API_HOST=${REACT_APP_API_HOST} ${DOCKER_IMAGE}'
        sh 'docker system prune -f'
      }
    }
  }
}