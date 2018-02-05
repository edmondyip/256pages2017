const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: isProd ?
    false :
    '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': path.resolve(__dirname, '../src/assets/css/'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'json': path.resolve(__dirname, '../src/assets/json')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      // ...(config.dev.useEslint ? [{
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //     emitWarning: !config.dev.showEslintErrorsInOverlay
      //   }
      // }] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [resolve('src'), resolve('test')],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('data/[name].[hash:7].[ext]')
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('media/[name].[hash:7].[ext]')
          name: 'media/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(scss)(\?.*)?$/,
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/css/_global.scss')
        }
      },
      {
        test: /\.css$/,
        use: isProd ?
          ExtractTextPlugin.extract({
            use: 'css-loader?minimize',
            fallback: 'vue-style-loader'
          }) :
          ['css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ?
    [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css'
      })
    ] :
    [
      new FriendlyErrorsPlugin()
    ]
}
