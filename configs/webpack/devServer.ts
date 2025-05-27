import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import type { BuildOptions } from './types'

export const devServer = ({
  port,
  paths,
}: BuildOptions): DevServerConfiguration => {
  return {
    port: port ?? '3000',
    open: true,
    static: {
      directory: paths.output,
    },
    compress: true,
    historyApiFallback: true,
  }
}
