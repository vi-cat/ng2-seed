var gulp = require('gulp'),
    watch = require('gulp-watch'),
    ts = require('gulp-typescript'),
    webpack = require('gulp-webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path'),
    flatten = require('gulp-flatten'),
    paths = require('../config'),
    tsProject = ts.createProject('./tsconfig.json', { sortOutput: true });

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
    .pipe(sourcemaps.write({
        sourceRoot: function (file) {
          var sourceFile = path.join(file.cwd, file.sourceMap.file);
          return path.relative(path.dirname(sourceFile), file.cwd);
        }
    }))
    .pipe(flatten())
    .pipe(gulp.dest(paths.env.dev.js));
});

gulp.task('scripts:ts:watch:dev', function () {
  gulp.watch(paths.src.ts, ['scripts:ts:dev']);
});
