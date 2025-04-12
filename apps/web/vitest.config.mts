import { mergeConfig, defineProject } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import uiTestConfig from "@repo/vitest-config/ui";

export default mergeConfig(
  uiTestConfig,
  defineProject({
    plugins: [tsconfigPaths(), react()],
    test: { setupFiles: ["./tests/setup.ts"] },
  }),
);
