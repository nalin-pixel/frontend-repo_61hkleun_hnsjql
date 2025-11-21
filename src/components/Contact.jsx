import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setDone(false)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      company: form.get('company') || undefined,
      service: form.get('service'),
      message: form.get('message') || undefined,
      source: 'web'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('No se pudo enviar. Inténtalo de nuevo.')
      setDone(true)
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Conversemos tu proyecto</h2>
            <p className="mt-3 text-slate-300/80">Cuéntanos sobre tu negocio y agenda una demo personalizada.</p>
            <div className="mt-6 space-y-3 text-slate-300/70 text-sm">
              <p>• Respuesta en 24h hábiles</p>
              <p>• NDA y privacidad garantizada</p>
              <p>• Equipo senior a tu disposición</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300/80 mb-1">Nombre</label>
                <input name="name" required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-1">Teléfono / WhatsApp</label>
                <input name="phone" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-1">Empresa</label>
                <input name="company" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300/80 mb-1">Servicio</label>
                <select name="service" required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Bots IA (WhatsApp/Instagram)">Bots IA (WhatsApp/Instagram)</option>
                  <option value="Automatización de procesos">Automatización de procesos</option>
                  <option value="Páginas web">Páginas web</option>
                  <option value="Aplicaciones a medida">Aplicaciones a medida</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300/80 mb-1">Mensaje</label>
                <textarea name="message" rows="4" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
            {done && <p className="mt-4 text-green-400 text-sm">¡Gracias! Te contactaremos pronto.</p>}

            <button disabled={loading} className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-medium">
              {loading ? 'Enviando…' : 'Enviar' }
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
