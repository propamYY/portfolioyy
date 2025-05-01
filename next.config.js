/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolioyy',
  assetPrefix: '/portfolioyy/',
};

module.exports = nextConfig; 