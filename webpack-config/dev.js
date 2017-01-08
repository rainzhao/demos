const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./base');


module.exports = webpackMerge(base, {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  },
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
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico'
    }),
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
