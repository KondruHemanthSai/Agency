import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { LetsTalkButton } from "@/components/ui/GradientButton";
import {
  Globe,
  Layout,
  Camera,
  Video,
  Palette,
  Megaphone,
  Calendar,
  ArrowRight,
} from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from "@/components/ui/AnimatedSlideshow";

// Helper to map index to generated images
const getServiceImage = (index: number) => {
  const images = [
    "/assets/tech_web_dev_v3.png",       // Website Development
    "/assets/tech_ui_landing_v3.png",    // Landing Pages
    "/assets/tech_social_media_v4.png",  // Social Media Creatives
    "/assets/tech_video_timeline_v3.png",// Short-form Video Editing
    "/assets/tech_branding_v3.png",      // Branding
    "/assets/tech_marketing_v3.png",     // Ads & Marketing
    "/assets/tech_management_v3.png"     // Monthly Management
  ];
  return images[index] || "/assets/tech_web_dev_v3.png";
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, high-performance websites built with the latest tech stack.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-conversion landing pages designed to turn visitors into leads.",
  },
  {
    icon: Camera,
    title: "Social Media Creatives",
    description: "Engaging visuals and graphics tailored for your social channels.",
  },
  {
    icon: Video,
    title: "Short-form Video Editing",
    description: "Professional editing for Reels, TikToks, and Shorts that go viral.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete visual identity including logos, typography, and brand guides.",
  },
  {
    icon: Megaphone,
    title: "Ads & Marketing",
    description: "Strategic ad campaigns and marketing materials to grow your business.",
  },
  {
    icon: Calendar,
    title: "Monthly Management",
    description: "Ongoing support, updates, and optimization for your digital presence.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
            <SectionHeading
              badge="Our Services"
              title="Comprehensive Design & Tech Solutions"
              description="We offer a full suite of services to elevate your brand and drive growth."
            />
          </div>
        </section>

        {/* Services Slideshow (Desktop) */}
        <section className="relative py-12 hidden md:block">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HoverSlider className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Side */}
                <div className="flex flex-col gap-4 order-2 md:order-1">
                  {services.map((service, index) => (
                    <TextStaggerHover
                      key={service.title}
                      index={index}
                      text={service.title}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    />
                  ))}
                </div>

                {/* Image Side */}
                <HoverSliderImageWrap className="rounded-2xl aspect-video md:aspect-[4/5] lg:aspect-square order-1 md:order-2 bg-muted/10">
                  {services.map((service, index) => (
                    <HoverSliderImage
                      key={service.title}
                      index={index}
                      imageUrl={getServiceImage(index)}
                      alt={service.title}
                    />
                  ))}
                </HoverSliderImageWrap>
              </div>
            </HoverSlider>
          </div>
        </section>

        {/* Services List (Mobile) */}
        <section className="relative py-8 block md:hidden">
          <div className="mx-auto max-w-7xl px-4 flex flex-col gap-6">
            {services.map((service, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Custom Plan CTA */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need a custom plan?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every business is unique. Let's discuss your specific needs and create a tailored solution that fits your goals and budget.
              </p>
              <Link to="/contact">
                <LetsTalkButton />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
