import React from 'react';
import { ExternalLink, Zap, PenTool, Database, Box } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Paper Airplane Machine",
      description: "An engineering project for IB 2 Industrial Engineering. Designed and built a machine capable of folding paper airplanes automatically.",
      tags: ["Engineering", "Mechanism Design", "Prototyping"],
      icon: <Zap size={24} />,
      link: "#"
    },
    {
      id: 2,
      title: "Stock Management App",
      description: "A React-based application for managing inventory. Features include database integration and a user-friendly interface.",
      tags: ["React", "Database", "JavaScript"],
      icon: <Database size={24} />,
      link: "#"
    },
    {
      id: 3,
      title: "Bridge & Circuit Design",
      description: "Projects for IB 1 Industrial Engineering. Involved complex electrical circuit calculations and structural bridge design.",
      tags: ["Circuit Design", "Structural Analysis", "Physics"],
      icon: <Box size={24} />,
      link: "#"
    },
    {
      id: 4,
      title: "Oxfam HDC Design",
      description: "Created graphic designs for Oxfam HDC, contributing to their visual identity and communication materials.",
      tags: ["Graphic Design", "Communication", "Creative"],
      icon: <PenTool size={24} />,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Featured Projects</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {project.icon}
                </div>
                <a 
                  href={project.link} 
                  className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1" 
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors flex-grow">
                {project.description}
              </p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-colors hover:border-blue-300 dark:hover:border-blue-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;