import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const devServer = ({ port }: BuildOptions): DevServerConfiguration => ({
  port: port ?? "3000",
  open: true,
});
