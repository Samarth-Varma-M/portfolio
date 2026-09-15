"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Java Developer",
  "Problem Solver",
  "AI Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(
          currentRole.substring(
            0,
            currentText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#00f0ff] font-orbitron tracking-widest text-sm md:text-base uppercase mb-4">
              Building Future with Code
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-white mb-6 leading-tight">
              Hi, I&apos;m <br />
              <span className="text-glow-blue text-[#00f0ff]">Samarth Varma Mandapati</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-gray-300 mb-10 h-10 flex items-center"
          >
            I am a <span className="text-white ml-2">{currentText}</span>
            <span className="inline-block w-[3px] h-[1em] bg-[#00f0ff] ml-1 blinking-cursor"></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-3 bg-[#00f0ff] text-black font-semibold rounded-sm hover:bg-[#00f0ff]/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 glass neon-border text-white font-semibold rounded-sm hover:bg-white/5 transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-sm hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none hidden md:block"></div>
      <div className="absolute left-10 bottom-20 w-32 h-32 bg-[#7a04eb]/10 blur-[80px] rounded-full pointer-events-none"></div>
    </section>
  );
}
