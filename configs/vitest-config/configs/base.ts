import { defineConfig } from "vitest/config";

const base = defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: [
        [
          "json",
          {
            file: `../coverage.json`,
          },
        ],
      ],
      enabled: true,
    },
  },
});
export default base;
