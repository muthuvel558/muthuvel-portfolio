import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  // Live fluctuating telemetry for HUD feel
  const [cpuLoad, setCpuLoad] = useState(75);
  const [memUsage, setMemUsage] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(72 + Math.random() * 6));
      setMemUsage(Math.floor(41 + Math.random() * 4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Mouse tilt parallax for the HUD card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Marcus Chen style Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill Badge: ● SYSTEM ONLINE // AVAILABLE FOR HIRE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#ccff00]/40 bg-[#ccff00]/5 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00] shadow-[0_0_8px_#ccff00]" />
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#ccff00] uppercase">
                SYSTEM ONLINE // AVAILABLE FOR HIRE
              </span>
            </motion.div>

            {/* Giant Brutalist Headline: FULL STACK DEV_ */}
            <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase mb-6 select-none">
              <div>FULL</div>
              <div>STACK</div>
              <div className="flex items-center text-[#ccff00] drop-shadow-[0_0_20px_rgba(204,255,0,0.35)]">
                <span>DEV</span>
                <span className="animate-blink">_</span>
              </div>
            </div>

            {/* Role typing indicator */}
            <div className="font-mono text-xs sm:text-sm text-neutral-400 mb-6 flex items-center gap-2 tracking-wider">
              <span className="text-[#ccff00] font-bold">&gt;</span>
              <span className="text-neutral-500 uppercase">CORE_SPECIALIZATION:</span>
              <span className="text-white font-semibold">
                <TypeAnimation
                  sequence={[
                    'Full Stack Development', 2200,
                    'Data Analysis', 2200,
                    'Machine Learning', 2200,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* Subtext description matching screenshot vibe */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-normal">
              Architecting digital voids and crafting high-performance web experiences. Specialized in scalable distributed systems, deep neural networks, and interactive real-time interfaces.
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#ccff00] hover:bg-[#d8ff33] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:shadow-[0_0_35px_rgba(204,255,0,0.6)] hover:scale-[1.03] transition-all duration-200"
              >
                <span>VIEW PROJECTS</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>

              {/* Minimal Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <FiGithub size={18} />,   href: 'https://github.com/muthuvel558', label: 'GitHub' },
                  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <FiMail size={18} />,     href: 'mailto:muthuvelv3032@gmail.com', label: 'Email' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-[#0c0e14]/90 text-neutral-400 hover:text-[#ccff00] border border-neutral-800 hover:border-[#ccff00]/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all duration-200 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sci-Fi HUD Terminal Widget (1:1 with Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[440px] bg-[#090b10]/85 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(204,255,0,0.03)] group"
            >
              {/* Sci-Fi HUD Corner Brackets ┌ ┐ and └ ┘ */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ccff00] rounded-tl-sm transition-all group-hover:w-5 group-hover:h-5" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ccff00] rounded-tr-sm transition-all group-hover:w-5 group-hover:h-5" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ccff00] rounded-bl-sm transition-all group-hover:w-5 group-hover:h-5" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ccff00] rounded-br-sm transition-all group-hover:w-5 group-hover:h-5" />

              {/* Status Header: SYS.STATUS: NORMAL & UPTIME: 99.9% */}
              <div className="flex justify-between items-center font-mono text-[11px] tracking-[0.2em] text-neutral-400 mb-10 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                  <span className="text-neutral-300">SYS.STATUS: NORMAL</span>
                </div>
                <div className="text-neutral-400">
                  UPTIME: 99.9%
                </div>
              </div>

              {/* Live Telemetry Progress Bars */}
              <div className="space-y-6 mb-12">
                {/* CPU_LOAD */}
                <div>
                  <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2">
                    <span className="text-neutral-400 uppercase">CPU_LOAD</span>
                    <span className="text-[#ccff00] font-bold">{cpuLoad}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div
                      animate={{ width: `${cpuLoad}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full bg-[#ccff00] rounded-full shadow-[0_0_12px_#ccff00]"
                    />
                  </div>
                </div>

                {/* MEM_USAGE */}
                <div>
                  <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2">
                    <span className="text-neutral-400 uppercase">MEM_USAGE</span>
                    <span className="text-[#ccff00] font-bold">{memUsage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div
                      animate={{ width: `${memUsage}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full bg-[#ccff00] rounded-full shadow-[0_0_12px_#ccff00]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Metric: 03 ACTIVE_PROJECTS */}
              <div className="flex flex-col items-end pt-4 border-t border-white/[0.06]">
                <div className="font-mono font-black text-6xl md:text-7xl text-white tracking-tighter leading-none mb-1">
                  03
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase font-semibold">
                  ACTIVE_PROJECTS
                </div>
              </div>

              {/* Subtle background scan effect inside HUD card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ccff00]/[0.02] to-transparent pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
