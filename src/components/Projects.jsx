import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCheck, FiCpu, FiDatabase, FiSettings, FiActivity, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Web Applications',
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    const matchesType = project.type?.toLowerCase() === activeFilter.toLowerCase();
    const matchesCategory = project.category?.some(cat => cat.toLowerCase().includes(activeFilter.toLowerCase()));
    if (activeFilter === 'NLP' && (project.title.toLowerCase().includes('text') || project.title.toLowerCase().includes('recommendation') || project.type?.includes('NLP'))) return true;
    if (activeFilter === 'Computer Vision' && (project.title.toLowerCase().includes('leaf') || project.title.toLowerCase().includes('sign') || project.type?.includes('Computer Vision'))) return true;
    if (activeFilter === 'Web Applications' && (project.type?.includes('Full Stack') || project.type?.includes('Web'))) return true;
    return matchesType || matchesCategory;
  });

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-28 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

          {/* Heading */}
          <div className="mb-16">
            <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
              <span>// 09. DEPLOYED_PROJECTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
              <span>FEATURED WORK</span>
              <span className="text-[#ccff00]">_</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-3 max-w-xl font-normal leading-relaxed">
              Curated deployments in intelligent neural pipelines, machine learning models, and reactive web applications.
            </p>
            <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-14">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.4)]'
                    : 'bg-[#0c0e14]/90 text-neutral-400 border border-white/[0.08] hover:border-[#ccff00]/40 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0c0e14]/90 rounded-2xl border border-white/[0.08] hover:border-[#ccff00]/50 shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer relative"
                >
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60 group-hover:border-[#ccff00] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60 group-hover:border-[#ccff00] transition-colors" />

                  {/* Card Header area */}
                  <div className="relative h-44 w-full bg-[#11141c]/80 border-b border-white/[0.06] p-6 flex flex-col justify-between overflow-hidden">
                    {/* Top Row */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#07080a] text-[#ccff00] border border-[#ccff00]/30 font-mono text-[10px] tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                        {project.type}
                      </span>

                      <span className="font-mono text-[10px] text-neutral-500 uppercase">
                        ID: 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-lg font-bold font-mono text-white tracking-tight group-hover:text-[#ccff00] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-[#0c0e14]/90">
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6 line-clamp-3 font-normal">
                      {project.shortDescription}
                    </p>

                    <div>
                      {/* Tech Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags?.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 rounded bg-[#11141c] text-neutral-300 font-mono text-[10px] border border-neutral-800"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags?.length > 3 && (
                          <span className="px-2 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] font-mono text-[10px] border border-[#ccff00]/30">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Project Action */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#ccff00] inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                          <span>INSPECT_SYSTEM</span>
                          <FiArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Cyber Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#090b10] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/[0.1] flex flex-col max-h-[90vh]"
            >
              {/* Modal corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ccff00]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ccff00]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00]" />

              {/* Modal header */}
              <div className="relative p-8 bg-[#11141c] border-b border-white/[0.08]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg bg-black/40 text-neutral-400 hover:text-white hover:border-[#ccff00] border border-neutral-700 transition-colors"
                  aria-label="Close Modal"
                >
                  <FiX size={18} />
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-mono text-[10px] font-bold tracking-widest uppercase">
                    {selectedProject.type}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 tracking-wider">
                    // SYSTEM_INSPECTION
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-6">
                  {selectedProject.title}
                </h3>
                <div className="flex gap-4">
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] text-black rounded-lg font-mono text-xs font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:bg-[#d8ff33] transition-colors">
                      <FiGithub size={14} /> SOURCE_CODE
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#0c0e14] text-white hover:text-[#ccff00] border border-neutral-700 hover:border-[#ccff00]/50 rounded-lg font-mono text-xs font-bold transition-colors">
                      <FiExternalLink size={14} /> LIVE_DEMO
                    </a>
                  )}
                </div>
              </div>

              {/* Modal body */}
              <div className="p-8 overflow-y-auto space-y-8 max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#ccff00]">
                      // PROJECT_OVERVIEW
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {selectedProject.detailedDescription || selectedProject.shortDescription}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                      // PROBLEM_STATEMENT
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {selectedProject.problemStatement || 'Developing neural inferences and robust predictions on dynamic real-world telemetry.'}
                    </p>
                  </div>
                </div>

                {selectedProject.architecture && (
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2">
                      <FiCpu className="text-[#ccff00]" /> PIPELINE_WORKFLOW
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {selectedProject.architecture.map((arch, i) => (
                        <div key={i} className="p-3 bg-[#11141c] border border-neutral-800 rounded-xl text-center">
                          <div className="w-6 h-6 rounded-full bg-[#ccff00]/10 text-[#ccff00] flex items-center justify-center font-mono text-xs font-bold mx-auto mb-2 border border-[#ccff00]/30">{arch.step}</div>
                          <p className="font-mono text-xs font-bold text-white line-clamp-1">{arch.label}</p>
                          <p className="text-[10px] text-neutral-400 mt-1 line-clamp-2">{arch.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2">
                      <FiActivity className="text-[#ccff00]" /> KEY_FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features?.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 font-normal">
                          <FiCheck className="text-[#ccff00] mt-0.5 flex-shrink-0" />
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2">
                      <FiDatabase className="text-[#ccff00]" /> STACK_COMPONENTS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded bg-[#11141c] text-neutral-300 font-mono text-xs border border-neutral-800">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.challenges && (
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2">
                      <FiSettings className="text-[#ccff00]" /> CHALLENGES &amp; OPTIMIZATIONS
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.challenges.map((chal, i) => (
                        <div key={i} className="p-4 rounded-xl bg-[#11141c] border border-neutral-800">
                          <p className="font-mono text-xs font-bold text-white">CHALLENGE: {chal.challenge}</p>
                          <p className="text-xs text-neutral-400 mt-1">SOLUTION: {chal.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
