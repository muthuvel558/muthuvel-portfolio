import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTarget } from 'react-icons/fi';

const educationData = [
  {
    institution: 'NPR College of Engineering and Technology',
    degree: 'B.Tech (Artificial Intelligence and Data Science)',
    duration: '2023 - 2027',
    score: 'CGPA: 7.1 / 10',
    code: 'EDU_BTECH_01',
    achievements: ['Won Top 10 in college project exhibition', 'Technical head of Robotics student chapter']
  },
  {
    institution: 'Govt Boys Hr Sec School Vedasandur, Dindigul',
    degree: 'HSC & SSLC Board Certification',
    duration: '2021 - 2023',
    score: 'Percentage: 82%',
    code: 'EDU_HSC_02',
    achievements: ['School topper in Mathematics', 'District level science fair runner-up']
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 03. ACADEMIC_CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>EDUCATION TIMELINE</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00]/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00]/60" />

              {/* Duration & Code Badge */}
              <div className="flex justify-between items-center mb-5">
                <span className="inline-block px-3 py-1 bg-[#ccff00]/10 text-[#ccff00] rounded-full text-xs font-mono font-bold tracking-wider border border-[#ccff00]/30">
                  {edu.duration}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  [{edu.code}]
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-mono mb-1.5 group-hover:text-[#ccff00] transition-colors">
                {edu.institution}
              </h3>
              
              <p className="text-xs font-mono text-neutral-400 mb-4 tracking-wide">
                {edu.degree}
              </p>

              {/* Grade */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#11141c] text-[#ccff00] rounded border border-[#ccff00]/30 text-xs font-mono font-bold mb-6">
                <FiAward />
                <span>{edu.score}</span>
              </div>

              {/* Achievements */}
              <div className="pt-4 border-t border-white/[0.06]">
                <h4 className="text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <FiTarget className="text-[#ccff00]" />
                  <span>KEY_HIGHLIGHTS:</span>
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((ach, i) => (
                    <li key={i} className="text-xs font-mono text-neutral-400 flex items-start gap-2">
                      <span className="text-[#ccff00] mt-0.5">&gt;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
