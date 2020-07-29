const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');


gulp.task('sonar', function(callback) {
    sonarqubeScanner({
        serverUrl: process.env.SONAR_CLOUD_ENDPOINT,
        token: process.env.SONAR_CLOUD_TOKEN,
        options: {
            'sonar.projectName': process.env.SONAR_CLOUD_PROJECT_NAME,
            'sonar.login': process.env.SONAR_CLOUD_TOKEN,
            'sonar.organization': process.env.SONAR_CLOUD_ORG,
            'sonar.projectKey': process.env.SONAR_CLOUD_PROJECT_KEY,
            'sonar.branch.name': process.env.CIRCLE_BRANCH,
            'sonar.language': 'js',
            'sonar.sources': 'src',
            'sonar.test.inclusions':'/src/test/*.js' ,
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.coverage.exclusions': 'src/Test/*.js,src/dbsource/dbsource.js,src/Service/sdAsync.js,src/models/RequestUsers.js,src/config/configDb.js,src/Services/sdAsync.js',
            'sonar.exclusions': 'src/dbsource/dbsource.js,src/config/ClsEnviroment.js'
        }
    }, callback);
});
