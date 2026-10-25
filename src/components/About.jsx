import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiLayers, FiTerminal, FiZap } from 'react-icons/fi';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = numericValue;
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { value: '15+', label: 'Projects Built' },
    { value: '3',   label: 'Internships' },
    { value: '300+', label: 'Solved Problems' },
    { value: '25+', label: 'Tech Stack' },
  ];

  const objectives = [
    {
      title: 'ML & Deep Neural Networks',
      desc: 'Developing specialized vision architectures, LLM integrations, and robust predictive pipelines.',
      icon: <FiCpu className="text-[#ccff00]" size={20} />,
    },
    {
      title: 'Full Stack Integration',
      desc: 'Creating end-to-end user interfaces and building fast APIs for hosting and consuming ML models.',
      icon: <FiLayers className="text-[#ccff00]" size={20} />,
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Heading matching Marcus Chen style */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 01. PROFILE_LOGS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>ABOUT ME</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Grid Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio description & counter stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="font-mono text-xs text-neutral-400 tracking-wider flex items-center gap-2 mb-2">
              <span className="text-[#ccff00]">&gt;</span>
              <span>IDENTITY: MUTHUVEL_V // AI_ML_ENGINEER</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white font-display tracking-tight">
              Aspiring AI / ML Engineer &amp; Full Stack Architect
            </h3>
            
            <p className="text-neutral-400 leading-relaxed text-base font-normal">
              Motivated Artificial Intelligence and Data Science undergraduate with a strong foundation in Machine Learning, Deep Learning, and Data Analysis. Skilled in developing AI solutions using Python, TensorFlow, PyTorch, OpenCV, and Scikit-learn through academic and personal projects.
            </p>

            <p className="text-neutral-400 leading-relaxed text-base font-normal">
              Passionate about solving real-world problems using AI and eager to contribute as an AI/ML Engineer or Data Scientist. I build end-to-end ML pipelines, predictive models, and NLP applications — sharing work on GitHub and LinkedIn.
            </p>

            {/* Counters Row - HUD Cyber Style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 text-center relative group"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ccff00]/60" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ccff00]/60" />
                  
                  <p className="text-3xl font-black font-mono text-[#ccff00] drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-[10px] font-mono font-medium text-neutral-400 mt-2 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Focus Areas & Telemetry Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Focus Areas Card with HUD framing */}
            <div className="p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] relative overflow-hidden group hover:border-[#ccff00]/40 transition-all duration-300">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ccff00]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ccff00]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00]" />
              
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-mono text-xs font-bold text-neutral-300 uppercase tracking-[0.2em] flex items-center gap-2">
                  <FiTerminal className="text-[#ccff00]" />
                  <span>CORE_SPECIALIZATIONS</span>
                </h4>
                <span className="font-mono text-[10px] text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded border border-[#ccff00]/30">
                  SYS.READY
                </span>
              </div>

              <div className="space-y-6">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#11141c] border border-neutral-800 flex items-center justify-center text-lg flex-shrink-0 group-hover:border-[#ccff00]/40 transition-colors">
                      {obj.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm font-mono tracking-wide">
                        {obj.title}
                      </h5>
                      <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed font-normal">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Hobbies Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/30 transition-all">
                <h5 className="font-mono font-bold text-[#ccff00] text-[11px] uppercase tracking-wider mb-3">
                  // STRENGTHS
                </h5>
                <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Analytical Thinking</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Quick Adapter</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Team Collaboration</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Problem Solver</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/30 transition-all">
                <h5 className="font-mono font-bold text-[#ccff00] text-[11px] uppercase tracking-wider mb-3">
                  // INTERESTS
                </h5>
                <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Generative AI Models</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Edge IoT Devices</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Robotics Automation</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#ccff00] rounded-full"/>Open Source Code</li>
                </ul>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
