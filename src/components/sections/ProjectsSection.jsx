import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import TiltCard from '../TiltCard';

const projects = [
  {
    id: 'rishta-24',
    title: 'Rishta 24 – Matrimony & Matchmaking Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badgeColor: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    dotColor: 'bg-rose-400 shadow-[0_0_8px_#F43F5E]',
    description: 'A full-stack matchmaking and matrimonial web application featuring multi-criteria partner preference matching, verified profile badges, real-time messaging, and Razorpay membership plan integration.',
    highlights: [
      'Engineered intelligent partner recommendation and search filtering algorithm based on user preferences',
      'Developed multi-step profile builder with secure photo upload pipelines and verification badges',
      'Integrated Razorpay payment gateway for premium membership subscriptions and direct contact unlocks',
      'Built real-time messaging and notification module with Express and MongoDB persistence'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS', 'REST APIs'],
    link: 'https://github.com/krish7323'
  },
  {
    id: 'fluencer-app',
    title: 'Fluencer App – Influencer & Brand Campaign Platform',
    category: 'mobile',
    categoryLabel: 'Mobile & Web App',
    badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    dotColor: 'bg-cyan-400 shadow-[0_0_8px_#06B6D4]',
    description: 'A full-stack React Native mobile & web platform for influencer marketing. Features brand campaign management, dynamic live stats tracking, OTP phone verification, EAS build deployment, and showcase carousels.',
    highlights: [
      'Engineered cross-platform mobile experience with React Native & Expo EAS build distribution',
      'Built dynamic brand campaign live stats, tasks, and submission review workflows for brands and creators',
      'Implemented secure 10-digit mobile OTP authentication with robust backend scheme validations',
      'Integrated React SSR, routing for web publishing, and VSL showcase carousel media displays'
    ],
    tags: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'EAS Build', 'OTP Auth'],
    link: 'https://github.com/rajammy1234567-ai/Fluencer_App'
  },
  {
    id: 'tour-website',
    title: 'Viz Travels (TourWebsite) – Travel Booking Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_#10B981]',
    description: 'Built and deployed a full-stack tour and travel booking website with a multi-step booking flow. Developed an Admin Panel for managing tours, bookings, and users, and a Vendor Panel for partner listing management with Razorpay payment integration.',
    highlights: [
      'Engineered Admin & Vendor Panels with role-based permissions (RBAC)',
      'Integrated Razorpay payment gateway with order creation & signature verification',
      'Designed REST APIs following service-controller-route architectural pattern',
      'Implemented OTP-based authentication & indexed MongoDB query architecture'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
    link: 'https://github.com/rajammy1234567-ai/TourWebsite'
  },
  {
    id: 'mirror-trade',
    title: 'MirrorTrade – Automated Trading & Financial Platform',
    category: 'fullstack',
    categoryLabel: 'FinTech Platform',
    badgeColor: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    dotColor: 'bg-indigo-400 shadow-[0_0_8px_#6366F1]',
    description: 'A high-performance trading platform enabling automated strategy execution, real-time portfolio analytics, position tracking, and secure order execution.',
    highlights: [
      'Engineered real-time trade execution architecture and multi-account portfolio performance analytics',
      'Implemented secure user authentication, risk management parameters, and position tracking',
      'Designed high-throughput REST APIs and data pipelines for live market metrics',
      'Built clean financial dashboard with responsive data grids and transaction history'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    link: 'https://github.com/rajammy1234567-ai/MirrorTrade'
  },
  {
    id: 'ott-backend',
    title: 'OTT Streaming App – Backend Infrastructure',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    badgeColor: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    dotColor: 'bg-teal-400 shadow-[0_0_8px_#14B8A6]',
    description: 'Built the backend and REST APIs for an OTT (video streaming) application, handling user accounts and content data. Implemented authentication and authorization for secure access to streaming content.',
    highlights: [
      'High-throughput video streaming content catalog RESTful APIs',
      'Token-based authentication & route authorization middleware',
      'MongoDB schemas optimized for low-latency search & categorization',
      'Modular middleware controllers for secure streaming subscriptions'
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
    link: 'https://github.com/krish7323'
  },
  {
    id: 'employee-mgmt',
    title: 'Employee Management System',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_#F59E0B]',
    description: 'Developed a full-stack web application to manage employee records with CRUD operations and role-based access control. Built RESTful APIs for efficient backend communication.',
    highlights: [
      'Complete CRUD operations for multi-department employee directories',
      'Role-Based Access Control (RBAC) separating administrative and staff actions',
      'Modular RESTful API communication with Express & MongoDB backend',
      'Responsive data tables and filtering dashboard interface'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
    link: 'https://github.com/krish7323'
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => {
        if (filter === 'fullstack') return p.category === 'fullstack';
        if (filter === 'mobile') return p.category === 'mobile';
        if (filter === 'backend') return p.category === 'backend';
        return true;
      });

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Featured Work & Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Projects
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-lg">
              Full-stack platforms, mobile apps, and backend architectures engineered by Krishna Chandra Jha.
            </p>
          </div>

          {/* Glowing Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0C111E]/80 border border-white/[0.08] p-1.5 rounded-full self-start sm:self-auto shadow-lg backdrop-blur-xl">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack Web' },
              { id: 'mobile', label: 'Mobile App' },
              { id: 'backend', label: 'Backend & APIs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.35)] font-extrabold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <TiltCard maxTilt={8} scale={1.02} className="h-full">
                  <div className="bg-[#0C111E]/65 border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between h-full transition-all duration-300 shadow-xl group backdrop-blur-md">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />
                          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor} uppercase tracking-wider`}>
                            {project.categoryLabel}
                          </span>
                        </div>
                        
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GitHub"
                          className="p-2 rounded-xl bg-[#12192B]/80 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="space-y-1.5 mb-6">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08] mb-5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-[#12192B]/80 text-zinc-300 text-[11px] font-mono border border-white/[0.05]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setSelectedProject(project)}
                          data-cursor="Inspect"
                          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                        >
                          <span>Inspect Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GitHub"
                          className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                          Repository →
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#0C111E] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-[#12192B] border border-white/[0.1] text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${selectedProject.badgeColor} uppercase tracking-wider inline-block`}>
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                  Technical Architecture & Key Highlights:
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-2.5">
                  Tech Stack Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#12192B] text-emerald-300 text-xs font-mono border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
