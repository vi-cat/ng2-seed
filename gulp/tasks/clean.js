var gulp = require('gulp'),
    clean = require('gulp-clean'),
    config = require('../config');

gulp.task('clean:dev', function() {
    return gulp.src(config.paths.dev, {
        read: false
    })
    .pipe(clean());
});
