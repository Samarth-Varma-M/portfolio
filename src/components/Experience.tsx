"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
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
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-[#00f0ff]" size={28} />
              <h3 className="text-2xl font-bold text-white font-orbitron">Certifications</h3>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">NPTEL Certification — Business Analytics & Data Mining</h4>
                <p className="text-[#00f0ff] font-medium text-sm mb-3">Silver + Elite (Top 5% nationally)</p>
                <p className="text-gray-400 text-sm leading-relaxed">Mastered statistical modeling, predictive analytics, and data mining in R.</p>
              </div>
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">Cambridge English Assessment (PET)</h4>
                <p className="text-[#00f0ff] font-medium text-sm mb-3">Grade A (B2 Level)</p>
                <p className="text-gray-400 text-sm leading-relaxed">Demonstrated advanced English proficiency across reading, writing, listening, and technical communication.</p>
              </div>
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">Cisco Networking Academy</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Completed foundational training in enterprise networking, IP addressing, routing, switching, and network troubleshooting.</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-[#00f0ff]" size={28} />
              <h3 className="text-2xl font-bold text-white font-orbitron">Achievements</h3>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 blur-[30px] group-hover:bg-[#00f0ff]/10 transition-colors"></div>
                <h4 className="text-lg font-bold text-white mb-2">2nd Place — Agentic AI Hackathon</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">Awarded runner-up out of multiple competing teams for the development, architecture, and pitch of the AgriAgent platform.</p>
              </div>
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-[#00f0ff]/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 blur-[30px] group-hover:bg-[#00f0ff]/10 transition-colors"></div>
                <h4 className="text-lg font-bold text-white mb-2">Departmental Technical Competitions</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">Actively competed and achieved top placements in university-level technical events including Prompt Engineering, Technical Quizzes, and Speed Coding challenges.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
