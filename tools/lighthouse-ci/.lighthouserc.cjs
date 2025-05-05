const URLSs = require("./configs/target-urls/index.js");

module.exports = {
  ci: {
    collect: {
      url: URLSs,
      startServerCommand: "echo 'Server will be started by docker-compose'",
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

        /* Warnings for web */
        interactive: "off",
        "largest-contentful-paint": "off",
        "legacy-javascript": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
// export default config;
