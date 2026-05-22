import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export
  output: "export",
  // User page (Biomechicshub.github.io) — no basePath needed
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
