import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev",
      },
    ],
  },
};

export default nextConfig;
