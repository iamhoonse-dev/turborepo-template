import { config } from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  // exclude TypeScript specific rules
  // because we are not using TypeScript in this workspace
  { rules: { "@typescript-eslint/no-require-imports": "off" } },
];
