const withImages = require('next-images')
module.exports = withImages({
  webpack5: true,
  esModule: true,
  images: {
    domains: ['repos.multimercados.com.br'],
    // disableStaticImages: true
  }
})

