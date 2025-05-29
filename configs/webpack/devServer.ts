import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import type { BuildOptions } from './types'

export const devServer = ({
  port,
  paths,
  mode,
}: BuildOptions): DevServerConfiguration => {
  return {
    port: port ?? '3000',
    open: true,
    static: {
      directory: mode === 'production' ? paths.output : paths.public,
    },
    compress: true,
    historyApiFallback: true,
  }
}
