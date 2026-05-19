import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Stats } from "@/components/sections/Stats";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen selection:bg-[#4F8EF7]/20 selection:text-[#4F8EF7]">
      {/* Content wrapper - transparent to show background */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <LogoStrip />
        <Stats />
        <ServicesOverview />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
