node {
    checkout scm
  try {
    stage('Build docker image') {
        sh 'docker build -t tatp-react-frontend --build-arg http_proxy=http://hklxdv47:20101 --build-arg https_proxy=http://hklxdv47:20101 .'
    }
    stage('Deploy') {
        sh 'docker container ls -a -fname=react-dev -q | xargs -r docker container rm --force'
        sh 'docker run --rm -d -p 9200:80 --network=tatp --name react-dev tatp-react-frontend'
        sh 'docker system prune -f'
    }
  }
  catch (err) {
    throw err
  }
}