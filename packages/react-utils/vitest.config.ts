import { mergeConfig } from "vite";
import { defineProject } from "vitest/config";
import uiTestConfig from "@repo/vitest-config/ui";

export default mergeConfig(
  uiTestConfig,
  defineProject({ test: { setupFiles: ["./src/tests/setup.ts"] } }),
);
