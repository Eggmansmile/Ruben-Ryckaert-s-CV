import React, { useState, useEffect } from 'react';
import { Download, Github, Mail, MapPin } from 'lucide-react';
import { CONFIG, getAssetUrl } from '../config';
import { githubService } from '../services/github';
import DecryptedText from './DecryptedText';

const HERO_SECTION_ID = 'hero';

const Hero: React.FC = () => {
  const [githubData, setGithubData] = useState<any>(null);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        const repos = await githubService.getRepos();
        setGithubData({ repos });
      } catch (error) {
        console.error('Error loading GitHub data:', error);
      }
    };
    loadGitHubData();
  }, []);

  return (
    <section 
      id={HERO_SECTION_ID} 
      className="pt-28 pb-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          
          {/* Profile Image (Smaller) */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
             <div className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <img 
               src={getAssetUrl("/images/profile.png")}
               alt={CONFIG.name} 
               className="w-full h-full object-cover rounded-full border-2 border-slate-200 dark:border-slate-800 p-1"
             />
             <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" title="Status: Operational"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-slate-900 dark:text-white mb-2">
              <DecryptedText text={CONFIG.name} className="block" speed={30} />
            </h1>
            
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
              {CONFIG.title}
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed max-w-xl">
              I am a <strong className="text-slate-900 dark:text-white font-semibold">20-year-old 2nd-year Industrial Engineering</strong> student at KU Leuven, passionate about bridging the gap between hardware and software.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6 font-mono">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <span>{githubData ? `${githubData.repos.length} Repos` : 'GitHub'}</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                 <span>2nd Year Bachelor</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href={getAssetUrl("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold font-mono rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Download size={14} /> DOWNLOAD_CV
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold font-mono rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <Mail size={14} /> CONTACT
              </a>
              <a 
                href="https://github.com/Eggmansmile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold font-mono rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <Github size={14} /> GITHUB
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;