import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans snap-container">
      <Navbar />
      <Hero />

      {/* Placeholder sections for snap scrolling */}
      <section id="services" className="snap-section min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-gray-600 text-lg">Services section coming soon...</p>
      </section>
      <section id="process" className="snap-section min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-gray-600 text-lg">Process section coming soon...</p>
      </section>
      <section id="contact" className="snap-section min-h-screen bg-brand-bg flex items-center justify-center">
        <p className="text-gray-600 text-lg">Contact section coming soon...</p>
      </section>
    </div>
  );
}

export default App;