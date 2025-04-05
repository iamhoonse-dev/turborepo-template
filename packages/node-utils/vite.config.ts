import { defineConfig } from "vite";
import { resolve } from "path";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dtsPlugin(), tsConfigPaths()],
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        fs: resolve(__dirname, "src/fs/index.ts"),
        msw: resolve(__dirname, "src/msw/index.ts"),
        misc: resolve(__dirname, "src/misc/index.ts"),
      },
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
});
