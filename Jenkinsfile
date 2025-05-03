pipeline {
  agent any

  tools {
    nodejs "NodeJS-18" // Only if you've set up NodeJS tool in Jenkins
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run start'
      }
    }
    stage('Archive Build') {
      steps {
        archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
      }
    }
  }
}
