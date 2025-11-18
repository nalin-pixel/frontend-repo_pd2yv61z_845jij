import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher({ value, onChange }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/70 border border-slate-700/70 text-slate-100 hover:bg-slate-700/60 transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{value.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg bg-slate-900/95 backdrop-blur border border-slate-700 shadow-xl overflow-hidden">
          {['en', 'es'].map((lng) => (
            <button
              key={lng}
              onClick={() => {
                onChange(lng)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-800 ${
                value === lng ? 'text-white' : 'text-slate-300'
              }`}
            >
              {lng === 'en' ? 'English' : 'Español'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
