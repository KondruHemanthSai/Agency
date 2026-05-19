import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const swapWords = ["Websites", "Brands", "Growth", "Content"];

function useWordSwap(words: string[], interval = 2500) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return { word: words[currentIndex], index: currentIndex };
}

// Magnetic button hook
function useMagneticHover() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return { ref, position, handleMouseMove, handleMouseLeave };
}

export function Hero() {
  const { word } = useWordSwap(swapWords, 2200);
  const magnetic = useMagneticHover();

  // Staggered word animation for headline
  const headlineWords = ["We", "Build"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          {/* Small tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#999] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              B2B Agency for Startups
            </span>
          </motion.div>

          {/* Headline with word-swap */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5">
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Swapping word line */}
            <div className="overflow-hidden h-[1.15em] relative" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={word}
                  initial={{ y: 50, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -50, opacity: 0, rotateX: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center font-extrabold tracking-tight gradient-text"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {word}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              That Convert.
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="max-w-xl mx-auto text-[15px] sm:text-lg text-[#999] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We help startups launch 3x faster with high-performance websites,
            scroll-stopping content, and growth systems that deliver measurable ROI.
          </motion.p>

          {/* CTA button — magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ x: magnetic.position.x, y: magnetic.position.y }}
              transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
            >
              <a
                ref={magnetic.ref}
                href="https://cal.com/buildoholics"
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0a0a0a] text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 cta-glow group"
                id="hero-cta"
              >
                <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                Book a Free Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover"
                  />
                ))}
              </div>
              <span className="text-[13px] text-[#777]">
                Trusted by <span className="text-white font-medium">20+ startups</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
