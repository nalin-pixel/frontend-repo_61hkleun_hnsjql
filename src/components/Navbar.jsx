import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Ventajas', href: '#ventajas' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="text-white font-semibold">meypi developers</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">
              Solicitar demo
            </a>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block px-2 py-2 rounded text-slate-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contacto" className="block text-center px-4 py-2 rounded-lg bg-blue-500 text-white" onClick={() => setOpen(false)}>
                Solicitar demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
