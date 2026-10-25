import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiUser, FiRadio } from 'react-icons/fi';

const testimonialsData = [
  {
    name: 'Dr. R. Anand',
    designation: 'Department Head',
    organization: 'Sri Krishna College of Tech',
    code: 'SIG_ACAD_01',
    review: 'Muthuvel demonstrates outstanding passion in artificial intelligence labs. He bridges theoretical mathematics with physical microcontroller applications very effectively.',
    rating: 5,
  },
  {
    name: 'S. Rajesh Kumar',
    designation: 'Senior Internship Guide',
    organization: 'I-Hub Robotics',
    code: 'SIG_IND_02',
    review: 'During his AI & Robotics internship, Muthuvel displayed a strong grasp of Python scripting and camera configuration. He works well independently on robotics models.',
    rating: 5,
  },
  {
    name: 'K. Meera',
    designation: 'Project Lead',
    organization: 'Data Science Chapter',
    code: 'SIG_PEER_03',
    review: 'Muthuvel is a proactive problem solver. He built high-performance analysis scripts and helped compile clear visual reports during the team sprints.',
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 10. ENCRYPTED_TRANSMISSIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>ENDORSEMENTS</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Carousel Container */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-2xl mx-auto flex flex-col items-center text-center overflow-hidden group">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ccff00]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ccff00]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00]" />

          {/* Top transmission header */}
          <div className="w-full flex justify-between items-center pb-4 mb-6 border-b border-white/[0.06] font-mono text-[10px] tracking-widest text-neutral-400">
            <span className="flex items-center gap-1.5 text-[#ccff00]">
              <FiRadio className="animate-pulse" />
              <span>SIGNAL_DECRYPTED</span>
            </span>
            <span>[{current.code}]</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex justify-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <FiStar key={i} className="text-[#ccff00] fill-[#ccff00] drop-shadow-[0_0_6px_#ccff00]" size={15} />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-neutral-300 text-sm sm:text-base leading-relaxed font-mono">
                "{current.review}"
              </blockquote>

              {/* Bio info */}
              <div className="pt-2">
                <h4 className="font-bold text-white font-mono text-base">
                  {current.name}
                </h4>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  {current.designation} // <span className="text-[#ccff00]">{current.organization}</span>
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/[0.06] w-full justify-center">
            <button
              onClick={handlePrev}
              className="p-3 bg-[#11141c] hover:bg-[#ccff00] text-neutral-400 hover:text-black rounded-lg border border-neutral-800 hover:border-[#ccff00] transition-all duration-200"
              aria-label="Previous Slide"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-[#11141c] hover:bg-[#ccff00] text-neutral-400 hover:text-black rounded-lg border border-neutral-800 hover:border-[#ccff00] transition-all duration-200"
              aria-label="Next Slide"
            >
              <FiChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
