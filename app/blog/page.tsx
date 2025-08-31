import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Duartec Instalaciones Informáticas',
  description: 'Artículos técnicos sobre electricidad, informática, sonido y videovigilancia. Consejos profesionales y tendencias del sector.',
};

// Datos de los artículos del blog
const blogPosts = [
  {
    title: 'Cómo elegir el sistema de videovigilancia ideal para tu negocio',
    description: 'Guía completa para definir el alcance y criterios técnicos para elegir un sistema de CCTV en una empresa. Incluye análisis de necesidades, cumplimiento legal, selección de cámaras y mantenimiento.',
    slug: 'videovigilancia-sistema-ideal',
    category: 'Seguridad',
    image: '/images/proyectos/CCTV.jpeg',
    date: '2024-12-31',
    readTime: '8 min',
    excerpt: 'La elección de un sistema de videovigilancia para tu empresa es una decisión estratégica que requiere un análisis detallado de necesidades, riesgos y requisitos técnicos...'
  },
  {
    title: 'Ventajas de la iluminación LED en instalaciones comerciales',
    description: 'Descripción de beneficios técnicos, económicos y ambientales de migrar a LED y cómo especificar correctamente las instalaciones de iluminación comercial.',
    slug: 'iluminacion-led-comercial',
    category: 'Electricidad',
    image: '/images/proyectos/electricidad.jpeg',
    date: '2024-12-31',
    readTime: '7 min',
    excerpt: 'La migración a tecnología LED en instalaciones comerciales representa una de las inversiones más rentables que puede realizar una empresa...'
  },
  {
    title: 'Configuración de redes WiFi empresariales: mejores prácticas',
    description: 'Pautas para desplegar una red WiFi robusta y segura en empresa, incluyendo diseño basado en estudio de cobertura, arquitectura, seguridad y calidad de servicio.',
    slug: 'wifi-empresarial-mejores-practicas',
    category: 'Informática',
    image: '/images/proyectos/Informática.jpeg',
    date: '2024-12-31',
    readTime: '10 min',
    excerpt: 'El despliegue de una red WiFi empresarial robusta y segura requiere una planificación cuidadosa y la implementación de mejores prácticas probadas...'
  },
  {
    title: 'Sistemas de sonido profesional para eventos corporativos',
    description: 'Orientación para la selección e instalación de audio para eventos de empresa, incluyendo diseño del sistema, operación y cumplimiento normativo.',
    slug: 'sonido-profesional-eventos-corporativos',
    category: 'Sonido',
    image: '/images/proyectos/sonido.jpeg',
    date: '2024-12-31',
    readTime: '9 min',
    excerpt: 'Los eventos corporativos requieren sistemas de sonido que garanticen una experiencia auditiva excepcional y profesional...'
  },
  {
    title: 'Mantenimiento preventivo de equipos informáticos',
    description: 'Pautas para mantener la infraestructura IT en condiciones óptimas, incluyendo inventario, salud de equipos, continuidad y operación.',
    slug: 'mantenimiento-preventivo-informatica',
    category: 'Informática',
    image: '/images/proyectos/Informática.jpeg',
    date: '2024-12-31',
    readTime: '12 min',
    excerpt: 'El mantenimiento preventivo es la base de una infraestructura IT robusta y confiable...'
  },
  {
    title: 'Tendencias en seguridad electrónica para 2024',
    description: 'Panorámica de innovaciones relevantes en seguridad y videovigilancia, incluyendo analítica edge, ciberseguridad integrada y tecnologías emergentes.',
    slug: 'tendencias-seguridad-electronica-2024',
    category: 'Seguridad',
    image: '/images/proyectos/CCTV.jpeg',
    date: '2024-12-31',
    readTime: '15 min',
    excerpt: 'El sector de la seguridad electrónica está experimentando una transformación acelerada impulsada por la inteligencia artificial...'
  }
];

// Función para obtener el color de la categoría
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Seguridad':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'Electricidad':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Informática':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'Sonido':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
            Blog Técnico
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Artículos técnicos especializados sobre electricidad, informática, sonido y videovigilancia. 
            Consejos profesionales y tendencias del sector para mantenerte actualizado.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-slate-700">
              {/* Imagen del artículo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Categoría */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                {/* Metadatos */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Título */}
                <h2 className="text-xl font-bold mb-3 text-primary dark:text-white line-clamp-2">
                  {post.title}
                </h2>

                {/* Extracto */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Botón de lectura */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-accent-700 font-medium transition-colors"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-accent to-accent-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres recibir nuestros artículos?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Suscríbete para recibir las últimas novedades técnicas y consejos profesionales directamente en tu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <button className="px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
