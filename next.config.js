/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  experimental: {
    reactRoot: true,
    serverComponents: true,
  },
};

module.exports = nextConfig;
