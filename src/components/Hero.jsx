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
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">

            {/* Glow orbs */}
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-700" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-1000" />

            {/* Main floating image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <img
                src="/hero_tech.png"
                alt="AI ML DS Tech"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating badge — AI */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              className="absolute top-4 -left-4 md:-left-8 flex items-center gap-2 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800 rounded-full px-4 py-2 shadow-lg shadow-purple-500/20"
            >
              <span className="text-lg">🤖</span>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">Artificial Intelligence</span>
            </motion.div>

            {/* Floating badge — ML */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-12 -left-4 md:-left-10 flex items-center gap-2 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 rounded-full px-4 py-2 shadow-lg shadow-indigo-500/20"
            >
              <span className="text-lg">📈</span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">Machine Learning</span>
            </motion.div>

            {/* Floating badge — DS */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 -right-4 md:-right-8 flex items-center gap-2 bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-800 rounded-full px-4 py-2 shadow-lg shadow-cyan-500/20"
            >
              <span className="text-lg">📊</span>
              <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">Data Science</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
