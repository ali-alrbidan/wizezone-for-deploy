

const nextConfig = {
    reactStrictMode: true,

  images: {
  remotePatterns: [
        {
        protocol: "http",
        hostname: "147.93.120.97",
        port: "5000",
        pathname: "/uploads/**",
      },
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
    experimental: {
    serverActions: {
      allowedOrigins: ['147.93.120.97:5000'],
    },
  },
  

};

module.exports = nextConfig