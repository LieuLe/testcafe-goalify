const http = path.resolve(__dirname, 'node_modules/stream-http/index.js')

module.exports = {
  resolve: {
    alias: { http, https: http }
  }

  // the rest of your webpack config
}
