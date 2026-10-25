import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiGithub, FiAward, FiFileText } from 'react-icons/fi';

const achievementsData = [
  {
    title: 'Hackathon Top 10 Finalist',
    desc: 'Shortlisted among the top 10 team submissions in a State-Level Smart India Hackathon internal selection model.',
    metric: 'TOP_10_FINALIST',
    code: 'ACH_HACK_01',
    icon: <FiAward className="text-[#ccff00]" />,
  },
  {
    title: 'LeetCode Platform Milestones',
    desc: 'Solved 300+ programming problems on LeetCode and GeeksforGeeks platforms, focusing on trees, arrays, graphs, and dynamic programming.',
    metric: '300+_SOLVED',
    code: 'ACH_ALGO_02',
    icon: <FiTrendingUp className="text-[#ccff00]" />,
  },
  {
    title: 'Open Source & GitHub Commits',
    desc: 'Maintained and contributed to repositories focusing on computer vision model deployment and automation scripts.',
    metric: '50+_COMMITS',
    code: 'ACH_GIT_03',
    icon: <FiGithub className="text-[#ccff00]" />,
  },
  {
    title: 'Academic Research Activity',
    desc: 'Researched automated crop quality analysis using hybrid machine learning architectures and camera-based edge nodes.',
    metric: 'RESEARCH_EXP',
    code: 'ACH_RES_04',
    icon: <FiFileText className="text-[#ccff00]" />,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 05. MILESTONES_AND_HONORS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>ACHIEVEMENTS</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 flex items-start gap-5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#11141c] border border-neutral-800 group-hover:border-[#ccff00]/40 flex items-center justify-center text-xl flex-shrink-0 shadow-[0_0_12px_rgba(204,255,0,0.15)] transition-colors">
                {item.icon}
              </div>

              {/* Text info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-0.5 bg-[#ccff00]/10 text-[#ccff00] rounded text-[10px] font-mono font-bold uppercase tracking-wider border border-[#ccff00]/30">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    [{item.code}]
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-white font-mono group-hover:text-[#ccff00] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
