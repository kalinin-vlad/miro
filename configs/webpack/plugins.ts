import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types";

export const plugins = ({
  paths,
  mode,
}: BuildOptions): Configuration["plugins"] => {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (mode === "development") {
  }

  if (mode === "production") {
  }

  return plugins;
};
