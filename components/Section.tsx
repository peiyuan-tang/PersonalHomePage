import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">
        {title}
      </h2>
      <div className="animate-fade-in-up">
        {children}
      </div>
    </section>
  );
};

export default Section;