const path = require('path');

module.exports = {
  entry: './app.js',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', 
        exclude: /(node_modules|bower_modules)/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 
};
