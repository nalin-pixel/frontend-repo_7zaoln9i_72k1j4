import { Menu, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/farm-logo.png" alt="Namuna Bhaisi Farm" className="w-9 h-9 rounded-lg ring-2 ring-emerald-400/40" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <div>
              <p className="text-white font-semibold leading-tight">Namuna Bhaisi Farm</p>
              <p className="text-xs text-emerald-300/80">Buffalo & Cow • Agriculture</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#herd" className="text-slate-300 hover:text-white">Herd</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
            <a href="tel:+9779800000000" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"><Phone size={16}/> +977 98X XXX XXXX</a>
          </nav>

          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-3 space-y-2">
            <a href="#about" className="block text-slate-200">About</a>
            <a href="#services" className="block text-slate-200">Services</a>
            <a href="#herd" className="block text-slate-200">Herd</a>
            <a href="#contact" className="block text-slate-200">Contact</a>
            <a href="https://maps.app.goo.gl/" target="_blank" className="inline-flex items-center gap-2 text-emerald-300"><MapPin size={16}/> Get Directions</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
