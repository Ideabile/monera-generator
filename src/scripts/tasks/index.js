var gulp = require('gulp'),
    clean = require('gulp-clean'),
    spawn = require('child_process').spawn,
    browserSync = require('browser-sync').create();

gulp.browserSync = browserSync;

// Utils
gulp.task('clean', function () {
  return gulp.src(process.env.WWW+'**/*')
             .pipe(clean({force: true}));
});

gulp.task('watch', ['browser-sync', 'watch:style', 'watch:static']);


// Build
gulp.task('build', ['clean', 'style', 'build-static'], function (cb) {
  console.log('Build done.');
  cb();
});

// Dev
gulp.task('dev-build', ['build', 'watch'], function(cb){
	gulp.watch(['/content/**/*'], ['build-static']);
  cb();
});

gulp.task('dev', [], function (cb) {
	var process;
	function restart() {
    console.log('Dev mode :-) Good work.');
		if (process) {
			process.kill();
		}

		process = spawn('./node_modules/.bin/gulp', ['dev-build'], {stdio: 'inherit'});
	}

	gulp.watch(['./scripts/**/*', 'Gulpfile.js', 'package.json'], restart);
	restart();
  cb();
});

gulp.task('default', ['build']);
