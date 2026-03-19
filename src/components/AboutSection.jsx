import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="gradient-text">ABOUT ME</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="gradient-border p-8 md:p-12">
            <div className="space-y-6 text-base text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-2xl">👋</span>
                <span>
                  Hey there! I'm Shubhranshu Sekhar Dalai, a passionate developer
                  currently pursuing my B.Tech in Computer Science and Engineering
                  at Odisha University of Technology and Research (2023-2027).
                </span>
              </p>

              <p>
                I have a deep interest in building real-world applications and
                continuously exploring new and emerging technologies. Whether it's
                web development, software engineering, or tech innovations, I love
                understanding how things work and creating impactful solutions.
              </p>

              <p>
                Right now, I'm focused on strengthening my foundation in Data
                Structures and Algorithms (DSA) to enhance my problem-solving
                skills and prepare for future opportunities in software
                development and tech interviews.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">📍</span>
                  <span>Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
