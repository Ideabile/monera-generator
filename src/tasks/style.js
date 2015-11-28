var gulp = require('gulp'),
    gulpSpawn = require('./../utils/gulp_spawn'),
    fs = require('fs'),
    main_dir = process.cwd(),
    source = main_dir+'/content/layouts/style/index.scss',
    destination = main_dir+'/content/assets/css/',
    destinationPublic = process.env.WWW;

// Style task
gulp.task('style', [], function (cb) {
  gulpSpawn(
    'monera-style',
    ['--origin='+source, '--destination='+destination ],
    function(){
      console.log('Style compiled.');
      if(cb) cb();
    }
  );
});
