var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence(
    'clean:dev',
    ['scripts:ts:dev', 'styles:sass:dev']
));

/*
    What the default task (DEV) should do:
    1. Clean the build folder √
    2. Compile TS into JS in build folder √
    3. Compile SASS into CSS in build folder
    4. Copy static assets to build folder ?
        (should we skip this for dev?)
    5. Copy vendor stuff ?
        (should we skip this for dev?)
    6. Start a server with browsersync

    ?. Watch for TS changes -> compile to JS and reload
    ?. Watch for SASS changes -> compile to CSS and reload
    ?. Watch for HTML changes -> reload
        (is there a template plugin somewhere?)
*/
