var gulp = require('gulp'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence');

// Utils
gulp.task('clean', function () {
  return gulp.src(process.env.WWW+'**/*')
             .pipe(clean({force: true}));
});

// Build
gulp.task('build', ['clean', 'style', 'build-static'], function (cb) {
  runSequence('clean', 'style', 'build-static', cb);
  console.log('Build done.');
});

gulp.task('default', ['build']);
