/**
 *METE DESIGN WEBPACK V3.1 CONFIGURES
 *METE DESIGN GROUP
 *SUPERMAP METEOROLOGY DEPARTMENT
 *储奎 / KUI CHU
 *2017-07-10
*/

/**
 * module
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
/**
 * global variable of config
 */
// replace localhost with 0.0.0.0 if you want to access
// your app from wifi or a virtual machine
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const allowedHosts = ['192.168.19.61']
const sourcePath = path.join(__dirname, './src')
const distPath = path.join(__dirname, './dist')
const htmlTemplate = './index.template.ejs'
const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m'
  }
}
/**
 * webpack config
 */
module.exports = function (env) {
  const nodeEnv = env && env.production ? 'production' : 'development'
  const isProd = nodeEnv === 'production'
  /**
   * Mete Design Webpack V3.1 Buiding Informations
   */
  console.log('--------------Mete Design Webpack V3.1--------------')
  console.log('enviroment:' + nodeEnv)
  console.log('host:' + host)
  console.log('port:' + port)
  console.log('dist path:' + distPath)
  console.log('platform:' + env.platform)
  console.log('-----------------Mete Design Group------------------')
  /**
   * common plugin
   */
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      // vendor chunk
      name: 'vendor' // the name of bundle
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // setting production environment will strip out
    // some of the development code from the app
    // and libraries
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    // create css bundle
    new ExtractTextPlugin({filename: isProd ? 'css/[name]-[contenthash].css' : 'css/[name].css', allChunks: true}),

    // create index.html
    new HtmlWebpackPlugin({
      template: htmlTemplate,
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
    // new InlineManifestWebpackPlugin({
    //   name: 'webpackManifest'
    // }),
    // new InlineChunkManifestHtmlWebpackPlugin()
  ]
  if (isProd) {
    /**
     * production envrioment plugin
     */
    plugins.push(
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CleanWebpackPlugin(['dist']),
      new webpack.HashedModuleIdsPlugin(),
      // minify remove some of the dead code
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false,
         screw_ie8: true,
         conditionals: true,
         unused: true,
         comparisons: true,
         sequences: true,
         dead_code: true,
         evaluate: true,
         if_return: true,
         join_vars: true
       },
       mangle: false
     }))
  } else {
    /**
     * development enviroment plugin
     */
    plugins.push(
      // make hot reloading work
      new webpack.HotModuleReplacementPlugin(),
      // show module names instead of numbers in webpack stats
      new webpack.NamedModulesPlugin(),
      // don't spit out any errors in compiled assets
      new webpack.NoEmitOnErrorsPlugin(),
      // load DLL files
      new webpack.DllReferencePlugin({context: __dirname, manifest: require('./dll/react_manifest.json')}),
      new webpack.DllReferencePlugin({context: __dirname, manifest: require('./dll/react_dom_manifest.json')}),
      new webpack.DllReferencePlugin({context: __dirname, manifest: require('./dll/react_router_dom_manifest.json')}),
      // make DLL assets available for the app to download
      new AddAssetHtmlPlugin([
        { filepath: require.resolve('./dll/react.dll.js') },
        { filepath: require.resolve('./dll/react_dom.dll.js') },
        { filepath: require.resolve('./dll/react_router_dom.dll.js') }
      ])
    )
  }
  return {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    entry: {
      main: ['babel-polyfill', path.join(sourcePath, 'index.js')],
      // static lib
      vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
      filename: isProd ? 'js/[name]-[chunkhash].bundle.js' : 'js/[name].bundle.js',
      chunkFilename: isProd ? 'js/[id]-[chunkhash].bundle.js' : 'js/[id].bundle.js',
      path: distPath,
      publicPath: './'
    },
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
              presets: [['es2015', { 'modules': false }], 'react', 'stage-0'],
              cacheDirectory: true
              // Since babel-plugin-transform-runtime includes a polyfill that includes a custom regenerator runtime and core.js, the following usual shimming method using webpack.ProvidePlugin will not work:

            }
          }
        },
      // css loader
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                minimize: isProd
              }}],
            publicPath: '/'
          })
        },
      // scss loader
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            publicPath: '/',
            fallback: 'style-loader',
            use: [
              // {loader: 'autoprefixer-loader'},

              {
                loader: 'css-loader',
                options: {
                  // module: true, // css-loader 0.14.5 compatible
                  // modules: true
                  // localIdentName: '[hash:base64:5]'
                  // importLoaders: 1,
                  minimize: isProd
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // outputStyle: 'collapsed',
                  sourceMap: true,
                  includePaths: [sourcePath, path.join(__dirname, './src')]
                }
              }
            ]
          })
        },
      // images loader
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'url-loader?limit=8024&name=assets/images/[name]-[hash].[ext]'

        },
        {
          test: /\.(woff2?|otf|eot|ttf)$/i,
          loader: 'url-loader?limit=8024&name=assets/fonts/[name].[ext]',
          options: {
            publicPath: distPath
          }
        },
        {
          test: /\.md$/,
          loader: 'raw-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath]
    },

    plugins,

    stats,
    // webpack dev server
    devServer: {
    // 文件路劲，一般静态文件需要
      contentBase: path.join(__dirname, 'src'),
    // 是否启用gzip压缩
      compress: true,
    // 是否启用热替换
      hot: true,
      port,
    // 开启任意ip访问
      host,
    // 允许列表中host访问
      allowedHosts,
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
}
