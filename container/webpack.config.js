const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve('src'), path.resolve('node_modules/yup')],
        use: [{loader: 'babel-loader'}],
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.ts$/, use: 'ts-loader'},
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        appOne: 'appOne@http://localhost:8081/remoteEntry.js',
        appTwo: 'appTwo@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
