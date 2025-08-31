export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-slate-100 dark:bg-slate-800 text-center text-sm mt-12">
      <div>
        Duartec Instalaciones Informáticas &copy; {new Date().getFullYear()} |
        Burgos, España
      </div>
      <nav className="mt-2">
        <a href="/legal/aviso-legal" className="mx-2 underline">
          Aviso legal
        </a>
        <a href="/legal/privacidad" className="mx-2 underline">
          Privacidad
        </a>
        <a href="/legal/cookies" className="mx-2 underline">
          Cookies
        </a>
      </nav>
    </footer>
  );
}
