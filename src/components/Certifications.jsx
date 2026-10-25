import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiShield } from 'react-icons/fi';

const certificationsData = [
  {
    title: 'Data Science with Python',
    issuer: 'Infosys Springboard',
    date: '2024',
    credentialId: 'INFOSYS-DS-PY',
    link: '#',
    tags: ['Python', 'Data Science', 'Machine Learning', 'Pandas', 'NumPy']
  },
  {
    title: 'Prompt Engineering & Generative AI',
    issuer: 'Great Learning',
    date: '2024',
    credentialId: 'GL-PE-2024',
    link: '#',
    tags: ['Prompt Engineering', 'Generative AI', 'LLMs', 'ChatGPT']
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 04. VERIFIED_SECURITY_CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>CERTIFICATIONS</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

              <div>
                {/* Icon & Date */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#11141c] text-[#ccff00] border border-neutral-800 group-hover:border-[#ccff00]/50 flex items-center justify-center text-lg shadow-[0_0_12px_rgba(204,255,0,0.2)] transition-colors">
                    <FiShield />
                  </div>
                  <span className="font-mono text-xs text-[#ccff00] bg-[#ccff00]/10 px-2.5 py-0.5 rounded border border-[#ccff00]/30">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold font-mono text-white mb-2 leading-snug group-hover:text-[#ccff00] transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  ISSUER: <span className="text-white">{cert.issuer}</span>
                </p>

                <p className="text-[10px] font-mono text-neutral-500 mb-6 tracking-wider">
                  CERT_ID // {cert.credentialId}
                </p>
              </div>

              {/* Badges and Verification */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded bg-[#11141c] text-neutral-300 font-mono text-[10px] border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ccff00] hover:text-white transition-colors"
                >
                  <span>VERIFY_RECORD</span>
                  <FiExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
