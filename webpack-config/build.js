const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const base = require('./base');

module.exports = webpackMerge(base, {
  entry: {
    app: './src/index.js',
    vendor: ['moment']
  },
  output: {
    filename: 'bundle.[chunkhash].js',
    path: './dist'
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
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(['dist/assets'], {
      root: process.cwd()
    })
  ],
  resolve: {
    alias: {
      config: __dirname + '/../src/config/prod',
      vue: 'vue/dist/vue',
      router:  __dirname + '/../src/router',
      img:  __dirname + '/../src/img'
    }
  }
});
