import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  {
    name: "Oper9",
    logoSrc: "/clients/renuka.png",
    url: "https://www.oper9.com/",
    description: "Business Consultants",
    delay: 0.1
  },
  {
    name: "Renuka Packaging Industries",
    logoSrc: "/clients/oper9.png",
    url: "https://renukapackaging.com/",
    description: "Premium Packaging Solutions",
    delay: 0.2
  },
  {
    name: "LabourOn",
    logoSrc: "/clients/labouron.png",
    url: "https://labouron.netlify.app/",
    description: "Workforce Management Platform",
    delay: 0.3
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 relative z-10 w-full max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative mb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                Our Partners
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Join Our <span className="gradient-text">Journey</span>
              </h1>
              <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
                We collaborate with forward-thinking businesses to build the future of digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clients Showcase */}
        <section className="relative py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto`}>
              {clients.map((client, index) => (
                <motion.a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={client.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: client.delay }}
                  whileHover={{ y: -8 }}
                  className={`group relative block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 overflow-hidden transition-all duration-500 hover:border-[#4F8EF7]/30 hover:bg-white/[0.04] cursor-pointer ${
                    index === clients.length - 1 && clients.length % 2 !== 0 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""
                  }`}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/0 to-[#4F8EF7]/0 group-hover:from-[#4F8EF7]/[0.03] group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                    <div className="w-full h-48 sm:h-56 bg-white rounded-2xl mb-8 flex items-center justify-center p-6 lg:p-10 transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={client.logoSrc}
                        alt={client.name}
                        className="max-h-full max-w-[85%] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                      />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-[#4F8EF7] transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {client.name}
                    </h3>

                    <p className="text-[#999] font-medium group-hover:text-white/80 transition-colors duration-500 text-sm md:text-base">
                      {client.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-[#4F8EF7] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Visit Site
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-10 md:p-16 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent" />
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#4F8EF7]/[0.04] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 mb-8">
                  <Sparkles size={24} className="text-[#4F8EF7]" />
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Ready to Transform{" "}
                  <span className="gradient-text">Your Business?</span>
                </h3>

                <p className="text-[#999] mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                  Join our growing list of partners. Experience premium quality service and unparalleled digital innovation built specifically for your goals.
                </p>

                <a
                  href="https://cal.com/buildoholics"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#4F8EF7] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow"
                >
                  <Phone size={16} />
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
