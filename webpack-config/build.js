const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const base = require('./base');

module.exports = webpackMerge(base, {
  entry: {
    app: process.cwd() + '/src/index.js',
    vendor: ['moment']
  },
  output: {
    filename: 'bundle.[chunkhash].js',
    path: process.cwd() + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin("bundle.[chunkhash].css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.[chunkhash].js"),
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    })
  ],
  resolve: {
    alias: {
      config: './../src/config/prod'
    }
  }
});
