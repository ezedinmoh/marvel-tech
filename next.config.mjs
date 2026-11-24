/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/team/ezedin-mohammed',
        destination: '/team/ezedinmoh',
        permanent: true,
      },
      {
        source: '/services/web',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/software',
        destination: '/services/custom-software',
        permanent: true,
      },
      {
        source: '/services/erp',
        destination: '/services/erp-systems',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
