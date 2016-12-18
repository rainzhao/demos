const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const base = require('./base');


module.exports = webpackMerge(base, {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
      }
    ]
  },
  plugins: [

  ],
  resolve: {
    alias: {
      config: __dirname + '/../src/config/dev',
      vue: 'vue/dist/vue',
      router:  __dirname + '/../src/router',
      img:  __dirname + '/../src/img'
    }
  }
});
