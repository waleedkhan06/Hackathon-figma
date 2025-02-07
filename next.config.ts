import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch errors in development

  images: {
    domains: ["cdn.sanity.io", "img.clerk.com"], // Allow images from Sanity & Clerk
  },
};

export default nextConfig;
