
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
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
        hostname: '**',
      },
    ],
  },
   
  trailingSlash: false,
  

  typescript: {
    ignoreBuildErrors: false,
  },
    experimental: {
    serverActions: {
      allowedOrigins: ['147.93.120.97:5000'],
    },
  },
  

};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
