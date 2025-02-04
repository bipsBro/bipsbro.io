import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/bipsbro.io",
  images: { unoptimized: true },
};

export default nextConfig;
