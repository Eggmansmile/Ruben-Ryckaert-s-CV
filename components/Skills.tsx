import React from 'react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      title: "Engineering & Design",
      skills: ["3D Design", "Circuit Design", "Mechanism Design", "Inventory Management"]
    },
    {
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "React", "GDScript (Godot)"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "Git", "Godot Engine", "Office Suite"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Problem Solving", "Creativity"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors">
              My skillset spans across traditional engineering disciplines and modern software development. 
              I love building things, whether it's a physical machine or a digital application.
            </p>
            <div className="p-6 bg-blue-600 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Multidisciplinary</h3>
              <p className="opacity-90">Combining hardware knowledge with software capabilities to create integrated solutions.</p>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillsData.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2 transition-colors">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;