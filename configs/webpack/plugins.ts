import ESlintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import type { Configuration } from 'webpack'

import type { BuildOptions } from './types'

export const plugins = ({ paths, mode }: BuildOptions): Configuration['plugins'] => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ESlintPlugin(),
  ]

  if (mode === 'development') {
  }

  if (mode === 'production') {
  }

  return plugins
}
