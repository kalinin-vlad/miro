import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export const resolvers = ({
  paths,
}: BuildOptions): Configuration["resolve"] => ({
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@/*": paths.src,
  },
});
