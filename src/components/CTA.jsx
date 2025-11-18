export default function CTA({ locale }) {
  const t = {
    en: {
      heading: 'Ready to modernize your security?'
    },
    es: {
      heading: '¿Listo para modernizar tu seguridad?'
    }
  }[locale]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {t.heading}
          </h3>
          <p className="mt-2 text-slate-300">
            {locale === 'en'
              ? 'Book a live demo with our team and see CyberOrigen in action.'
              : 'Reserva una demo en vivo con nuestro equipo y ve CyberOrigen en acción.'}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium"
            >
              {locale === 'en' ? 'Book on Calendly' : 'Reserva en Calendly'}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-slate-700/70 text-slate-100 hover:bg-white/5 font-medium"
            >
              {locale === 'en' ? 'Talk to sales' : 'Hablar con ventas'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
