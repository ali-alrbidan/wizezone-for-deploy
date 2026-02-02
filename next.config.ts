import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // بدون http:// أو port
  },
};

export default nextConfig;