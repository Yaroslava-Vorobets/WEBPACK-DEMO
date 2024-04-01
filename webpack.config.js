const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // context: path.resolve(__dirname,'src',),
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
    },
    devServer: {
        port: 3000
    }
};