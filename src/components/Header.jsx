import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#06080F]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3.5' 
        : 'bg-transparent border-b border-transparent py-5'
    } px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Logo with Glowing Beacon */}
        <a href="#home" data-cursor="KJ" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all">
              KJ
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#06080F] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors leading-none">
              Krishna Chandra Jha
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider mt-1 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
              <span>Full Stack & Mobile Developer</span>
            </span>
          </div>
        </a>

        {/* Desktop Links with Sliding Glow Pill */}
        <nav 
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden md:flex items-center gap-1 bg-[#0D121F]/80 border border-white/[0.08] p-1.5 rounded-full backdrop-blur-xl shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredTab(item.label)}
              data-cursor={item.label}
              className="relative px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {hoveredTab === item.label && (
                <motion.div
                  layoutId="navHoverPill"
                  className="absolute inset-0 bg-white/[0.08] border border-emerald-500/35 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Glowing CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="Connect"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-black text-xs font-extrabold tracking-tight shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10">Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            className="md:hidden bg-[#0A0E1A]/95 border-b border-white/[0.08] px-5 pt-4 pb-6 mt-3 rounded-2xl space-y-2 backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-extrabold shadow-lg shadow-emerald-500/20"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
