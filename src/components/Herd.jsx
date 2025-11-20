function Herd() {
  const gallery = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545467495-2831c7d23fbc?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461800919507-79b16743b257?q=80&w=1000&auto=format&fit=crop',
  ]
  return (
    <section id="herd" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Herd & Fields</h2>
          <p className="mt-3 text-slate-300">A glimpse into daily life at the farm — happy animals, green fields, and clean facilities.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt="Farm" className="w-full h-60 object-cover rounded-xl ring-1 ring-white/10 hover:ring-emerald-400/40 transition"/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Herd
