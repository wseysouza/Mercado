const withImages = require('next-images')
module.exports = withImages({
  webpack5: true,
  esModule: true,
  images: {
    domains: ['homol.classcode.com.br'],
    // disableStaticImages: true
  }
})

