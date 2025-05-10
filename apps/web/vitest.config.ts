import { mergeConfig, defineProject, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import uiTestConfig from "@repo/vitest-config/ui";

export default mergeConfig(
  mergeConfig(
    uiTestConfig,
    defineConfig({
      test: {
        coverage: {
          provider: "v8",
          exclude: [
            "next.config.js",
            "vitest.config.ts",
            "eslint.config.js",
            ".next",
            "configs/**",
            "public/**",
          ],
        },
      },
    }),
  ),
  defineProject({
    plugins: [tsconfigPaths(), react()],
    test: { setupFiles: ["./tests/setup.ts"] },
  }),
);
