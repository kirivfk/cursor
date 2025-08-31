import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'Duartec Instalaciones Informáticas',
    template: '%s | Duartec',
  },
  description:
    'Instalación y mantenimiento de informática, videovigilancia, sonido, electricidad y cableados en Burgos y Castilla y León.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-white text-primary dark:bg-slate-900 dark:text-white min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        {/* Header aquí */}
        <main
          id="main-content"
          tabIndex={-1}
          className="outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {children}
        </main>
        {/* Footer aquí */}
      </body>
    </html>
  );
}
