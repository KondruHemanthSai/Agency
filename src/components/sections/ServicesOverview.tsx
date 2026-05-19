import { motion } from "framer-motion";
import { Globe, Share2, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Dev",
    description: "High-performance websites built to convert visitors into customers. Modern design, blazing-fast speed, mobile-first.",
    tag: "DEVELOPMENT",
    color: "#4F8EF7",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Scroll-stopping content strategies that grow your audience and drive engagement across every platform.",
    tag: "CONTENT",
    color: "#7BB3FF",
  },
  {
    icon: TrendingUp,
    title: "B2B Growth & Marketing",
    description: "Data-driven marketing systems that generate qualified leads, boost traffic 3x, and accelerate your revenue.",
    tag: "GROWTH",
    color: "#4F8EF7",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ServicesOverview() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32" id="services-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
            WHAT WE DO
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Everything You Need to{" "}
            <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
            Three core services. One dedicated team. Zero headaches.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 h-full transition-all duration-500 hover:border-[#4F8EF7]/30 hover:bg-white/[0.04]">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/0 to-[#4F8EF7]/0 group-hover:from-[#4F8EF7]/[0.03] group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#4F8EF7] mb-6 block">
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center mb-6 group-hover:bg-[#4F8EF7]/15 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-[#4F8EF7]" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-white mb-3 tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#999] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-1.5 text-[#4F8EF7] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
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
