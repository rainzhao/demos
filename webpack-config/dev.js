const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./base');

module.exports = webpackMerge(base, {
  entry: process.cwd() + '/src/index.js',
  output: {
    filename: 'bundle.js'
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
      config: './../src/config/dev',
      vue: 'vue/dist/vue',
    }
  }
});
