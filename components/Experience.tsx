import React from 'react';
import { EXPERIENCE_DATA, PROFICIENCY_DATA } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import SkillViz from './SkillViz';

const Experience: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Job Timeline */}
      <div className="lg:col-span-2 space-y-8">
        {EXPERIENCE_DATA.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                  <Briefcase size={16} />
                  {job.company}
                </div>
              </div>
              <span className="mt-2 sm:mt-0 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
                {job.period}
              </span>
            </div>
            
            <p className="text-slate-600 mb-4 italic">
              {job.description}
            </p>
            
            <ul className="space-y-2 mb-4">
              {job.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            
            {job.technologies && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {job.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Column: Visuals */}
      <div className="space-y-8">
        {/* Recharts Radar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Core Competencies</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PROFICIENCY_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#2563EB"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-slate-500 text-sm mt-2">
            Relative proficiency based on project usage and complexity.
          </p>
        </div>

        {/* D3 Visualization Wrapper */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Skill Network</h3>
          <div className="h-[400px]">
            <SkillViz />
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            Interactive visualization of technologies and domains.
            <br />
            <span className="text-xs text-slate-400">Drag nodes to explore connections. (Built with D3.js)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;