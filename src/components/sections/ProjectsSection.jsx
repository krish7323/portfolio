import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, X, CheckCircle2, ArrowUpRight, Play, 
  Film, Image as ImageIcon, Sparkles, Layers 
} from 'lucide-react';
import TiltCard from '../TiltCard';

const projects = [
  {
    id: 'fluencer-app',
    title: 'Fluencer App – Influencer & Brand Collab Platform',
    category: 'mobile',
    categoryLabel: 'React Native Mobile & Web',
    badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    dotColor: 'bg-cyan-400 shadow-[0_0_8px_#06B6D4]',
    hasVideo: true,
    videoDemo: '/demos/fluencer/video.mp4',
    screenshots: [
      { src: '/demos/fluencer/screen1.jpg', title: 'Brand & Creator Login Portal' },
      { src: '/demos/fluencer/screen2.jpg', title: 'Creator Discovery & Onboarding' },
      { src: '/demos/fluencer/screen3.jpg', title: 'Paid Collab Engine & Overview' }
    ],
    description: 'A full-stack React Native mobile & web platform for influencer marketing. Features brand campaign management, deal escrow payouts, real-time messaging, OTP phone verification, EAS build distribution, and campaign showcase carousels.',
    highlights: [
      'Engineered cross-platform mobile experience with React Native & Expo EAS build distribution',
      'Built dynamic brand campaign live stats, tasks, escrow payouts, and submission review workflows',
      'Implemented secure 10-digit mobile OTP authentication with robust backend scheme validations',
      'Integrated real-time campaign chat messaging between brands and creators with media attachments'
    ],
    tags: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'EAS Build', 'OTP Auth', 'Escrow Engine'],
    link: 'https://github.com/rajammy1234567-ai/Fluencer_App'
  },
  {
    id: 'viztv-ott',
    title: 'Viz TV – OTT 4K Video Streaming Platform (Google Play)',
    category: 'mobile',
    categoryLabel: 'Mobile App & Backend',
    playStoreTag: 'Google Play Early Access',
    badgeColor: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    dotColor: 'bg-rose-400 shadow-[0_0_8px_#F43F5E]',
    hasVideo: true,
    videoDemo: '/demos/viztv/video.mp4',
    screenshots: [
      { src: '/demos/viztv/playstore.jpg', title: 'Google Play Store Official Listing' },
      { src: '/demos/viztv/appdetails.jpg', title: '4K Movie Streaming & Talent Hunt' },
      { src: '/demos/viztv/features.jpg', title: 'Live Player & Ultra HD Video Controls' },
      { src: '/demos/viztv/settings.jpg', title: 'Offline Downloads & User Settings' }
    ],
    description: 'A production 4K video streaming & entertainment mobile app deployed on Google Play (built at Viz Digital). Features full video catalog search, watchlist curation, offline download manager, audio-video player controls, and talent hunt video submissions.',
    highlights: [
      'Production React Native streaming app released on Google Play Store by Viz Digital',
      'High-throughput video streaming catalog RESTful APIs with token authorization',
      'Built custom media player with video speed, quality switching, and offline download caching',
      'Optimized low-latency MongoDB schemas for categorized movie recommendations and talent auditions'
    ],
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Google Play', 'Video Streaming', 'JWT Auth'],
    link: 'https://github.com/krish7323'
  },
  {
    id: 'rishta-24',
    title: 'Rishta 24 – Matrimony & Matchmaking Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_#10B981]',
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
    id: 'tour-website',
    title: 'Viz Travels (TourWebsite) – Travel Booking Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badgeColor: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    dotColor: 'bg-teal-400 shadow-[0_0_8px_#14B8A6]',
    description: 'Built and deployed a full-stack tour and travel booking website with a multi-step booking flow. Developed an Admin Panel for managing tours, bookings, and users, and a Vendor Panel for partner listing management with Razorpay payment integration.',
    highlights: [
      'Engineered Admin & Vendor Panels with role-based permissions (RBAC)',
      'Integrated Razorpay payment gateway with order creation & signature verification',
      'Designed REST APIs following service-controller-route architectural pattern',
      'Implemented OTP-based authentication & indexed MongoDB query architecture'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS', 'RBAC'],
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
    id: 'employee-mgmt',
    title: 'Employee Management System',
    category: 'backend',
    categoryLabel: 'Full Stack & APIs',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_#F59E0B]',
    description: 'Developed a full-stack web application to manage employee records with CRUD operations and role-based access control. Built RESTful APIs for efficient backend communication.',
    highlights: [
      'Complete CRUD operations for multi-department employee directories',
      'Role-Based Access Control (RBAC) separating administrative and staff actions',
      'Modular RESTful API communication with Express & MongoDB backend',
      'Responsive data tables and filtering dashboard interface'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC', 'REST APIs'],
    link: 'https://github.com/krish7323'
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('video'); // 'video' | 'screenshots' | 'specs'
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => {
        if (filter === 'fullstack') return p.category === 'fullstack';
        if (filter === 'mobile') return p.category === 'mobile';
        if (filter === 'backend') return p.category === 'backend';
        return true;
      });

  const openProjectModal = (project, initialTab = 'specs') => {
    setSelectedProject(project);
    setModalTab(project.hasVideo ? initialTab : 'specs');
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Featured Work & Live Demos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Projects & App Demos
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-lg">
              Full-stack platforms, Google Play apps, and video demos engineered by Krishna Chandra Jha.
            </p>
          </div>

          {/* Glowing Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0C111E]/80 border border-white/[0.08] p-1.5 rounded-full self-start sm:self-auto shadow-lg backdrop-blur-xl">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'mobile', label: 'Mobile Apps & Demos' },
              { id: 'fullstack', label: 'Full Stack Web' },
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
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />
                          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor} uppercase tracking-wider`}>
                            {project.categoryLabel}
                          </span>
                          {project.playStoreTag && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              ★ Google Play
                            </span>
                          )}
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

                      {/* Video Demo Badge if available */}
                      {project.hasVideo && (
                        <div className="mb-4">
                          <button
                            onClick={() => openProjectModal(project, 'video')}
                            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-indigo-500/15 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 transition-all flex items-center justify-between text-xs font-bold shadow-sm"
                          >
                            <span className="flex items-center gap-2">
                              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                              <span>Watch Live App Video Demo</span>
                            </span>
                            <span className="text-[10px] font-mono uppercase bg-cyan-500/20 px-2 py-0.5 rounded">MP4 Demo</span>
                          </button>
                        </div>
                      )}

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
                          onClick={() => openProjectModal(project, project.hasVideo ? 'video' : 'specs')}
                          data-cursor="Inspect"
                          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                        >
                          <span>{project.hasVideo ? 'View Demo & Specs' : 'Inspect Details'}</span>
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

      {/* Interactive Project Details & Video Player Modal (Mounted into Portal on Body) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(null);
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full max-w-3xl bg-[#090D17] border border-white/[0.2] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[90vh] overflow-y-auto z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-[#141B2D] border border-white/[0.15] text-zinc-300 hover:text-white hover:border-white/40 transition-all z-30 shadow-lg"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="pr-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${selectedProject.badgeColor} uppercase tracking-wider inline-block`}>
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.playStoreTag && (
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        ★ Live on Google Play (Early Access)
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Navigation Tabs in Modal (Video / Screenshots / Architecture) */}
                {selectedProject.hasVideo && (
                  <div className="flex items-center gap-2 border-b border-white/[0.1] pb-3">
                    <button
                      onClick={() => { setModalTab('video'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'video'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span>Live Video Demo</span>
                    </button>

                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <button
                        onClick={() => setModalTab('screenshots')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          modalTab === 'screenshots'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                            : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>App Screenshots ({selectedProject.screenshots.length})</span>
                      </button>
                    )}

                    <button
                      onClick={() => { setModalTab('specs'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'specs'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture & Features</span>
                    </button>
                  </div>
                )}

                {/* Active Tab: Live Video Player */}
                {selectedProject.hasVideo && modalTab === 'video' && (
                  <div className="space-y-3">
                    <div className="relative rounded-2xl overflow-hidden bg-black border border-white/[0.15] shadow-2xl flex items-center justify-center max-h-[460px]">
                      <video
                        key={selectedProject.videoDemo}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full max-h-[440px] object-contain mx-auto"
                        src={selectedProject.videoDemo}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-xs text-zinc-400 text-center font-mono">
                      High-definition screen recording of the mobile application in action.
                    </p>
                  </div>
                )}

                {/* Active Tab: App Screenshots Gallery */}
                {selectedProject.screenshots && modalTab === 'screenshots' && (
                  <div className="space-y-4">
                    {selectedImage ? (
                      <div className="space-y-3">
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="text-xs text-cyan-400 font-bold hover:underline flex items-center gap-1"
                        >
                          ← Back to all screenshots
                        </button>
                        <div className="rounded-2xl overflow-hidden bg-black border border-white/[0.15] max-h-[460px] flex items-center justify-center">
                          <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title} 
                            className="max-h-[440px] w-auto object-contain mx-auto" 
                          />
                        </div>
                        <p className="text-xs font-semibold text-center text-zinc-200">{selectedImage.title}</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {selectedProject.screenshots.map((s, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(s)}
                            className="cursor-pointer group rounded-xl overflow-hidden bg-black/60 border border-white/[0.1] hover:border-cyan-500/50 transition-all p-1.5 shadow-md"
                          >
                            <div className="aspect-[9/16] overflow-hidden rounded-lg bg-black">
                              <img 
                                src={s.src} 
                                alt={s.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                              />
                            </div>
                            <span className="text-[10px] text-zinc-300 font-medium block mt-1.5 truncate px-1">{s.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description & Technical Highlights */}
                <div className="space-y-4 pt-2 border-t border-white/[0.08]">
                  <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                      Technical Architecture & Highlights:
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-2.5">
                      Technologies & Modules:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-[#141B2D] text-emerald-300 text-xs font-mono border border-emerald-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="pt-4 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
                  {selectedProject.playStoreTag ? (
                    <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Viz Digital Production Release</span>
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-zinc-400">
                      Production Full-Stack Application
                    </span>
                  )}

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
