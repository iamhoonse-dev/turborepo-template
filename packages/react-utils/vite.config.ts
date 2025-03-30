import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [dtsPlugin(), react(), tsConfigPaths()],
  build: {
    lib: {
      name: "react-utils",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve(__dirname, "src/") } },
});
