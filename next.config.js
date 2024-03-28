/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com"],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
