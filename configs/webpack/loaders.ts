import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export const loaders = (options?: BuildOptions): ModuleOptions["rules"] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsLoader];
};
