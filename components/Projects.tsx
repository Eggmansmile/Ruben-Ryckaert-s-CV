import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Paper Airplane Machine",
      description: "An IB2 Industrial Engineering project. Designed and built a fully functional machine capable of folding paper airplanes automatically.",
      tags: ["Mechanism Design", "Prototyping", "Engineering"],
      image: "/images/paper-airplane.jpeg",
      gallery: [
        "/images/paper-airplane.jpeg",
        "/images/paper-airplane1.jpeg",
        "/images/paper-airplane2.jpeg"
      ],
      link: "#"
    },
    {
      id: 2,
      title: "Stock Management App",
      description: "A React-based application for managing inventory with a database backend. Deployed using Docker containers.",
      tags: ["React", "Database", "Docker", "JavaScript"],
      image: "/images/stock-app.png",
      gallery: [
        "/images/stock-app.png",
        "/images/stock-app1.png",
        "/images/stock-app2.png"
      ],
      link: "#"
    },
    {
      id: 3,
      title: "Bridge & Circuit Design",
      description: "Complex IB1 Industrial Engineering projects involving detailed electrical circuit calculations and structural bridge design/analysis.",
      tags: ["Circuit Design", "Structural Analysis", "Physics"],
      image: "/images/circuit-design.jpg",
      gallery: [
        "/images/circuit-design.jpg",
        "/images/circuit-design1.jpg",
        "/images/circuit-design2.jpg"
      ],
      link: "#"
    },
    {
      id: 4,
      title: "Oxfam HDC Design",
      description: "Served as a Graphic Designer for Oxfam HDC, creating visual identity assets and communication materials.",
      tags: ["Graphic Design", "Communication", "Creative"],
      image: "/images/oxfam-design.png",
      gallery: [
        "/images/oxfam-design.png",
        "/images/oxfam-design1.png",
        "/images/oxfam-design2.png"
      ],
      link: "#"
    }
  ];

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeGallery = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  }, []);

  const navigateGallery = useCallback((direction: 'next' | 'prev', e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    
    const images = selectedProject.gallery || [selectedProject.image];
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [selectedProject]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') navigateGallery('next');
      if (e.key === 'ArrowLeft') navigateGallery('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeGallery, navigateGallery]);

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
              <div 
                className="relative h-48 sm:h-64 overflow-hidden bg-slate-200 dark:bg-slate-700 cursor-pointer"
                onClick={() => openGallery(project)}
              >
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
                 
                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                   <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                      <ImageIcon size={16} />
                      <span className="text-sm font-medium">View Gallery</span>
                   </div>
                </div>

                <a 
                  href={project.link} 
                  onClick={(e) => e.stopPropagation()} // Prevent opening gallery when clicking link
                  className="absolute top-4 right-4 z-30 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300" 
                  aria-label={`Visit ${project.title} website`}
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

      {/* Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
            onClick={closeGallery}
          >
            <X size={32} />
          </button>

          {/* Navigation Controls (Only if multiple images) */}
          {(selectedProject.gallery && selectedProject.gallery.length > 1) && (
            <>
              <button 
                className="absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                onClick={(e) => navigateGallery('prev', e)}
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                className="absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                onClick={(e) => navigateGallery('next', e)}
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          {/* Main Image */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-12" 
            onClick={(e) => e.stopPropagation()}
          >
             <img 
               src={(selectedProject.gallery || [selectedProject.image])[currentImageIndex]} 
               alt={selectedProject.title} 
               className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
               onError={(e) => {
                 // Graceful fallback for missing gallery images inside the modal
                 e.currentTarget.style.display = 'none';
                 // We could show a "Image not found" placeholder or just hide it
               }}
             />
             
             {/* Caption */}
             <div className="mt-4 text-center">
               <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
               {(selectedProject.gallery && selectedProject.gallery.length > 1) && (
                 <p className="text-white/60 text-sm mt-1">
                   Image {currentImageIndex + 1} of {selectedProject.gallery.length}
                 </p>
               )}
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;