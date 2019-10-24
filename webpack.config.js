const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config  = require('./src/utils/config.js')
// __dirname 指 webpack 目录

module.exports = {
  entry: {
    index: './src/index.js'
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' 
  },
  devtool: 'source-map', //方便ES6语法阅读
  module: {
    rules: [
      {
        test: /\.js$/, 
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node-modules'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(css|scss)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node-modules'),
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ] 
      }, 
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }, 
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: [ //url-loader 融合了 file-loade 的路径表示, 所以只用 url-loader
          { loader: 'url-loader', options: {limit: 3000,name: 'image/[name].[ext]'} },
          { loader: 'img-loader'}
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: { loader: 'file-loader?name=fonts/[name].[ext]' }
      },
      {
        test: /\.vue$/,
        use: [
          { loader: 'cache-loader' }, 
          { loader: 'thread-loader' },
          { loader: 'vue-loader', 
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            } 
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8088,
    contentBase: './dist',
    overlay: { error: true },
    proxy: { //跨域代理
      "/ysos": {
        target: 'https://www.darlang.com',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "^/ysos": ""
        }
      }
    },
    hot: true,
    clientLogLevel: 'none',
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html')
      }
    ),
    new VueLoaderPlugin()
    // new HtmlWebpackPlugin(
    //   {
    //     filename: 'pages/one.html', 
    //     template: './src/pages/one.html',
    //     title: 'one',
    //     chunk: ['one']
    //   }
    // )
  ]
}