module.exports = {
    root: './',
    src: {
        base: 'src',
        boot: 'src/bootstrap.ts',
        ts: 'scr/**/**.ts',
        sass: 'src/**/**.scss',
        img: 'src/public/**/*.{jpg,jpeg,png,gif}',
        fonts: []
    },
    env: {
      dev: {
          base: './builds/dev',
          js: './builds/dev/js',
          css: './builds/dev/css',
          img: './builds/dev/img',
          fonts: './builds/dev/fonts'
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
