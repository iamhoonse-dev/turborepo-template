/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dtsPlugin(), tsConfigPaths()],
  build: {
    emptyOutDir: false,
    lib: {
      name: "browser-utils",
      entry: {
        string: resolve(__dirname, "src/string/index.ts"),
        dom: resolve(__dirname, "src/dom/index.ts"),
        msw: resolve(__dirname, "src/msw/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve(__dirname, "src/") } },
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["json"],
    },
  },
});
