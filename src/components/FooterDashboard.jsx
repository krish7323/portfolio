export default function FooterDashboard() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080F] py-10 px-6 sm:px-12 lg:px-20 text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white">Krishna Chandra Jha</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span>Full Stack Web & Mobile Developer</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
        </div>
        
        <nav className="flex items-center gap-6 text-xs font-semibold">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
