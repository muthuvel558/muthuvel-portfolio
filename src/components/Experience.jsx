import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'I-Hub Robotics',
    position: 'Embedded Systems Intern',
    icon: '🔌',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800/40',
    description: [
      'Worked with microcontrollers, sensors, and IoT projects.',
      'Developed embedded applications and hardware prototypes.',
      'Learned real-time system programming and circuit interfacing.'
    ]
  },
  {
    company: 'I-Hub Robotics',
    position: 'AI & Robotics Intern',
    icon: '🤖',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-200 dark:border-purple-800/40',
    description: [
      'Built AI and robotics-based applications.',
      'Worked on computer vision and automation projects.',
      'Implemented machine learning concepts in real-world scenarios.'
    ]
  },
  {
    company: 'IPCS Global, Chennai',
    position: 'Python for Data Science Intern',
    icon: '📊',
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-900/10',
    border: 'border-orange-200 dark:border-orange-800/40',
    description: [
      'Performed data analysis using Python libraries.',
      'Worked with Pandas, NumPy, and Matplotlib.',
      'Built data science and machine learning mini projects.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
        >
          Experience<span className="text-purple-600">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto"
        >
          Hands-on internship experiences that shaped my skills in AI, robotics, and data science.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col p-8 rounded-3xl border ${exp.bg} ${exp.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              {/* Number badge */}
              <div className="absolute top-5 right-6 text-5xl font-black text-gray-900/5 dark:text-white/5 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {exp.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
              <p className={`font-semibold text-sm mb-5 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                {exp.company}
              </p>

              {/* Divider */}
              <div className={`h-0.5 w-10 bg-gradient-to-r ${exp.gradient} mb-5 rounded-full group-hover:w-20 transition-all duration-300`} />

              {/* Description */}
              <ul className="space-y-2 flex-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

