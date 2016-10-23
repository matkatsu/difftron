module.exports = {
  entry: './App/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /mode_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extentions: ['', '.js', '.jsx']
  },
};
