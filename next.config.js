/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    domains: ["images.unsplash.com", "wembleypark.com"],
  },
};

module.exports = nextConfig;
