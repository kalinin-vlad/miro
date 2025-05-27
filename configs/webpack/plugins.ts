import ESlintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import type { Configuration } from 'webpack'

import type { BuildOptions } from './types'

export const plugins = ({
  paths,
  mode,
  analyzer,
}: BuildOptions): Configuration['plugins'] => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ESlintPlugin(),
  ]

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin())
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
