import babelPluginMacros from 'babel-plugin-macros'
import babelPluginStyledComponents from 'babel-plugin-styled-components'
import * as path from 'path'
import * as url from 'url'
// import babelPluginTwin from 'babel-plugin-twin'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, 'styles'),
  path.resolve(__dirname, 'components'),
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'templates'),
]

export default function withTwin(nextConfig) {
  return {
    ...nextConfig,
    compiler: {
      ...nextConfig.compiler,
      styledComponents: true,
    },
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []

      config.module.rules.push({
        test: /\.(jsx|js)$/,
        include: includedDirs,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: options.dev,
              plugins: [
                // babelPluginTwin,
                babelPluginMacros,
                [babelPluginStyledComponents, { ssr: true, displayName: true }],
              ],
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function')
        return nextConfig.webpack(config, options)

      return config
    },
  }
}
