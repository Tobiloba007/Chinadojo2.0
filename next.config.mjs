const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true
  },
  rewrites: async () => {
    return [
      {
        source: '/blog/:slug*(.*)',
        destination: '/blog/[slug]$1',
      },
    ];
  },
};


export default nextConfig;