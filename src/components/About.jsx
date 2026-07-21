import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '3', label: 'Internships' },
  { value: '2+', label: 'Years Learning' },
];

const focuses = [
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Designing and training ML models for real-world prediction and classification tasks.',
  },
  {
    icon: '🌐',
    title: 'Full Stack Development',
    desc: 'Building end-to-end web applications with modern frameworks and clean UI/UX.',
  },
  {
    icon: '📊',
    title: 'Data Science',
    desc: 'Extracting insights from data using Python, Pandas, and statistical techniques.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me<span className="text-brand-600">.</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Muthuvel V
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm an aspiring{' '}
              <span className="font-semibold text-brand-600 dark:text-brand-400">
                AI &amp; Full Stack Developer
              </span>{' '}
              with a strong foundation in machine learning, computer vision, and modern web technologies. I take complex problems and translate them into clean, functional solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Through internships in embedded systems, AI &amp; robotics, and data science, I've gained hands-on experience across the full technology stack — from hardware-level programming to deploying web applications.
            </p>

            {/* Stats row */}
            <div className="flex gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex flex-col items-center justify-center px-5 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-[90px]"
                >
                  <p className="text-3xl font-black text-brand-600 dark:text-brand-400">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 text-center">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {focuses.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-xl flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
