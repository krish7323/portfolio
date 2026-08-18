import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ArrowRight, Download, Copy, Check, Terminal, 
  Sparkles, Layers, Cpu, ShieldCheck, Code, Server, Smartphone, Globe, ArrowUpRight 
} from 'lucide-react';
import TiltCard from '../TiltCard';

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

const floatingTech = [
  { label: 'React.js', icon: '⚛️', pos: '-top-3 -left-4', delay: 0 },
  { label: 'Node.js', icon: '🟢', pos: 'top-10 -right-6', delay: 1 },
  { label: 'MongoDB', icon: '🍃', pos: '-bottom-2 -left-3', delay: 2 },
  { label: 'React Native', icon: '📱', pos: 'bottom-8 -right-6', delay: 1.5 },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('code');
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
  roles: ["Frontend", "Backend", "Full Stack", "Mobile"],
  company: "Viz Digital",
  stack: {
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "REST APIs", "Middleware"],
    database: ["MongoDB", "SQL", "MySQL"],
    mobile: ["React Native", "Expo EAS"],
    security: ["Razorpay", "RBAC", "JWT", "OTP Auth"]
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
  "currentRole": "Web Developer @ Viz Digital",
  "education": "MCA (Chandigarh University, 2023-2025)"
}`,
    arch: `// Production Architecture Pattern at Viz Digital
1. Frontend Layer -> React.js + Tailwind CSS + Responsive Modular State
2. Mobile Layer   -> React Native (Cross-Platform Mobile Apps)
3. API Gateway    -> Node.js / Express.js (Service-Controller-Route Pattern)
4. Auth & RBAC    -> JWT + OTP-Based Verification & Role Permissions
5. Payment Module -> Razorpay Webhook & Signature Verification
6. Storage        -> MongoDB Schemas with Query Indexing & Aggregations`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="w-full py-12 lg:py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Split: Intro Details + 3D Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d121d] border border-white/[0.08] text-zinc-300 text-xs font-mono shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full Stack, Frontend & Backend Roles</span>
            </div>

            {/* Headline with Ambient Lighting */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent glow-text-emerald">
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
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              I engineer end-to-end full-stack web and mobile applications using the <strong className="text-zinc-200">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and <strong className="text-zinc-200">React Native</strong>. Currently contributing as Web Developer at <strong className="text-emerald-400 font-semibold">Viz Digital</strong>.
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a 
                href="#projects" 
                data-cursor="Projects"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold rounded-xl px-8 py-4 transition-all hover:scale-105 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Resume"
                className="w-full sm:w-auto border border-white/[0.1] hover:border-emerald-500/50 bg-[#0d121d]/80 hover:bg-[#141b2b] text-zinc-200 font-semibold rounded-xl px-8 py-4 transition-all text-sm flex items-center justify-center gap-2.5 backdrop-blur-xl shadow-lg"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-2">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono block mb-3">Connect With Me</span>
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
                      className={`p-3 rounded-xl bg-[#0d121d] border border-white/[0.08] text-zinc-400 ${item.color} hover:border-emerald-500/40 hover:scale-110 transition-all shadow-md`}
                      aria-label={item.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 3D Tilt Avatar Presentation with Orbiting Floating Chips */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              
              {/* Orbiting Floating Chips */}
              {floatingTech.map((tech, idx) => (
                <motion.div
                  key={tech.label}
                  className={`absolute z-30 ${tech.pos} hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d121d]/90 border border-white/[0.12] text-[11px] font-mono font-bold text-zinc-200 shadow-xl backdrop-blur-xl pointer-events-none`}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tech.delay,
                  }}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.label}</span>
                </motion.div>
              ))}

              <TiltCard maxTilt={10} scale={1.03} className="p-3">
                <div className="relative group">
                  {/* Glow ring */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-30 group-hover:opacity-70 blur-2xl transition-all duration-500" />

                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/[0.15] shadow-2xl bg-zinc-900">
                    <img 
                      src="/avatar.jpg" 
                      alt="Krishna Chandra Jha" 
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Floating interactive badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0d121d]/95 border border-white/[0.15] rounded-full px-4 py-1.5 shadow-2xl backdrop-blur-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[11px] text-zinc-200 font-bold uppercase tracking-wider">Full Stack & Mobile Dev</span>
                  </div>
                </div>
              </TiltCard>

            </div>
          </motion.div>

        </div>

        {/* Interactive Live Code Sandbox / Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <TiltCard maxTilt={3} scale={1.01} className="w-full">
            <div className="w-full bg-[#0d121d]/90 border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 backdrop-blur-2xl">
              
              {/* Terminal Window Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                
                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto">
                  <div className="flex items-center gap-1.5 mr-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {[
                    { id: 'code', label: 'Developer.js', icon: Terminal },
                    { id: 'json', label: 'Roles_Spec.json', icon: Cpu },
                    { id: 'arch', label: 'VizDigital_Architecture.md', icon: Layers },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                        }`}
                      >
                        <TabIcon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141b2b] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all self-end sm:self-auto shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display */}
              <pre className="font-mono text-xs sm:text-sm text-zinc-300 p-3 overflow-x-auto leading-relaxed selection:bg-emerald-500/30 selection:text-white">
                <code>{codeSnippets[activeTab]}</code>
              </pre>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
