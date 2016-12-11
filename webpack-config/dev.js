const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist/assets',
    publicPath: '/assets'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
      }
    ]
  },
  plugins: [

  ],
  postcss: function() {
    return [
      require('autoprefixer')({browsers: ['last 2 versions', 'iOS 7']})
    ]
  }
};
