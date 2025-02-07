import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch errors in development

  images: {
    domains: ["cdn.sanity.io", "img.clerk.com"], // Allow images from Sanity & Clerk
  },

  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      path: false,
      stream: false,
      crypto: false
    };
    return config;
  },

  experimental: {
    serverComponentsExternalPackages: ["@xenova/transformers"], // Ensure correct syntax
  },
};

export default nextConfig;
