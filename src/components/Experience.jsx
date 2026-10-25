import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiActivity, 
  FiBarChart2, 
  FiCalendar, 
  FiMapPin, 
  FiTag, 
  FiCheckCircle,
  FiBriefcase
} from 'react-icons/fi';

const internshipExperiences = [
  {
    company: 'iHub Robotics',
    position: 'AI & Robotics Intern',
    duration: '2024',
    location: 'Lab & Research Facility',
    type: 'Industrial Internship',
    code: 'INT_ROB_01',
    domainTag: 'AI & Robotics',
    icon: <FiActivity size={16} />,
    badge: 'AI_VISION_PIPELINE',
    description: [
      'Developed Machine Learning and Computer Vision models for robotics automation using Python and TensorFlow.',
      'Implemented real-time object detection and camera vision feeds with OpenCV for autonomous robotic perception.',
      'Interfaced intelligent decision logic with robotic hardware controllers and actuator systems.',
      'Conducted telemetry data preprocessing and model validation for low-latency, real-world deployment.'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'Computer Vision',
      'Machine Learning',
      'Robotics Automation',
      'Data Preprocessing'
    ]
  },
  {
    company: 'iHub Robotics',
    position: 'Embedded Systems Intern',
    duration: '2024',
    location: 'Hardware Integration Lab',
    type: 'Industrial Internship',
    code: 'INT_EMB_02',
    domainTag: 'Embedded Tech',
    icon: <FiCpu size={16} />,
    badge: 'HARDWARE_DEPLOYED',
    description: [
      'Integrated embedded microcontroller platforms (ESP32, Arduino) with intelligent sensor-based automation systems.',
      'Developed low-level firmware and serial communication pipelines utilizing UART, I2C, and SPI protocols.',
      'Interfaced, tested, and calibrated multi-sensor arrays and actuators for real-time edge processing and control.',
      'Constructed functional hardware prototypes, validating circuit integrity, electrical safety, and embedded logic.'
    ],
    technologies: [
      'Embedded C/C++',
      'Microcontrollers',
      'ESP32 / Arduino',
      'Sensor Interfacing',
      'UART / I2C / SPI',
      'IoT Systems',
      'Circuit Design'
    ]
  },
  {
    company: 'IPCS Global',
    position: 'Python for Data Science Intern',
    duration: '2025',
    location: 'Chennai, Tamil Nadu',
    type: 'Professional Internship',
    code: 'INT_DAT_03',
    domainTag: 'Data Science',
    icon: <FiBarChart2 size={16} />,
    badge: 'ANALYTICS_VERIFIED',
    description: [
      'Executed end-to-end Exploratory Data Analysis (EDA), data cleaning, statistical evaluation, and interactive visual reporting.',
      'Engineered automated data preprocessing and feature transformation pipelines leveraging Pandas and NumPy.',
      'Constructed predictive modeling workflows and classification/regression algorithms using Scikit-Learn.',
      'Designed informative data visualizations with Matplotlib and Seaborn to communicate insights for decision-making.'
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'Matplotlib',
      'Seaborn',
      'EDA & Preprocessing',
      'Predictive Analytics'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Section HUD Header */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 02. INTERNSHIP_DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>INTERNSHIP EXPERIENCE</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-neutral-400 mt-2 max-w-xl">
            // Practical industrial internships spanning AI robotics, embedded firmware, and production data science.
          </p>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Cyber Timeline Path */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-36 space-y-14">
          {internshipExperiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline indicator node */}
              <div className="absolute -left-[17px] top-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-[#0c0e14] border border-[#ccff00]/50 text-[#ccff00] flex items-center justify-center text-sm shadow-[0_0_15px_rgba(204,255,0,0.3)] group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Tag Box visible on Left side for desktop */}
              <div className="hidden md:block absolute -left-40 top-2.5 text-right w-32 font-mono">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ccff00] block">
                  {item.duration}
                </span>
                <span className="text-[9px] font-mono text-neutral-400 tracking-wider">
                  [{item.code}]
                </span>
              </div>

              {/* Cyber Timeline Card with HUD brackets */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative overflow-hidden group">
                {/* HUD Corner Tech Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

                {/* Mobile Duration & Code Tag */}
                <div className="md:hidden flex items-center justify-between text-xs font-mono text-[#ccff00] font-bold mb-3">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar size={12} />
                    <span>{item.duration}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">[{item.code}]</span>
                </div>

                {/* Role Title, Company & Meta */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight group-hover:text-[#ccff00] transition-colors">
                      {item.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs font-mono">
                      <span className="text-[#ccff00] font-bold flex items-center gap-1.5">
                        <FiBriefcase size={12} />
                        {item.company}
                      </span>
                      <span className="text-neutral-500">//</span>
                      <span className="text-neutral-400 flex items-center gap-1">
                        <FiMapPin size={11} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ccff00] bg-[#ccff00]/10 px-3 py-1 rounded-full border border-[#ccff00]/30 w-fit shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Key Responsibilities / Outcomes */}
                <ul className="space-y-2.5 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-xs md:text-sm text-neutral-300 leading-relaxed flex items-start gap-2.5 font-normal">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#ccff00] rounded-full flex-shrink-0 shadow-[0_0_6px_#ccff00]" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                  {item.technologies.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-[#11141c] text-neutral-300 hover:text-[#ccff00] text-[10px] font-mono tracking-wider rounded border border-neutral-800 hover:border-[#ccff00]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
