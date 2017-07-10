const webpack = require('webpack')
const path = require('path')

const outputPath = path.resolve('dll')

module.exports = {
  devtool: 'source-map',
  entry: ['moment', 'lodash'],

  output: {
    filename: '[name].dll.js',
    path: outputPath,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dll/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]'
    })
  ]
}
