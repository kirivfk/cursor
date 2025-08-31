import { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Camera, Volume2, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proyectos - Duartec Instalaciones Informáticas',
  description: 'Proyectos realizados por Duartec en Burgos. Instalaciones de informática, videovigilancia, sonido y electricidad.',
};

export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      title: 'Sistema de Videovigilancia para Empresa Industrial',
      description: 'Instalación completa de sistema CCTV con 16 cámaras IP para una empresa industrial en Burgos.',
      category: 'Videovigilancia',
      icon: Camera,
      color: 'green',
      year: '2023'
    },
    {
      id: 2,
      title: 'Red Informática para Oficinas',
      description: 'Configuración de red WiFi empresarial y cableado estructurado para oficinas corporativas.',
      category: 'Informática',
      icon: Monitor,
      color: 'blue',
      year: '2023'
    },
    {
      id: 3,
      title: 'Sistema de Sonido para Auditorio',
      description: 'Instalación de sistema de sonido profesional para auditorio municipal con capacidad para 200 personas.',
      category: 'Sonido',
      icon: Volume2,
      color: 'purple',
      year: '2022'
    },
    {
      id: 4,
      title: 'Instalación Eléctrica Comercial',
      description: 'Instalación eléctrica completa para centro comercial con iluminación LED y automatización.',
      category: 'Electricidad',
      icon: Zap,
      color: 'yellow',
      year: '2022'
    },
    {
      id: 5,
      title: 'Servidor y Backup para Clínica',
      description: 'Configuración de servidor Windows Server y sistema de backup automático para clínica médica.',
      category: 'Informática',
      icon: Monitor,
      color: 'blue',
      year: '2022'
    },
    {
      id: 6,
      title: 'Megafonía para Supermercado',
      description: 'Sistema de megafonía y música ambiental para cadena de supermercados en Burgos.',
      category: 'Sonido',
      icon: Volume2,
      color: 'purple',
      year: '2021'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de los proyectos más destacados que hemos realizado en Burgos y Castilla y León.
          </p>
        </div>
      </section>

      {/* Proyectos Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => {
            const IconComponent = proyecto.icon;
            return (
              <div key={proyecto.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className={`bg-${proyecto.color}-100 dark:bg-${proyecto.color}-900 p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${proyecto.color}-600 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {proyecto.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {proyecto.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {proyecto.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3 py-1 text-xs font-medium bg-${proyecto.color}-600 text-white rounded-full`}>
                      {proyecto.category}
                    </span>
                    <Link 
                      href={`/proyectos/${proyecto.id}`}
                      className="flex items-center text-accent hover:text-accent-700 text-sm font-medium transition-colors"
                    >
                      Ver detalles
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-gray-50 dark:bg-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Números</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Proyectos completados con éxito en los últimos años
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <p className="text-gray-600 dark:text-gray-300">Proyectos completados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-300">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-300">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-300">Soporte disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres ser nuestro próximo proyecto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contacta con nosotros para discutir tu proyecto y recibir un presupuesto personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Solicitar presupuesto
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
