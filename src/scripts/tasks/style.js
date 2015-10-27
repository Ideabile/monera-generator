var gulp = require('gulp'),
    fs = require('fs'),
    styleDir = __dirname+'/../../_layouts/style/',
    destDir = process.env.WWW+'css/';


//_origin, _destination, _watch
require('/style/Gulpfile')(
  styleDir+'index.scss',
  destDir,
  [styleDir+'**/*.scss', '/style/src/**/*.scss'],
  gulp,
  gulp.browserSync
);

// Style task
gulp.task('style', ['sass'], function (cb) {
  console.log('Style compiled.');
  cb();
});

gulp.task('watch:style', ['watch:sass'], function (cb) {
  console.log('Running sass watcher.');
  cb();
});
