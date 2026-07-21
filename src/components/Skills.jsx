import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGithub, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiExpress, SiFlask, SiMysql, SiMongodb,
  SiNumpy, SiPandas, SiTensorflow, SiOpencv, SiScikitlearn, SiGooglecolab
} from 'react-icons/si';
import { VscGraphLine } from 'react-icons/vsc';
import { DiVisualstudio } from 'react-icons/di';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-500 dark:text-gray-300' },
        { name: 'Flask', icon: <SiFlask />, color: 'text-black dark:text-white' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' }
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'NumPy', icon: <SiNumpy />, color: 'text-blue-400' },
        { name: 'Pandas', icon: <SiPandas />, color: 'text-brand-700 dark:text-brand-400' },
        { name: 'Matplotlib', icon: <VscGraphLine />, color: 'text-blue-500' },
        { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-orange-500' },
        { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-400' },
        { name: 'OpenCV', icon: <SiOpencv />, color: 'text-red-500' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-black dark:text-white' },
        { name: 'VS Code', icon: <DiVisualstudio />, color: 'text-blue-500' },
        { name: 'Google Colab', icon: <SiGooglecolab />, color: 'text-yellow-500' },
        { name: 'Figma', icon: <FaFigma />, color: 'text-pink-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Skills<span className="text-brand-600">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-brand-600 dark:text-brand-400 border-b-2 border-brand-100 dark:border-brand-900/30 pb-2">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium group">
                    <span className={`text-2xl transition-transform transform group-hover:scale-110 ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <span className="group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {skill.name}
                    </span>
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

export default Skills;
