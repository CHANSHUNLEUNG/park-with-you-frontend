pipeline {
  agent any
  environment{
    DOCKER_IMAGE = "tatp-react-frontend"
  }
  stages{
    stage('Build') {
      steps{
        checkout scm
        sh 'echo ${DOCKER_IMAGE}'
        sh 'docker build -t tatp-react-frontend --build-arg http_proxy=http://hklxdv47:20101 --build-arg https_proxy=http://hklxdv47:20101 .'
      }
    }
    stage('Deploy') {
      steps{
        sh 'docker container ls -a -fname=react-dev -q | xargs -r docker container rm --force'
        sh 'docker run --rm -d -p 9200:80 --network=tatp --name react-dev tatp-react-frontend'
        sh 'docker system prune -f'
      }
    }
    stage('Deploy to production'){
      steps{
        input "Deploy to prod?"
        sh 'docker container ls -a -fname=react-production -q | xargs -r docker container rm --force'
        sh 'docker run -d -p 80:80 --network=tatp-production --name react-production tatp-react-frontend'
        sh 'docker system prune -f'
      }
    }
  }
}