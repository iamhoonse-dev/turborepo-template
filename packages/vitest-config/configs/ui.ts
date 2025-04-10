import { defineProject, mergeConfig } from "vitest/config";
import base from "./base.js";

const ui = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "jsdom",
    },
  }),
);
export default ui;
