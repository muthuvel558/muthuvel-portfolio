import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
          >
            Projects<span className="text-brand-600">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Click on any project card to explore detailed descriptions, architecture, and outcomes.
          </motion.p>



          <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer hover:-translate-y-1"
              >


                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      onClick={e => e.stopPropagation()}
                      className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex-shrink-0 mt-1"
                      title="View Source Code"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                  {project.shortDescription && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          </AnimatePresence>
        </div>
      </section>

    </>
  );
};

export default Projects;
