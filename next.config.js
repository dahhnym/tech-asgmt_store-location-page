/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const rewrites = async () => {
  return [
    {
      source: '/:path*',
      destination: 'http://127.0.0.1:4000/:path*',
    },
  ];
};

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'loremflickr.com',
      port: '',
      pathname: '/590/**',
    },
  ],
};

module.exports = { nextConfig, rewrites, images };
