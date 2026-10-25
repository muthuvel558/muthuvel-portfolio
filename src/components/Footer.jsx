import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMapPin, FiActivity } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'HOME', to: 'home' },
    { label: 'EXPERIENCE', to: 'experience' },
    { label: 'PROJECTS', to: 'projects' },
    { label: 'SKILLS', to: 'skills' },
    { label: 'CONTACT', to: 'contact' },
  ];

  const expertise = [
    'Computer Vision Models',
    'Deep Neural Networks',
    'Machine Learning Pipelines',
    'Full Stack AI Web Apps',
  ];

  return (
    <footer className="bg-[#050608] w-full pt-20 pb-12 relative overflow-hidden border-t border-white/[0.08]">
      {/* Top neon laser beam line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top telemetry bar */}
        <div className="flex flex-wrap items-center justify-between pb-8 mb-12 border-b border-white/[0.06] font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-[#ccff00]">
            <FiActivity className="animate-pulse" />
            <span>SYSTEM_ALL_OK // TELEMETRY_ACTIVE</span>
          </div>
          <div className="text-neutral-500">
            SEC_SESSION: 0x89EDB3F0 // ENCRYPTED
          </div>
        </div>

        {/* Top section: brand + columns */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">

          {/* Brand */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-2xl font-black text-white font-mono tracking-tight flex items-center gap-1">
              <span>MUTHUVEL</span>
              <span className="text-[#ccff00]">_</span>
              <span className="text-neutral-400">V</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed text-xs max-w-xs font-normal">
              Architecting intelligent digital voids and crafting high-performance AI web experiences.
            </p>
            {/* Social row */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FiGithub size={16} />,   href: 'https://github.com/muthuvel558', label: 'GitHub' },
                { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiMail size={16} />,     href: 'mailto:muthuvelv3032@gmail.com', label: 'Email' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#11141c] hover:bg-[#ccff00] text-neutral-400 hover:text-black border border-neutral-800 hover:border-[#ccff00] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">
                // NAVIGATION
              </h3>
              <ul className="space-y-2.5 font-mono text-xs">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.to}`}
                      className="text-neutral-400 hover:text-[#ccff00] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-[#ccff00]">&gt;</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">
                // CAPABILITIES
              </h3>
              <ul className="space-y-2.5 font-mono text-xs text-neutral-400">
                {expertise.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-[#ccff00] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">
                // NETWORK
              </h3>
              <ul className="space-y-2.5 font-mono text-xs">
                {[
                  { label: 'GitHub Repos', href: 'https://github.com/muthuvel558' },
                  { label: 'LinkedIn Node', href: 'https://linkedin.com' },
                  { label: 'Email Channel', href: 'mailto:muthuvelv3032@gmail.com' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-[#ccff00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center font-mono text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#ccff00]" size={12} />
                <span>Vedasandur, Dindigul, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-[#ccff00]" size={12} />
                <span>muthuvelv3032@gmail.com</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-[#11141c] hover:bg-[#ccff00] text-neutral-400 hover:text-black border border-neutral-800 hover:border-[#ccff00] rounded-xl transition-all duration-200 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 font-mono text-[11px] text-neutral-600">
            © 2026 MUTHUVEL V // ALL SYSTEMS OPERATIONAL.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
