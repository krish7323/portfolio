import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, X, CheckCircle2, ArrowUpRight, Play, 
  Film, Image as ImageIcon, Sparkles, Layers,
  ShieldCheck, Cpu, Wrench, Smartphone, Network, Info
} from 'lucide-react';
import TiltCard from '../TiltCard';

const projects = [
  {
    id: 'sfarmart-customer',
    title: 'S-farmart Customer App',
    category: 'mobile',
    categoryLabel: 'React Native Mobile App',
    role: 'Full-stack development and mobile integration',
    ecosystem: 'Both apps are part of a shared commerce ecosystem. Connects retail consumers to local food and farm businesses, coordinating catalog browsing, cart checkout, and delivery updates with live rider tracking.',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_#10B981]',
    playStoreTag: 'Google Play Internal Beta',
    hasVideo: false,
    screenshots: [
      { 
        src: '/demos/sfarmart/sfarmart-customer-playstore.jpg', 
        title: 'SFARMART24 Customer App – Google Play Internal Beta Testing Track' 
      }
    ],
    shortDescription: 'A React Native commerce app for browsing local food and farm products, managing carts, selecting delivery addresses, placing orders and tracking delivery updates.',
    description: 'A React Native commerce app for browsing local food and farm products, managing carts, selecting delivery addresses, placing orders and tracking delivery updates. Engineered as part of a connected farm-to-home commerce ecosystem with live rider tracking and responsive mobile integration.',
    features: [
      'Customer registration, login and logout',
      'Store, category and product browsing',
      'Cart management and checkout',
      'GPS-assisted delivery address and map pin selection',
      'Order status and live rider tracking',
      'Push notification integration'
    ],
    highlights: [
      'Customer store, category, and farm produce catalog browsing with cart & checkout',
      'GPS-assisted delivery address selection with interactive map pin positioning',
      'Order status and live rider tracking communicating with shared backend',
      'Push notification alerts for order lifecycle changes and updates'
    ],
    tags: [
      'React Native', 'Expo', 'JavaScript', 'Node.js', 'Express', 
      'MongoDB Atlas', 'Socket.IO', 'Firebase Cloud Messaging', 
      'Google Maps API', 'EAS Build', 'Render'
    ],
    link: 'https://github.com/rajammy1234567-ai/Sfarmart/tree/hardening-capacity',
    security: [
      { title: 'Password Hashing with Bcrypt', desc: 'Secure credential storage using salted bcrypt hashing prior to database persistence.' },
      { title: 'Token-Based Authentication', desc: 'Protected API endpoints with scoped access tokens and role validation.' },
      { title: 'Backend Role & Account Validation', desc: 'Server-side verification ensuring requests originate from validated customer accounts.' },
      { title: 'Account-Scoped API Access & Socket Rooms', desc: 'Order tracking and notifications isolated strictly to authenticated user channels.' },
      { title: 'Request Rate Limits & Concurrency Bounds', desc: 'Enforces rate limits and bounded concurrent requests to prevent backend flooding.' },
      { title: 'Validation of Queries & Location Data', desc: 'Sanitization of malformed query parameters and GPS coordinate payloads.' },
      { title: 'Session Teardown Safeguards', desc: 'Invalidates active sessions upon logout to prevent late token refresh from restoring a logged-out session.' },
      { title: 'Private Credentials Exclusion', desc: 'Private backend credentials and service-account keys strictly excluded from version control.' }
    ],
    securityNote: 'Security measures reflect practical defense-in-depth principles. The application is not claimed to be fully penetration-tested or completely secure.',
    reliability: [
      { title: 'Bounded Pagination & Deduplication', desc: 'Limits payload sizes and removes duplicate items to ensure smooth list scrolling without UI glitching.' },
      { title: 'Shared In-Flight Requests', desc: 'Coalesces concurrent duplicate network calls to eliminate redundant network traffic.' },
      { title: 'Controlled Retries for Reads', desc: 'Safely retries eligible idempotent read queries during transient network dropouts.' },
      { title: 'Checkout Mutation Replay Protection', desc: 'Disables automatic replay on checkout mutations to prevent unintended repeated charges.' },
      { title: 'Persistent Checkout Recovery IDs', desc: 'Uses client-generated recovery keys to safeguard against duplicate order creation across reconnects.' },
      { title: 'Sequential Polling with Background Pause', desc: 'Awaits response completion before subsequent polls and halts polling when app is in the background.' },
      { title: 'Request Timeouts & Actionable Errors', desc: 'Enforces bounded timeouts and returns informative errors rather than silent stalls.' },
      { title: 'Database Indexing', desc: 'Indexes common product and order query fields to optimize MongoDB read latency under load.' },
      { title: 'Connection Pooling & Graceful Shutdown', desc: 'Reuses database connections efficiently and terminates server instances cleanly on SIGTERM.' },
      { title: 'Socket Reconnection & Polling-First Transport', desc: 'Ensures dependable real-time connection establishment across mobile network handovers.' },
      { title: 'Hosted Backend Uptime Monitoring', desc: 'Health check pings maintain active awareness of hosted API availability on Render.' }
    ],
    challenges: [
      {
        title: 'Product Catalog Loading & List Stability',
        problem: 'Rapid catalog scrolling across large product categories led to duplicate items and list jump re-renders on mobile devices.',
        solution: 'Implemented bounded pagination with client-side item deduplication and shared in-flight fetch caching.',
        benefit: 'Smooth, glitch-free catalog scrolling with reduced mobile memory footprint and fewer redundant network calls.'
      },
      {
        title: 'GPS-Assisted Delivery Address Selection',
        problem: 'Inaccurate hardware GPS coordinates and inconsistent reverse-geocoding led to malformed delivery addresses.',
        solution: 'Combined native device GPS with interactive map pin refinement and strict backend coordinate schema validation.',
        benefit: 'Reliable delivery addresses with validated coordinates for accurate order dispatch.'
      },
      {
        title: 'Duplicate Checkout Prevention on Flaky Networks',
        problem: 'Unstable mobile connectivity caused accidental multi-taps and network retries on checkout mutations.',
        solution: 'Introduced persistent checkout recovery identifiers and disabled automatic replay on non-idempotent order requests.',
        benefit: 'Eliminated duplicate order creation and provided safe recovery without risk of double billing.'
      },
      {
        title: 'Clearer Authentication Errors & Session Teardown',
        problem: 'Silent network timeouts obscured login failures, while delayed background token refresh could resurrect logged-out sessions.',
        solution: 'Added explicit request timeouts with user-actionable error messages and robust session teardown hooks upon sign-out.',
        benefit: 'Transparent user feedback during connection issues and guaranteed session termination on logout.'
      }
    ],
    validation: [
      { title: 'Automated Safeguard Tests', desc: 'Automated test suites verifying authentication flows, request policies, session lifecycles, and protected routes.' },
      { title: 'Expo Doctor & Bundle Export', desc: 'Passed Expo Doctor diagnostic checks and validated Android production JS bundle exports.' },
      { title: 'Manual Workflow Testing', desc: 'End-to-end manual verification across customer onboarding, browsing, cart manipulation, address selection, and checkout.' },
      { title: 'EAS Build & Google Play Review', desc: 'Prepared Android release builds using EAS Build and published to Google Play internal testing track.' }
    ],
    validationNotice: 'Implemented safeguards for concurrent requests. Evaluated on physical devices in Google Play internal testing; automated checks complement rather than replace physical hardware testing.'
  },
  {
    id: 'sfarmart-partner',
    title: 'S-farmart Partner App',
    category: 'mobile',
    categoryLabel: 'React Native Merchant App',
    role: 'Full-stack development and mobile integration',
    ecosystem: 'Both apps are part of a shared commerce ecosystem. Connects retail merchants directly to consumer orders generated by the Customer App, handling live orders and fulfillment states through a shared backend.',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_#F59E0B]',
    playStoreTag: 'Google Play Internal Beta',
    hasVideo: false,
    screenshots: [
      { 
        src: '/demos/sfarmart/sfarmart-partner-playstore.jpg', 
        title: 'SFARMART24 PARTNERS App – Google Play Internal Beta Testing Track' 
      }
    ],
    shortDescription: 'A React Native merchant app for managing products, stock and store availability, receiving live orders and updating fulfilment status through a connected backend.',
    description: 'A React Native merchant app for managing products, stock and store availability, receiving live orders and updating fulfilment status through a connected backend. Gives store operators real-time control over their catalog, live orders, and dispatch workflows.',
    features: [
      'Partner login using registered phone number and password',
      'Store online/offline controls',
      'Product and inventory management',
      'Live stock updates',
      'Real-time incoming order alerts',
      'Order acceptance and fulfilment status updates',
      'Sales and order summaries',
      'Push notification integration'
    ],
    highlights: [
      'Partner login with registered phone & password and store online/offline toggling',
      'Product and inventory management with live stock updates and atomic safeguards',
      'Real-time incoming order alerts with acceptance and fulfillment progression',
      'Daily/weekly sales and order summaries with push notification triggers'
    ],
    tags: [
      'React Native', 'Expo', 'JavaScript', 'Node.js', 'Express', 
      'MongoDB Atlas', 'Socket.IO', 'Firebase Cloud Messaging', 
      'EAS Build', 'Render'
    ],
    link: 'https://github.com/rajammy1234567-ai/Sfarmart/tree/hardening-capacity',
    security: [
      { title: 'Bcrypt Password Hashing', desc: 'Secure merchant account password hashing using bcrypt prior to database storage.' },
      { title: 'Token-Based Authentication', desc: 'Authenticated API communication with role-checked token authorization on all merchant endpoints.' },
      { title: 'Backend Role & Account Validation', desc: 'Server-side enforcement verifying merchant permissions and store ownership.' },
      { title: 'Account-Scoped Socket Rooms', desc: 'Restricts live order alerts strictly to authenticated store-specific socket rooms.' },
      { title: 'Request Rate Limits & Bounded Concurrency', desc: 'Protects backend endpoints against rapid repeated merchant mutations and request surges.' },
      { title: 'Payload & Query Validation', desc: 'Sanitizes and validates incoming inventory updates, prices, and status change parameters.' },
      { title: 'Session Teardown Safeguards', desc: 'Invalidates active sessions upon logout to prevent late token refresh from restoring merchant access.' },
      { title: 'Private Credentials Exclusion', desc: 'Private backend credentials and service-account keys strictly excluded from version control.' }
    ],
    securityNote: 'Security measures reflect practical defense-in-depth principles. The application is not claimed to be fully penetration-tested or completely secure.',
    reliability: [
      { title: 'Atomic Stock Updates', desc: 'Applies atomic database updates to reduce concurrency conflicts during inventory adjustments.' },
      { title: 'Shared In-Flight Read Requests', desc: 'Prevents duplicate concurrent queries during rapid navigation between store and order tabs.' },
      { title: 'Controlled Retries for Reads', desc: 'Safely re-fetches eligible read queries when momentary network drops occur.' },
      { title: 'Background-Aware Polling Fallback', desc: 'Waits for in-flight responses before repeating and halts polling loops when the app is backgrounded.' },
      { title: 'Request Timeouts & Actionable Errors', desc: 'Eliminates infinite loading states with clear timeout bounds and descriptive login error messages.' },
      { title: 'Database Indexing for Store Queries', desc: 'Optimized indexes for store-specific order queries, status filters, and product lookups.' },
      { title: 'Connection Pooling & Graceful Teardown', desc: 'Manages database connection pools efficiently and cleans up open connections during deployments.' },
      { title: 'Socket Reconnection & Polling-First Transport', desc: 'Ensures dependable live order alerts even over unpredictable mobile network connections.' },
      { title: 'Hosted Backend Uptime Monitoring', desc: 'Monitors backend server availability on Render with recurring health check pings.' }
    ],
    challenges: [
      {
        title: 'Login Error Persistence on Screen Unmount',
        problem: 'When sign-in attempts failed, error messages were prone to vanishing or triggering unmounted component memory warnings when screens shifted.',
        solution: 'Decoupled authentication error lifecycle handling from transient screen mounts, displaying actionable messages cleanly.',
        benefit: 'Predictable user feedback during authentication failures without memory leak warnings or lost errors.'
      },
      {
        title: 'Real-Time Order Alert Delivery',
        problem: 'Merchants on intermittent mobile connections could drop WebSocket connections and miss critical new order announcements.',
        solution: 'Combined Socket.IO polling-first transport, automatic room reconnection handling, and Firebase Cloud Messaging push backups.',
        benefit: 'Reliable receipt of order alerts so merchants never miss incoming customer purchases.'
      },
      {
        title: 'Atomic Stock Synchronisation',
        problem: 'Simultaneous purchases from customers and manual stock changes from partners risked race conditions and overselling.',
        solution: 'Implemented atomic database increments/decrements in MongoDB with boundary guards to prevent concurrency conflicts.',
        benefit: 'Consistent inventory records and elimination of overselling across the connected commerce ecosystem.'
      },
      {
        title: 'Backend Configuration & Build Consistency',
        problem: 'Version drift across Expo dependencies and environment variable mismatches between local builds and EAS caused build friction.',
        solution: 'Streamlined build configuration using Expo Doctor validation and centralized environment variable management across EAS and Render.',
        benefit: 'Smooth, reproducible Android build pipelines and consistent backend connectivity across releases.'
      }
    ],
    validation: [
      { title: 'Automated Safeguard Tests', desc: 'Automated test coverage for merchant authentication, route restrictions, session teardown, and order status transitions.' },
      { title: 'Expo Doctor & Dependency Audits', desc: 'Passed Expo Doctor checks to verify runtime compatibility across updated Expo SDK dependencies.' },
      { title: 'Manual Merchant Workflow Testing', desc: 'Tested end-to-end partner journeys: sign-in, online toggle, inventory updates, live order alert receipt, and status progression.' },
      { title: 'Google Play Internal Beta Distribution', desc: 'Configured EAS build pipelines and successfully published to Google Play internal testing track.' }
    ],
    validationNotice: 'Implemented safeguards for concurrent requests. Evaluated on physical devices in Google Play internal testing; automated checks complement rather than replace physical hardware testing.'
  },
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
    shortDescription: 'A full-stack React Native mobile & web platform for influencer marketing featuring campaign management and real-time messaging.',
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
    shortDescription: 'A production 4K video streaming & entertainment mobile app deployed on Google Play (built at Viz Digital).',
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
    shortDescription: 'A full-stack matchmaking web platform featuring multi-criteria preference matching and Razorpay integration.',
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
    shortDescription: 'A full-stack tour booking platform with Admin & Vendor Panels and Razorpay payment integration.',
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
    shortDescription: 'A high-performance trading platform enabling automated execution, real-time analytics, and position tracking.',
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
    shortDescription: 'A full-stack web application to manage employee records with CRUD operations and role-based access control.',
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
  const [modalTab, setModalTab] = useState('specs'); // 'specs' | 'security' | 'challenges' | 'validation' | 'video' | 'screenshots'
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

  const openProjectModal = (project, initialTab) => {
    setSelectedProject(project);
    if (initialTab) {
      setModalTab(initialTab);
    } else if (project.hasVideo) {
      setModalTab('video');
    } else {
      setModalTab('specs');
    }
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
              Production Projects & Mobile Apps
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Connected commerce apps, production full-stack platforms, and Google Play releases engineered by Krishna Chandra Jha.
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <TiltCard maxTilt={6} scale={1.02} className="h-full">
                  <div className="bg-[#0C111E]/65 border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between h-full transition-all duration-300 shadow-xl group backdrop-blur-md">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-2 mb-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />
                          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor} uppercase tracking-wider`}>
                            {project.categoryLabel}
                          </span>
                          {project.playStoreTag && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              ★ {project.playStoreTag}
                            </span>
                          )}
                        </div>
                        
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="GitHub"
                            className="p-2 rounded-xl bg-[#12192B]/80 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors shrink-0"
                            title="View Source Code"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Role Pill */}
                      {project.role && (
                        <div className="mb-2.5">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-md">
                            <span className="text-emerald-400 font-semibold">Role:</span> {project.role}
                          </span>
                        </div>
                      )}

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Video Demo Button if available */}
                      {project.hasVideo && (
                        <div className="mb-3.5">
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

                      {/* Ecosystem Context Pill if present */}
                      {project.ecosystem && (
                        <div className="mb-3 text-[11px] text-emerald-300/90 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
                          <Network className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">Part of Connected Commerce Ecosystem</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Key Highlights / Features */}
                      <ul className="space-y-1.5 mb-5">
                        {(project.features || project.highlights).slice(0, 3).map((item, i) => (
                          <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.08] mb-4">
                        {project.tags.slice(0, 6).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-[#12192B]/80 text-zinc-300 text-[11px] font-mono border border-white/[0.05]"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 6 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 text-[10px] font-mono">
                            +{project.tags.length - 6} more
                          </span>
                        )}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => openProjectModal(project)}
                          data-cursor="Inspect"
                          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-1"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="GitHub"
                            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <span>Repository</span>
                            <span>→</span>
                          </a>
                        )}
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
                className="w-full max-w-4xl bg-[#090D17] border border-white/[0.2] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[90vh] overflow-y-auto z-10"
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
                <div className="pr-10 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-mono font-bold px-3 py-0.5 rounded-full border ${selectedProject.badgeColor} uppercase tracking-wider inline-block`}>
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.playStoreTag && (
                      <span className="text-xs font-mono font-bold px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        ★ {selectedProject.playStoreTag}
                      </span>
                    )}
                    {selectedProject.role && (
                      <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-white/[0.05] text-zinc-300 border border-white/[0.1]">
                        Role: {selectedProject.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                {/* Connected Ecosystem Banner */}
                {selectedProject.ecosystem && (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-3">
                    <Network className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-300 block mb-0.5 font-mono uppercase tracking-wider text-[11px]">
                        Connected Commerce Ecosystem
                      </span>
                      <p className="text-zinc-300 leading-relaxed text-xs">
                        {selectedProject.ecosystem}
                      </p>
                    </div>
                  </div>
                )}

                {/* Modal Navigation Tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.1] pb-3">
                  {/* Video tab if available */}
                  {selectedProject.hasVideo && (
                    <button
                      onClick={() => { setModalTab('video'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'video'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span>Live Video Demo</span>
                    </button>
                  )}

                  {/* Overview & Features Tab */}
                  <button
                    onClick={() => { setModalTab('specs'); setSelectedImage(null); }}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      modalTab === 'specs'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Features & Stack</span>
                  </button>

                  {/* Security & Reliability Tab if available */}
                  {selectedProject.security && (
                    <button
                      onClick={() => { setModalTab('security'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'security'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Security & Reliability</span>
                    </button>
                  )}

                  {/* Engineering Challenges Tab if available */}
                  {selectedProject.challenges && (
                    <button
                      onClick={() => { setModalTab('challenges'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'challenges'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Engineering Challenges</span>
                    </button>
                  )}

                  {/* Validation & Status Tab if available */}
                  {selectedProject.validation && (
                    <button
                      onClick={() => { setModalTab('validation'); setSelectedImage(null); }}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'validation'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Validation & Status</span>
                    </button>
                  )}

                  {/* Screenshots tab if available */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <button
                      onClick={() => setModalTab('screenshots')}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        modalTab === 'screenshots'
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Screenshots ({selectedProject.screenshots.length})</span>
                    </button>
                  )}
                </div>

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
                          ← Back to gallery
                        </button>
                        <div className="rounded-2xl overflow-hidden bg-black border border-white/[0.15] max-h-[500px] flex items-center justify-center p-2">
                          <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title} 
                            className="max-h-[480px] w-auto object-contain mx-auto rounded-lg shadow-2xl" 
                          />
                        </div>
                        <p className="text-xs font-semibold text-center text-zinc-200">{selectedImage.title}</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.screenshots.map((s, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(s)}
                            className="cursor-pointer group rounded-2xl overflow-hidden bg-black/60 border border-white/[0.12] hover:border-emerald-500/50 transition-all p-2 shadow-lg"
                          >
                            <div className="aspect-[9/16] overflow-hidden rounded-xl bg-black flex items-center justify-center">
                              <img 
                                src={s.src} 
                                alt={s.title} 
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                              />
                            </div>
                            <span className="text-xs text-zinc-300 font-medium block mt-2 px-1 text-center">{s.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Active Tab: Features & Architecture (specs) */}
                {modalTab === 'specs' && (
                  <div className="space-y-6">
                    {/* Features Grid if present */}
                    {selectedProject.features && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          <span>Main Features</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {selectedProject.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#12192B]/70 border border-white/[0.06] text-xs text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                        Technical Highlights & Integration:
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-2.5">
                        Technology Badges:
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
                )}

                {/* Active Tab: Security & Reliability */}
                {selectedProject.security && modalTab === 'security' && (
                  <div className="space-y-8">
                    {/* Security Measures */}
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
                          Security Measures Implemented
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.security.map((sec, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-[#12192B]/80 border border-white/[0.06] space-y-1">
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              {sec.title}
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed">{sec.desc}</p>
                          </div>
                        ))}
                      </div>
                      {selectedProject.securityNote && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-2.5">
                          <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <p className="text-[11px] leading-relaxed text-zinc-300">
                            <strong className="text-amber-300">Practical Defense Scope:</strong> {selectedProject.securityNote}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Performance & Reliability */}
                    <div className="space-y-3.5 pt-4 border-t border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                          Performance & Reliability Engineering
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.reliability.map((rel, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-[#12192B]/80 border border-white/[0.06] space-y-1">
                            <div className="text-xs font-bold text-zinc-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {rel.title}
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed">{rel.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Active Tab: Engineering Challenges */}
                {selectedProject.challenges && modalTab === 'challenges' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
                        Engineering Challenges & Solutions
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {selectedProject.challenges.map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-[#12192B]/80 border border-white/[0.08] space-y-3">
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-zinc-300">
                              #{i + 1}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                            <div className="p-3 rounded-xl bg-rose-500/[0.06] border border-rose-500/20 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase text-rose-400 block">Problem</span>
                              <p className="text-zinc-300 text-[11px] leading-relaxed">{item.problem}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/20 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 block">Solution</span>
                              <p className="text-zinc-300 text-[11px] leading-relaxed">{item.solution}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block">Benefit</span>
                              <p className="text-zinc-300 text-[11px] leading-relaxed">{item.benefit}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Active Tab: Validation & Testing */}
                {selectedProject.validation && modalTab === 'validation' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      <h4 className="text-xs font-mono uppercase text-indigo-400 font-bold tracking-wider">
                        Validation, Testing & Deployment Status
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.validation.map((v, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-[#12192B]/80 border border-white/[0.06] space-y-1">
                          <div className="text-xs font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {v.title}
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-relaxed">{v.desc}</p>
                        </div>
                      ))}
                    </div>
                    {selectedProject.validationNotice && (
                      <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200/90 flex items-start gap-2.5">
                        <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-indigo-300 block mb-0.5 font-mono uppercase tracking-wider text-[11px]">
                            Validation Assessment
                          </span>
                          <p className="text-zinc-300 leading-relaxed text-[11px]">
                            {selectedProject.validationNotice}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Modal Footer Links */}
                <div className="pt-4 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {selectedProject.playStoreTag ? (
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-4 h-4" />
                        <span>{selectedProject.playStoreTag}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-zinc-400">
                        Production Full-Stack Application
                      </span>
                    )}
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository on GitHub</span>
                    </a>
                  )}
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
