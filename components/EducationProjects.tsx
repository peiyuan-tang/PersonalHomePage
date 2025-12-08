import React from 'react';
import { EDUCATION_DATA, PROJECTS_DATA } from '../constants';
import { GraduationCap, BookOpen, Code2, Award } from 'lucide-react';
import Section from './Section';

const EducationProjects: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-4 md:px-8">
        
        {/* Education Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} />
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <div className="text-blue-600 font-medium mb-3">{edu.degree}</div>
                <ul className="space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <div className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Awards Summary Box */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Award size={18} />
                Key Honors
              </h3>
              <p className="text-blue-800 text-sm mb-2">
                <strong>Google:</strong> 2020 EVA Citizenship Award, 2021 Sage Fixit & System Health Efforts, 2021 EOY Building Strong Partnerships.
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Academic:</strong> Ranked 2nd/247 graduates, Summa Cum Laude, Extraordinary Alumni Award of Math Department.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Code2 className="text-blue-600" size={32} />
            Academic Projects
          </h2>
          <div className="space-y-6">
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 group hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  <BookOpen size={18} />
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationProjects;