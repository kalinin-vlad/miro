import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import type { ModuleOptions } from 'webpack'

import type { BuildOptions } from './types'

export const loaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const { mode } = options

  const isDev = mode === 'development'

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: { icon: true },
      },
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [assetLoader, cssLoader, tsLoader, svgrLoader]
}
