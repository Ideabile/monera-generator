var gulp = require('gulp'),
    chug = require('gulp-chug'),
    fs = require('fs'),
    source = '/content/layouts/style/index.scss',
    destination = '/content/assets/css/',
    destinationPublic = process.env.WWW;


// Style task
gulp.task('style', function (cb) {
  console.log('Style compiled.');

  gulp.src( 'node_modules/monera-style/Gulpfile.js', {

        task: ['default'],
        args: ['--origin='+source, '--destination='+destination ]

      }).pipe( chug() );

  cb();
});

gulp.task('watch:style', ['watch:sass'], function (cb) {
  console.log('Running sass watcher.');
  cb();
});
