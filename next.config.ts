import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iv2jb3repd5xzuuy.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
  async rewrites() {
    const rewrites: Array<{ source: string; destination: string }> = [];

    const externalApiUrlService1 = process.env.EXTERNAL_API_URL_SERVICE1;
    if (externalApiUrlService1) {
      rewrites.push({
        source: '/api/service1/:path*',
        destination: `${externalApiUrlService1}/:path*`,
      });
    }
    
    return rewrites;
  },
};

export default nextConfig;