/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false
  },
  compiler: {
    // Disable SWC transforms
    removeConsole: false,
    reactRemoveProperties: false,
    styledComponents: false
  },
  images: {
    domains: [],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig