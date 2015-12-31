var gulp = require('gulp'),
    watch = require('gulp-watch'),
    ts = require('gulp-typescript'),
    webpack = require('gulp-webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path'),
    flatten = require('gulp-flatten'),
    paths = require('../config'),
    tsProject = ts.createProject('./tsconfig.json');

/*  TS and JS operations */

gulp.task('scripts:ts:prod', function() {
    return gulp.src(paths.src.base)
    .pipe(webpack(require('../../webpack.config.js')))
    .pipe(gulp.dest(paths.env.prod.js));
});

gulp.task('scripts:ts:dev', function() {
    var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

    return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.env.dev.base));
});
