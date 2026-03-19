import { motion } from "framer-motion";
import { Linkedin, Github, FileText, Mail } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: FileText, href: "#", label: "Resume" },
    { icon: Mail, href: "mailto:shubh.ssd07@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      {/* Code brackets decoration - fixed center with pulsating effect */}
      <motion.div 
        className="fixed inset-0 flex items-center justify-center select-none pointer-events-none hidden lg:flex z-0"
        initial={{ opacity: 0.15 }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-primary font-extralight tracking-[0.25em]" style={{ fontSize: 'clamp(12rem, 22vw, 20rem)', lineHeight: 1, opacity: 0.15 }}>
          {"</>"}
        </span>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-display text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-4"
            >
              FULL-STACK DEVELOPER
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              Shubhranshu
              <br />
              Dalai
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 mb-8"
            >
              <div className="w-1 h-16 bg-primary rounded-full mt-1" />
              <p className="text-muted-foreground text-lg max-w-md">
                I build purpose-driven web solutions that prioritize speed,
                simplicity, and meaningful impact.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-full border border-border bg-card hover:border-primary hover:shadow-[0_0_20px_hsl(270_70%_60%/0.3)] transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-primary/30">
                <motion.img
                  src={profileImage}
                  alt="Shubhranshu Dalai"
                  className="w-full h-full object-cover"
                  initial={{ filter: "grayscale(100%)" }}
                  animate={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full border border-primary animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
