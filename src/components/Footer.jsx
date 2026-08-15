import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-slate-200 font-semibold">Krishna Chandra Jha</span>
          <span className="text-slate-600">|</span>
          <span>Junior Full Stack Developer</span>
        </div>

        <p className="flex items-center gap-1">
          <span>Crafted with React & Tailwind CSS</span>
        </p>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
          aria-label="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
