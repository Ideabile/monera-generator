var gulp = require('gulp'),
    fs = require('fs'),
    source = '/content/layouts/style/index.scss',
    destination = '/content/assets/css/',
    destinationPublic = process.env.WWW;

require('/style/Gulpfile')({
    origin: source,
    destination: destination,
    watch: ['/content/layouts/style/**/*.scss', '/style/src/**/*.scss'],
    gulp: gulp,
    browserSync: gulp.browserSync
  });

// Style task
gulp.task('style', ['sass'], function (cb) {
  console.log('Style compiled.');
  cb();
});

gulp.task('watch:style', ['watch:sass'], function (cb) {
  console.log('Running sass watcher.');
  cb();
});
