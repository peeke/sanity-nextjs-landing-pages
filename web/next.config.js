const withCSS = require('@zeit/next-css')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
    sourceMap: !isProduction,
  },
  webpack(config, options) {
    config.resolve.modules = [path.resolve(__dirname, '.'), 'node_modules']
    return config
  }
})

module.exports = config
