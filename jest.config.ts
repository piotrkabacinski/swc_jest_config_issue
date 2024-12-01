import type { Config } from "jest";
import { readFileSync } from "fs";

const swcConfig = JSON.parse(
  readFileSync(`${__dirname}/.swcrc`, "utf-8")
) as Record<string, unknown>;

const config: Config = {
  testEnvironment: "node",
  detectOpenHandles: true,
  maxWorkers: "85%",
  watch: false,
  testMatch: ["<rootDir>/**/*.test.ts"],
  forceExit: true,
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        ...swcConfig,
        exclude: [],
      },
    ],
  },
};

export default config;
