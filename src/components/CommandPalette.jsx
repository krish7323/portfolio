import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, FolderGit2, Briefcase, Cpu, Mail, Download, ArrowRight, X, ExternalLink, Terminal } from 'lucide-react';

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  const items = [
    {
      category: 'Navigation',
      list: [
        { title: 'Home & About', href: '#home', icon: Sparkles, badge: 'Hero' },
        { title: 'Featured Projects', href: '#projects', icon: FolderGit2, badge: '5 Apps' },
        { title: 'Work Experience (JT Brothers)', href: '#experience', icon: Briefcase, badge: 'Timeline' },
        { title: 'Skills & Technical Matrix', href: '#skills', icon: Cpu, badge: 'MERN' },
        { title: 'Contact & Hire Me', href: '#contact', icon: Mail, badge: 'Direct' },
      ],
    },
    {
      category: 'Quick Actions',
      list: [
        { title: 'Download ATS Resume (PDF/HTML)', href: '/resume.html', icon: Download, isExternal: true, badge: 'CV' },
        { title: 'View GitHub Profile', href: 'https://github.com/krish7323', icon: ExternalLink, isExternal: true, badge: 'Code' },
        { title: 'View LinkedIn Profile', href: 'https://linkedin.com/in/krishna-chandra-jha-423909321', icon: ExternalLink, isExternal: true, badge: 'Network' },
        { title: 'Direct WhatsApp Chat', href: 'https://wa.me/917323000894', icon: ExternalLink, isExternal: true, badge: 'Instant' },
      ],
    },
  ];

  const filteredItems = items.map((section) => ({
    ...section,
    list: section.list.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      section.category.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((section) => section.list.length > 0);

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.isExternal) {
      window.open(item.href, '_blank');
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 p-4 bg-black/75 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-xl bg-[#0d101d] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800/80 bg-[#090c17]">
              <Search className="w-5 h-5 text-emerald-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search sections, projects, resume..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-4">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-zinc-500 font-mono">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filteredItems.map((section, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-3 block mb-1">
                      {section.category}
                    </span>
                    {section.list.map((item, itemIdx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={itemIdx}
                          onClick={() => handleSelect(item)}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-zinc-800/70 text-zinc-300 hover:text-white transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:border-emerald-500/40">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
                              {item.badge}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer helper */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-800/80 bg-[#070913] text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">↓</kbd></span>
                <span>Select: <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">↵</kbd></span>
              </div>
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">ESC</kbd> to exit</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
