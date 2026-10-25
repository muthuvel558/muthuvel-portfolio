import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';

const blogPosts = [
  {
    title: 'Understanding Content-Based Filtering with Cosine Similarity',
    excerpt: 'An in-depth guide on how recommendation engines vectorise movie metadata using TF-IDF and count vectorizers to calculate cosine similarity indices.',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    tag: 'Machine Learning',
    gradient: 'from-blue-500 to-indigo-650'
  },
  {
    title: 'Building Computer Vision Classifiers on Raspberry Pi Edge Nodes',
    excerpt: 'How to write memory-efficient OpenCV preprocessing pipelines to run classifier models on resource-constrained microcontrollers.',
    date: 'Dec 05, 2024',
    readTime: '8 min read',
    tag: 'Computer Vision',
    gradient: 'from-emerald-400 to-brand-600'
  },
  {
    title: 'A Beginner Guide to Neural Networks and Activation Functions',
    excerpt: 'Unlocking the core calculus concepts behind feedforward neural networks, backpropagation, and activation functions like ReLU and Sigmoid.',
    date: 'Nov 12, 2024',
    readTime: '6 min read',
    tag: 'Deep Learning',
    gradient: 'from-amber-400 to-orange-500'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-surface-low dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3">
            Articles
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
            Technical Blog<span className="text-brand-500">.</span>
          </h2>
          <div className="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 overflow-hidden premium-card hover:border-brand-300 dark:hover:border-brand-700 flex flex-col h-full"
            >
              {/* Graphic Thumbnail */}
              <div className={`h-40 w-full bg-gradient-to-br ${post.gradient} relative flex items-center justify-center p-6 text-white text-center`}>
                <div className="absolute inset-0 bg-slate-950/10" />
                <h3 className="relative text-sm font-extrabold font-display leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <span className="absolute bottom-4 left-4 bg-white/20 px-2.5 py-1 rounded-lg text-[9px] font-bold tracking-widest uppercase">
                  {post.tag}
                </span>
              </div>

              {/* Text contents */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex gap-4 items-center text-[10px] text-slate-400 dark:text-slate-500 font-semibold mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-grow mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <a 
                  href="#"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                >
                  <span>Read Article</span>
                  <FiArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
