import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Code2, ArrowRight, Download, Copy, Check, Terminal, 
  Sparkles, Layers, Cpu, ShieldCheck 
} from 'lucide-react';
import TiltCard from '../TiltCard';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    code: `const developer = {
  name: "Krishna Chandra Jha",
  role: "Junior Full Stack Developer",
  company: "JT Brothers",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  mobile: "React Native",
  dsaSolved: 500, // LeetCode
  isHirable: true
};

export async function solveProblem(challenge) {
  const cleanCode = await developer.architect(challenge);
  return cleanCode.deploy();
}`,
    json: `{
  "developer": "Krishna Chandra Jha",
  "experience": "6+ Months Professional",
  "currentRole": "Junior Full Stack Developer @ JT Brothers",
  "specialties": [
    "MERN Stack Development",
    "RESTful API Architecture",
    "Razorpay Payment Integration",
    "Role-Based Access Control (RBAC)",
    "React Native Mobile Apps"
  ],
  "education": "MCA (Chandigarh University, 2023-2025)"
}`,
    arch: `// Architecture Workflow at JT Brothers
1. Client UI -> React.js + Tailwind CSS (Responsive & Fluid)
2. API Layer -> Node.js / Express.js (Service-Controller Pattern)
3. Auth & RBAC -> JWT + OTP Authentication Modules
4. Payment Gateway -> Razorpay (Webhook & Signature Verification)
5. Database -> MongoDB Schemas with indexing for high throughput`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-20 bg-[#09090b] relative overflow-hidden">
      
      {/* Background glow spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

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
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span>Available for Full Stack & MERN Roles</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Krishna Chandra Jha
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-300 mt-3">
                Junior Full Stack Developer & MERN Specialist
              </p>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I build scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native. Currently contributing at <strong className="text-emerald-400 font-semibold">JT Brothers</strong>.
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
                  { icon: Code2, href: 'https://leetcode.com', label: 'LeetCode', color: 'hover:text-amber-400' },
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
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900/95 border border-zinc-700/80 rounded-full px-4 py-1.5 shadow-xl backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span className="text-[11px] text-zinc-200 font-bold uppercase tracking-wider">Junior Full Stack Dev</span>
                </div>
              </div>
            </TiltCard>
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
          <TiltCard maxTilt={4} scale={1.01} className="w-full">
            <div className="w-full bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
              
              {/* Terminal Window Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                
                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto">
                  <div className="flex items-center gap-1.5 mr-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {[
                    { id: 'code', label: 'Developer.js', icon: Terminal },
                    { id: 'json', label: 'Profile.json', icon: Cpu },
                    { id: 'arch', label: 'JTBrothers_Architecture.md', icon: Layers },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-zinc-800 text-emerald-400 border border-zinc-700 shadow-sm'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-all self-end sm:self-auto"
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
