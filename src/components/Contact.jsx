import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          subject: payload.subject || null,
          message: payload.message,
          preferred_visit_date: payload.preferred_visit_date || null,
        })
      })

      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus(`Thanks! We received your message. Ref: ${data.id}`)
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
            <p className="mt-3 text-slate-300">Order fresh milk, plan a visit, or ask anything about our herd and services.</p>
            <div className="mt-6 bg-white/5 rounded-xl p-6 ring-1 ring-white/10">
              <p className="text-white font-semibold">Location</p>
              <p className="text-slate-300 text-sm">Namuna Bhaisi Farm, Nepal</p>
              <div className="mt-4">
                <iframe className="w-full h-56 rounded-lg" loading="lazy" src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 ring-1 ring-white/10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
              <input name="email" required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
              <input name="preferred_visit_date" type="date" placeholder="Preferred visit date" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
            </div>
            <input name="subject" placeholder="Subject (optional)" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
            <textarea name="message" required rows="5" placeholder="Your message" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-emerald-400/40" />
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">Send Message</button>
            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
