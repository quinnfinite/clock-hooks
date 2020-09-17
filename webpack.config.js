const path = require('path');

module.exports = {
  entry: './client/src/App.jsx',
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\m?.jsx/,
      loader: 'babel-loader'
    }]
  }
}