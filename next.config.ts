import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['localhost'], // بدون http:// أو port
    unoptimized: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;