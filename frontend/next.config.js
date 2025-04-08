/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'public_html',
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1'],
  },
  // Extensive dev-specific logging and source mapping
  webpack: (config) => {
    config.devtool = 'cheap-module-source-map';
    config.stats = 'verbose';
    return config;
  },
  // Additional development-specific configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;