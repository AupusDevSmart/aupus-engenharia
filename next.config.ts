import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      // Quando acessar clube.aupusenergia.com.br, mostrar o conteúdo de /clube
      {
        source: '/:path*',
        destination: '/clube/:path*',
        has: [
          {
            type: 'host',
            value: 'clube.aupusenergia.com.br',
          },
        ],
      },
      // Para a raiz do subdomínio mostrar a página /clube
      {
        source: '/',
        destination: '/clube',
        has: [
          {
            type: 'host',
            value: 'clube.aupusenergia.com.br',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
