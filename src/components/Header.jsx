import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';

export default function Header({ onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/85 backdrop-blur-2xl border-b border-zinc-800/70 py-3.5 px-6 sm:px-12 lg:px-20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Logo & Live Status */}
        <div className="flex items-center gap-4">
          <a href="#home" data-cursor="KJ" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-black font-extrabold text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              KJ
            </div>
            <div>
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                Krishna Jha
              </span>
            </div>
          </a>

          {/* Operational Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open to Opportunities</span>
          </div>
        </div>

        {/* Desktop Links & Command Search Pill */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                data-cursor={item.label}
                className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Search Button (Cmd+K) */}
          <button
            onClick={onOpenCommandPalette}
            data-cursor="Search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-mono transition-all"
            title="Press Ctrl + K to Search"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">⌘K</kbd>
          </button>
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="Hire"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-zinc-800/80 px-4 pt-3 pb-6 mt-3 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Search Everything (⌘K)</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-black text-xs font-bold shadow-lg"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
