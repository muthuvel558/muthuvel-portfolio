import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJs, FaReact, FaGithub, FaAws, FaBrain, FaRegLightbulb,
} from 'react-icons/fa';
import {
  SiCplusplus, SiTensorflow, SiOpencv, SiScikitlearn, SiPandas,
  SiFlask, SiMysql, SiGooglecolab, SiFigma,
} from 'react-icons/si';
import { FiBarChart2, FiLayers, FiTool, FiStar, FiDatabase, FiCpu } from 'react-icons/fi';

const categories = [
  {
    title: 'Programming Languages',
    code: 'MOD_LANG',
    icon: <FiCpu size={24} />,
    badges: [
      { label: 'Python', icon: <FaPython /> },
      { label: 'C++', icon: <SiCplusplus /> },
      { label: 'SQL', icon: <SiMysql /> },
      { label: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    title: 'Machine Learning',
    code: 'MOD_ML',
    icon: <SiScikitlearn size={24} />,
    badges: [
      { label: 'Regression', icon: <FiBarChart2 /> },
      { label: 'Classification', icon: <FiBarChart2 /> },
      { label: 'Clustering', icon: <FiBarChart2 /> },
      { label: 'Feature Engineering', icon: <FiStar /> },
      { label: 'Model Evaluation', icon: <SiScikitlearn /> },
    ],
  },
  {
    title: 'Deep Learning & Vision',
    code: 'MOD_DL',
    icon: <FaBrain size={24} />,
    badges: [
      { label: 'TensorFlow', icon: <SiTensorflow /> },
      { label: 'Keras', icon: <FaBrain /> },
      { label: 'OpenCV', icon: <SiOpencv /> },
      { label: 'CNN Architectures', icon: <FaBrain /> },
      { label: 'Transfer Learning', icon: <FiLayers /> },
    ],
  },
  {
    title: 'Data Analysis & BI',
    code: 'MOD_DATA',
    icon: <FiBarChart2 size={24} />,
    badges: [
      { label: 'Pandas', icon: <SiPandas /> },
      { label: 'NumPy', icon: <FiBarChart2 /> },
      { label: 'Matplotlib', icon: <FiBarChart2 /> },
      { label: 'Power BI', icon: <FiBarChart2 /> },
    ],
  },
  {
    title: 'Databases & Storage',
    code: 'MOD_DB',
    icon: <FiDatabase size={24} />,
    badges: [
      { label: 'MySQL', icon: <SiMysql /> },
      { label: 'MongoDB', icon: <FiDatabase /> },
    ],
  },
  {
    title: 'Developer Tools',
    code: 'MOD_TOOLS',
    icon: <FiTool size={24} />,
    badges: [
      { label: 'Git & GitHub', icon: <FaGithub /> },
      { label: 'Jupyter Notebook', icon: <SiGooglecolab /> },
      { label: 'Google Colab', icon: <SiGooglecolab /> },
      { label: 'VS Code', icon: <FiTool /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Section Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 08. CAPABILITY_MATRIX</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>SKILLS &amp; CAPABILITIES</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Cyber Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

              {/* Header with code & icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#11141c] text-[#ccff00] border border-neutral-800 flex items-center justify-center shadow-[0_0_12px_rgba(204,255,0,0.15)] group-hover:border-[#ccff00]/40 transition-colors">
                  {cat.icon}
                </div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  [{cat.code}]
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white font-mono mb-4 group-hover:text-[#ccff00] transition-colors">
                {cat.title}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.badges.map((badge, j) => (
                  <span
                    key={j}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11141c] text-neutral-300 hover:text-white hover:border-[#ccff00]/40 font-mono text-xs border border-neutral-800 transition-all duration-200"
                  >
                    <span className="text-[#ccff00] text-sm">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
