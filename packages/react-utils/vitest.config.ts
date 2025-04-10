import { mergeConfig } from "vite";
import { defineProject } from "vitest/config";
import uiTestConfig from "@repo/vitest-config/ui";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  mergeConfig(
    uiTestConfig,
    defineProject({ test: { setupFiles: ["./src/tests/setup.ts"] } }),
  ),
);
