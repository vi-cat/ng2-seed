module.exports = {
    root: './',
    src: {
        base: './src',
        boot: './src/bootstrap.ts',
        ts: './scr/**/**.ts',
        sass: './src/**/**.scss'
    },
    env: {
      dev: {
          base: './builds/dev',
          js: './builds/dev/js',
          css: './builds/dev/css'
      },
      prod: {
          base: './builds/prod',
          js: './builds/prod/js',
          css: './builds/prod/css'
      }
    },
    tmp: {
        js: './builds/tmp'
    },
    webpack: {
      cfg: './webpack.config.js'
    }
};
