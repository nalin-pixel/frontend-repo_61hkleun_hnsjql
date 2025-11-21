import { Bot, MessageSquare, Globe, Workflow, Smartphone, Code } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Bots IA para WhatsApp e Instagram',
    desc: 'Atiende, vende y automatiza conversaciones 24/7 con asistentes inteligentes integrados a tus canales sociales.'
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    desc: 'Optimiza tu operación conectando herramientas y creando flujos automáticos que ahorran tiempo y costos.'
  },
  {
    icon: Globe,
    title: 'Páginas web',
    desc: 'Sitios modernos, rápidos y orientados a conversión, con SEO y analítica listos desde el día uno.'
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones y programas a medida',
    desc: 'Desarrollo a medida para resolver necesidades específicas de tu negocio con tecnología escalable.'
  },
  {
    icon: MessageSquare,
    title: 'Integraciones y mensajería',
    desc: 'Conectamos APIs y plataformas de mensajería para que tu empresa se comunique sin fricciones.'
  },
  {
    icon: Code,
    title: 'Consultoría técnica',
    desc: 'Acompañamiento experto para definir estrategias tecnológicas y roadmap de producto.'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Servicios</h2>
          <p className="mt-3 text-slate-300/80">Soluciones completas para cada etapa de tu negocio</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Icon />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
