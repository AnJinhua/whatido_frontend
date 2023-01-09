/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['donnysliststory.sfo3.cdn.digitaloceanspaces.com', 'localhost'],
  },
  compiler: {
    styledComponents: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});
