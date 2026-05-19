import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Handshake } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Not Just Designers",
    description: "We combine creative vision with technical execution. Our team thinks in user journeys and conversion funnels.",
  },
  {
    icon: Target,
    title: "Not Just Developers",
    description: "Code is just a tool. We focus on business outcomes, growth metrics, and tangible results for your startup.",
  },
  {
    icon: Handshake,
    title: "Your Extended Team",
    description: "We integrate seamlessly with your workflow. Think of us as your dedicated digital department.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                A creative and tech agency{" "}
                <span className="gradient-text">built for startups</span>
              </h1>
              <p className="text-lg text-[#999] leading-relaxed">
                Buildoholics is more than an agency — we're a team-driven partner that delivers
                end-to-end digital solutions. Websites, content, marketing — all under one roof,
                with the focus and speed that startups need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-12 lg:p-16 max-w-4xl mx-auto text-center"
            >
              <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-6">
                Our Mission
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                "Our mission is to help businesses build a{" "}
                <span className="gradient-text">strong online presence</span> and convert
                attention into <span className="gradient-text">growth</span>."
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
                WHAT MAKES US DIFFERENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                We're Built <span className="gradient-text">Different</span>
              </h2>
              <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
                A unique blend of creativity, technology, and business acumen.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center h-full transition-all duration-500 hover:border-[#4F8EF7]/30 hover:bg-white/[0.04]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/0 to-[#4F8EF7]/0 group-hover:from-[#4F8EF7]/[0.03] group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-[#4F8EF7]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-[#999] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
