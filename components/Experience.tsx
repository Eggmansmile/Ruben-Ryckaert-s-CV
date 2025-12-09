import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      role: "Bachelor Industrial Sciences",
      company: "KU Leuven Groep T",
      period: "2024 - 2028 (Expected)",
      description: [
        "Specializing in Industrial Engineering.",
        "Focus on mechanics, electronics, and design."
      ]
    },
    {
      id: 2,
      role: "Volunteer & Inventory Manager",
      company: "Maakleerplek",
      period: "Ongoing",
      description: [
        "Managing inventory and equipment organization.",
        "Assisting in a creative makerspace environment."
      ]
    },
    {
      id: 3,
      role: "Student Council Member",
      company: "Leerlingenraad HDC",
      period: "4 Years",
      description: [
        "Responsible for Communication and Design.",
        "Organized school events and represented student interests."
      ]
    },
    {
      id: 4,
      role: "Programmer / Student",
      company: "Codefever",
      period: "Past",
      description: [
        "Developed skills in Python, Java, HTML, CSS, JavaScript.",
        "Worked with React, Docker, and Godot Game Engine."
      ]
    },
    {
      id: 5,
      role: "Secondary Education",
      company: "Midden Jury",
      period: "Graduated 2024",
      description: [
        "Math-Sciences (Wiskunde-wetenschappen).",
        "Obtained ASO Diploma."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Experience & Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700 before:content-['']">
            
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                  {exp.role.includes("Bachelor") || exp.role.includes("Secondary") ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white transition-colors">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-sm text-slate-500 dark:text-slate-400">
                     <span className="font-medium text-blue-600 dark:text-blue-400 transition-colors">{exp.company}</span>
                     <span className="flex items-center gap-1 mt-1 sm:mt-0"><Calendar size={14} /> {exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm transition-colors">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;