/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { preserveDirective } from "rollup-preserve-directives";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dtsPlugin({ include: ["src"] }),
    react(),
    tsConfigPaths(),
    preserveDirective(),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      name: "react-utils",
      entry: {
        hooks: resolve(__dirname, "src/hooks/index.ts"),
        hocs: resolve(__dirname, "src/hocs/index.ts"),
        providers: resolve(__dirname, "src/providers/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: { alias: { src: resolve(__dirname, "src/") } },
});
