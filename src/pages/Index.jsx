import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechBanner from "@/components/TechBanner";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechBanner />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;
