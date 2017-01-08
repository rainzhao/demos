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
    ],
    resolve: {
      extensions: ['', '.js']
    }
  }
};