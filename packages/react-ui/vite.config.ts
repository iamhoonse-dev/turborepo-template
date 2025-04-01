import { defineConfig, type LibraryOptions } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

/**
 * Generates the file name for the library based on the format and entry name.
 *
 * @param format - The format of the library (e.g., "es" or "cjs").
 * @param entryName - The name of the entry point.
 * @returns The generated file name.
 */
const fileName: Exclude<LibraryOptions["fileName"], string> = (
  format,
  entryName,
) => {
  switch (entryName) {
    case "shadcn-ui":
      return `base/shadcn-ui/index.${format}.js`;
    case "utils":
      return `lib/utils.${format}.js`;
    case "components":
      return `components/index.${format}.js`;
    case "styles":
      return `styles/index.${format}.js`;
    default:
      return `${entryName}/index.${format}.js`;
  }
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [dtsPlugin(), react(), tsConfigPaths(), tailwindcss()],
  build: {
    emptyOutDir: false,
    lib: {
      name: "react-ui",
      entry: {
        "shadcn-ui": resolve(__dirname, "src/base/shadcn-ui/index.ts"),
        utils: resolve(__dirname, "src/lib/utils.ts"),
        components: resolve(__dirname, "src/components/index.ts"),
        styles: resolve(__dirname, "src/styles/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        /**
         * Generates the asset file names for the library.
         *
         * @param chunkInfo - Information about the chunk being processed.
         */
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "react-ui.css") {
            return "styles/base.css";
          }
          return chunkInfo.name;
        },
      },
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
});
