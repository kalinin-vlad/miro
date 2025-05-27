import type webpack from 'webpack'

import type { BuildOptions } from './types'

import { plugins } from './plugins'
import { loaders } from './loaders'
import { devServer } from './devServer'
import { resolvers } from './resolvers'

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
      chunkFilename: '[name].[contenthash].js',
    },

    module: { rules: loaders(options) },
    devServer: devServer(options),
    plugins: plugins(options),
    resolve: resolvers(options),
  }
}
