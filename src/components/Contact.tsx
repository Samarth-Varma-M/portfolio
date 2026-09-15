"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0f]/50">
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
            Initialize Connection
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-gray-400 text-lg">
              Open for opportunities. Let&apos;s build the next generation of web applications together.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:msamarthvarma@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
                  <Mail size={20} />
                </div>
                <span className="font-medium tracking-wide">msamarthvarma@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/Samarth-Varma-M" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
                  <FaLinkedin size={20} />
                </div>
                <span className="font-medium tracking-wide">linkedin.com/in/Samarth-Varma-M</span>
              </a>

              <a href="https://github.com/Samarth-Varma-M" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:neon-border group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
                  <FaGithub size={20} />
                </div>
                <span className="font-medium tracking-wide">github.com/Samarth-Varma-M</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form className="glass-card p-8 rounded-xl flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#050505]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#050505]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-[#050505]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00f0ff] text-black font-bold rounded-lg hover:bg-[#00f0ff]/80 transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
                >
                  <Send size={18} /> Send Message
                </button>
                <a
                  href="mailto:msamarthvarma@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 py-3 glass neon-border text-white font-bold rounded-lg hover:bg-white/5 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
