import { Metadata } from 'next';
import Link from 'next/link';
import { Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Streaming 24h - Cámaras en directo',
  description: 'Cámaras en directo 24 horas desde pueblos de Burgos: Santo Domingo de Silos, Rabanera del Pinar, Pineda de la Sierra y Huerta de Arriba.',
};

const cams = [
  { slug: 'silos', name: 'Santo Domingo de Silos', desc: 'Vista en directo 24/7 de la localidad' },
  { slug: 'rabanera-del-pinar', name: 'Rabanera del Pinar', desc: 'Cámara panorámica con emisión continua' },
  { slug: 'pineda-de-la-sierra', name: 'Pineda de la Sierra', desc: 'Streaming en tiempo real del entorno' },
  { slug: 'huerta-de-arriba', name: 'Huerta de Arriba', desc: 'Emisión 24 horas del municipio' },
];

export default function StreamingIndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-10 h-10 text-sky-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">Cámaras en Directo 24h</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accede a nuestras cámaras de streaming en pueblos de Burgos.
          </p>
        </div>
      </section>

      {/* Reproductor destacado (YouTube) */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2FLLNsHmgxc"
            title="Rabanera del Pinar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cams.map((c) => (
            <Link
              key={c.slug}
              href={`/streaming/${c.slug}`}
              className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow hover:shadow-lg transition-shadow"
            >
              <div className="h-36 bg-gradient-to-br from-sky-200 to-blue-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                <Camera className="w-10 h-10 text-white opacity-90" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary dark:text-white group-hover:text-accent transition-colors">{c.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

