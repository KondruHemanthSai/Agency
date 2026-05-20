import { motion } from "framer-motion";

const clientLogos = [
  { name: "Labouron", src: "/clients/labouron.png" },
  { name: "Oper9", src: "/clients/oper9.png" },
  { name: "Renuka", src: "/clients/renuka.png" },
  { name: "TechNova", text: "TechNova" },
  { name: "Vortex AI", text: "Vortex AI" },
  { name: "ScaleUp", text: "ScaleUp" },
  { name: "NeonLabs", text: "NeonLabs" },
  { name: "Flowstate", text: "Flowstate" },
];

function LogoSet() {
  return (
    <div className="logo-strip-set">
      {clientLogos.map((logo, i) => (
        <div key={i} className="logo-strip-item">
          {logo.src ? (
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-500 grayscale hover:grayscale-0"
            />
          ) : (
            <span
              className="text-xl font-bold text-white/40 hover:text-white/70 transition-colors duration-500 tracking-wider"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {logo.text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function LogoStrip() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden group">
      <style>{`
        .logo-strip-scroll {
          display: flex;
          width: fit-content;
          animation: logoMarquee 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .group:hover .logo-strip-scroll {
          animation-play-state: paused;
        }
        .logo-strip-set {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-strip-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 2.5rem;
        }
        @media (min-width: 640px) {
          .logo-strip-item { padding: 0 3.5rem; }
        }
        @keyframes logoMarquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#999]">
          Brands We've Worked With
        </span>
      </motion.div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="logo-strip-scroll">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}
