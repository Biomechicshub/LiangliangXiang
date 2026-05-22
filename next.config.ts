import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export
  output: "export",
  images: {
    // Next.js image optimisation is not available in static export
    unoptimized: true,
  },
};

export default nextConfig;
