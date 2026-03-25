import { withSentryConfig } from '@sentry/nextjs'
import withTwin from './withTwin.mjs'

const remotePatterns =
  process.env.STRAPI_PROTOCOL && process.env.STRAPI_HOSTNAME
    ? [
        {
          protocol: process.env.STRAPI_PROTOCOL,
          hostname: process.env.STRAPI_HOSTNAME,
          pathname: '/**',
        },
      ]
    : []

export default withSentryConfig(
  withTwin({
    reactStrictMode: true,
    images: {
      deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      qualities: [75, 100],
      remotePatterns,
    },
  }),
  {
    org: 'personal-kre',
    project: 'javascript-nextjs',

    silent: !process.env.CI,

    widenClientFileUpload: true,

    tunnelRoute: '/monitoring',

    webpack: {
      treeshake: {
        removeDebugLogging: true,
      },
      automaticVercelMonitors: true,
    },
  },
)
