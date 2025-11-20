import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Herd from './components/Herd'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Herd />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Namuna Bhaisi Farm. All rights reserved.</p>
            <div className="text-sm text-slate-400">Made with care for animals, land, and people.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
