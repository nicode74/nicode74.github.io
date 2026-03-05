import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  // Ensure assets are loaded correctly on GitHub Pages
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
};

export default nextConfig;
