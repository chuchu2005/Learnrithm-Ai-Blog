/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  // Add necessary transpilePackages for Sanity
  transpilePackages: ['@sanity/image-url', 'sanity', '@sanity/preview-kit'],
  // Add images configuration for Sanity
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Add webpack configuration to handle Sanity preview kit
  webpack: (config, { isServer }) => {
    // Add a rule to handle the problematic file
    config.module.rules.push({
      test: /LiveQueryProvider\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig; 