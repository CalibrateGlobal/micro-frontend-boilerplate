const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
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
      name: 'appOne',
      filename: 'remoteEntry.js',
      exposes: {
        './AppOneIndex': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
