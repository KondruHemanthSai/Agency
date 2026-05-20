import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ArrowRight, Play, Image as ImageIcon, Palette } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Number Counter Hook
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easePercentage));
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return { count, ref };
};

const StatItem = ({ end, label, suffix = "", duration = 2000 }: { end: number, label: string, suffix?: string, duration?: number }) => {
  const { count, ref } = useCountUp(end, duration);
  
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
        {count}{suffix}
      </div>
      <div className="text-[#888] text-sm uppercase tracking-widest font-semibold">
        {label}
      </div>
    </div>
  );
};

const services = [
  {
    title: "Website Development",
    description: "Custom-built websites that load fast, look sharp, and convert visitors into clients.",
    tag: "WEB APP",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "web"
  },
  {
    title: "Landing Pages",
    description: "Single-page powerhouses engineered to turn ad clicks into booked calls.",
    tag: "CONVERSION",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "landing"
  },
  {
    title: "Social Media Creatives",
    description: "Reels, carousels, and stories your audience actually stops to watch.",
    tag: "CONTENT",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "social"
  },
  {
    title: "Short-form Video Editing",
    description: "Hook-first edits for Reels and TikToks built to hold attention and grow reach.",
    tag: "VIDEO",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "video"
  },
  {
    title: "Branding",
    description: "Logo, colors, typography, guidelines — everything to make your brand unmistakable.",
    tag: "DESIGN",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "branding"
  },
  {
    title: "Ads & Marketing",
    description: "Meta and Google campaigns that spend smart and bring real leads, not just clicks.",
    tag: "MARKETING",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "ads"
  },
  {
    title: "Monthly Management",
    description: "Your brand, maintained. We handle updates, content, and optimization month to month.",
    tag: "ONGOING",
    color: "text-[#4F8EF7]",
    gradient: "from-[#4F8EF7]/10 to-transparent",
    type: "management"
  }
];

const CardGraphic = ({ type, s }: { type: string, s: any }) => {
  return (
    <div className={`w-full aspect-[4/3] rounded-t-lg bg-gradient-to-br ${s.gradient} border-b border-[#1f1f1f] p-5 relative overflow-hidden flex flex-col items-center justify-center transition-colors`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl" />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:scale-[1.02]">
        
        {type === 'web' && (
          <div className="w-3/4 h-3/4 border border-[#4F8EF7]/20 rounded-lg bg-black/40 backdrop-blur-sm flex flex-col overflow-hidden shadow-[0_0_20px_rgba(79,142,247,0.1)] relative">
            <div className="h-4 border-b border-[#4F8EF7]/20 bg-[#4F8EF7]/5 flex items-center px-2 gap-1 z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]/50" />
            </div>
            <div className="flex-1 p-3 flex gap-2 overflow-hidden relative">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="w-1/3 h-[120%] rounded bg-[#4F8EF7]/20 border border-[#4F8EF7]/30" 
               />
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                 className="w-2/3 h-[150%] flex flex-col gap-2"
               >
                 <div className="h-10 w-full rounded bg-[#4F8EF7]/10" />
                 <div className="h-16 w-full rounded bg-[#4F8EF7]/10" />
                 <div className="h-12 w-full rounded bg-[#4F8EF7]/10" />
               </motion.div>
            </div>
          </div>
        )}

        {type === 'landing' && (
          <div className="w-2/3 h-3/4 rounded-xl bg-gradient-to-b from-[#4F8EF7]/20 to-transparent border border-[#4F8EF7]/30 flex flex-col items-center p-3 shadow-[0_0_20px_rgba(79,142,247,0.15)] relative overflow-hidden">
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="w-8 h-8 rounded-full bg-[#4F8EF7]/40 mb-2" 
             />
             <div className="w-3/4 h-2 rounded-full bg-[#4F8EF7]/30 mb-1" />
             <div className="w-1/2 h-1.5 rounded-full bg-[#4F8EF7]/20 mb-4" />
             
             <motion.div 
               animate={{ y: [0, -4, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               className="w-full flex gap-1 mb-4"
             >
                <div className="flex-1 h-8 bg-[#4F8EF7]/10 rounded-md" />
                <div className="flex-1 h-8 bg-[#4F8EF7]/10 rounded-md" />
             </motion.div>

             <motion.div 
               animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 10px rgba(79,142,247,0.3)", "0 0 20px rgba(79,142,247,0.7)", "0 0 10px rgba(79,142,247,0.3)"] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               className="mt-auto w-20 h-6 rounded-full bg-[#4F8EF7] text-[6px] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(79,142,247,0.5)]"
             >
               GET STARTED
             </motion.div>
          </div>
        )}

        {type === 'social' && (
          <div className="w-3/4 h-3/4 flex gap-3">
             <div className="w-1/2 h-full rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 p-2 flex flex-col overflow-hidden relative shadow-[0_0_15px_rgba(79,142,247,0.1)]">
               <motion.div 
                 animate={{ y: [0, -60, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="w-full flex flex-col gap-3"
               >
                 <div className="w-full">
                   <div className="flex items-center gap-1.5 mb-2">
                     <div className="w-4 h-4 rounded-full bg-[#4F8EF7]/60" />
                     <div className="w-8 h-1 rounded-full bg-[#4F8EF7]/30" />
                   </div>
                   <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#4F8EF7]/40 to-transparent border border-[#4F8EF7]/30 mb-1.5" />
                   <div className="w-3/4 h-1 rounded-full bg-[#4F8EF7]/20" />
                 </div>
                 <div className="w-full">
                   <div className="flex items-center gap-1.5 mb-2">
                     <div className="w-4 h-4 rounded-full bg-[#4F8EF7]/60" />
                     <div className="w-10 h-1 rounded-full bg-[#4F8EF7]/30" />
                   </div>
                   <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#4F8EF7]/40 to-transparent border border-[#4F8EF7]/30 mb-1.5" />
                   <div className="w-1/2 h-1 rounded-full bg-[#4F8EF7]/20" />
                 </div>
               </motion.div>
             </div>
             
             <div className="w-1/2 h-full flex flex-col gap-3">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="flex-1 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F8EF7]/10 to-transparent" />
                  <ImageIcon size={16} className="text-[#4F8EF7]/50" />
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="flex-1 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#4F8EF7]/10 to-transparent" />
                  <ImageIcon size={16} className="text-[#4F8EF7]/50" />
                </motion.div>
             </div>
          </div>
        )}

        {type === 'video' && (
          <div className="w-1/2 h-full rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 overflow-hidden relative shadow-[0_0_20px_rgba(79,142,247,0.15)] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
             <div className="absolute bottom-3 left-3 right-3 z-20">
               <div className="w-3/4 h-1.5 rounded-full bg-white/80 mb-1.5" />
               <div className="w-1/2 h-1.5 rounded-full bg-white/40 mb-3" />
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#4F8EF7] flex-shrink-0" />
                 <div className="flex-1 h-1 bg-[#4F8EF7]/20 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ width: ["0%", "100%"] }}
                     transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                     className="h-full bg-[#4F8EF7]"
                   />
                 </div>
               </div>
             </div>
             
             <motion.div 
               animate={{ scale: [1, 1.15, 1] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               className="w-10 h-10 rounded-full bg-[#4F8EF7]/20 backdrop-blur-md flex items-center justify-center z-20 border border-[#4F8EF7]/40 shadow-[0_0_15px_rgba(79,142,247,0.3)]"
             >
               <Play size={16} className="text-white ml-0.5" fill="currentColor" />
             </motion.div>
          </div>
        )}

        {type === 'branding' && (
          <div className="w-3/4 h-3/4 flex flex-wrap gap-2 items-center justify-center">
             <motion.div 
               animate={{ rotate: [0, 10, -10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="w-1/3 aspect-square rounded-full bg-[#4F8EF7]/20 border border-[#4F8EF7]/30 flex items-center justify-center"
             >
               <Palette size={16} className="text-[#4F8EF7]" />
             </motion.div>
             <motion.div 
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
               className="w-1/3 aspect-square rounded-lg bg-[#0a0a0a] border border-[#4F8EF7]/30 flex flex-col items-center justify-center gap-1"
             >
               <span className="font-serif text-[#4F8EF7]/80 text-xs">Aa</span>
             </motion.div>
             <motion.div 
               animate={{ scale: [1, 1.2, 1], backgroundColor: ["rgba(79,142,247,0.1)", "rgba(79,142,247,0.4)", "rgba(79,142,247,0.1)"] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
               className="w-1/3 aspect-square rounded-full border border-[#4F8EF7]/20" 
             />
             <motion.div 
               animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
               transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
               className="w-2/3 h-6 rounded-full bg-gradient-to-r from-[#4F8EF7]/20 via-[#4F8EF7]/50 to-[#4F8EF7]/20 border border-[#4F8EF7]/30 bg-[length:200%_auto]" 
             />
          </div>
        )}

        {type === 'ads' && (
          <div className="w-3/4 h-3/4 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 p-3 flex flex-col justify-end relative overflow-hidden shadow-[0_0_15px_rgba(79,142,247,0.1)]">
             <div className="absolute top-3 left-3 text-[8px] text-[#4F8EF7]/60 font-mono tracking-widest uppercase">CONVERSIONS</div>
             <motion.div 
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute top-2 right-3 text-xs text-[#4F8EF7] font-bold"
             >
               +240%
             </motion.div>
             
             <div className="flex items-end gap-1.5 h-1/2 mt-auto w-full">
               <motion.div animate={{ height: ["20%", "40%", "20%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="flex-1 bg-[#4F8EF7]/20 rounded-t-sm" />
               <motion.div animate={{ height: ["40%", "60%", "40%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }} className="flex-1 bg-[#4F8EF7]/40 rounded-t-sm" />
               <motion.div animate={{ height: ["60%", "85%", "60%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.4 }} className="flex-1 bg-[#4F8EF7]/60 rounded-t-sm relative">
                  <div className="absolute -top-1 left-0 right-0 h-px bg-[#4F8EF7] shadow-[0_0_8px_rgba(79,142,247,0.8)]" />
               </motion.div>
               <motion.div animate={{ height: ["80%", "100%", "80%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 }} className="flex-1 bg-[#4F8EF7] rounded-t-sm relative">
                  <div className="absolute -top-1 left-0 right-0 h-px bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
               </motion.div>
             </div>
          </div>
        )}

        {type === 'management' && (
          <div className="w-3/4 h-3/4 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center shadow-[0_0_15px_rgba(79,142,247,0.1)] relative overflow-hidden">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(79,142,247,0.4)_360deg)]" />
            <div className="absolute inset-1 rounded-lg bg-[#0a0a0a] flex items-center justify-center flex-col gap-2 z-10">
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-10 h-10 rounded-full border-2 border-[#4F8EF7] border-t-transparent flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-[#4F8EF7]/50" />
               </motion.div>
               <div className="w-1/2 h-1.5 rounded-full bg-[#4F8EF7]/30" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Services = () => {
  const headline = "Built for Brands\nThat Mean Business.";
  const words = headline.split(" ");

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-[#0a0a0a]"
    >
      <Navbar />
      
      <main className="pb-0">
        {/* HERO SECTION */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              
              {/* Pill Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
              >
                <span className="text-xs font-bold text-white tracking-widest uppercase">WHAT WE BUILD</span>
              </motion.div>

              {/* Huge Headline */}
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-6 max-w-4xl tracking-tighter leading-[1.1]" 
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word === "\n" ? <br /> : word}
                    {word === "Brands" && <br />}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }} // Appears after headline
                className="text-[#999] text-lg sm:text-xl max-w-2xl mb-12 font-medium"
              >
                From your first website to your next 10,000 followers — we handle it.
              </motion.p>

              {/* CTA + Micro Social Proof */}
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <a 
                    href="https://cal.com/buildoholics" 
                    className="group relative inline-flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 px-8 py-4"
                  >
                    <span className="text-black font-bold uppercase tracking-widest text-sm">Book a free call &rarr;</span>
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#111] border-2 border-[#0a0a0a] flex items-center justify-center"><span className="text-[10px] text-white">👤</span></div>
                    <div className="w-8 h-8 rounded-full bg-[#222] border-2 border-[#0a0a0a] flex items-center justify-center"><span className="text-[10px] text-white">👤</span></div>
                    <div className="w-8 h-8 rounded-full bg-[#333] border-2 border-[#0a0a0a] flex items-center justify-center"><span className="text-[10px] text-white">👤</span></div>
                  </div>
                  <span className="text-xs text-[#888] font-medium tracking-wide">Trusted by 30+ startups</span>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <LogoStrip />

        {/* SERVICES GRID SECTION */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-xs font-bold text-[#4F8EF7] tracking-widest uppercase mb-3">OUR SERVICES</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Six ways we grow your brand.
              </h2>
            </motion.div>

            {/* Grid 3-3-1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group ${i === 6 ? 'lg:col-span-3 lg:w-1/2 lg:mx-auto' : ''}`}
                >
                  <div className="h-full rounded-lg bg-[#111111] border border-[#1f1f1f] transition-all duration-300 ease-out group-hover:border-[#333] group-hover:-translate-y-[6px]">
                    
                    {/* Visual Area */}
                    <CardGraphic type={s.type} s={s} />

                    {/* Content Area */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#4F8EF7]" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                          {s.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-[19px] font-bold text-white mb-2">
                        {s.title}
                      </h3>
                      
                      <p className="text-[#888] text-[13px] leading-relaxed line-clamp-2">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 3-STAT STRIP */}
        <section className="border-y border-white/10 bg-[#0f0f0f] py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-6 md:pt-0"><StatItem end={30} suffix="+" label="Clients Served" /></div>
              <div className="pt-6 md:pt-0"><StatItem end={3} suffix=" Wks" label="Avg. Delivery Time" /></div>
              <div className="pt-6 md:pt-0"><StatItem end={3} suffix="x" label="Avg. Growth" /></div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="relative py-32 bg-[#0a0a0a] text-center border-t border-white/5">
          <div className="mx-auto max-w-3xl px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[48px] font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to build something?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#888] text-lg mb-10"
            >
              Tell us what you need. We'll take it from there.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.a 
                href="https://cal.com/buildoholics" 
                animate={{ boxShadow: ["0 0 0px rgba(79,142,247,0)", "0 0 30px rgba(79,142,247,0.4)", "0 0 0px rgba(79,142,247,0)"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-black font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105"
              >
                Book a free call &rarr;
              </motion.a>
              <span className="text-xs text-[#555] font-medium tracking-wide">3 client slots open this month.</span>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
