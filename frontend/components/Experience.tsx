import React from 'react';
import DecryptedText from './DecryptedText';

// Icon imports
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Industrial Engineering Student",
      company: "KU Leuven",
      type: "Education",
      period: "2024 - Present",
      location: "Leuven",
      summary: "Specializing in mechanics and electronics. 2nd Year Bachelor."
    },
    {
      role: "Volunteer & Inventory Mgr.",
      company: "Maakleerplek",
      type: "Volunteering",
      period: "2025 - Present",
      location: "Leuven",
      summary: "Managing makerspace inventory and assisting with equipment maintenance."
    },
    {
      role: "Advisor",
      company: "Student Council HDC",
      type: "Leadership",
      period: "4 Years",
      location: "High School",
      summary: "Handled graphic design for "
    },
    {
      role:"Graphic Designer",
      company: "Oxfam Wereldwinkel HDC",
      type: "Volunteering",
      period: "2 Years",
      location: "High School",
      summary: "Created promotional for the student made OXfam shop at school."
    },

    {
      role: "ASO Sciences-Math",
      company: "Middenjury",
      type: "Education",
      period: "Graduated 2024",
      location: "Belgium",
      summary: "Secondary education diploma via Central Jury."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-mono font-bold text-slate-900 dark:text-white mb-2">
            &lt;<DecryptedText text="Timeline" /> /&gt;
          </h2>
          <div className="h-0.5 w-full max-w-xs bg-gradient-to-r from-amber-500 to-transparent"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-500 shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.company}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span>{exp.type}</span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;