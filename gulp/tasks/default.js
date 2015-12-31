var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    paths = require('../config');

gulp.task('default', gulpSequence(
    'clean:dev',
    ['scripts:ts:dev', 'styles:sass:dev', 'assets:images:dev', 'assets:fonts:dev'],
    'watch:dev'
));

gulp.task('watch:dev', function() {
    //gulp.watch(paths.src.ts, ['scripts:ts:dev']); don't need this, Atom already does it
    gulp.watch(paths.src.sass, ['styles:sass:dev']);
    gulp.watch(paths.src.img, ['assets:images:dev']);
    gulp.watch(paths.src.fonts, ['assets:fonts:dev']);
    // add browsersync reload
});

/*
    What the default task (DEV) should do:
    1. Clean the build folder √
    2. Compile TS into JS in build folder √
    3. Compile SASS into CSS in build folder √
    4. Copy static assets to build folder √
        (should we skip this for dev?)
    5. Copy vendor stuff ?
        (should we skip this for dev?)
    6. Start a server with browsersync

    ?. Watch for TS changes -> compile to JS and reload
    ?. Watch for SASS changes -> compile to CSS and reload
    ?. Watch for HTML changes -> reload
        (is there a template plugin somewhere?)
*/
