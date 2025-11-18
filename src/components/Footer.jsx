export default function Footer({ locale }) {
  const links = {
    en: ['Privacy', 'Security', 'Status', 'Docs'],
    es: ['Privacidad', 'Seguridad', 'Estado', 'Docs']
  }[locale]

  return (
    <footer className="pt-10 pb-12 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 ring-1 ring-white/10" />
          <span className="text-slate-300">© {new Date().getFullYear()} CyberOrigen</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white transition">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
