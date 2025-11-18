import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { Menu } from 'lucide-react'

export default function Header({ locale, setLocale, brandingImage }) {
  const [imgError, setImgError] = useState(false)
  const nav = {
    en: ['Platform', 'Solutions', 'Pricing', 'Resources', 'Company'],
    es: ['Plataforma', 'Soluciones', 'Precios', 'Recursos', 'Empresa']
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur py-3 px-4">
          <div className="flex items-center gap-3">
            {!imgError && brandingImage ? (
              <img
                src={brandingImage}
                alt="CyberOrigen"
                onError={() => setImgError(true)}
                className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
              />
            ) : (
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 ring-1 ring-white/10 shadow-md" />
            )}
            <span className="font-semibold tracking-tight text-white">CyberOrigen</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {nav[locale].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher value={locale} onChange={setLocale} />
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
            >
              {locale === 'en' ? 'Book a demo' : 'Solicitar demo'}
            </a>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 text-slate-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
