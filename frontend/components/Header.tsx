import React, { useState, useEffect } from 'react';

// Icon imports
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, ChevronUp } from 'lucide-react';

// Config and hook imports
import { CONFIG } from '../config';
import { useScrollProgress } from '../hooks/useScrollAnimation';
import DecryptedText from './DecryptedText';

type Theme = 'light' | 'dark';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollProgress = useScrollProgress();
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: 'light' | 'dark') => prev === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3 border-slate-200 dark:border-slate-800' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-mono font-bold text-slate-800 dark:text-slate-100 tracking-tight transition-colors group">
          &lt;<DecryptedText text={CONFIG.name.split(' ')[0]} /> /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-mono text-sm uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a 
            href="#contact" 
            className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono text-xs uppercase tracking-wide hover:bg-blue-600 dark:hover:bg-blue-100 transition-colors"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className="text-slate-700 dark:text-slate-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-mono text-lg block border-b border-slate-50 dark:border-slate-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <a href={CONFIG.social.github} className="text-slate-500 dark:text-slate-400 hover:text-blue-600"><Github size={20} /></a>
            <a href={CONFIG.social.linkedin} className="text-slate-500 dark:text-slate-400 hover:text-blue-600"><Linkedin size={20} /></a>
            <a href={`mailto:${CONFIG.email}`} className="text-slate-500 dark:text-slate-400 hover:text-blue-600"><Mail size={20} /></a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>

    {/* Scroll to Top Button */}
    {showScrollTop && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed top-24 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 group"
        aria-label="Scroll to top"
      >
        <ChevronUp 
          size={20} 
          className="group-hover:-translate-y-1 transition-transform" 
        />
      </button>
    )}
    </>
  );
};

export default Header;