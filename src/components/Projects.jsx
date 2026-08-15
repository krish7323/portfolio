import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Globe, Film, Users } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'viz-travels',
      title: 'Viz Travels – Tour & Travel Booking Platform',
      category: 'fullstack',
      description: 'A full-stack travel booking application featuring multi-step reservation flows, OTP-based user authentication, an Admin Panel for tour/user control, and a Vendor Panel for listing management.',
      highlights: [
        'Built Admin & Vendor Panels with role-based permissions',
        'Integrated Razorpay gateway with signature verification',
        'Designed service-controller-route REST API architecture',
        'Optimized MongoDB schemas for low-latency search'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
      github: 'https://github.com/krish7323',
      icon: Globe,
      color: 'from-indigo-600 to-cyan-500'
    },
    {
      id: 'ott-backend',
      title: 'OTT Streaming Application Backend',
      category: 'backend',
      description: 'A backend architecture for a video streaming platform handling high-concurrency user requests, catalog management, and secure streaming authentication.',
      highlights: [
        'Built secure REST APIs for content catalog & user accounts',
        'Implemented token-based authentication & authorization',
        'Designed MongoDB schemas for subscriptions & streaming data',
        'Structured modular controllers and router middlewares'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
      github: 'https://github.com/krish7323',
      icon: Film,
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 'employee-mgmt',
      title: 'Employee Management System',
      category: 'fullstack',
      description: 'An enterprise web application to streamline employee record management with role-based access control, departmental tracking, and CRUD API operations.',
      highlights: [
        'Complete CRUD operations for employee directory',
        'Role-based authorization for managers and staff',
        'RESTful API communication with Express and MongoDB',
        'Clean dashboard UI with responsive data tables'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'RBAC'],
      github: 'https://github.com/krish7323',
      icon: Users,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production & Personal <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base">
            Explore my recent full-stack applications, REST API architectures, and web platforms.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 pt-4">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Full Stack', value: 'fullstack' },
              { label: 'Backend & APIs', value: 'backend' }
            ].map(tab => (
              <motion.button
                key={tab.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.value
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <TiltCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

// 3D Tilt Card Component
function TiltCard({ project, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Tilt calculations
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const IconComponent = project.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group h-full cursor-pointer transform-gpu"
      >
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${project.color} flex items-center justify-center text-white shadow-lg`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              title="View Code on GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Feature Bullets */}
          <div className="space-y-1.5 mb-6">
            {project.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800 group-hover:border-indigo-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
