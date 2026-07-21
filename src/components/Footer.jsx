import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiArrowUp, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand & Tagline */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Muthuvel V<span className="text-purple-600">⚡</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              AI & Full Stack Developer passionate about building intelligent applications and modern web experiences.
            </p>
          </div>

          {/* Columns */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-purple-600 inline-block pb-1">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center group">
                      <span className="w-0 h-0.5 bg-purple-600 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-purple-600 inline-block pb-1">Expertise</h3>
              <ul className="space-y-3">
                {['Web Development', 'Artificial Intelligence', 'Machine Learning', 'Data Science'].map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-purple-600 inline-block pb-1">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <FiGithub size={20} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <FiLinkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:your-email@example.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <FiMail size={20} />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <FiFileText size={20} />
                    <span>Resume</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-200 dark:border-gray-800 gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-purple-600" />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-purple-600" />
              <span>your-email@example.com</span>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 group"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} className="group-hover:animate-bounce" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800/50">
          <p className="text-gray-500 dark:text-gray-500 mb-2">
            © 2026 Muthuvel V⚡. All Rights Reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span> using React & Tailwind CSS.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
