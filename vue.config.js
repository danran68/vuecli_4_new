const path = require('path')
const webpack = require('webpack')
module.exports = {
  // publicPath: process.env.NODE_ENV === 'prod' ? '生产' : '测试',
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  pluginOptions: { // 添加第三方插件 less
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/base.less')
      ]
    }
  },

  configureWebpack: {
    plugins: [ // jQUERY
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },

  outputDir: 'dist', // build输出目录
  assetsDir: 'assets', // 静态资源目录（js, css, img）

  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8081',
    https: false, // 是否使用https协议
    hotOnly: false, // 是否开启热更新
    proxy: { // 跨域
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }

}
