import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  images: {
  remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all images for now
      },
    ],
  },
    // Add trailing slash for better compatibility
  trailingSlash: false,
  
  // Skip type checking during build (if needed)
  typescript: {
    ignoreBuildErrors: false,
  },
  

};

export default nextConfig;