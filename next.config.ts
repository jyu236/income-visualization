import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',  // This will output to /docs
};

export default nextConfig;
