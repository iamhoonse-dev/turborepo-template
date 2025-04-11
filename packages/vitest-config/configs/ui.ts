import { defineProject, mergeConfig } from "vitest/config";
import base from "@repo/vitest-config/base";

const ui = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "jsdom",
    },
  }),
);
export default ui;
