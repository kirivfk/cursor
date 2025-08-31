import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'Duartec Instalaciones Informáticas - Burgos',
    template: '%s | Duartec Instalaciones Informáticas',
  },
  description:
    'Instalación y mantenimiento de informática, videovigilancia, sonido, electricidad y cableados en Burgos y Castilla y León. Soluciones integrales para empresas y particulares.',
  keywords: [
    'informática burgos',
    'videovigilancia burgos',
    'sonido profesional burgos',
    'electricidad burgos',
    'mantenimiento informático',
    'soporte técnico burgos',
    'instalaciones informáticas',
    'CCTV burgos',
    'redes informáticas',
    'Duartec'
  ],
  authors: [{ name: 'Duartec Instalaciones Informáticas' }],
  creator: 'Duartec Instalaciones Informáticas',
  publisher: 'Duartec Instalaciones Informáticas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://duartec.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Duartec Instalaciones Informáticas - Burgos',
    description: 'Soluciones integrales en informática, videovigilancia, sonido y electricidad en Burgos y Castilla y León.',
    url: 'https://duartec.es',
    siteName: 'Duartec Instalaciones Informáticas',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Duartec Instalaciones Informáticas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duartec Instalaciones Informáticas - Burgos',
    description: 'Soluciones integrales en informática, videovigilancia, sonido y electricidad en Burgos y Castilla y León.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verificacion-google',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-white text-primary dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded z-50">
          Saltar al contenido principal
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="outline-none focus-visible:ring-2 focus-visible:ring-accent flex-grow"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
