import { motion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const projects = [
    {
        id: 1,
        title: "FutureKart",
        description: "A comprehensive inventory management and sales dashboard designed to streamline business operations and analytics.",
        tags: ["React", "Dashboard", "Analytics"],
        image: "/assets/futurekart_dashboard.png",
        link: "https://drive.google.com/file/d/164AyyLKP5EHBYfzBCYuvzhIDXaT4PGvC/view?usp=sharing",
    },
    {
        id: 2,
        title: "Thatha Ruchulu",
        description: "A culinary platform celebrating traditional authentic flavors and recipes, bringing heritage to the digital table.",
        tags: ["React", "Web", "Culinary"],
        image: "/assets/thatha_ruchulu_real.png",
        link: "https://drive.google.com/file/d/1Bw5TT8thc_6OFdjKxuWZV6XoVgSMh9Y8/view?usp=sharing",
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">
                {/* Hero / Header Section */}
                <section className="relative mb-16">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                                Our Work
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                                Innovative Solutions &{" "}
                                <span className="gradient-text">Projects</span>
                            </h1>
                            <p className="text-[#999] text-base sm:text-lg max-w-xl mx-auto">
                                Explore our portfolio of digital engineering excellence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="relative">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full transition-all duration-500 hover:border-[#4F8EF7]/30 hover:bg-white/[0.04]">
                                        {/* Image Area */}
                                        <div className="aspect-video overflow-hidden relative bg-black/30">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-7">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                                                {project.title}
                                            </h3>
                                            <p className="text-[#999] text-sm mb-6 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[#4F8EF7] text-sm font-medium hover:underline"
                                            >
                                                <ExternalLink size={14} />
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-12 text-center"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF7]/30 to-transparent" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                                Have a project in <span className="gradient-text">mind</span>?
                            </h2>
                            <p className="text-[#999] mb-8 max-w-xl mx-auto">
                                Let's collaborate to bring your vision to life with our expert team.
                            </p>
                            <a
                                href="https://cal.com/buildoholics"
                                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#4F8EF7] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow"
                            >
                                <Phone size={16} />
                                Start a Project
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
