"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "Next.js", level: 80 },
      { name: "React", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Core CS Competencies",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "OOPs", level: 85 },
      { name: "DBMS & Operating Systems", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0f]/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-2 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#00f0ff]"></span>
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass p-6 rounded-lg neon-border"
            >
              <h3 className="text-xl font-bold text-white mb-6 font-orbitron">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#00f0ff] font-orbitron text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#7a04eb] shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
