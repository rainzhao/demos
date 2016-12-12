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
    },
    postcss: function() {
      return [
        require('autoprefixer')({browsers: ['last 2 versions', 'iOS 7']})
      ]
    }
  }
};