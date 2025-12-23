import React, { useState, useEffect, useCallback } from 'react';

// Icon imports
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon, Folder } from 'lucide-react';

// Type and config imports
import { Project } from '../types';
import { getAssetUrl } from '../config';
import { PROJECTS_DATA } from '../data/projects';
import { GALLERY_CONSTANTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DecryptedText from './DecryptedText';

type GalleryState = {
  selectedProject: Project | null;
  currentImageIndex: number;
};

const Projects: React.FC = () => {
  const [galleryState, setGalleryState] = useState<GalleryState>({
    selectedProject: null,
    currentImageIndex: 0,
  });

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const categories = [
    { id: 'all', name: 'ALL_SYSTEMS', color: 'border-blue-500 text-blue-500' },
    { id: 'engineering', name: 'ENGINEERING', color: 'border-amber-500 text-amber-500' },
    { id: 'software', name: 'SOFTWARE', color: 'border-green-500 text-green-500' },
    { id: 'design', name: 'DESIGN', color: 'border-purple-500 text-purple-500' },
  ];

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(PROJECTS_DATA);
    } else {
      const filtered = PROJECTS_DATA.filter(project => {
        switch (selectedCategory) {
          case 'engineering':
            return project.tags.some(tag => 
              ['Mechanism Design', 'Prototyping', 'Engineering', 'Circuit Design', 'Electronics', '3D Printing', 'Lasercutting'].includes(tag)
            );
          case 'software':
            return project.tags.some(tag => 
              ['React', 'Database', 'Docker', 'JavaScript', 'GDScript', '3D Design'].includes(tag)
            );
          case 'design':
            return project.tags.some(tag => 
              ['Graphic Design', 'Communication', 'Creative'].includes(tag)
            );
          default:
            return true;
        }
      });
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  const openGallery = (project: Project) => {
    setGalleryState({
      selectedProject: project,
      currentImageIndex: 0,
    });
    document.body.style.overflow = 'hidden'; 
  };

  const closeGallery = useCallback(() => {
    setGalleryState({
      selectedProject: null,
      currentImageIndex: 0,
    });
    document.body.style.overflow = 'unset'; 
  }, []);

  const navigateGallery = useCallback((direction: 'next' | 'prev', e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!galleryState.selectedProject) return;
    
    const images = galleryState.selectedProject.gallery || [galleryState.selectedProject.image];
    
    setGalleryState(prev => ({
      ...prev,
      currentImageIndex: direction === 'next' 
        ? (prev.currentImageIndex + 1) % images.length
        : (prev.currentImageIndex - 1 + images.length) % images.length
    }));
  }, [galleryState.selectedProject]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryState.selectedProject) return;
      if (e.key === GALLERY_CONSTANTS.KEYBOARD_KEYS.ESCAPE) closeGallery();
      if (e.key === GALLERY_CONSTANTS.KEYBOARD_KEYS.ARROW_RIGHT) navigateGallery('next');
      if (e.key === GALLERY_CONSTANTS.KEYBOARD_KEYS.ARROW_LEFT) navigateGallery('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryState.selectedProject, closeGallery, navigateGallery]);

  return (
    <section 
      id="projects" 
      className={`py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 circuit-bg ${isVisible ? 'animate-fade-in' : ''}`}
      ref={elementRef as any}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-2xl font-mono font-bold text-slate-900 dark:text-white mb-2">
                &lt;<DecryptedText text="Featured_Projects" /> /&gt;
              </h2>
           </div>

           {/* Category Filters */}
           <div className="flex gap-2 flex-wrap mt-4 md:mt-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 text-xs font-mono border transition-all ${
                    selectedCategory === category.id
                      ? `${category.color} bg-white dark:bg-slate-900 shadow-sm`
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  [{category.name}]
                </button>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col">
              
              {/* Header Bar */}
              <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                   <Folder size={14} className="text-blue-500" />
                   <span className="text-xs font-mono text-slate-500">{project.id.toString().padStart(3, '0')}_PROJECT</span>
                 </div>
                 <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                 </div>
              </div>

              {/* Image Container */}
              <div 
                className="relative h-48 sm:h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer border-b border-slate-100 dark:border-slate-800"
                onClick={() => openGallery(project)}
              >
                <div className="absolute inset-0 bg-blue-900/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                 {/* Grid Overlay */}
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none z-20"></div>

                <img 
                   src={getAssetUrl(project.image)} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-slate-400');
                     if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = 'NO_IMAGE_DATA';
                   }}
                 />
                  
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                   <div className="bg-black/70 text-white px-3 py-1 font-mono text-xs backdrop-blur-sm border border-white/20">
                      View_Schematics
                   </div>
                </div>

                <a 
                  href={project.link} 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 z-40 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-lg font-mono font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                 
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                 
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-2 text-center py-12 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
              <div className="text-slate-500 dark:text-slate-400">
                <h3 className="text-lg font-mono mb-2">ERR_NO_RESULTS</h3>
                <p className="font-mono text-sm">Query returned 0 records.</p>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Modal - Kept mostly same but cleaner */}
        {galleryState.selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeGallery}
          >
            <button 
              className="absolute top-8 right-8 p-2 text-white/70 hover:text-white border border-white/20 hover:bg-white/10 transition-all z-50"
              onClick={closeGallery}
            >
              <X size={24} />
            </button>

            {(galleryState.selectedProject.gallery && galleryState.selectedProject.gallery.length > 1) && (
              <>
                <button 
                  className="absolute left-4 md:left-12 p-2 text-white/70 hover:text-white border border-white/20 hover:bg-white/10 transition-all z-50"
                  onClick={(e) => navigateGallery('prev', e)}
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-4 md:right-12 p-2 text-white/70 hover:text-white border border-white/20 hover:bg-white/10 transition-all z-50"
                  onClick={(e) => navigateGallery('next', e)}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <div 
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 sm:p-12" 
              onClick={(e) => e.stopPropagation()}
            >
               <img 
                 src={getAssetUrl((galleryState.selectedProject.gallery || [galleryState.selectedProject.image])[galleryState.currentImageIndex])} 
                 alt={galleryState.selectedProject.title} 
                 className="max-w-full max-h-[80vh] object-contain border border-slate-700 shadow-2xl bg-black"
               />
               
               <div className="mt-6 text-center">
                 <h3 className="text-xl font-mono font-bold text-white mb-1">{galleryState.selectedProject.title}</h3>
                 {(galleryState.selectedProject.gallery && galleryState.selectedProject.gallery.length > 1) && (
                   <div className="text-blue-400 text-xs font-mono uppercase tracking-widest">
                     Frame {galleryState.currentImageIndex + 1} / {galleryState.selectedProject.gallery.length}
                   </div>
                 )}
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;