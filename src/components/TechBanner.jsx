import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "ex" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐱" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "⚡" },
];

const TechBanner = () => {
  return (
    <div className="relative py-16 overflow-visible">
      {/* Angled banner container */}
      <div 
        className="absolute inset-0 bg-primary"
        style={{
          transform: 'skewY(-3deg)',
          transformOrigin: 'center',
        }}
      >
        {/* Diagonal stripes background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`,
            }}
          />
        </div>
      </div>

      <div className="relative flex overflow-hidden" style={{ transform: 'skewY(-3deg)' }}>
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 text-primary-foreground whitespace-nowrap"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
              <span className="text-primary-foreground/50 mx-4">◇</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechBanner;
