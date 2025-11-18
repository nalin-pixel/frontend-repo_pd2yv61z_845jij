import { Shield, Cpu, Activity, Lock, Compass, LineChart } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Zero-trust by design',
    desc: 'Policy-driven access with continuous verification and least privilege.'
  },
  {
    icon: Cpu,
    title: 'AI-driven detection',
    desc: 'Adaptive threat detection that learns from your environment.'
  },
  { icon: Activity, title: 'Real-time telemetry', desc: 'Unified signals across endpoints, identity, and network.' },
  { icon: Lock, title: 'Encrypted everywhere', desc: 'Built-in encryption at rest and in transit with strong defaults.' },
  { icon: Compass, title: 'Guided workflows', desc: 'Opinionated runbooks that reduce MTTR and human error.' },
  { icon: LineChart, title: 'Outcomes you can measure', desc: 'Risk reduction dashboards and ROI insights for leadership.' }
]

export default function Features({ locale }) {
  const t = {
    en: { heading: 'Why CyberOrigen', sub: 'Designed for scale, security, and speed.' },
    es: { heading: 'Por qué CyberOrigen', sub: 'Diseñado para escala, seguridad y velocidad.' }
  }[locale]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{t.heading}</h2>
          <p className="mt-2 text-slate-300">{t.sub}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 hover:border-slate-600 transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-blue-400" />
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
