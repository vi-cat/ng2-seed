var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    app: __dirname + '/src/app/bootstrap.ts',
    vendor: __dirname + '/src/vendor/vendor-scripts.ts',
  },

  output: {
    path: __dirname + '/builds/dev',
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[id].[hash].bundle.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    root: './src',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [{
        test: /\.ts$/,
        loader: 'ts-loader'
      }]
  }

};
