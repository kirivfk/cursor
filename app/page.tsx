import Header from '../components/header';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Soluciones integrales en informática, videovigilancia, sonido y
          electricidad en Burgos
        </h1>
        <p className="text-lg mb-8">
          Instalación, mantenimiento y asesoramiento profesional para empresas y
          particulares. Calidad, experiencia y cercanía.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-accent text-white px-6 py-3 rounded font-semibold hover:bg-primary transition"
        >
          Solicita información
        </a>
      </section>
      <section className="max-w-5xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-900 shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Informática</h2>
          <p>
            Equipos, redes, soporte y mantenimiento para tu empresa o negocio.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Videovigilancia (CCTV)</h2>
          <p>
            Instalación y gestión de sistemas de videovigilancia y seguridad.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Sonido y Electricidad</h2>
          <p>
            Soluciones de audio profesional, cableados y electricidad para todo
            tipo de espacios.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
