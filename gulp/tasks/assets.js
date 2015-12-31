var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    paths = require('../config');

/*  Static asset operations */

gulp.task('assets:dev', ['assets:images:dev', 'assets:fonts:dev']);

gulp.task('assets:images:dev', function() {
    return gulp.src(paths.src.img)
    .pipe(changed(paths.env.dev.img))
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(paths.env.dev.img))
});

gulp.task('assets:fonts:dev', function() {
    return gulp.src(paths.src.fonts)
    .pipe(changed(paths.env.dev.fonts))
    .pipe(gulp.dest(paths.env.dev.fonts))
});
