import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-8 max-w-lg mx-auto">
          Always open to discussing new opportunities in AI, Machine Learning, and Large Scale Distributed Systems.
        </p>
        <a 
          href={SOCIAL_LINKS.email} 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
        >
          Send an Email
        </a>
        <div className="mt-12 text-sm text-slate-600">
          © {new Date().getFullYear()} David Tang (Peiyuan). All rights reserved.
          <br />
          Built with React, Tailwind, Recharts, and D3.js.
        </div>
      </div>
    </footer>
  );
};

export default Footer;