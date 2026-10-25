import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBarChart2, 
  FiCpu, 
  FiSettings, 
  FiLayers, 
  FiTag 
} from 'react-icons/fi';

const technicalDomains = [
  {
    domain: 'Data Analytics – Power BI',
    category: 'Business Intelligence & Reporting',
    domainTag: 'Analytics & BI',
    code: 'SYS_BI_01',
    icon: <FiBarChart2 size={15} />,
    description: [
      'Data cleaning and preprocessing to ensure dataset accuracy and integrity.',
      'Data transformation, data modeling, and custom ETL pipelines using Power Query (M Language).',
      'Interactive dashboard development featuring dynamic cross-filtering and drill-through views.',
      'Data visualization and KPI reporting aligned with critical business metrics.',
      'Data analysis and insights generation for strategic, data-driven decision making.'
    ],
    tech: ['Power BI', 'Power Query', 'DAX', 'Data Preprocessing', 'Data Modeling', 'KPI Reporting', 'Excel', 'SQL']
  },
  {
    domain: 'Embedded Systems',
    category: 'Hardware-Software Integration',
    code: 'SYS_EMB_02',
    domainTag: 'Embedded Tech',
    icon: <FiCpu size={15} />,
    description: [
      'Practical experience working with embedded systems and low-level firmware.',
      'Hardware-software integration and communication protocols (UART, I2C, SPI).',
      'Microcontroller-based development across platforms including ESP32 and Arduino.',
      'Sensor interfacing and real-time data processing for telemetry and edge control.',
      'Strong foundation in embedded programming, circuit interfacing, and system design.'
    ],
    tech: ['Embedded C/C++', 'Microcontrollers', 'ESP32 / Arduino', 'Sensor Interfacing', 'UART / I2C / SPI', 'Real-Time Processing', 'Circuit Design']
  },
  {
    domain: 'Robotics & Automation',
    category: 'Automation & Control Systems',
    code: 'SYS_ROB_03',
    domainTag: 'Robotics & Auto',
    icon: <FiSettings size={15} />,
    description: [
      'Hands-on experience in robotics, automation, and closed-loop motion control.',
      'Robot system development, kinematic assembly, and end-to-end component integration.',
      'Working with sensors, actuators, motor drivers, and servo control systems.',
      'Developing real-time robotic applications with fast, responsive decision logic.',
      'AI and computer vision integration with robotics for object recognition and navigation.'
    ],
    tech: ['Robotics', 'Automation', 'Sensors & Actuators', 'OpenCV', 'Computer Vision', 'Motor Control', 'Kinematics']
  },
  {
    domain: 'Machine Learning & Deep Learning',
    category: 'Predictive Modeling & Neural Architectures',
    code: 'SYS_AI_04',
    domainTag: 'ML & AI Systems',
    icon: <FiLayers size={15} />,
    description: [
      'Data preprocessing, feature engineering, and exploratory data analysis (EDA).',
      'Regression and classification algorithms built with rigorous performance validation.',
      'Model training, hyperparameter tuning, evaluation metrics, and optimization.',
      'Building practical, production-ready ML applications using Python and Scikit-learn.',
      'Experience with Deep Learning (ANN, CNN, LSTM), Computer Vision, NLP, and Generative AI.'
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'Pandas & NumPy']
  }
];

const TechnicalExperience = () => {
  return (
    <section id="technical-experience" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Heading */}
        <div className="mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-2 flex items-center gap-2">
            <span>// 03. SYSTEM_LOGS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight flex items-center gap-1">
            <span>TECHNICAL LOGS</span>
            <span className="text-[#ccff00]">_</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ccff00] mt-4 shadow-[0_0_10px_#ccff00]" />
        </div>

        {/* Cyber Timeline Path */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-36 space-y-14">
          {technicalDomains.map((item, index) => (
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">
                  {item.domainTag}
                </span>
                <span className="text-[9px] font-mono text-[#ccff00]/70 tracking-wider">
                  [{item.code}]
                </span>
              </div>

              {/* Cyber Timeline Card with HUD brackets */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#ccff00]/40 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ccff00]/60" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ccff00]/60" />

                {/* Mobile Category Tag */}
                <div className="md:hidden flex items-center justify-between text-xs font-mono text-[#ccff00] font-bold mb-3">
                  <div className="flex items-center gap-1.5">
                    <FiTag size={12} />
                    <span>{item.domainTag}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">{item.code}</span>
                </div>

                {/* Domain Title & Category */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-tight group-hover:text-[#ccff00] transition-colors">
                      {item.domain}
                    </h3>
                    <p className="text-xs font-mono text-[#ccff00] mt-0.5 tracking-wider">
                      // {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ccff00] bg-[#ccff00]/10 px-3 py-1 rounded-full border border-[#ccff00]/30 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                    <span>PRACTICAL_EXPERIENCE</span>
                  </div>
                </div>

                {/* Accomplishments / Capabilities list */}
                <ul className="space-y-2.5 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed flex items-start gap-2.5 font-normal">
                      <span className="mt-2 w-1 h-1 bg-[#ccff00] rounded-full flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badge grid */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                  {item.tech.map((tag, i) => (
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

export default TechnicalExperience;
