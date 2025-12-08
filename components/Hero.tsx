import React from 'react';
import { Mail, Linkedin, Globe, Github, Code2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-slate-900 text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            David Tang <span className="text-blue-400 font-normal">(Peiyuan)</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            Staff Software Engineer & Tech Lead at Google
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
            Driving $500M+ ARR impact through scalable ad serving, machine learning innovation, and technical leadership. Specializing in Search Ads, Map Ads, and Generative AI integration.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href={SOCIAL_LINKS.personalProjects} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              <Code2 size={20} />
              Personal Projects
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              <Github size={20} />
              College Projects
            </a>
            <a 
              href={SOCIAL_LINKS.website} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              <Globe size={20} />
              Portfolio
            </a>
            <a 
              href={SOCIAL_LINKS.email} 
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
        
        {/* Abstract decorative element representing code/structure */}
        <div className="hidden lg:block relative w-64 h-64 mt-8 md:mt-0">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <svg className="w-full h-full text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="40" className="stroke-blue-500/50" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="25" className="stroke-slate-400/30" />
            <path d="M50 10 L50 90 M10 50 L90 50" className="stroke-slate-500/20" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;