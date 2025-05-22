import webpack from "webpack";
import { devServer } from "./devServer";
import { plugins } from "./plugins";
import { loaders } from "./loaders";
import { resolvers } from "./resolvers";
import { BuildOptions } from "./types";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },

    module: { rules: loaders(options) },
    devServer: devServer(options),
    plugins: plugins(options),
    resolve: resolvers(options),
  };
};
