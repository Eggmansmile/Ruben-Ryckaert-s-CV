import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DecryptedText from './DecryptedText';
import { SKILLS } from '../config';
import { Cpu, Code, Terminal, Users, Database, Layout, PenTool, GitBranch } from 'lucide-react';

// Map icon name strings from config to actual Lucide components
const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} />,
  Code: <Code size={20} />,
  Terminal: <Terminal size={20} />,
  Users: <Users size={20} />,
  Database: <Database size={20} />,
  Layout: <Layout size={20} />,
  PenTool: <PenTool size={20} />,
  GitBranch: <GitBranch size={20} />,
};

const Skills: React.FC = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
      className={`py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 circuit-bg ${isVisible ? 'animate-fade-in' : ''}`}
      ref={elementRef as any}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-mono font-bold text-slate-900 dark:text-white mb-2">
            &lt;<DecryptedText text="Skills_Inventory" /> /&gt;
          </h2>
          <div className="h-0.5 w-full max-w-xs bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((category, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-slate-100 dark:bg-slate-800 rounded-md ${category.color}`}>
                  {ICON_MAP[category.icon] ?? <Code size={20} />}
                </div>
                <h3 className="font-mono font-semibold text-lg text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
