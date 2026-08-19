import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ArrowRight, Download, Copy, Check, Terminal, 
  Layers, Cpu, Globe, Code, Server, Smartphone 
} from 'lucide-react';
import TiltCard from '../TiltCard';

const roles = [
  {
    id: 'fullstack',
    title: 'Full Stack MERN Developer',
    subtitle: 'End-to-End Scalable Systems & React Architectures',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    icon: Globe
  },
  {
    id: 'mobile',
    title: 'React Native Mobile Developer',
    subtitle: 'Cross-Platform Android & iOS Applications with Expo EAS',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    icon: Smartphone
  },
  {
    id: 'backend',
    title: 'Backend & REST API Architect',
    subtitle: 'Node.js, Express.js, MongoDB & Payment Pipelines',
    gradient: 'from-indigo-400 via-purple-300 to-pink-400',
    badge: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    icon: Server
  },
  {
    id: 'frontend',
    title: 'Frontend UI/UX Specialist',
    subtitle: 'Tailwind CSS, Fluid Animations & Reusable Components',
    gradient: 'from-amber-400 via-rose-300 to-pink-400',
    badge: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    icon: Code
  }
];

const floatingTech = [
  { label: 'React.js', icon: '⚛️', pos: '-top-3 -left-4', delay: 0 },
  { label: 'Node.js', icon: '🟢', pos: 'top-10 -right-6', delay: 1 },
  { label: 'MongoDB', icon: '🍃', pos: '-bottom-3 -left-3', delay: 2 },
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
  roles: ["Full Stack Web", "React Native Mobile", "RESTful APIs"],
  company: "Viz Digital",
  stack: {
    frontend: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "MVC Pattern"],
    database: ["MongoDB", "Mongoose ODM", "SQL", "MySQL"],
    mobile: ["React Native", "Expo EAS"],
    integrations: ["Razorpay Gateway", "RBAC Auth", "JWT", "OTP Verification"]
  },
  isAvailableForHire: true
};

export async function createSolution(spec) {
  const system = await developer.architect(spec);
  return system.deploy();
}`,
    json: `{
  "developer": "Krishna Chandra Jha",
  "education": "Master of Computer Applications (MCA), Chandigarh University",
  "currentRole": "Web Developer @ Viz Digital",
  "specializations": {
    "fullstack": "Production MERN Stack Apps & Admin Panels",
    "mobile": "React Native Cross-Platform Apps",
    "backend": "High-Throughput Node.js / Express REST APIs",
    "security": "Razorpay Payment Gateways & Role-Based Access Control"
  }
}`,
    arch: `// Production Architecture Pattern at Viz Digital
1. Client Layer   -> React.js & React Native (Modular Component State)
2. API Gateway    -> Node.js / Express.js (Service-Controller-Route Architecture)
3. Auth & RBAC    -> JWT & Multi-Factor OTP Verification
4. Payment Engine -> Razorpay Webhook & Signature Verification
5. Data Tier      -> MongoDB Schema Indexing & Aggregations`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="w-full pt-8 pb-16 lg:pt-14 lg:pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid: Left Typography + Right 3D Avatar with Orbiting Tech Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Rich Typography & Role Switcher */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start text-left space-y-6 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pulsating Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D1322] border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full Stack & Mobile Roles</span>
            </div>

            {/* Headline with Glowing Gradient */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent glow-emerald">
                  Krishna Chandra Jha
                </span>
              </h1>
              
              {/* Dynamic Cycling Role with Spring Animation */}
              <div className="h-16 sm:h-14 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5"
                  >
                    <span className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${currentRole.gradient} bg-clip-text text-transparent`}>
                      {currentRole.title}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${currentRole.badge}`}>
                      {currentRole.subtitle.split('&')[0].trim()}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              I build resilient end-to-end web & mobile applications using the <strong className="text-emerald-400 font-semibold">MERN stack</strong> and <strong className="text-cyan-400 font-semibold">React Native</strong>. Currently engineering client platforms and panel modules as Web Developer at <strong className="text-white font-semibold">Viz Digital</strong>.
            </p>

            {/* High-Energy Gradient CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a 
                href="#projects" 
                data-cursor="Projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-black text-sm font-extrabold tracking-tight shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">See What I Build</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Resume"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#0E1526] border border-white/[0.12] hover:border-emerald-500/50 text-white hover:bg-[#151F36] text-sm font-bold tracking-tight transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Minimalist Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="uppercase tracking-widest text-[11px] text-zinc-500">Connect:</span>
              <a 
                href="https://linkedin.com/in/krishna-chandra-jha-423909321" 
                target="_blank" 
                rel="noopener noreferrer"
                data-cursor="LinkedIn"
                className="p-2.5 rounded-xl bg-[#0E1526] border border-white/[0.08] text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-md"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/krish7323" 
                target="_blank" 
                rel="noopener noreferrer"
                data-cursor="GitHub"
                className="p-2.5 rounded-xl bg-[#0E1526] border border-white/[0.08] text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all shadow-md"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:jhasatya7323@gmail.com"
                data-cursor="Email"
                className="p-2.5 rounded-xl bg-[#0E1526] border border-white/[0.08] text-zinc-300 hover:text-teal-400 hover:border-teal-500/40 hover:scale-110 transition-all shadow-md"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: 3D Tilt Profile Picture with Multi-Glow Rings & Floating Tech Chips */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              
              {/* Orbiting Floating 3D Tech Chips */}
              {floatingTech.map((tech) => (
                <motion.div
                  key={tech.label}
                  className={`absolute z-30 ${tech.pos} hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0D1424]/90 border border-white/[0.15] text-[11px] font-mono font-bold text-white shadow-2xl backdrop-blur-xl pointer-events-none`}
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
                  {/* Multi-gradient radiant glow halo behind avatar */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-40 group-hover:opacity-80 blur-2xl transition-all duration-500" />

                  {/* Circular Avatar Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/[0.2] shadow-2xl bg-zinc-900">
                    <img 
                      src="/avatar.jpg" 
                      alt="Krishna Chandra Jha" 
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/krishna_photo.jpg'; }}
                    />
                    
                    {/* Subtle internal gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Floating interactive badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0D1424]/95 border border-white/[0.15] rounded-full px-4 py-1.5 shadow-2xl backdrop-blur-xl whitespace-nowrap">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
                    <span className="text-[11px] text-zinc-200 font-bold uppercase tracking-wider">Full Stack & Mobile Dev</span>
                  </div>
                </div>
              </TiltCard>

            </div>
          </motion.div>

        </div>

        {/* Minimalist Terminal / Technical Spec Drawer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <TiltCard maxTilt={4} scale={1.01} className="w-full">
            <div className="w-full bg-[#0A0E1A]/95 border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 backdrop-blur-2xl">
              
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
                    { id: 'json', label: 'Architecture_Spec.json', icon: Cpu },
                    { id: 'arch', label: 'System_Design.md', icon: Layers },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          activeTab === tab.id
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                            : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
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
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#12192B] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all self-end sm:self-auto shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
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
