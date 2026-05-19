import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Globe,
  Layout,
  Camera,
  Video,
  Palette,
  Megaphone,
  Calendar,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, high-performance websites built with the latest tech stack.",
    tag: "DEVELOPMENT",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-conversion landing pages designed to turn visitors into leads.",
    tag: "CONVERSION",
  },
  {
    icon: Camera,
    title: "Social Media Creatives",
    description: "Engaging visuals and graphics tailored for your social channels.",
    tag: "CONTENT",
  },
  {
    icon: Video,
    title: "Short-form Video Editing",
    description: "Professional editing for Reels, TikToks, and Shorts that go viral.",
    tag: "VIDEO",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete visual identity including logos, typography, and brand guides.",
    tag: "BRANDING",
  },
  {
    icon: Megaphone,
    title: "Ads & Marketing",
    description: "Strategic ad campaigns and marketing materials to grow your business.",
    tag: "MARKETING",
  },
  {
    icon: Calendar,
    title: "Monthly Management",
    description: "Ongoing support, updates, and optimization for your digital presence.",
    tag: "ONGOING",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Comprehensive Design &{" "}
                <span className="gradient-text">Tech Solutions</span>
              </h1>
              <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
                We offer a full suite of services to elevate your brand and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-7 h-full transition-all duration-500 hover:border-[#4F8EF7]/30 hover:bg-white/[0.04]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/0 to-[#4F8EF7]/0 group-hover:from-[#4F8EF7]/[0.03] group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#4F8EF7] mb-5 block">
                        {service.tag}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-[#4F8EF7]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {service.title}
                      </h3>
                      <p className="text-[#999] text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Custom Plan CTA */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Need a <span className="gradient-text">custom plan</span>?
              </h2>
              <p className="text-[#999] mb-8 max-w-xl mx-auto">
                Every business is unique. Let's discuss your specific needs and create a tailored solution that fits your goals and budget.
              </p>
              <a
                href="https://cal.com/buildoholics"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#4F8EF7] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow"
              >
                <Phone size={16} />
                Book a Free Call
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
