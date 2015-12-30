var gulp = require('gulp'),
    clean = require('gulp-clean'),
    paths = require('../config');

gulp.task('clean:dev', function() {
    return gulp.src(paths.env.dev, {
        read: false
    })
    .pipe(clean());
});
