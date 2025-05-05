const URLSs = require("./configs/target-urls/index.js");

module.exports = {
  ci: {
    collect: {
      url: URLSs,
      startServerCommand: "echo 'Server will be started by docker-compose'",
      settings: { chromeFlags: "--no-sandbox" },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        /* Errors for web */
        "bf-cache": "warn",
        "color-contrast": "warn",
        "heading-order": "warn",
        "offscreen-images": "warn",
        "unminified-javascript": "warn",
        "unused-javascript": "warn",
        "valid-source-maps": "warn",
        "errors-in-console": "warn",
        "redirects-http": "warn",

        /* Warnings for web */
        interactive: "warn",
        "largest-contentful-paint": "warn",
        "legacy-javascript": "warn",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
// export default config;
