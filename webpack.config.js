let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    // HTML模板插件
    // 配置选项参考 https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      title: 'Webpack Training',
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    })
  ]

}
