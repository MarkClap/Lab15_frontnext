import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Solo usar 'export' si necesitas archivos estáticos
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // Configuración especial para export estático
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  
  // Deshabilitar características que no funcionan con export
  experimental: {}
};

export default nextConfig;