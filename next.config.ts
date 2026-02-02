

const nextConfig = {
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

module.exports = nextConfig