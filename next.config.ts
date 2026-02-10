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
    ],
  },
  webpack: (config, { isServer }) => {
    // Configuração para o Dyad em desenvolvimento
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }

    // RESOLVE O ERRO 'fs' na Cloudflare/Edge
    if (!isServer) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            tls: false,
            crypto: false,
        };
    } else {
        // No servidor, também precisamos ignorar módulos que o pg-connection-string tenta dar require
        config.externals.push({
            'fs': 'commonjs fs',
            'net': 'commonjs net',
            'tls': 'commonjs tls',
        });
    }

    return config;
  },
  async rewrites() {
    const rewrites: Array<{ source: string; destination: string }> = [];

    const externalApiUrlService1 = process.env.EXTERNAL_API_URL_SERVICE1;
    const externalApiUrlService2 = process.env.EXTERNAL_API_URL_SERVICE2;
    const weatherApiUrl = process.env.WEATHER_API_URL;

    if (externalApiUrlService1) {
      rewrites.push({
        source: '/api/service1/:path*',
        destination: `${externalApiUrlService1}/:path*`,
      });
    }

    if (externalApiUrlService2) {
      rewrites.push({
        source: '/api/service2/:path*',
        destination: `${externalApiUrlService2}/:path*`,
      });
    }

    if (weatherApiUrl) {
      rewrites.push({
        source: '/api/weather/:path*',
        destination: `${weatherApiUrl}/:path*`,
      });
    }
    
    return rewrites;
  },
};

export default nextConfig;