import { motion } from "framer-motion";

const SERVICES = [
  { icon: "⚡", label: "Electrical", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { icon: "☀️", label: "Solar", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { icon: "💧", label: "Borehole", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { icon: "🔧", label: "Plumbing", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
];

const BADGE_POSITIONS = [
  "top-[5%] left-[5%] md:top-[10%] md:left-[8%] animate-float",
  "top-[8%] right-[5%] md:top-[12%] md:right-[10%] animate-float-slow",
  "bottom-[8%] left-[5%] md:bottom-[15%] md:left-[8%] animate-float-reverse",
  "bottom-[5%] right-[5%] md:bottom-[10%] md:right-[8%] animate-float",
];

const FLOATING_ICONS = [
  { icon: "⚡", className: "top-[20%] left-[12%] text-xl md:text-2xl opacity-10 animate-float" },
  { icon: "☀️", className: "top-[30%] right-[15%] text-2xl md:text-3xl opacity-10 animate-float-slow" },
  { icon: "💧", className: "bottom-[30%] left-[15%] text-xl md:text-2xl opacity-10 animate-float-reverse" },
  { icon: "🔧", className: "bottom-[35%] right-[12%] text-lg md:text-xl opacity-10 animate-float" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

function ServicesHero() {
  return (
    <section
      id="services"
      className="snap-section relative min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating background icons */}
      {FLOATING_ICONS.map((item, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none select-none ${item.className}`}
        >
          {item.icon}
        </div>
      ))}

      {/* Subtle radial gradient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        {/* Section label */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
            Our Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-center font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Four Trades.
          <br />
          <span className="text-brand-orange">One Standard of Excellence.</span>
        </motion.h2>

        {/* Services badges - desktop layout with center visual */}
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
          {/* Center 3D isometric visual */}
          <motion.div
            className="relative z-10 w-24 h-24 md:w-36 md:h-36"
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full h-full relative" style={{ perspective: "600px" }}>
              {/* 3D cube/box visual */}
              <div
                className="absolute inset-0 transform-gpu"
                style={{
                  transform: "rotateX(30deg) rotateY(20deg) rotateZ(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front face */}
                <div className="absolute inset-0 border-2 border-brand-orange/30 rounded-xl bg-brand-orange/5 flex items-center justify-center">
                  <span className="text-3xl md:text-5xl">⚙️</span>
                </div>
                {/* Top face */}
                <div
                  className="absolute inset-0 border-2 border-brand-blue/30 rounded-xl bg-brand-blue/5"
                  style={{
                    transform: "translateZ(-20px) rotateY(0deg)",
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-brand-orange/10 blur-2xl rounded-full -z-10" />
          </motion.div>

          {/* Floating service badges */}
          <motion.div
            className="absolute inset-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.label}
                variants={staggerItem}
                className={`absolute ${BADGE_POSITIONS[i]} ${service.color} backdrop-blur-sm border rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 shadow-lg shadow-black/20 cursor-default hover:scale-110 transition-transform`}
              >
                <span className="text-lg md:text-xl">{service.icon}</span>
                <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row: pill tags + subtext */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Pill tags */}
          <div className="flex items-center gap-3">
            {["Certified", "Insured", "24/7"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
              >
                {tag === "Certified" && "✅ "}
                {tag === "Insured" && "🛡️ "}
                {tag === "24/7" && "🕐 "}
                {tag}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">
            <span className="text-brand-orange">From Our Team</span> to Your Site
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;