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
      name: "http-clients",
      entry: {
        instances: resolve(__dirname, "src/instances/index.ts"),
        mocks: resolve(__dirname, "src/mocks/index.ts"),
        types: resolve(__dirname, "src/types/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve(__dirname, "src/") } },
});
