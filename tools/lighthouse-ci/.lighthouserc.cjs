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
        "bf-cache": "off",
        "color-contrast": "off",
        "heading-order": "off",
        "offscreen-images": "off",
        "unminified-javascript": "off",
        "unused-javascript": "off",
        "valid-source-maps": "off",
        "errors-in-console": "off",
        "redirects-http": "off",

        /* Warnings for web */
        interactive: "off",
        "largest-contentful-paint": "off",
        "legacy-javascript": "off",
        "is-on-https": "off",
        "render-blocking-resources": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
// export default config;
