import { defineProject, mergeConfig } from "vitest/config";
import base from "./base.js";

const node = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "node",
    },
  }),
);
export default node;
