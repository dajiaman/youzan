const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const IS_DEV = ['development'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PREVIEW ? '/youzan': '/' : '/',
  lintOnSave: IS_DEV,
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {
        prependData: ``,
        javascriptEnabled: true,
      },
    },
  },
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 生产环境的 source map
  productionSourceMap: !IS_PROD,

  parallel: require('os').cpus().length > 1,
  pwa: {},
}
