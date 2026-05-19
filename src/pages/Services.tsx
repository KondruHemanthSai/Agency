import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Website Development",
    teaser: "Fast, modern sites that actually convert.",
    bullets: [
      "Custom design — no Squarespace energy",
      "Built on Webflow / Next.js / WordPress",
      "Mobile-first, SEO-ready from day one",
      "Delivered in 2–4 weeks"
    ],
    stat: "avg. 3x engagement"
  },
  {
    id: "02",
    title: "Landing Pages",
    teaser: "One page. One goal. Max conversions.",
    bullets: [
      "Conversion-focused layout & copy",
      "A/B test ready structure",
      "Integrated with your CRM or email tool",
      "Launched in under a week"
    ],
    stat: "high conversion"
  },
  {
    id: "03",
    title: "Social Media Creatives",
    teaser: "Scroll-stopping visuals, every week.",
    bullets: [
      "Reels, carousels, stories — all formats",
      "On-brand design system built for you",
      "Monthly content calendar included",
      "Designed for Instagram, LinkedIn & more"
    ],
    stat: "100+ assets/mo"
  },
  {
    id: "04",
    title: "Short-form Video Editing",
    teaser: "Reels and TikToks that people actually watch.",
    bullets: [
      "Hook-first editing style",
      "Captions, transitions, sound design",
      "Optimized for each platform's algorithm",
      "Turnaround: 48–72 hours per video"
    ],
    stat: "viral potential"
  },
  {
    id: "05",
    title: "Branding",
    teaser: "Look like you mean business.",
    bullets: [
      "Logo design + variations",
      "Typography & color system",
      "Brand guidelines PDF",
      "Social media kit included"
    ],
    stat: "premium feel"
  },
  {
    id: "06",
    title: "Ads & Marketing",
    teaser: "Spend less. Get more. Grow faster.",
    bullets: [
      "Meta & Google ad campaigns",
      "Ad creatives + copy included",
      "Weekly performance reports",
      "Min. budget recommendations provided"
    ],
    stat: "lower CPA"
  }
];

const headlineWords = "Six Services. One Team. Zero Fluff.".split(" ");

const Services = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="pt-32 pb-0">
        
        {/* Header Section */}
        <section className="relative mb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase bg-white/[0.03] text-white/70 border border-white/10 mb-8"
              >
                WHAT WE OFFER
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#888] text-base sm:text-lg max-w-xl mx-auto"
              >
                Pick one. Stack them all. Either way, we deliver.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Expandable Rows */}
        <section className="relative w-full border-t border-[#1f1f1f]">
          {services.map((s, index) => {
            const isExpanded = expandedRow === s.id;
            
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                className="relative group cursor-pointer border-b border-transparent overflow-hidden"
                onClick={() => setExpandedRow(isExpanded ? null : s.id)}
              >
                {/* Background hover effect */}
                <div className={`absolute inset-0 transition-colors duration-350 ease-out ${isExpanded ? 'bg-[#ffffff08]' : 'bg-transparent group-hover:bg-[#ffffff08]'}`} />
                
                {/* Divider Line (SVG draw animation) */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#1f1f1f] origin-left z-20"
                />

                <div className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                  {/* Number Watermark */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.08 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-black text-white pointer-events-none transition-transform duration-350 ease-out group-hover:translate-x-[6px]"
                    style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1 }}
                  >
                    {s.id}
                  </motion.div>

                  {/* Row Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 pl-4 md:pl-16">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {s.title}
                      </h2>
                      <span className="text-[#888] text-sm sm:text-base font-medium">
                        {s.teaser}
                      </span>
                    </div>

                    <div className={`transform transition-transform duration-350 ease-out ${isExpanded ? '-rotate-45' : 'group-hover:-rotate-45'}`}>
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                      >
                        <div className="pt-8 pb-4 pl-4 md:pl-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                          {/* Bullets */}
                          <div className="pl-5 border-l-[1.5px] border-[#4F8EF7]">
                            <ul className="space-y-3 mb-8">
                              {s.bullets.map(b => (
                                <li key={b} className="text-[#aaa] text-sm sm:text-base font-medium">
                                  {b}
                                </li>
                              ))}
                            </ul>
                            <a 
                              href="https://cal.com/buildoholics" 
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F8EF7] hover:text-[#3A7AE8] transition-colors uppercase tracking-widest"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Start with this <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          
                          {/* Stat/Visual */}
                          <div className="md:text-right hidden sm:block">
                            <span className="text-3xl md:text-5xl font-black text-white/5 uppercase tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
                              {s.stat}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Full-bleed CTA */}
        <section className="relative py-32 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Not sure where to start?
            </h2>
            <p className="text-[#999] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Book a free 30-min call. We'll tell you exactly what you need.
            </p>
            <div className="flex flex-col items-center gap-6">
              <motion.a
                href="https://cal.com/buildoholics"
                animate={{ 
                  boxShadow: [
                    "0 0 0px 0px rgba(79, 142, 247, 0)", 
                    "0 0 30px 4px rgba(79, 142, 247, 0.3)", 
                    "0 0 0px 0px rgba(79, 142, 247, 0)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                BOOK A FREE CALL <ArrowRight size={18} />
              </motion.a>
              <p className="text-[#555] text-xs uppercase tracking-[0.2em] font-semibold">
                Only 3 client slots open this month.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
