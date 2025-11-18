import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ locale }) {
  const t = {
    en: {
      title: 'Big security. Smart origins.',
      subtitle:
        "CyberOrigen helps enterprises detect, defend, and evolve with intelligent security built for scale.",
      cta: 'Get started',
      secondary: 'See platform'
    },
    es: {
      title: 'Gran seguridad. Orígenes inteligentes.',
      subtitle:
        'CyberOrigen ayuda a las empresas a detectar, defender y evolucionar con seguridad inteligente a escala.',
      cta: 'Comenzar',
      secondary: 'Ver plataforma'
    }
  }

  const copy = t[locale]

  return (
    <section className="relative min-h-[88vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/60 via-[#0A0E27]/70 to-[#0A0E27] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-slate-200"
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <button className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium">
              {copy.cta}
            </button>
            <button className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-slate-700/70 text-slate-100 hover:bg-white/5 font-medium">
              {copy.secondary}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
