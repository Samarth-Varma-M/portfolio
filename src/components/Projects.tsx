"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AgriAgent — Autonomous Agriculture Assistant",
    description: "An end-to-end intelligent agricultural advisory platform featuring multimodal crop disease diagnosis, live APMC mandi market pricing, weather advisories, and multi-language speech-to-text/audio output for rural farmers. Secured 2nd place in an Agentic AI Hackathon.",
    techStack: ["Next.js", "Next API", "Python", "REST APIs"],
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
  },
  {
    title: "SnipLinks — Custom Alias Hub",
    description: "A full-stack URL shortening web application allowing users to map long URLs to custom aliases, featuring auto-generation of unique codes using nanoid and real-time click tracking analytics utilizing MongoDB atomic increment operators.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                {/* Fallback image if network fails */}
                <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 font-orbitron group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 bg-[#00f0ff]/10 text-[#00f0ff] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
