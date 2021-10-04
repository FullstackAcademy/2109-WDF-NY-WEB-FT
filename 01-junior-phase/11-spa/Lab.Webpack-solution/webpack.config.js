const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};