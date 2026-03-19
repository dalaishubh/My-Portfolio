import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  languages: [
    { name: "C++", icon: "⚡" },
    { name: "JavaScript", icon: "JS" },
    { name: "Python", icon: "🐍" },
  ],
  frontend: [
    { name: "HTML5", icon: "📄" },
    { name: "CSS3", icon: "🎨" },
    { name: "React.js", icon: "⚛️" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "ex" },
  ],
  databases: [
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
  ],
  tools: [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐱" },
    { name: "VS Code", icon: "💻" },
  ],
  core: [
    { name: "Data Structures", icon: "🏗️" },
    { name: "Algorithms", icon: "⚙️" },
    { name: "Operating Systems", icon: "🖥️" },
    { name: "DBMS", icon: "🗄️" },
    { name: "Computer Networks", icon: "🌐" },
  ],
};

const allSkills = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.tools,
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-8"
        >
          <span className="gradient-text">MY TECH STACK</span>
        </motion.h2>

        {/* Code brackets decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-6xl md:text-8xl text-primary/30 font-light">
            {"</>"}
          </span>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="skill-badge"
            >
              <span className="text-lg">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Core subjects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-semibold text-muted-foreground mb-6">
            Core CS Fundamentals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.core.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 text-sm text-muted-foreground border border-border/50 rounded-lg"
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
