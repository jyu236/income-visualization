import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',  // This will output to /docs
  basePath: '/income-visualization'
};

export default nextConfig;
