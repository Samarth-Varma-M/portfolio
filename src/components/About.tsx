"use client";

import { motion } from "framer-motion";
import { User, Code, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
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
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hi, I&apos;m <span className="text-white font-semibold">Samarth Varma Mandapati</span>, a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications.
            </p>
            <p>
              I enjoy turning ideas into real digital solutions through clean code and creative design. Currently, I am continuously learning and improving my skills in both frontend and backend technologies to become an industry-ready developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 blur-[50px] group-hover:bg-[#00f0ff]/20 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 font-orbitron border-b border-gray-700 pb-4">
                Profile Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <User size={18} />
                    <span className="font-semibold text-sm">Status</span>
                  </div>
                  <span className="text-white font-medium">Fresher</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <Code size={18} />
                    <span className="font-semibold text-sm">Degree</span>
                  </div>
                  <span className="text-white font-medium">B.Tech CSE</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <Zap size={18} />
                    <span className="font-semibold text-sm">Trait</span>
                  </div>
                  <span className="text-white font-medium">Fast Learner</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <Users size={18} />
                    <span className="font-semibold text-sm">Working Style</span>
                  </div>
                  <span className="text-white font-medium">Team Player</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
