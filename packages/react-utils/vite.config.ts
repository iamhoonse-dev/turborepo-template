/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { preserveDirective } from "rollup-preserve-directives";
import { runWithGlob } from "@repo/helpers/runWithGlob";

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
      entry: Object.fromEntries(
        runWithGlob(
          "src/**/*.{ts,tsx}",
          (file) => [
            // 엔트리 이름
            file.replace(/^src\//, "").replace(/index\.(ts|tsx)$/, ""),
            // 절대 경로
            resolve(__dirname, file),
          ],
          ["src/**/*.{d,spec}.{ts,tsx}"],
        ),
      ),
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
