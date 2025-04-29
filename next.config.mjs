import withTwin from './withTwin.mjs'

export default withTwin({
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: process.env.STRAPI_PROTOCOL,
        hostname: process.env.STRAPI_HOSTNAME,
      },
    ],
  },
})
