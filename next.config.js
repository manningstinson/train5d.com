/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' line to enable API routes
  distDir: 'public_html', // output directory
  
  // Add these for the cross-origin warning
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1'],
  },
};

module.exports = nextConfig;