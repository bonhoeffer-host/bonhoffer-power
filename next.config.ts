import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
