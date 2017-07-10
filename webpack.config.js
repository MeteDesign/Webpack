/*
 *METE DESIGN WEBPACK V3.1 CONFIGURES
 *METE DESIGN GROUP
 *SUPERMAP METEOROLOGY DEPARTMENT
 *储奎
 *2017-07-10
*/
let webpack = require('webpack')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['lodash', 'moment']
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: './dist/'
  },

  // source map
  devtool: 'cheap-eval-source-map',
  // Chrome DevTools Workspaces 中的观察模式
  // devtool: "inline-source-map"

  // loader
  module: {
    rules: [
      // js or jsx loader
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            cacheDirectory: true
            // plugins: ['transform-runtime'] // 注意babel-plugin-transform-runtime包含了一个polyfill，将会导致shimming的常用方法没有作用！
          }
        }
      },
      // css loader
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      // images loader
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
      filename: 'index.html',
      template: './index.template.html',
      inject: 'body'
    }),
    // HMR热替换插件
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 指定公共 bundle 的名字。

    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ],

  // webpack dev server
  devServer: {
    // 文件路劲，一般静态文件需要
    contentBase: path.join(__dirname, 'dist'),
    // 是否启用gzip压缩
    compress: true,
    // 是否启用热替换
    hot: true,
    port: process.env.port || 80,
    // 开启任意ip访问
    host: '0.0.0.0',
    // 允许列表中host访问
    allowedHosts: ['192.168.19.61'],
    // 取消host列表安全检查，开发环境启用，默认关闭，开启则allowedHosts无效
    // disableHostCheck: true,
    // 关闭webpack重启打包信息，错误和警告仍然会显示
    noInfo: true,
    // 浏览器全屏显示编译器错误信息
    overlay: true,
    // 公共文件，浏览器可直接访问，HMR必须
    publicPath: '/'
  }
}
