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
    return {
      beforeFiles: [
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
        // Quando acessar clube.aupusenergia.com.br com qualquer path, adicionar /clube antes
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
      ],
    };
  },
};

export default nextConfig;
