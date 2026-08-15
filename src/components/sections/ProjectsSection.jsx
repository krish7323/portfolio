import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layers, ShieldCheck, Database, X, Code, CheckCircle2 } from 'lucide-react';
import TiltCard from '../TiltCard';

const projects = [
  {
    id: 'viz-travels',
    title: 'Viz Travels – Tour & Travel Booking Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    typeColor: 'bg-emerald-500',
    description: 'Built and deployed a full-stack tour and travel booking website with a multi-step booking flow. Developed an Admin Panel for managing tours, bookings, and users, and a Vendor Panel for vendors to manage their own listings. Integrated Razorpay payment gateway with secure order creation and signature verification.',
    highlights: [
      'Engineered Admin & Vendor Panels with role-based permissions (RBAC)',
      'Integrated Razorpay payment gateway with order creation & signature verification',
      'Designed REST APIs following service-controller-route architectural pattern',
      'Implemented OTP-based authentication & indexed MongoDB query architecture'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
    link: 'https://github.com/krish7323'
  },
  {
    id: 'ott-backend',
    title: 'OTT Streaming App – Backend',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    typeColor: 'bg-cyan-500',
    description: 'Built the backend and REST APIs for an OTT (video streaming) application, handling user accounts and content data. Implemented authentication and authorization for secure access to streaming content. Designed MongoDB schemas to manage users, content catalog, and subscription-style data.',
    highlights: [
      'High-throughput video streaming content catalog RESTful APIs',
      'Token-based authentication & route authorization middleware',
      'MongoDB schemas optimized for low-latency search & categorization',
      'Secure subscription status check controllers'
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
    link: 'https://github.com/krish7323'
  },
  {
    id: 'employee-mgmt',
    title: 'Employee Management System',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    typeColor: 'bg-teal-500',
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
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Projects
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-lg">
              Full-stack applications and scalable backend architectures built by Krishna Chandra Jha.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#0d0f17] border border-zinc-800 p-1.5 rounded-xl self-start sm:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack' },
              { id: 'backend', label: 'Backend & APIs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <TiltCard maxTilt={8} scale={1.02} className="h-full">
                  <div className="bg-[#0d0f17] border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between h-full transition-colors shadow-xl group">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${project.typeColor} shadow-[0_0_8px_currentColor]`} />
                          <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                            {project.categoryLabel}
                          </span>
                        </div>
                        
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GitHub"
                          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key bullets */}
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
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mb-5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-[11px] font-mono border border-zinc-800/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          data-cursor="Details"
                          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                        >
                          <span>Inspect Details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GitHub"
                          className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                          github.com/krish7323
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
              className="w-full max-w-2xl bg-[#0d0f17] border border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                  Technical Architecture & Key Modules:
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
                    <span key={i} className="px-3 py-1 rounded-lg bg-zinc-900 text-emerald-300 text-xs font-mono border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
