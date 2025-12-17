import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Fixed background handled in App.tsx */}

      {/* Content wrapper - transparent to show background */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <ServicesOverview />
        <WhyUs />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
