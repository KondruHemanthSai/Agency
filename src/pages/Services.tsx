import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LogoStrip } from "@/components/sections/LogoStrip";
import {
  Globe,
  Layout,
  Camera,
  Video,
  Palette,
  Megaphone,
  Calendar,
  Phone,
  Play,
  Image as ImageIcon,
  ArrowRight,
  Rocket,
  DollarSign,
  Database,
  User,
  MessageSquare,
  Target
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, scalable, and highly secure platforms built with Next.js and modern tech stacks.",
    tag: "WEB APP",
    type: "web",
    gradient: "from-[#3b82f6]/10 to-transparent",
    color: "#3b82f6",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-conversion single pages engineered specifically to turn visitors into leads.",
    tag: "CONVERSION",
    type: "landing",
    gradient: "from-[#a855f7]/10 to-transparent",
    color: "#a855f7",
  },
  {
    icon: Camera,
    title: "Social Media Creatives",
    description: "Scroll-stopping carousels and static posts tailored for your brand's unique voice.",
    tag: "CONTENT",
    type: "social",
    gradient: "from-[#ec4899]/10 to-transparent",
    color: "#ec4899",
  },
  {
    icon: Video,
    title: "Short-form Video Editing",
    description: "Hook-first Reels and TikToks crafted to maximize retention and algorithm reach.",
    tag: "VIDEO",
    type: "video",
    gradient: "from-[#f97316]/10 to-transparent",
    color: "#f97316",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete visual identity systems, from custom logo design to typography and guidelines.",
    tag: "DESIGN",
    type: "branding",
    gradient: "from-[#10b981]/10 to-transparent",
    color: "#10b981",
  },
  {
    icon: Megaphone,
    title: "Ads & Marketing",
    description: "Data-driven Meta and Google ad campaigns optimized for the lowest acquisition cost.",
    tag: "MARKETING",
    type: "ads",
    gradient: "from-[#ef4444]/10 to-transparent",
    color: "#ef4444",
  }
];

const whyChooseData = [
  {
    type: "impact",
    title: "Impact-Driven Solutions",
    desc: "Every product we build is custom-crafted to create real business impact."
  },
  {
    type: "fast",
    title: "Fast & Reliable Delivery",
    desc: "Get high-quality results in days or weeks, not months."
  },
  {
    type: "pricing",
    title: "Transparent & Fair Pricing",
    desc: "Honest, customized pricing with no hidden fees or surprises."
  },
  {
    type: "problem",
    title: "Expert Problem Solvers",
    desc: "We tackle technical and creative challenges with innovative solutions."
  },
  {
    type: "collab",
    title: "Seamless Collaboration",
    desc: "Clear communication and feedback at every stage of the project."
  },
  {
    type: "talent",
    title: "Direct Access to Top Talent",
    desc: "Work directly with senior experts—no long-term hiring needed."
  }
];

const WhyChooseGraphic = ({ type }: { type: string }) => {
  return (
    <div className="h-16 flex items-center justify-center relative mb-6">
      {type === 'impact' && (
         <div className="relative flex items-center justify-center">
           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute w-14 h-14 rounded-full border border-blue-500/20 border-t-transparent border-l-transparent" />
           <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className="absolute w-11 h-11 rounded-full border border-blue-500/40 border-b-transparent border-r-transparent" />
           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
             <Globe className="text-blue-400 w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
           </motion.div>
         </div>
      )}
      {type === 'fast' && (
         <div className="relative flex items-center justify-center w-full h-full">
           <motion.div 
             animate={{ y: [0, -6, 0], rotate: [0, -5, 3, 0] }} 
             transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
             className="relative"
           >
             <Rocket className="text-blue-400 w-8 h-8 drop-shadow-[0_5px_15px_rgba(59,130,246,0.6)]" />
             <motion.div 
               animate={{ height: [10, 25, 10], opacity: [0.8, 0.2, 0.8] }}
               transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
               className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-t from-transparent to-blue-500/50 rounded-full blur-[1px]"
             />
           </motion.div>
         </div>
      )}
      {type === 'pricing' && (
         <div className="relative flex flex-col items-center justify-center mt-1 group">
           <motion.div animate={{ y: [-3, 3, -3], rotateY: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="z-10 mb-[-8px]">
             <DollarSign className="text-emerald-400 w-4 h-4 bg-black rounded-full" strokeWidth={4} />
           </motion.div>
           <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
             <Database className="text-emerald-400 w-6 h-6 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
           </motion.div>
         </div>
      )}
      {type === 'problem' && (
         <div className="relative flex items-center justify-center w-full h-full">
           <motion.div animate={{ x: [6, -2, 6], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-7 h-7 rounded-full bg-pink-500/90 flex items-center justify-center z-10 mix-blend-screen shadow-[0_0_20px_rgba(236,72,153,0.5)]">
             <motion.span animate={{ rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className="text-white text-xs font-bold font-mono">X</motion.span>
           </motion.div>
           <motion.div animate={{ x: [-6, 2, -6], scale: [1.1, 1, 1.1] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-7 h-7 rounded-full bg-blue-500/90 flex items-center justify-center mix-blend-screen shadow-[0_0_20px_rgba(59,130,246,0.5)]">
             <motion.span animate={{ rotate: [360, 180, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className="text-white text-xs font-bold">+</motion.span>
           </motion.div>
         </div>
      )}
      {type === 'collab' && (
         <div className="relative flex items-center justify-center w-full h-full">
           <motion.div animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} className="relative translate-x-2 translate-y-2">
             <MessageSquare className="text-gray-400 w-9 h-9 drop-shadow-[0_0_15px_rgba(156,163,175,0.3)]" fill="currentColor" strokeWidth={0} />
             <User className="absolute inset-0 m-auto text-[#111] w-4 h-4 mb-3" />
           </motion.div>
           <motion.div animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-3 h-3 rounded-full bg-blue-500 absolute top-1 right-3 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
         </div>
      )}
      {type === 'talent' && (
         <div className="relative flex items-center justify-center w-full h-full">
           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="z-10">
             <Target className="text-yellow-400 w-8 h-8 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
           </motion.div>
           <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} className="absolute w-8 h-8 rounded-full border-2 border-yellow-400/50" />
           <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeOut" }} className="absolute w-8 h-8 rounded-full border border-yellow-400/30" />
         </div>
      )}
    </div>
  );
};

const CardGraphic = ({ type, s }: { type: string, s: any }) => {
  return (
    <div className={`w-full aspect-[4/3] rounded-t-lg bg-gradient-to-br ${s.gradient} border-b border-[#1f1f1f] p-5 relative overflow-hidden flex flex-col items-center justify-center transition-colors`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl" />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:scale-[1.02]">
        
        {type === 'web' && (
          <div className="w-3/4 h-3/4 border border-[#3b82f6]/20 rounded-lg bg-black/40 backdrop-blur-sm flex flex-col overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.1)] relative">
            <div className="h-4 border-b border-[#3b82f6]/20 bg-[#3b82f6]/5 flex items-center px-2 gap-1 z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50" />
            </div>
            <div className="flex-1 p-3 flex gap-2 overflow-hidden relative">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="w-1/3 h-[120%] rounded bg-[#3b82f6]/20 border border-[#3b82f6]/30" 
               />
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                 className="w-2/3 h-[150%] flex flex-col gap-2"
               >
                 <div className="h-10 w-full rounded bg-[#3b82f6]/10" />
                 <div className="h-16 w-full rounded bg-[#3b82f6]/10" />
                 <div className="h-12 w-full rounded bg-[#3b82f6]/10" />
               </motion.div>
            </div>
          </div>
        )}

        {type === 'landing' && (
          <div className="w-2/3 h-3/4 rounded-xl bg-gradient-to-b from-[#a855f7]/20 to-transparent border border-[#a855f7]/30 flex flex-col items-center p-3 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden">
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="w-8 h-8 rounded-full bg-[#a855f7]/40 mb-2" 
             />
             <div className="w-3/4 h-2 rounded-full bg-[#a855f7]/30 mb-1" />
             <div className="w-1/2 h-1.5 rounded-full bg-[#a855f7]/20 mb-4" />
             
             <motion.div 
               animate={{ y: [0, -4, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               className="w-full flex gap-1 mb-4"
             >
                <div className="flex-1 h-8 bg-[#a855f7]/10 rounded-md" />
                <div className="flex-1 h-8 bg-[#a855f7]/10 rounded-md" />
             </motion.div>
             <div className="mt-auto w-20 h-6 rounded-full bg-[#a855f7] text-[6px] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
               GET STARTED
             </div>
          </div>
        )}

        {type === 'social' && (
          <div className="w-[85%] h-[85%] rounded-lg border border-[#ec4899]/20 bg-black/40 backdrop-blur-sm p-3 flex flex-col shadow-[0_0_20px_rgba(236,72,153,0.1)] relative overflow-hidden">
             <div className="flex items-center gap-2 mb-3">
               <div className="w-6 h-6 rounded-full bg-[#ec4899]/20" />
               <div className="flex-1 h-2 rounded-full bg-[#ec4899]/10" />
             </div>
             <div className="flex gap-2 h-full">
               <div className="w-[60%] h-full rounded bg-[#ec4899]/10 relative overflow-hidden">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ec4899]/10 to-transparent skew-x-12"
                 />
               </div>
               <div className="w-[40%] flex flex-col gap-2 h-full">
                 <div className="w-full h-1/2 rounded bg-[#ec4899]/10 flex items-center justify-center relative overflow-hidden">
                   <ImageIcon className="w-4 h-4 text-[#ec4899]/40" />
                 </div>
                 <div className="w-full h-1/2 rounded bg-[#ec4899]/10 flex items-center justify-center relative overflow-hidden">
                   <ImageIcon className="w-4 h-4 text-[#ec4899]/40" />
                 </div>
               </div>
             </div>
          </div>
        )}

        {type === 'video' && (
          <div className="w-[45%] h-[90%] rounded-2xl border border-[#f97316]/20 bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.1)] flex flex-col relative overflow-hidden">
            <div className="flex-1 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#f97316]/5" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md z-10">
                <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
              </motion.div>
            </div>
            <div className="h-10 border-t border-[#f97316]/20 bg-black flex flex-col justify-center px-3 gap-1.5 relative overflow-hidden">
               <div className="w-full h-1 bg-[#f97316]/20 rounded-full overflow-hidden">
                 <motion.div animate={{ x: ["-100%", "0%"] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="w-full h-full bg-[#f97316]" />
               </div>
               <div className="flex justify-between items-center">
                 <div className="w-6 h-1 rounded-full bg-[#f97316]/40" />
                 <div className="w-3 h-3 rounded-full bg-[#f97316]/20" />
               </div>
            </div>
          </div>
        )}

        {type === 'branding' && (
          <div className="w-[80%] h-[70%] border border-[#10b981]/20 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#10b981]/20" />
            <div className="absolute bottom-3 right-3 w-6 h-6 rounded-sm bg-[#10b981]/10" />
            
            <div className="relative flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-16 h-16 rounded-full border border-dashed border-[#10b981]/40 absolute" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10">
                <span className="text-white font-bold text-[10px] tracking-widest font-serif">Aa</span>
              </div>
            </div>
          </div>
        )}

        {type === 'ads' && (
          <div className="w-3/4 h-2/3 border border-[#ef4444]/20 rounded-xl bg-black/40 backdrop-blur-sm p-3 shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden flex flex-col justify-end gap-1.5">
             <div className="absolute top-3 left-3 text-[7px] text-[#ef4444]/60 font-semibold tracking-widest">CAMPAIGN ROI</div>
             <div className="absolute top-3 right-3 text-[8px] text-[#ef4444] font-bold">+240%</div>
             
             <div className="w-full flex items-end gap-1.5 h-16 mt-auto relative z-10">
               <motion.div animate={{ height: ["30%", "40%", "30%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="flex-1 bg-[#ef4444]/30 rounded-t-sm" />
               <motion.div animate={{ height: ["40%", "60%", "40%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }} className="flex-1 bg-[#ef4444]/50 rounded-t-sm" />
               <motion.div animate={{ height: ["60%", "80%", "60%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.4 }} className="flex-1 bg-[#ef4444]/70 rounded-t-sm" />
               <motion.div animate={{ height: ["50%", "100%", "50%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 }} className="flex-1 bg-[#ef4444] rounded-t-sm shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-white border border-white/10 mb-8">
                World-class Agency Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Engineering your <br />
                <span className="text-[#4F8EF7]">Digital Success.</span>
              </h1>
              <p className="text-[#999] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                We help startups & B2B enterprises move from vision to reality. One hand on design, the other on development.
              </p>
              
              <a
                href="https://cal.com/buildoholics"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-105 px-8 py-4 w-[280px] h-[60px] mx-auto"
              >
                {/* Default State */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="text-black text-[13px] font-bold uppercase tracking-widest mr-2">Book a 30-Min Call</span>
                  <ArrowRight size={16} className="text-black" />
                </div>
                
                {/* Hover State (blogo + you) */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 gap-2.5">
                  <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/favicon.png" alt="Buildoholics" className="w-4 h-4 object-contain brightness-0 invert" />
                  </div>
                  <span className="text-black font-medium text-lg">+</span>
                  <div className="w-7 h-7 bg-[#4F8EF7] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">You</span>
                  </div>
                  <span className="text-black text-[14px] font-bold tracking-wide ml-1">Book a 30-Min call</span>
                </div>
              </a>

            </motion.div>
          </div>
        </section>

        <LogoStrip />

        {/* Services Grid */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Top-tier <span className="text-[#4F8EF7]">Digital Experts</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl" style={{ backgroundImage: `linear-gradient(to bottom, ${service.color}22, transparent)` }} />
                    
                    <CardGraphic type={service.type} s={service} />

                    <div className="p-6 relative z-10 flex-1 flex flex-col">
                      <span 
                        className="text-[10px] font-bold tracking-widest uppercase mb-3 block"
                        style={{ color: service.color }}
                      >
                        {service.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {service.title}
                      </h3>
                      <p className="text-[#999] text-sm leading-relaxed mt-auto">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 mb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Choose Buildoholics?
            </h2>
            <p className="text-[#999] text-sm md:text-base max-w-2xl mx-auto">
              Discover the advantages of partnering with a tech team that's built for results and client success.
            </p>
          </div>
          
          <div className="relative border-t border-b border-white/5 py-12">
            {/* Inner dashed grid lines */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/5 hidden md:block" />
            <div className="absolute inset-y-0 left-1/3 -translate-x-1/2 border-l border-dashed border-white/5 hidden md:block" />
            <div className="absolute inset-y-0 right-1/3 translate-x-1/2 border-l border-dashed border-white/5 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 relative z-10 px-8">
              {whyChooseData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <WhyChooseGraphic type={item.type} />
                  <h3 className="text-[17px] font-bold text-white mb-3 tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>{item.title}</h3>
                  <p className="text-[#666] text-[13px] leading-relaxed max-w-[260px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
