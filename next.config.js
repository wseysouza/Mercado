const withImages = require('next-images')
module.exports = withImages({
  webpack5: true,
  esModule: true,
  images: {
    disableStaticImages: true
  }
})
