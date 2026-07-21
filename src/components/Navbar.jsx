import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Muthuvel V<span className="text-brand-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              className={`relative group ${activeSection === link.to ? 'text-brand-600 dark:text-brand-400 font-medium' : 'text-gray-600 dark:text-gray-300'} hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors py-1`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-brand-600 transform origin-left transition-transform duration-300 ${activeSection === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <FiSun size={20} className="text-yellow-500" /> : <FiMoon size={20} className="text-blue-500" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <FiSun size={20} className="text-yellow-500" /> : <FiMoon size={20} className="text-blue-500" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              onClick={() => setIsOpen(false)}
              className={`relative group inline-block w-max ${activeSection === link.to ? 'text-brand-600' : 'text-gray-600 dark:text-gray-300'} hover:text-brand-600 text-lg cursor-pointer block pb-1`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-brand-600 transform origin-left transition-transform duration-300 ${activeSection === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
