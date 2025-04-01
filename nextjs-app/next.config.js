/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  // Enable detailed error reporting
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
  // Add necessary transpilePackages for Sanity
  transpilePackages: ['@sanity/image-url', 'sanity'],
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
};

module.exports = nextConfig; 