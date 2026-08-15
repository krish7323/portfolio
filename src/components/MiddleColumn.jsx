import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Code2, Cpu, Globe, ArrowRight, ExternalLink, Sparkles, BookOpen, 
  Terminal, ShieldCheck, Database, Server, Smartphone, CheckCircle 
} from 'lucide-react';
import RadarChart from './RadarChart';

export default function MiddleColumn() {
  const stats = [
    { label: 'Months Experience', value: '6+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Full Stack Applications', value: '3+' },
    { label: 'GitHub Contributions', value: '500+' },
  ];

  const proficiencies = [
    { label: 'Full Stack Development', level: 95 },
    { label: 'Backend & APIs', level: 90 },
    { label: 'Database & Storage', level: 85 },
    { label: 'Problem Solving', level: 92 },
    { label: 'UI/UX & Design', level: 88 },
    { label: 'DevOps & Tools', level: 80 },
  ];

  const techStack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    Backend: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
    Database: ['MongoDB', 'PostgreSQL', 'Redis'],
    Tools: ['Git', 'Docker', 'VS Code', 'Framer Motion'],
  };

  const projects = [
    {
      title: 'Viz Travels Platform',
      desc: 'Full-featured travel booking app with admin dashboard & payment integration.',
      tags: ['MERN', 'Razorpay', 'Redux'],
      link: '#',
    },
    {
      title: 'OTT Streaming App',
      desc: 'Collaborative streaming platform backend with real-time auth and analytics.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      desc: 'Personal dashboard portfolio built with React & TailwindCSS.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      link: '#',
    },
  ];

  const blogs = [
    {
      title: 'Understanding React Server Components',
      date: 'May 12, 2026 • 5 min read',
    },
    {
      title: 'How I Improved Performance in My MERN Apps',
      date: 'Apr 28, 2026 • 7 min read',
    },
    {
      title: 'Top 10 VS Code Extensions for Developers',
      date: 'Apr 15, 2026 • 4 min read',
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. DASHBOARD OVERVIEW STATS */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Dashboard Overview</h3>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 text-center">
              <span className="text-2xl font-extrabold text-white block tracking-tight">{stat.value}</span>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. CORE PROFICIENCY & RADAR CHART SPLIT */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white">Core Proficiency</h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Progress Bars */}
          <div className="md:col-span-7 space-y-3">
            {proficiencies.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-[11px] font-semibold">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-indigo-400 font-mono">{item.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#070a18] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart Component */}
          <div className="md:col-span-5 flex justify-center">
            <RadarChart />
          </div>

        </div>
      </div>

      {/* 3. TECH STACK CATEGORIZED BADGES */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Tech Stack</h3>
          <a href="#skills" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            <span>View All Skills</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-2">
              <span className="text-[11px] font-bold text-indigo-300 block">{category}</span>
              <div className="flex flex-wrap gap-1">
                {items.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-[#131b40] text-[10px] font-mono text-slate-300 border border-[#202b60]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FEATURED PROJECTS */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Featured Projects</h3>
          <a href="#projects" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            <span>View All Projects</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-4 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
              <div>
                <h4 className="text-xs font-bold text-white mb-1">{proj.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">{proj.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-[#111736] text-[9px] font-mono text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={proj.link} className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300">
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. PROMO BANNER */}
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h4 className="text-sm font-bold text-white">Available for exciting opportunities!</h4>
          <p className="text-xs text-slate-300">Let's build something amazing together.</p>
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 whitespace-nowrap"
        >
          Hire Me
        </a>
      </div>

      {/* 6. LATEST FROM BLOG */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Latest from Blog</h3>
          <a href="#" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            <span>View All Blogs</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogs.map((b, idx) => (
            <div key={idx} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-2 hover:border-indigo-500/40 transition-colors">
              <h4 className="text-xs font-bold text-white leading-snug">{b.title}</h4>
              <span className="text-[10px] text-slate-500 block font-mono">{b.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
