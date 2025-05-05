const { WEB_URLS } = require("./web");

/**
 * URLs for Lighthouse CI
 */
const URLSs = [];

/*
  Merge all URLs from different applications into a single array.
 */
URLSs.push(...WEB_URLS);

/*
  export merged URLs for Lighthouse CI.
 */
module.exports = URLSs;
