import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Paper Airplane Machine",
      description: "An IB2 Industrial Engineering project. Designed and built a fully functional machine capable of folding paper airplanes automatically.",
      tags: ["Mechanism Design", "Prototyping", "Engineering"],
      image: "/images/paper-airplane.jpeg",
      link: "#"
    },
    {
      id: 2,
      title: "Stock Management App",
      description: "A React-based application for managing inventory with a database backend. Deployed using Docker containers.",
      tags: ["React", "Database", "Docker", "JavaScript"],
      image: "/images/stock-app.png",
      link: "#"
    },
    {
      id: 3,
      title: "Bridge & Circuit Design",
      description: "Complex IB1 Industrial Engineering projects involving detailed electrical circuit calculations and structural bridge design/analysis.",
      tags: ["Circuit Design", "Structural Analysis", "Physics"],
      image: "/images/circuit-design.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Oxfam HDC Design",
      description: "Served as a Graphic Designer for Oxfam HDC, creating visual identity assets and communication materials.",
      tags: ["Graphic Design", "Communication", "Creative"],
      image: "/images/oxfam-design.png",
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
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-slate-400', 'bg-slate-100', 'dark:bg-slate-800');
                     if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = 'Image not found';
                   }}
                 />
                <a 
                  href={project.link} 
                  className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300" 
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;