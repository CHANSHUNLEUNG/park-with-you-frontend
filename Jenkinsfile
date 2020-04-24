pipeline {
    stages {
        stage('Build docker image') {
            steps {
                sh 'docker build -t tatp-react-frontend --build-arg http_proxy=http://hklxdv47:20101 --build-arg https_proxy=http://hklxdv47:20101 .'
            }
        }
        stage('Deploye React frontend') {
            steps {
                sh 'docker run -d -p 9200:80 --network=tatp --name react-dev tatp-react-frontend'
            }
        }
    }
}