/**
 * This is the origin of the web app.
 */
export const ORIGIN = process.env.CI
  ? "http://web:3000"
  : "http://localhost:3000";
