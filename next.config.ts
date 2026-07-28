import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bonhoeffermachines.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
