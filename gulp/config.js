module.exports = {
    root: './',
    src: {
        base: './src',
        appEntry: './src/bootstrap.ts'
    },
    env: {
      dev: './builds/dev',
      prod: './builds/prod'
    },
    tmp: {
        js: './builds/tmp'
    },
    webpack: {
      cfg: './webpack.config.js'
    }
};
