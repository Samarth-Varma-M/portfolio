"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#0a0a0f]/50">
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
            Education
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] to-[#7a04eb]/10"></div>

            {/* Timeline Item */}
            <div className="relative md:w-1/2 md:pr-12 md:text-right mb-12">
              <div className="hidden md:flex absolute right-[-14px] top-6 w-7 h-7 rounded-full bg-[#050505] border-2 border-[#00f0ff] items-center justify-center z-10 shadow-[0_0_10px_#00f0ff]">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff]"></div>
              </div>
              
              {/* Mobile Timeline dot */}
              <div className="md:hidden absolute left-[-32px] top-6 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#00f0ff] flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
              </div>
              {/* Mobile Line */}
              <div className="md:hidden absolute left-[-21px] top-12 bottom-[-48px] w-[2px] bg-gradient-to-b from-[#00f0ff] to-[#7a04eb]/10"></div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors inline-block w-full text-left md:text-right relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 blur-[30px] group-hover:bg-[#00f0ff]/10 transition-colors"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron mb-4">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                
                <div className="flex flex-col md:items-end gap-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    <span>Vignan&apos;s Foundation for Science, Technology & Research (CGPA: 8.02)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2024 - 2028</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Guntur, Andhra Pradesh</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
