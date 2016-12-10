const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ENV_PRODUCTION = process.env.NODE_ENV === 'production';
console.error(ENV_PRODUCTION);

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
        loader: ENV_PRODUCTION ? ExtractTextPlugin.extract('style', 'css!postcss!sass') : 'style!css?sourceMap!postcss!sass?sourceMap'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),
    new ExtractTextPlugin("app.css")
  ],
  postcss: function() {
    return [
      require('autoprefixer')({browsers: ['last 2 versions', 'iOS 7']})
    ]
  }
};