module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ],
    resolve: {
      extensions: ['', '.js']
    }
  }
};