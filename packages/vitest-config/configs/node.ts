import { defineProject, mergeConfig } from "vitest/config";
import base from "@repo/vitest-config/base";

const node = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "node",
    },
  }),
);
export default node;
