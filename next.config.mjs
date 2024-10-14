/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'],
    },
    rewrites: [
      {
        source: '/blog/:slug*(.*)',
        destination: '/blog/[slug]$1',
      },
    ],
  };

export default nextConfig;
