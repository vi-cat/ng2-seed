var gulp = require('gulp'),
    paths = require('../config'),
    webpack = require('gulp-webpack');

/*  TS and JS operations */

gulp.task('scripts:ts:dev', function() {
    return gulp.src(paths.src.base)
    .pipe(webpack(require('../../webpack.config.js')))
    .pipe(gulp.dest(paths.env.dev));
});
