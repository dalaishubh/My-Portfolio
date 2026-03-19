import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import expVisorImage from "@/assets/project-expvisor.jpg";
import trustMintImage from "@/assets/project-trustmint.jpg";

const projects = [
  {
    title: "Exp-Visor",
    subtitle: "Full-Stack Expense Tracker",
    description:
      "A full-stack expense tracking application to manage multiple parallel income and expense streams with interactive graphical visualizations.",
    features: [
      "Add, categorize, and track expenses with interactive charts",
      "Responsive frontend using React.js",
      "Backend logic using Node.js and Python",
      "Real-time data visualization",
    ],
    technologies: ["React.js", "Node.js", "Python"],
    image: expVisorImage,
    github: "https://github.com",
    live: "#",
  },
  {
    title: "TrustMint",
    subtitle: "News Verification Platform",
    description:
      "A platform focused on verifying the authenticity and credibility of news content. Built during HackNITR 2026 - 24-Hour Hackathon.",
    features: [
      "Responsive and modular frontend components",
      "Three.js integration for visual representation",
      "Real-time news credibility scoring",
      "Team collaboration for rapid prototyping",
    ],
    technologies: ["React.js", "Three.js", "Node.js"],
    image: trustMintImage,
    github: "https://github.com",
    live: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className={`${isEven ? "" : "lg:order-2"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="project-card bg-card overflow-hidden"
        >
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground text-sm">{project.subtitle}</p>
              <motion.div whileHover={{ x: 5 }} className="cursor-pointer">
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </motion.div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`${isEven ? "" : "lg:order-1"}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-primary text-2xl">—</span>
          <h3 className="text-3xl font-display font-bold">{project.title}</h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="text-primary mt-1">›</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="skill-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="gradient-text">FEATURED PROJECTS</span>
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
