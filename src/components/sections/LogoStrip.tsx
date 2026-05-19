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

export function LogoStrip() {
  // Double the logos for seamless loop
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">


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

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center mx-10 sm:mx-14 flex-shrink-0"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
              ) : (
                <span className="text-lg sm:text-xl font-bold text-white/25 hover:text-white/50 transition-colors duration-500 tracking-wider" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {logo.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
