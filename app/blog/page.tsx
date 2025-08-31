import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Monitor, Camera, Volume2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Duartec Instalaciones Informáticas',
  description: 'Artículos y noticias sobre instalaciones informáticas, videovigilancia, sonido y electricidad en Burgos.',
};

export default function BlogPage() {
  const articulos = [
    {
      id: 1,
      title: 'Cómo elegir el sistema de videovigilancia ideal para tu negocio',
      excerpt: 'Descubre los factores clave a considerar al instalar un sistema de CCTV en tu empresa.',
      category: 'Videovigilancia',
      icon: Camera,
      color: 'green',
      date: '15 de Diciembre, 2023',
      author: 'Equipo Duartec',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Ventajas de la iluminación LED en instalaciones comerciales',
      excerpt: 'Conoce los beneficios económicos y ambientales de migrar a sistemas de iluminación LED.',
      category: 'Electricidad',
      icon: Zap,
      color: 'yellow',
      date: '10 de Diciembre, 2023',
      author: 'Equipo Duartec',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Configuración de redes WiFi empresariales: mejores prácticas',
      excerpt: 'Guía completa para implementar una red WiFi robusta y segura en tu empresa.',
      category: 'Informática',
      icon: Monitor,
      color: 'blue',
      date: '5 de Diciembre, 2023',
      author: 'Equipo Duartec',
      readTime: '7 min'
    },
    {
      id: 4,
      title: 'Sistemas de sonido profesional para eventos corporativos',
      excerpt: 'Todo lo que necesitas saber sobre la instalación de audio para eventos empresariales.',
      category: 'Sonido',
      icon: Volume2,
      color: 'purple',
      date: '1 de Diciembre, 2023',
      author: 'Equipo Duartec',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Mantenimiento preventivo de equipos informáticos',
      excerpt: 'Consejos para mantener tu infraestructura IT en óptimas condiciones.',
      category: 'Informática',
      icon: Monitor,
      color: 'blue',
      date: '25 de Noviembre, 2023',
      author: 'Equipo Duartec',
      readTime: '5 min'
    },
    {
      id: 6,
      title: 'Tendencias en seguridad electrónica para 2024',
      excerpt: 'Las últimas innovaciones en sistemas de seguridad y videovigilancia.',
      category: 'Videovigilancia',
      icon: Camera,
      color: 'green',
      date: '20 de Noviembre, 2023',
      author: 'Equipo Duartec',
      readTime: '8 min'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Artículos, consejos y novedades sobre instalaciones informáticas, videovigilancia, sonido y electricidad.
          </p>
        </div>
      </section>

      {/* Artículos Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo) => {
            const IconComponent = articulo.icon;
            return (
              <article key={articulo.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-${articulo.color}-100 dark:bg-${articulo.color}-900 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 text-${articulo.color}-600`} />
                    </div>
                    <span className={`inline-block px-3 py-1 text-xs font-medium bg-${articulo.color}-600 text-white rounded-full`}>
                      {articulo.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-primary dark:text-white line-clamp-2">
                    {articulo.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {articulo.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {articulo.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {articulo.author}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {articulo.readTime} de lectura
                    </span>
                    <Link 
                      href={`/blog/${articulo.id}`}
                      className="flex items-center text-accent hover:text-accent-700 text-sm font-medium transition-colors"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 dark:bg-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
            Suscríbete a nuestro blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Recibe las últimas noticias y consejos sobre instalaciones tecnológicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-slate-700 dark:text-white"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas ayuda con tu proyecto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestros expertos están aquí para ayudarte con cualquier consulta técnica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contactar expertos
            </Link>
            <a
              href="tel:+34947000000"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors duration-200"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
