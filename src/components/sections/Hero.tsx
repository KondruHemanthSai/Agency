import { GetStartedButton } from "@/components/ui/GradientButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const typewriterWords = ["websites", "content", "growth systems"];

function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}

// Particle component
function Particle({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/30"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Generate random particles
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 4,
}));

function TypewriterText() {
  const text = useTypewriter(typewriterWords, 100, 50, 2000);
  return <>{text}</>;
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      {/* Background Effects Removed to show EtheralShadow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Transparent container to preserve layout if needed, but effects are gone */}
      </div>

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >


          {/* Headline with Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
          >
            We build{" "}
            <span className="text-primary inline-block min-w-[200px] sm:min-w-[280px] md:min-w-[380px] text-left">
              <TypewriterText />
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
              />
            </span>
            <br className="hidden sm:block" />
            for startups.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Buildoholics helps startups and businesses launch fast, look premium,
            and grow online — from websites to marketing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <GetStartedButton />
            </Link>
          </motion.div>
        </motion.div>


      </motion.div>
    </section>
  );
}
