/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: true,
  },
  async redirects() {
    // Redirecciones 301 desde migrations/redirects.csv
    // (Implementar lógica de lectura si es necesario)
    return [];
  },
  images: {
    domains: ['www.duartec.es'],
  },
  experimental: {
    appDir: true,
  },
};

export default {
  /* ...tu config... */
};
