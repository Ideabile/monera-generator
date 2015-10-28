var gulp = require('gulp'),
    fs = require('fs'),
    styleDir = __dirname+'/../../_layouts/style/',
    destDir = process.env.WWW+'css/';


//_origin, _destination, _watch
require('/style/Gulpfile')({
    origin: styleDir+'index.scss',
    destination: destDir,
    watch: [styleDir+'**/*.scss', '/style/src/**/*.scss'],
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
