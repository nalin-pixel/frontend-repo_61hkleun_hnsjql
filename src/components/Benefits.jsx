const benefits = [
  {
    title: 'Implementación en semanas, no meses',
    desc: 'Procesos ágiles y un stack moderno para entrar a producción rápidamente.'
  },
  {
    title: 'IA aplicada al negocio',
    desc: 'Modelos y flujos diseñados para objetivos concretos: leads, ventas, soporte, retención.'
  },
  {
    title: 'Enfoque en ROI',
    desc: 'Priorizamos el impacto en indicadores clave y automatizaciones que ahorran costos.'
  },
  {
    title: 'Acompañamiento continuo',
    desc: 'Soporte y evolución del producto en base a datos y feedback real.'
  }
]

export default function Benefits() {
  return (
    <section id="ventajas" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="text-xl font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-slate-300/80">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
