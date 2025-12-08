import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Experience from './components/Experience';
import EducationProjects from './components/EducationProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Sticky Top Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            David Tang
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:town9628@gmail.com"
            className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        
        <Section id="experience" title="Professional Experience">
          <Experience />
        </Section>

        <div id="education">
          <EducationProjects />
        </div>
        
        <div id="contact">
            {/* Contact is handled in Footer, but id serves as anchor */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;