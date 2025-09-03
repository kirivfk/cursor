/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Configuración de compresión
  compress: true,

  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },

  // Configuración de redirecciones
  async redirects() {
    return [];
  },

  // Configuración de rewrites
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

  // Configuración de webpack
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    // Configuración para SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Configuración de experimental features
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },

  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Configuración de output
  output: 'standalone',

  // Configuración de trailing slash
  trailingSlash: false,

  // Configuración de base path
  basePath: '',

  // Asset prefix: let Vercel/Next handle this automatically
  // Using a hard-coded domain breaks preview/staging deployments
  assetPrefix: '',

  // Configuración de powered by header
  poweredByHeader: false,

  // Configuración de react strict mode
  reactStrictMode: true,

  // Configuración de swc minify
  swcMinify: true,
};

import { withContentlayer } from 'next-contentlayer';

export default withContentlayer(nextConfig);
