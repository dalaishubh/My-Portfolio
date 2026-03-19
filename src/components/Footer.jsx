import { motion } from "framer-motion";
import { Linkedin, Github, FileText, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: FileText, href: "#", label: "Resume" },
  ];

  return (
    <footer className="py-16 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left - Name and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-2">
              Shubhranshu Dalai
            </h3>
            <p className="text-muted-foreground">
              Blending creativity with code to bring your vision to life.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Center - Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border border-muted-foreground" />
            </div>
          </motion.div>

          {/* Right - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <p className="text-muted-foreground mb-4">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <a
              href="mailto:shubh.ssd07@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="w-4 h-4" />
              shubh.ssd07@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm"
        >
          © {currentYear} Shubhranshu Dalai. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
