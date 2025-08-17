const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'main.js' },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ context: path.resolve(__dirname, 'src'), from: '*.html' }] })
  ],
  mode: 'production'
};


