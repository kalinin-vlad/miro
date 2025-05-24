import path from 'node:path'

import type { BuildMode, Paths } from './configs/webpack/types'

import { buildWebpack } from './configs/webpack/buildWebpack'

interface EnvVariables {
  mode: BuildMode
  port: number
}

const PATHS: Paths = {
  src: path.resolve(__dirname, 'src'),
  output: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: EnvVariables) =>
  buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths: PATHS,
  })
