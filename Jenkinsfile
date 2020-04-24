pipeline {
    agent { docker { image 'node:latest' } }
    stages {
        stage('echo version') {
            steps {
                sh 'npm --version'
            }
        }
    }
}