import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaGitAlt, FaGithub, FaAws 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTensorflow, SiOpencv, SiScikitlearn, SiNumpy, SiPandas, 
  SiFlask, SiMysql, SiMongodb, SiFigma 
} from 'react-icons/si';

const techLogos = [
  { icon: <FaPython />, name: 'Python', hex: '#3776AB' },
  { icon: <SiCplusplus />, name: 'C++', hex: '#00599C' },
  { icon: <FaJs />, name: 'JavaScript', hex: '#F7DF1E' },
  { icon: <FaReact />, name: 'React', hex: '#61DAFB' },
  { icon: <SiTensorflow />, name: 'TensorFlow', hex: '#FF6F00' },
  { icon: <SiScikitlearn />, name: 'Scikit-Learn', hex: '#F7931E' },
  { icon: <SiOpencv />, name: 'OpenCV', hex: '#5C3EE8' },
  { icon: <SiPandas />, name: 'Pandas', hex: '#150458' },
  { icon: <SiNumpy />, name: 'NumPy', hex: '#013243' },
  { icon: <SiFlask />, name: 'Flask', hex: '#ffffff' },
  { icon: <SiMysql />, name: 'MySQL', hex: '#4479A1' },
  { icon: <SiMongodb />, name: 'MongoDB', hex: '#47A248' },
  { icon: <FaAws />, name: 'AWS', hex: '#FF9900' },
  { icon: <FaGitAlt />, name: 'Git', hex: '#F05032' },
  { icon: <FaGithub />, name: 'GitHub', hex: '#ffffff' },
  { icon: <SiFigma />, name: 'Figma', hex: '#F24E1E' },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 06. DEV_TOOLKIT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>CORE TECH STACK</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
          {techLogos.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="p-5 rounded-xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00] flex flex-col items-center justify-center gap-2.5 shadow-sm hover:shadow-[0_0_20px_rgba(204,255,0,0.25)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#ccff00]/40 group-hover:border-[#ccff00]" />
              <div className="text-3xl text-neutral-400 group-hover:text-[#ccff00] transition-colors duration-200">
                {tech.icon}
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
