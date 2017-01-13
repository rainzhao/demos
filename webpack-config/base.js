const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          minimize: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=10000&hash=sha512&digest=hex&name=img/[hash].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: process.cwd() + '/index.html',
      filename: 'index.html',
      favicon: 'favicon.ico'
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      vue: 'vue/dist/vue',
      router:  './../src/router',
      img:  './../src/img'
    }
  }
};