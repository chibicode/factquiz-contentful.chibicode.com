const withCSS = require('@zeit/next-css')

const config = withCSS({
  env: {
    contentfulSpaceId: 'rrjgm5kj5vfg',
    contentfulDeliveryAPIToken: 'P-_zV0feS6OQA25F5hQQ6Kify9tT6RAAsKibGqNDLX4'
  }
})

module.exports = config
