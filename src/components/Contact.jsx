import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    name: 'Email',
    handle: 'muthuvelv3032@gmail.com',
    href: 'mailto:muthuvelv3032@gmail.com',
    icon: <FiMail size={26} />,
    gradient: 'from-red-500 to-orange-500',
    bg: 'bg-red-50 dark:bg-red-900/10',
    border: 'border-red-200 dark:border-red-800/40',
    hover: 'hover:shadow-red-500/20',
    label: 'Send Email'
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/muthuvel',
    href: 'https://linkedin.com',
    icon: <FaLinkedin size={26} />,
    gradient: 'from-blue-600 to-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800/40',
    hover: 'hover:shadow-blue-500/20',
    label: 'Connect'
  },
  {
    name: 'GitHub',
    handle: 'github.com/muthuvel',
    href: 'https://github.com',
    icon: <FaGithub size={26} />,
    gradient: 'from-gray-700 to-gray-900',
    bg: 'bg-gray-50 dark:bg-gray-800/40',
    border: 'border-gray-200 dark:border-gray-700',
    hover: 'hover:shadow-gray-500/20',
    label: 'Follow'
  },
  {
    name: 'Instagram',
    handle: '@muthuvel',
    href: 'https://instagram.com',
    icon: <FaInstagram size={26} />,
    gradient: 'from-pink-500 via-brand-500 to-orange-400',
    bg: 'bg-pink-50 dark:bg-pink-900/10',
    border: 'border-pink-200 dark:border-pink-800/40',
    hover: 'hover:shadow-pink-500/20',
    label: 'Follow'
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('muthuvelv3032@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Background Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 dark:text-brand-400 font-semibold mb-2 tracking-widest text-sm uppercase">Say Hello</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch<span className="text-brand-600">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new projects, internship opportunities, and creative ideas. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">

          {/* Top Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 flex-wrap"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <FiMapPin className="text-brand-600" size={16} />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Tamil Nadu, India</span>
            </div>
            <div
              onClick={copyEmail}
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-brand-400 dark:hover:border-brand-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <FiMail className="text-brand-600" size={16} />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {copied ? '✅ Copied!' : 'muthuvelv3032@gmail.com'}
              </span>
            </div>
            <a
              href="tel:+916369737765"
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brand-400 dark:hover:border-brand-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <FiPhone className="text-brand-600" size={16} />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                +91 6369737765
              </span>
            </a>
          </motion.div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative flex flex-col items-center text-center p-8 rounded-3xl border ${social.bg} ${social.border} shadow-sm hover:shadow-xl ${social.hover} transition-all duration-300 overflow-hidden`}
              >
                {/* Icon with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{social.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 truncate w-full px-2">{social.handle}</p>

                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                  {social.label} →
                </span>

                {/* Decorative circle */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${social.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.a>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-600 to-brand-500" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-brand-200">Let's turn your idea into a real, impactful project.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="mailto:muthuvelv3032@gmail.com"
                  className="flex items-center justify-center gap-2 px-7 py-3 bg-white text-brand-700 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <FiSend size={18} /> Send a Message
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
