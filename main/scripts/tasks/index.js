var gulp = require('gulp'),
    clean = require('gulp-clean');

// Utils
gulp.task('clean', function () {
  return gulp.src(process.env.WWW+'**/*')
             .pipe(clean({force: true}));
});

// Build
gulp.task('build', ['clean', 'style', 'build-static'], function (cb) {
  console.log('Build done.');
  cb();
});

gulp.task('default', ['build']);
