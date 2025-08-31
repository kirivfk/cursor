import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import Breadcrumb from '../../../components/Breadcrumb';
import RelatedPosts from '../../../components/RelatedPosts';
import { blogPosts } from '../../../lib/blog-data';

// Los datos del blog se importan desde el archivo centralizado

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

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post: any) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe.'
    };
  }

  return {
    title: `${post.title} - Duartec Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post: any) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} />
          
          <div className="flex items-center mb-6">
            <Link 
              href="/blog"
              className="flex items-center text-accent hover:text-accent-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al blog
            </Link>
          </div>
          
          {/* Categoría */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
            {post.title}
          </h1>

          {/* Metadatos */}
          <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />
        </article>

        {/* Artículos relacionados */}
        <RelatedPosts 
          currentPost={post}
          allPosts={blogPosts}
          maxPosts={3}
        />

        {/* CTA Section */}
        <div className="mt-16 bg-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda con tu proyecto?
          </h3>
          <p className="text-lg mb-6 opacity-90">
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
