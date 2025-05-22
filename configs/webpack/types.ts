export interface Paths {
  output: string;
  entry: string;
  html: string;
  src: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: Paths;
}
