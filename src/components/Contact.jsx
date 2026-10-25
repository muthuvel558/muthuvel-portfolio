import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiRadio, FiMapPin } from 'react-icons/fi';

const socials = [
  {
    name: 'Email Direct',
    handle: 'muthuvelv3032@gmail.com',
    href: 'mailto:muthuvelv3032@gmail.com',
    icon: <FaEnvelope size={18} />,
    label: 'DISPATCH_EMAIL',
    code: 'COM_MAIL_01',
  },
  {
    name: 'LinkedIn Network',
    handle: 'linkedin.com/in/muthuvel',
    href: 'https://linkedin.com',
    icon: <FaLinkedin size={18} />,
    label: 'CONNECT_NODE',
    code: 'COM_LINK_02',
  },
  {
    name: 'GitHub Repositories',
    handle: 'github.com/muthuvel558',
    href: 'https://github.com/muthuvel558',
    icon: <FaGithub size={18} />,
    label: 'ACCESS_REPOS',
    code: 'COM_GIT_03',
  },
  {
    name: 'WhatsApp Secure',
    handle: '+91 6369737765',
    href: 'https://wa.me/916369737765',
    icon: <FaWhatsapp size={18} />,
    label: 'START_ENCRYPTED_CHAT',
    code: 'COM_WAPP_04',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 11. COMMUNICATION_CHANNELS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>ESTABLISH CONTACT</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">

          {/* LEFT COLUMN: Coordinates & Map Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00]" />

              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 pb-3 mb-4 border-b border-white/[0.06]">
                <span className="flex items-center gap-2 text-[#ccff00]">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  <span>COMM_UPLINK: ACTIVE</span>
                </span>
                <span>LAT: 10.3665° N // LON: 77.9235° E</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-mono text-white mb-2">
                Initiate Mission Collaboration
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mb-6">
                Open for high-impact AI/ML engineering positions, scalable full-stack integrations, and research collaborations. Transmit a signal below.
              </p>

              {/* Map embed with dark styling */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-neutral-800 grayscale contrast-125 opacity-75 hover:opacity-100 transition-opacity">
                <iframe
                  title="Dindigul location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125439.4674716769!2d77.92348574182963!3d10.36647249257659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab9c9b19dfb1%3A0xc3cf338dc9c6cfc!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1721820462000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Social Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="font-mono text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              // DIRECT_CHANNELS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/50 shadow-md hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ccff00]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ccff00]/50" />

                  {/* Top row: Icon and code */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#11141c] text-[#ccff00] border border-neutral-800 flex items-center justify-center group-hover:border-[#ccff00]/50 transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase">
                      [{social.code}]
                    </span>
                  </div>

                  {/* Title & handle */}
                  <div className="mb-4">
                    <p className="font-mono text-sm font-bold text-white group-hover:text-[#ccff00] transition-colors">
                      {social.name}
                    </p>
                    <span className="font-mono text-[11px] text-neutral-400 truncate block mt-1">
                      {social.handle}
                    </span>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px] text-[#ccff00] font-bold tracking-wider">
                    <span>{social.label}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
