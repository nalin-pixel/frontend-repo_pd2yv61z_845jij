export default function Stats({ locale }) {
  const t = {
    en: {
      items: [
        { k: '2.5x', v: 'Faster time-to-detect' },
        { k: '98.9%', v: 'Detection precision' },
        { k: '70%', v: 'MTTR reduction' },
        { k: '120+', v: 'Integrations' }
      ]
    },
    es: {
      items: [
        { k: '2.5x', v: 'Detección más rápida' },
        { k: '98.9%', v: 'Precisión de detección' },
        { k: '70%', v: 'Reducción de MTTR' },
        { k: '120+', v: 'Integraciones' }
      ]
    }
  }[locale]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {t.items.map((item) => (
            <div key={item.v} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 text-center">
              <div className="text-2xl font-semibold text-white">{item.k}</div>
              <div className="mt-1 text-slate-300 text-sm">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
