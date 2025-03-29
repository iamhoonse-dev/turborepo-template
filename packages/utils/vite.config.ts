import { defineConfig } from "vite";
import { resolve } from "path";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dtsPlugin({
      insertTypesEntry: true,
    }),
    tsConfigPaths(),
  ],
  build: {
    lib: {
      name: "utils",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve("src/") } },
});
