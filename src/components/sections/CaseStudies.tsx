import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    client: "Labouron",
    category: "WEBSITE & BRANDING",
    title: "Complete Digital Overhaul for a Growing Staffing Platform",
    description: "Redesigned the entire web presence from scratch — modern UI, optimized funnels, and brand identity that positions them as industry leaders.",
    metric: "4.2x increase in lead generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "#4F8EF7",
  },
  {
    client: "Oper9",
    category: "SOCIAL MEDIA & CONTENT",
    title: "Social Media Strategy That Drove Real Business Results",
    description: "Built a content engine from zero — brand voice, visual system, and posting strategy that turned followers into paying clients.",
    metric: "300% follower growth in 90 days",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "#7BB3FF",
  },
  {
    client: "Renuka Group",
    category: "B2B GROWTH",
    title: "Marketing System That Scales With the Business",
    description: "End-to-end digital marketing — from landing pages to ad campaigns to CRM automation — built for sustainable growth.",
    metric: "2.8x ROI on ad spend",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    color: "#4F8EF7",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CaseStudies() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32" id="case-studies">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F8EF7]/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
            CASE STUDIES
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Results That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
            Real projects. Real metrics. Real growth.
          </p>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              variants={itemVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#4F8EF7]/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 relative overflow-hidden h-48 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a0a]" />

                  {/* Metric badge on image */}
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4F8EF7]/20 border border-[#4F8EF7]/30 text-[11px] font-semibold text-[#4F8EF7] backdrop-blur-md">
                      {study.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#4F8EF7]">
                      {study.category}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-[13px] font-medium text-white/70">
                      {study.client}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#4F8EF7] transition-colors duration-300"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {study.title}
                  </h3>

                  <p className="text-[#999] text-sm leading-relaxed mb-5 max-w-lg">
                    {study.description}
                  </p>

                  {/* Metric — desktop */}
                  <div className="hidden lg:block mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[12px] font-semibold text-[#4F8EF7]">
                      ↑ {study.metric}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#4F8EF7] text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    View Case Study
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
