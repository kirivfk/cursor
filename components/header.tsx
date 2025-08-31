import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white dark:bg-slate-900 shadow">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">Duartec</span>
      </div>
      <nav aria-label="Navegación principal">
        <ul className="flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/quienes-somos">Quiénes somos</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
