import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

/** @type {import('next').NextConfig} */
export const nextConfig = {
  // Set the output to "export" for static site generation
  output: "export",

  // set basePath to "/turborepo-template" to match the GitHub Pages deployment
  basePath: "/turborepo-template",

  // disable the default Next.js image optimization to avoid issues with GitHub Pages
  images: {
    unoptimized: true,
  },
};

/**
 * Next.js 에 Nextra를 통합한 설정 구성을 사용합니다.
 */
export default withNextra({
  ...nextConfig,
});
