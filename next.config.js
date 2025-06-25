/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig