import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [dtsPlugin(), react(), tsConfigPaths(), tailwindcss()],
  build: {
    lib: {
      name: "react-ui",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
});
