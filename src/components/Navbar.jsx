import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload, FiTerminal } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = ['home', 'about', 'experience', 'technical-experience', 'skills', 'projects', 'testimonials', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS',   to: 'projects' },
    { name: 'EXPERIENCE', to: 'experience' },
    { name: 'SKILLS',     to: 'skills' },
    { name: 'ABOUT',      to: 'about' },
    { name: 'CONTACT',    to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#07080a]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar — Neon Lime */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#ccff00] shadow-[0_0_8px_#ccff00] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        {/* Logo / Identifier matching MARCUS_CHEN */}
        <a
          href="#home"
          className="group font-mono text-sm sm:text-base font-bold tracking-[0.2em] text-white flex items-center hover:text-[#ccff00] transition-colors"
        >
          <span className="text-white group-hover:text-[#ccff00] transition-colors">MUTHUVEL</span>
          <span className="text-[#ccff00]">_</span>
          <span className="text-neutral-400 group-hover:text-white transition-colors">V</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <a
                key={link.name}
                href={`#${link.to}`}
                className={`relative py-1 font-mono text-xs uppercase tracking-[0.22em] transition-all duration-200 ${
                  isActive
                    ? 'text-[#ccff00] font-semibold drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]'
                    : 'text-neutral-400 hover:text-[#ccff00]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#ccff00] shadow-[0_0_6px_#ccff00]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Resume Badge matching resume_v4.pdf */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/muthuvel_resume.docx"
            download="Muthuvel_Resume.docx"
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11141c]/90 hover:bg-[#ccff00]/10 border border-neutral-700/70 hover:border-[#ccff00]/60 text-neutral-300 hover:text-[#ccff00] font-mono text-xs tracking-wider transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
            <span>resume_v4.pdf</span>
            <FiDownload size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/muthuvel_resume.docx"
            download="Muthuvel_Resume.docx"
            className="px-2.5 py-1 rounded-full bg-[#11141c] border border-neutral-700 text-neutral-300 font-mono text-[10px] tracking-wider"
          >
            resume_v4.pdf
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-[#11141c] text-neutral-300 border border-neutral-800 hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed left-0 w-full bg-[#07080a]/95 backdrop-blur-xl border-b border-neutral-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-[58px] opacity-100 pointer-events-auto' : '-top-[400px] opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-sm tracking-[0.2em] py-2 transition-colors flex items-center justify-between border-b border-neutral-800/60 ${
                activeSection === link.to ? 'text-[#ccff00]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              {activeSection === link.to && <span className="text-xs text-[#ccff00]">● ACTIVE</span>}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-2.5 font-mono text-xs tracking-widest text-black bg-[#ccff00] hover:bg-[#b8e600] rounded-lg font-bold transition-all mt-2"
          >
            INITIATE_CONTACT // →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
