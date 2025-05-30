import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextra({
  ...nextConfig,
});
