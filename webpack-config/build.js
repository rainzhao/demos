const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['moment']
  },
  output: {
    filename: 'bundle.js',
    path: './dist/assets',
    publicPath: '/assets'
  },
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
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  postcss: function() {
    return [
      require('autoprefixer')({browsers: ['last 2 versions', 'iOS 7']})
    ]
  }
};
