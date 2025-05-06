const { WEB_URLS } = require("./web");

/**
 * URLs for Lighthouse CI
 */
const mergedURLs = [];

/*
  Merge all URLs from different applications into a single array.
 */
mergedURLs.push(...WEB_URLS);

/*
  export merged URLs for Lighthouse CI.
 */
module.exports = mergedURLs;
