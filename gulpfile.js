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
            'sonar.coverage.exclusions': 'src/config/configDb.js',
            'sonar.exclusions': 'src/config/configDb.js'
        }
    }, callback);
});

gulp.task('sonar_dev', function(callback) {
sonarqubeScanner(
  {
    serverUrl : 'http://localhost:9000/',
    token : "d91d3cac450c090291fd2acf168a2538a1be61c1",
    options: {
      'sonar.projectName': 'bbog-dig-sd-event-data-product-lambda',
      'sonar.projectDescription': 'Description for "My App" project...',
    //   'sonar.sources': 'dist'
    //   'sonar.tests': './src/Test/*.js'
    }
  },
  () => process.exit()
)
});
