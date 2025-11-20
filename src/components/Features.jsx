import { Milk, Sprout, ShieldCheck, Thermometer, Droplets, Tractor } from 'lucide-react'

const features = [
  { icon: Milk, title: 'Pure A2 Milk', desc: 'Unadulterated, antibiotic-free milk from well-cared buffalo and cows.' },
  { icon: Thermometer, title: 'Cold Chain', desc: 'Chilled within minutes of milking to preserve freshness and nutrients.' },
  { icon: ShieldCheck, title: 'Hygienic Milking', desc: 'Automated milking and stainless steel lines for a clean process.' },
  { icon: Droplets, title: 'Clean Water', desc: 'RO filtered water and regular sanitation keep the herd healthy.' },
  { icon: Sprout, title: 'Own Fodder', desc: 'Home-grown green fodder and balanced diet ensure rich milk.' },
  { icon: Tractor, title: 'Agri Services', desc: 'Field prep, compost, and training for local farmers and youth.' }
]

function Features() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Offer</h2>
          <p className="mt-3 text-slate-300">Products and services designed for quality, health, and community impact.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 hover:ring-emerald-400/40 transition">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-4">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
