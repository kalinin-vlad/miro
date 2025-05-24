import type { ModuleOptions } from 'webpack'

import type { BuildOptions } from './types'

export function loaders(options?: BuildOptions): ModuleOptions['rules'] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [tsLoader]
}
