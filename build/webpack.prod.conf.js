var config = require('./webpack.base.conf')
var webpack = require('webpack')
var validate = require('webpack-validator')



config.plugins = config.plugins.concat([

  // new webpack.optimize.UglifyJsPlugin({
  //   comments: false,
  //   compress: {
  //     warnings: false,
  //   }
  // }),
  new webpack.optimize.OccurenceOrderPlugin()
])

// // On modifier le loader CSS


 module.exports = config;

