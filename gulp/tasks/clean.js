var gulp = require('gulp'),
    clean = require('gulp-clean'),
    paths = require('../config');

gulp.task('clean:dev', function() {
    return gulp.src(paths.env.dev.base, {
        read: false
    })
    .pipe(clean());
});
