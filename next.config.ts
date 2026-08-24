import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf.geekdo-images.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'riurmvarowaexaglcrli.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ]
  }
};

export default nextConfig;
