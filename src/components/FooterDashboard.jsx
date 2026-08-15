import React from 'react';

const FooterDashboard = () => {
  return (
    <footer className="border-t border-zinc-800/50 bg-[#09090b] py-8 px-6 sm:px-12 lg:px-20 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; 2026 Krishna Chandra Jha
        </div>
        <nav className="flex items-center gap-6">
          <a href="#home" className="hover:text-zinc-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-zinc-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterDashboard;
