import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CyberParallaxBackground from './components/CyberParallaxBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechnicalExperience from './components/TechnicalExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import TechStack from './components/TechStack';
import AIJourney from './components/AIJourney';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Always lock dark mode for cyber theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative font-sans antialiased text-slate-100 min-h-screen bg-[#07080a] selection:bg-[#ccff00] selection:text-black">
      {/* Cyber Parallax Background with Intersecting Lasers & Grid */}
      <CyberParallaxBackground />

      {/* Sticky Top Cyber Navigation */}
      <Navbar />
      
      {/* Main Content Sections with Cyber Theme */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <TechnicalExperience />
        <Education />
        <Certifications />
        <Achievements />
        <TechStack />
        <AIJourney />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Cyber Telemetry Footer */}
      <Footer />
    </div>
  );
}

export default App;
