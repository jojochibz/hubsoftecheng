import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DOT_SECTIONS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Sectors", href: "#sectors" },
  { label: "Contact", href: "#contact" },
];

const FLOATING_ICONS = [
  { icon: "⚡", className: "top-[15%] left-[10%] animate-float text-2xl" },
  { icon: "☀️", className: "top-[20%] right-[12%] animate-float-slow text-3xl" },
  { icon: "💧", className: "bottom-[25%] left-[8%] animate-float-reverse text-2xl" },
  { icon: "🔧", className: "bottom-[30%] right-[10%] animate-float text-xl" },
];

function Hero() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = DOT_SECTIONS.map((s) =>
        document.querySelector(s.href)
      );
      let current = 0;
      sections.forEach((section, i) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = i;
          }
        }
      });
      setActiveDot(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="snap-section relative min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden"
    >
      {/* Dark grid texture */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* 3D perspective grid */}
      <div className="absolute inset-0 perspective-grid opacity-30" />

      {/* Floating engineering icons */}
      {FLOATING_ICONS.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.className} opacity-20 md:opacity-30 pointer-events-none select-none`}
        >
          {item.icon}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Certified Multi-Trade Engineering
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Power That Works.
          <br />
          <span className="text-brand-orange">Water That Flows.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Electrical · Solar · Borehole · Plumbing
          <br className="sm:hidden" />
          <span className="text-gray-500"> — </span>
          Certified Multi-Trade Engineering
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-orange/30 active:scale-95 text-sm md:text-base"
          >
            Get Your Free Quote
          </a>
          <a
            href="tel:+263713472072"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-brand-orange/40 text-gray-300 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all text-sm md:text-base"
          >
            <span className="text-brand-orange">📞</span>
            24/7 Emergency Callout
          </a>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          className="absolute bottom-8 left-4 sm:left-8 md:left-12 inline-flex items-center gap-3 bg-brand-card/90 border border-white/5 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 backdrop-blur-sm shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
            <span className="text-brand-orange text-sm">🛡️</span>
          </span>
          <div className="text-left">
            <span className="text-brand-orange font-semibold text-xs sm:text-sm block leading-tight">
              24/7 Emergency Response
            </span>
            <span className="text-gray-500 text-[11px] sm:text-xs block mt-0.5">
              Dependable expertise from consultation to completion
            </span>
          </div>
        </motion.div>
      </div>

      {/* Vertical dot navigation */}
      <nav className="dot-nav hidden md:flex">
        {DOT_SECTIONS.map((section, i) => (
          <a
            key={section.label}
            href={section.href}
            className="group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(section.href)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="dot-label group-hover:opacity-100 group-hover:translate-x-0">
              {section.label}
            </span>
            <span
              className={`dot ${i === activeDot ? "active" : ""}`}
            />
          </a>
        ))}
      </nav>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-4 h-7 border border-gray-600 rounded-full flex justify-center pt-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;