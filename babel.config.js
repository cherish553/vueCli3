module.exports = {
  presets: [
    '@vue/app',
    //添加 babel-preset-env 配置
    ['@babel/preset-env',{ 'modules': false } ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
