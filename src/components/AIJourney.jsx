import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBookOpen, FiActivity, FiGlobe } from 'react-icons/fi';

const milestones = [
  {
    year: '2022',
    code: 'STAGE_01',
    title: 'Foundations & Academic Entry',
    desc: 'Began B.E. in Electronics and Communication Engineering. Focused heavily on high-level programming logic and circuit theory.',
    icon: <FiBookOpen />,
  },
  {
    year: '2023',
    code: 'STAGE_02',
    title: 'Self-Learning Machine Learning',
    desc: 'Completed online bootcamps for Python Data Science. Solved coding problems and built content recommendation systems.',
    icon: <FiTrendingUp />,
  },
  {
    year: '2024',
    code: 'STAGE_03',
    title: 'Robotics & Hardware Interfacing',
    desc: 'Completed internships at I-Hub Robotics, learning firmware development, microcontrollers, and computer vision classification.',
    icon: <FiActivity />,
  },
  {
    year: '2025',
    code: 'STAGE_04',
    title: 'Data Science & Production Models',
    desc: 'Completed IPCS Chennai Data Science internship. Worked on model optimization, statistical distributions, and deep neural nets.',
    icon: <FiGlobe />,
  }
];

const AIJourney = () => {
  return (
    <section id="aijourney" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 07. NEURAL_TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>THE AI JOURNEY</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Timeline roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Laser Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#ccff00]/30 shadow-[0_0_8px_rgba(204,255,0,0.4)] hidden md:block" />

          <div className="space-y-12">
            {milestones.map((stone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} relative`}>
                  
                  {/* Center Dot Indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#07080a] border-2 border-[#ccff00] shadow-[0_0_10px_#ccff00] z-10 hidden md:block" />

                  {/* Left/Right Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="w-full md:w-[45%] p-6 md:p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-[#ccff00] font-mono">
                          {stone.year}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          // {stone.code}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#11141c] text-[#ccff00] border border-neutral-800 flex items-center justify-center text-sm shadow-[0_0_10px_rgba(204,255,0,0.15)] group-hover:border-[#ccff00]/40 transition-colors">
                        {stone.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 font-mono group-hover:text-[#ccff00] transition-colors">
                      {stone.title}
                    </h3>
                    
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                      {stone.desc}
                    </p>
                  </motion.div>

                  {/* Spacer for structure */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIJourney;
