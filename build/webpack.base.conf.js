var path = require('path')
var root = path.resolve(__dirname, '../')
var autoprefixer = require('autoprefixer')
var conf = require('./config')
var webpack = require('webpack')
var postCSSAssets= require('postcss-assets');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSASS = new ExtractTextPlugin('app.css')
var bourbon = require('node-bourbon').includePaths;
var PostifyCssPlugin = require('postifycss-loader/plugin');


module.exports = {

  entry: conf.entry,
  output: conf.output,
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    fallback: [path.join(__dirname, '../node_modules')],

  },

  module: {
    preLoaders: [

      {
        test: /\.scss$$/,
        loaders: ['postcss'],
      },


    ],

    loaders: [ // Get executed when mathing file if found
      {
        test: /\.scss$/,
        loader :
        env.NODE_ENV == 'production'
        ? extractSASS.extract("css!postifycss!resolve-url!sass?sourceMap")
        : ("style!css?sourceMap!sass?sourceMap")

      },

      {
        test: /\.js$/,
        loaders: ['jsx-loader', 'babel'],
        include: root,
        exclude: /node_modules|libs/
      },

      {
        test: /\.html$/,
        loader: "html"
      },

      // for fonts send to dist when used
      {
        test: /\.(woff2?|eot|ttf|svg)(\?.*)?$/,
        loader: ['file'],
        include: [path.resolve(root, 'app/shared/fonts/')],
        query: {
          name: 'fonts/[name]-[hash:7].[ext]', //output of img
        }
      },

        //compress to data URL
        { test: /\.svg$/, include: [path.resolve(root, 'src/fonts/')],loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name]-[hash:7].[ext]' },
        { test: /\.woff$/, include: [path.resolve(root, 'src/fonts/')],loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name]-[hash:7].[ext]' },
        { test: /\.woff2$/, include: [path.resolve(root, 'src/fonts/')],loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name]-[hash:7].[ext]' },
        { test: /\.[ot]tf$/, include: [path.resolve(root, 'src/fonts/')],loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name]-[hash:7].[ext]' },
        { test: /\.eot$/, include: [path.resolve(root, 'src/fonts/')],loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name]-[hash:7].[ext]' },

      // for images compressed and send to dist when used
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loaders: [
          // 'file?hash=sha512&digest=hex&name=img/[name]-[hash].[ext]','image-webpack'
          'file?hash=sha512&digest=hex&name=img/[name]-[hash].[ext]'
        ],
      },



    ]
  },


 resolveUrlLoader: {

   },

  sassLoader: {
      data: "@import 'sharedVars.scss';", // TO be imported in every compile cycle (!no selector or it will be duplicated each time a new file compiles)
      includePaths: [
          path.resolve(root, "./app/shared/css"),
          bourbon,
          path.resolve(root, "./node_modules/susy/sass"),
      ] // allow to use only the name of the file to import in scss. Name get append to the matching path
  },


  plugins: [

    new PostifyCssPlugin({}),

    extractSASS,
    new webpack.optimize.DedupePlugin(),
  ],


  postcss: function () {

      return[autoprefixer({browsers: conf.support})]


  },




}





