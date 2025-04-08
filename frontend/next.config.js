const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'public_html',
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1'],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = 'source-map';
    }
    config.stats = 'verbose';
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],

  },
};

module.exports = nextConfig;
