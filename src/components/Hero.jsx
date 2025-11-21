export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-blue-500/40" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-cyan-400/40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              SaaS e IA para acelerar tu negocio
            </h1>
            <p className="mt-6 text-lg text-slate-200/80">
              En meypi developers creamos robots de IA para WhatsApp e Instagram, automatizamos procesos y construimos sitios web y aplicaciones a medida para impulsar tu crecimiento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
                Reserva una demo
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium">
                Ver servicios
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-300/70 text-sm">
              <span>Entrega rápida</span>
              <span>•</span>
              <span>Soporte dedicado</span>
              <span>•</span>
              <span>Escalable</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.25),transparent_35%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
