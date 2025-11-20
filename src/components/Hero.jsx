import { Leaf, Milestone } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),rgba(15,23,42,0))]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full ring-1 ring-emerald-400/30 text-sm mb-6">
              <Leaf size={16}/> Sustainably Raised • Fresh Dairy Daily
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Namuna Bhaisi Farm
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              A modern buffalo and cow farm committed to ethical animal care, clean milk production, and regenerative agriculture.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">Order Fresh Milk</a>
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition ring-1 ring-white/20">Learn More</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-slate-300 text-sm">Buffalo & Cattle</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-3xl font-bold text-white">1000L</p>
                <p className="text-slate-300 text-sm">Daily Capacity</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-slate-300 text-sm">Cold Chain</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-full"/>
            <img src="/hero-farm.jpg" alt="Farm hero" className="relative w-full rounded-2xl ring-1 ring-white/10 shadow-2xl object-cover max-h-[520px]" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop'}}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
