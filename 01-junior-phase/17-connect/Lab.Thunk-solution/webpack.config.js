const {join} = require('path')

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}
