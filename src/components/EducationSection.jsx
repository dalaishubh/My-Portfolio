import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const education = [
  {
    institution: "Odisha University of Technology and Research",
    location: "Bhubaneswar, Odisha",
    duration: "2023 - 2027",
    status: "Ongoing",
    degree: "B.Tech CSE",
    score: "CGPA - 7.38",
  },
];

const certifications = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    date: "July 2024",
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco",
    date: "February 2025",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="gradient-text">EDUCATION</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-20 md:pl-28 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-10 top-2">
                <div className="timeline-dot" />
              </div>

              {/* Institution logo placeholder */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-lg">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                <span>{edu.duration}</span>
                <span className="px-3 py-1 rounded-full border border-primary/50 text-primary text-xs">
                  {edu.status}
                </span>
              </div>

              <div>
                <p className="font-semibold text-foreground">{edu.degree}</p>
                <p className="text-muted-foreground">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="gradient-border p-6"
              >
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
