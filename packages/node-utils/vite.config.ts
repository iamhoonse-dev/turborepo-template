/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { runWithGlob } from "@repo/helpers/runWithGlob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dtsPlugin({ include: ["src"] }), tsConfigPaths()],
  build: {
    ssr: true,
    emptyOutDir: false,
    rollupOptions: {
      input: Object.fromEntries(
        runWithGlob(
          "src/**/*.{ts,tsx}",
          (file) => [
            // 엔트리 이름
            file.replace(/^src\//, "").replace(/index\.(ts|tsx)$/, ""),
            // 절대 경로
            resolve(__dirname, file),
          ],
          ["src/**/*.{d,spec}.ts"],
        ),
      ),
      output: [
        {
          format: "es",
          dir: resolve(__dirname, "dist"),
          entryFileNames: ({ name }) => `${name}/index.es.js`,
        },
        {
          format: "cjs",
          dir: resolve(__dirname, "dist"),
          entryFileNames: ({ name }) => `${name}/index.cjs.js`,
        },
      ],
    },
  },
  resolve: { alias: { src: resolve(__dirname, "src/") } },
  ssr: process.env.NODE_ENV === "test" ? undefined : { noExternal: true },
});
