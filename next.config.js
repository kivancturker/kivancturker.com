/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  images: {
    domains: ['placehold.co'],
  },
};

module.exports = nextConfig;
