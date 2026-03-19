import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["Home", "About", "Projects", "Skills", "Education"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = sections.map((section) =>
        document.getElementById(section.toLowerCase())
      );

      const currentSection = sectionElements.find((el, index) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const nextEl = sectionElements[index + 1];
        if (nextEl) {
          const nextRect = nextEl.getBoundingClientRect();
          return rect.top <= 150 && nextRect.top > 150;
        }
        return rect.top <= 150;
      });

      if (currentSection) {
        setActiveSection(
          currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 inset-x-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled ? "top-4" : "top-6"
      }`}
    >
      <div className="relative mx-auto">
        {/* Active indicator line */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
        
        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-card/80 backdrop-blur-lg border border-border">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-pill relative ${
                activeSection === section ? "active" : ""
              }`}
            >
              {section}
              {activeSection === section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
