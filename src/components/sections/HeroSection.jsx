import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ArrowRight, Download, Copy, Check, Terminal, 
  Sparkles, Layers, Cpu, ShieldCheck, Code, Server, Smartphone, Globe, Activity 
} from 'lucide-react';
import TiltCard from '../TiltCard';
import LiveApiPlayground from '../LiveApiPlayground';

const roles = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    subtitle: 'MERN Stack & End-to-End Scalable Systems',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    icon: Globe,
  },
  {
    id: 'frontend',
    title: 'Frontend Developer',
    subtitle: 'React.js, Tailwind CSS & Fluid Responsive UI',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    icon: Code,
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    subtitle: 'Node.js, Express.js, MongoDB & RESTful APIs',
    gradient: 'from-purple-400 via-indigo-300 to-blue-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    icon: Server,
  },
  {
    id: 'mobile',
    title: 'Mobile App Developer',
    subtitle: 'React Native & Cross-Platform Mobile Applications',
    gradient: 'from-amber-400 via-orange-300 to-rose-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    icon: Smartphone,
  }
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('api'); // 'api' | 'code' | 'json' | 'arch'
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Auto-cycle through roles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];

  const codeSnippets = {
    code: `const developer = {
  name: "Krishna Chandra Jha",
  roles: ["Full Stack", "Frontend", "Backend", "Mobile App"],
  company: "JT Brothers",
  stack: {
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "REST APIs", "Middleware"],
    database: ["MongoDB", "SQL", "MySQL"],
    mobile: ["React Native", "Expo EAS"],
    security: ["Razorpay Integration", "RBAC", "JWT", "OTP Auth"]
  },
  isHirable: true
};

export async function buildProduct(spec) {
  const application = await developer.architect(spec);
  return application.deploy();
}`,
    json: `{
  "developer": "Krishna Chandra Jha",
  "specializations": {
    "frontend": "React.js, Tailwind CSS, Responsive Web Design",
    "backend": "Node.js, Express.js, REST API Architecture, MongoDB",
    "fullstack": "End-to-End MERN Stack Applications & Admin Panels",
    "mobile": "React Native Cross-Platform Apps"
  },
  "currentRole": "Junior Full Stack Developer @ JT Brothers",
  "education": "MCA (Chandigarh University, 2023-2025)"
}`,
    arch: `// Production Architecture Pattern at JT Brothers
1. Frontend Layer -> React.js + Tailwind CSS + Responsive Modular State
2. Mobile Layer   -> React Native (Cross-Platform Mobile Apps)
3. API Gateway    -> Node.js / Express.js (Service-Controller-Route Pattern)
4. Auth & RBAC    -> JWT + OTP-Based Verification & Role Permissions
5. Payment Module -> Razorpay Webhook & Signature Verification
6. Storage        -> MongoDB Schemas with Query Indexing & Aggregations`
  };

  const handleCopy = () => {
    if (codeSnippets[activeTab]) {
      navigator.clipboard.writeText(codeSnippets[activeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="home" className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-20 bg-[#09090b] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Split: Intro Details + 3D Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span>Available for Full Stack, Frontend & Backend Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Krishna Chandra Jha
                </span>
              </h1>
              
              {/* Dynamic Animated Changing Role */}
              <div className="h-16 sm:h-14 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center gap-2.5"
                  >
                    <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${currentRole.gradient} bg-clip-text text-transparent`}>
                      {currentRole.title}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${currentRole.badgeBg}`}>
                      {currentRole.subtitle.split('&')[0].trim()}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I engineer end-to-end full-stack web and mobile applications using the <strong className="text-zinc-200">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and <strong className="text-zinc-200">React Native</strong>. Currently contributing at <strong className="text-emerald-400 font-semibold">JT Brothers</strong>.
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a 
                href="#projects" 
                data-cursor="Projects"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl px-7 py-3.5 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Resume"
                className="w-full sm:w-auto border border-zinc-700 hover:border-emerald-500/50 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 font-semibold rounded-xl px-7 py-3.5 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-2">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono block mb-3">Connect With Me</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/krishna-chandra-jha-423909321', label: 'LinkedIn', color: 'hover:text-cyan-400' },
                  { icon: Github, href: 'https://github.com/krish7323', label: 'GitHub', color: 'hover:text-emerald-400' },
                  { icon: Mail, href: 'mailto:jhasatya7323@gmail.com', label: 'Email', color: 'hover:text-teal-400' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor={item.label}
                      className={`p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 ${item.color} hover:border-zinc-700 hover:scale-110 transition-all shadow-md`}
                      aria-label={item.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 3D Tilt Avatar Presentation */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <TiltCard maxTilt={12} scale={1.03} className="p-3">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-zinc-700/80 shadow-2xl bg-zinc-900">
                  <img 
                    src="/avatar.jpg" 
                    alt="Krishna Chandra Jha" 
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Floating interactive badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900/95 border border-zinc-700/80 rounded-full px-4 py-1.5 shadow-xl backdrop-blur-md whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span className="text-[11px] text-zinc-200 font-bold uppercase tracking-wider">Junior Full Stack Developer</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* Ultra Pro Interactive Developer Console & API Playground */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-4"
        >
          {/* View Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0d101d] border border-zinc-800/80 p-2 rounded-2xl">
            <div className="flex items-center gap-2 overflow-x-auto">
              {[
                { id: 'api', label: '⚡ Interactive API Runner', icon: Activity },
                { id: 'code', label: 'Developer.js', icon: Terminal },
                { id: 'json', label: 'Roles_Spec.json', icon: Cpu },
                { id: 'arch', label: 'JTBrothers_Architecture.md', icon: Layers },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      isSelected
                        ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {activeTab !== 'api' && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all self-end sm:self-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Active View Container */}
          {activeTab === 'api' ? (
            <LiveApiPlayground />
          ) : (
            <TiltCard maxTilt={3} scale={1.01} className="w-full">
              <div className="w-full bg-[#0d101d] border border-zinc-700/70 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {activeTab === 'code' ? 'JavaScript ES6+' : activeTab === 'json' ? 'JSON Data Structure' : 'System Design Markdown'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-zinc-300 p-2 overflow-x-auto leading-relaxed selection:bg-emerald-500/30 selection:text-white max-h-72">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </TiltCard>
          )}

        </motion.div>

      </div>
    </section>
  );
}
