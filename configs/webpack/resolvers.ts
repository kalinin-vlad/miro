import type { Configuration } from 'webpack'

import type { BuildOptions } from './types'

export const resolvers = ({ paths }: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src,
    },
  }
}
