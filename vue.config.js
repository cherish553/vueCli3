const webpack = require('webpack')
module.exports = {
  // 打包的时候不打包.map文件
  productionSourceMap: false,
  publicPath: './',
  assetsDir: 'static',
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, //热加载
    port: 3000, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      // 'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
    }
  }
}