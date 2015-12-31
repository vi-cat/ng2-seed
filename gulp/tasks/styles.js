var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    flatten = require('gulp-flatten'),
    paths = require('../config');

/* SASS and CSS operations */

gulp.task('styles:sass:dev', function() {
    gulp.src(paths.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.env.dev.base))
});
