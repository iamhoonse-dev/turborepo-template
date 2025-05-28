/// <reference types="vitest" />
import { defineConfig, type LibraryOptions } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { runWithGlob } from "@repo/helpers/runWithGlob";

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
    case "constants":
      return `constants/index.${format}.js`;
    case "styles":
      return `styles/index.${format}.js`;
    default:
      return `${entryName}/index.${format}.js`;
  }
};

/**
 * Predefined mappings for specific entry points to their corresponding names.
 */
const predefinedMappings = new Map([
  ["src/base/shadcn-ui/index.ts", "shadcn-ui"],
  ["src/lib/utils.ts", "utils"],
]);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dtsPlugin({ include: ["src"] }),
    react(),
    tsConfigPaths(),
    tailwindcss(),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      name: "react-ui",
      entry: Object.fromEntries(
        runWithGlob(
          "src/**/*.{ts,tsx}",
          (file) => [
            // 엔트리 이름
            (function nameMapping() {
              if (predefinedMappings.has(file)) {
                return predefinedMappings.get(file);
              }

              const fallbackName = file
                .replace(/^src\//, "")
                .replace(/index\.(ts|tsx)$/, "");

              if (!fallbackName) {
                throw new Error(
                  `Invalid entry name generated for file: ${file}`,
                );
              }

              return fallbackName;
            })(),
            // 절대 경로
            resolve(__dirname, file),
          ],
          ["src/**/*.{d,spec,stories}.{ts,tsx}"],
        ),
      ),
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
          if (chunkInfo.names.includes("react-ui.css")) {
            return "styles/base.css";
          }
          if (chunkInfo.names[0]) {
            return chunkInfo.names[0];
          }
          throw new Error(
            `No name found for chunkInfo. Details: ${JSON.stringify(chunkInfo)}`,
          );
        },
      },
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
});
