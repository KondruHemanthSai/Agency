import { motion, useCallback } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

// Magnetic button hook
function useMagneticHover() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { ref, position, handleMouseMove, handleMouseLeave };
}

export function FinalCTA() {
  const magnetic = useMagneticHover();

  return (
    <section className="relative py-20 md:py-28 lg:py-36" id="final-cta">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-14 lg:p-20"
        >
          {/* Background glow effects */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4F8EF7]/[0.06] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#4F8EF7]/[0.04] rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />

          {/* Subtle gradient border line at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 mb-8"
            >
              <Sparkles size={24} className="text-[#4F8EF7]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Build Something{" "}
              <span className="gradient-text">Great?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#999] mb-10 max-w-xl mx-auto"
            >
              Let's discuss how we can help you launch faster, look premium, and scale your online presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Magnetic CTA button */}
              <motion.div
                animate={{ x: magnetic.position.x, y: magnetic.position.y }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
              >
                <a
                  ref={magnetic.ref}
                  href="https://cal.com/buildoholics"
                  onMouseMove={magnetic.handleMouseMove}
                  onMouseLeave={magnetic.handleMouseLeave}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#4F8EF7] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow group"
                  id="final-cta-button"
                >
                  <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  Book a Free Call
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

              {/* Urgency line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-[13px] text-[#777] flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Only <span className="text-white font-medium">3 client slots</span> open this month
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
