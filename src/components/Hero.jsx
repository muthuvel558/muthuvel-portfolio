import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">
            Hey, I'm Muthuvel V 👋
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-purple-600 dark:text-purple-400">
              AI & Full Stack Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
            I'm an aspiring AI and Full Stack Developer passionate about building intelligent applications, machine learning projects, and modern web experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-purple-500/30"
            >
              Download Resume
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-purple-600/20 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-purple-200 dark:border-purple-900/50 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img src="/profile.png" alt="Muthuvel V" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
