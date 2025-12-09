import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { CONFIG, getAssetUrl } from '../config';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full transition-colors">
              {CONFIG.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6 transition-colors">
              Hi, I'm <span className="block text-blue-600 dark:text-blue-400">{CONFIG.name}.</span>
              <span className="text-3xl md:text-4xl lg:text-5xl text-slate-700 dark:text-slate-300">Future Engineer & Maker</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed transition-colors">
              I am a highly motivated 2nd-year Industrial Engineering student at KU Leuven (Groep T). 
              Passionate about 3D design, electronics, and full-stack development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
              <a 
                href="#projects" 
                className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={getAssetUrl("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent text-slate-600 dark:text-slate-400 border border-transparent rounded-lg font-medium hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 dark:opacity-30"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-3 overflow-hidden shadow-2xl">
                 <img 
                  src={getAssetUrl("/images/profile.png")}
                  alt={CONFIG.name} 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to Unsplash if local image is missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;