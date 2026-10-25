import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CyberParallaxBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring physics for smooth mouse parallax
  const springX = useSpring(0, { stiffness: 45, damping: 25 });
  const springY = useSpring(0, { stiffness: 45, damping: 25 });

  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 2000], [0, -120]);
  const laserAngleShift = useTransform(scrollY, [0, 1500], [0, 4]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      springX.set(x);
      springY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080a]">
      {/* Deep vignette gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(204,255,0,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(204,255,0,0.04),transparent_50%)]" />

      {/* Cyber subtle grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Dynamic Laser Beams (as in Marcus Chen screenshot) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute inset-0"
      >
        {/* Diagonal Laser Beam 1 (Top-Left to Bottom-Right) */}
        <motion.div
          animate={{
            opacity: [0.65, 0.9, 0.65],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[240vw] h-[2px] -left-[70vw] top-[32vh] origin-center -rotate-[28deg]"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(204,255,0,0.15) 25%, rgba(204,255,0,0.95) 50%, rgba(204,255,0,0.2) 75%, transparent 95%)',
            boxShadow: '0 0 12px 2px rgba(204,255,0,0.65), 0 0 40px 6px rgba(204,255,0,0.25)',
          }}
        />

        {/* Diagonal Soft Glow Tube Behind Beam 1 */}
        <div
          className="absolute w-[220vw] h-[60px] -left-[60vw] top-[30vh] origin-center -rotate-[28deg] blur-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 10%, rgba(204,255,0,0.08) 50%, transparent 90%)',
          }}
        />

        {/* Diagonal Laser Beam 2 (Top-Right to Bottom-Left) */}
        <motion.div
          animate={{
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute w-[240vw] h-[2px] -left-[50vw] top-[58vh] origin-center rotate-[38deg]"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(204,255,0,0.18) 30%, rgba(204,255,0,0.98) 50%, rgba(204,255,0,0.22) 72%, transparent 95%)',
            boxShadow: '0 0 14px 2px rgba(204,255,0,0.7), 0 0 45px 8px rgba(204,255,0,0.3)',
          }}
        />

        {/* Diagonal Soft Glow Tube Behind Beam 2 */}
        <div
          className="absolute w-[220vw] h-[70px] -left-[45vw] top-[55vh] origin-center rotate-[38deg] blur-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 15%, rgba(204,255,0,0.1) 50%, transparent 85%)',
          }}
        />

        {/* Intersection Pulse Core where laser beams cross */}
        <motion.div
          animate={{
            scale: [0.9, 1.25, 0.9],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[22%] top-[48%] w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl bg-[#ccff00]/15 pointer-events-none"
        />
      </motion.div>

      {/* Floating Cyber Ticks / Crosshairs with Scroll Parallax */}
      <motion.div style={{ y: scrollShift }} className="absolute inset-0">
        <div className="absolute top-24 left-10 text-[10px] font-mono tracking-widest text-neutral-600 select-none">
          + SYS.COORDS [34.0522°N // 118.2437°W]
        </div>
        <div className="absolute top-44 right-16 text-[10px] font-mono tracking-widest text-neutral-700 select-none hidden lg:block">
          SEC_01 // HIGH_FREQ_NODE
        </div>
        <div className="absolute bottom-28 left-16 text-[10px] font-mono tracking-widest text-neutral-700 select-none hidden md:block">
          ENCRYPT_LAYER: AES-256-GCM
        </div>
        <div className="absolute bottom-16 right-12 text-[10px] font-mono tracking-widest text-neutral-600 select-none">
          SYS_STATUS // ACTIVE
        </div>

        {/* Crosshair target markers */}
        <span className="absolute top-[35%] left-[8%] text-[#ccff00]/30 font-mono text-sm select-none">+</span>
        <span className="absolute top-[22%] right-[12%] text-[#ccff00]/25 font-mono text-sm select-none">+</span>
        <span className="absolute top-[75%] left-[18%] text-[#ccff00]/20 font-mono text-sm select-none">+</span>
        <span className="absolute top-[82%] right-[25%] text-[#ccff00]/25 font-mono text-sm select-none">+</span>
      </motion.div>

      {/* Radial edge darken mask */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080a]/40 to-[#07080a] pointer-events-none" />
    </div>
  );
};

export default CyberParallaxBackground;
