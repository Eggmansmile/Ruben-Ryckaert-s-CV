import React from 'react';
import { CONFIG } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
        <p className="text-sm">
          Built with <span className="text-white">React</span> & <span className="text-white">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;