import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans snap-container">
      {/* Navbar placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-brand-bg/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange text-xl font-bold">⚡</span>
            <span className="font-bold text-lg">HubSoft Engineering</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Process</a>
            <a href="#" className="hover:text-white transition">Sectors</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:block">+263 713 472 072</span>
            <button className="bg-brand-orange hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition">
              Request a Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero section placeholder */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-brand-bg bg-grid">
        <div className="text-center z-10 px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Power That Works.
            <br />
            <span className="text-brand-orange">Water That Flows.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Electrical · Solar · Borehole · Plumbing — Certified Multi-Trade Engineering
          </motion.p>
          <motion.div
            className="inline-flex items-center gap-3 bg-brand-card/80 border border-white/10 rounded-xl px-5 py-3 text-sm text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-brand-orange font-semibold">24/7 Emergency Response</span>
            <span className="text-gray-600">—</span>
            <span>Dependable expertise from consultation to completion</span>
          </motion.div>
        </div>
      </section>

      {/* Placeholder spacer sections */}
      <section className="snap-section min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-gray-600 text-lg">Sections coming soon...</p>
      </section>
      <section className="snap-section min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-gray-600 text-lg">Sections coming soon...</p>
      </section>
    </div>
  );
}

export default App;