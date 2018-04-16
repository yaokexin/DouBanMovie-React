const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/js/main.js'),

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },



  
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      // 使用：/api/movie/in_theaters
      // 访问 ‘/api/movie/in_theaters’ ==> 'https://api.douban.com/v2/movie/in_theaters'
      '/api': {
        // 代理的目标服务器地址
        target: 'https://api.douban.com/v2',
        // https请求需要该设置
        secure: false,
        // 必须设置该项
        changeOrigin: true,
        // '/api/movie/in_theaters' 路径重写为：'/movie/in_theaters'
        pathRewrite: { "^/api": "" }
      }
    }
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {test:/\.css$/,use:['style-loader','css-loader']},
      { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader'}
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}