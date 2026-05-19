import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Buildoholics didn't just build us a website — they built us a growth machine. Our leads tripled in the first month after launch.",
    name: "Arjun Mehta",
    title: "Founder, Labouron",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Their social media strategy completely transformed our online presence. The content quality and consistency is unmatched for the price.",
    name: "Priya Sharma",
    title: "CEO, Oper9 Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Working with Buildoholics felt like having an in-house team. They understood our vision from day one and executed flawlessly.",
    name: "Rahul Verma",
    title: "Co-founder, Renuka Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
            TESTIMONIALS
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 h-full transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]">
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote size={24} className="text-[#4F8EF7]/40" />
                </div>

                {/* Quote text */}
                <p className="text-[15px] text-white/80 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-[12px] text-[#999]">
                      {testimonial.title}
                    </div>
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
