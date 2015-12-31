var gulp = require('gulp'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    paths = require('../config');

/* SASS and CSS operations */

gulp.task('styles:sass:dev', function() {
    gulp.src(paths.src.sass)
    .pipe(changed(paths.env.dev.base))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.env.dev.base))
});
