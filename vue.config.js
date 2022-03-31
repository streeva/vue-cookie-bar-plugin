const path = require('path')

module.exports = {
  css: { extract: false },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      'vue$',
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
    )
  },
}
