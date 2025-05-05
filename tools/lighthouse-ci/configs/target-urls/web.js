/**
 * Base URL for the application named 'web'.
 */
const WEB_BASE_URL = process.env.WEB_BASE_URL || "http://localhost:3000";

/**
 * URLs for the application named 'web'
 * which will be used for Lighthouse CI.
 */
const WEB_URLS = [`${WEB_BASE_URL}/`];

/*
  export URLs for Lighthouse CI.
 */
module.exports = { WEB_URLS };
