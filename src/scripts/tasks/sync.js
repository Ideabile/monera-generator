var gulp = require('gulp');

// Static server
gulp.task('browser-sync', function() {
    gulp.browserSync.init({
        server: {
            baseDir: process.env.WWW
        }
    });

    gulp.watch(process.env.WWW+'**/*.html').on('change', gulp.browserSync.reload);
});
