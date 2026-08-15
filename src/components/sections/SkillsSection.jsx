import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Server, Database, Smartphone, ShieldCheck, Wrench, Trophy, 
  GraduationCap, Search, CheckCircle, Code2, Sparkles 
} from 'lucide-react';
import TiltCard from '../TiltCard';

const skills = [
  {
    category: 'Frontend & UI',
    icon: Layout,
    color: 'text-emerald-400',
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Reusable Components']
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    color: 'text-cyan-400',
    items: ['Node.js', 'Express.js', 'REST API Development', 'Middleware', 'Service-Controller Pattern']
  },
  {
    category: 'Databases & Storage',
    icon: Database,
    color: 'text-teal-400',
    items: ['MongoDB (NoSQL)', 'SQL', 'MySQL', 'Mongoose ODM', 'Query Indexing']
  },
  {
    category: 'Mobile App Development',
    icon: Smartphone,
    color: 'text-indigo-400',
    items: ['React Native', 'Cross-Platform Mobile Apps', 'Mobile State Management']
  },
  {
    category: 'Integrations & Security',
    icon: ShieldCheck,
    color: 'text-amber-400',
    items: ['Razorpay Payment Gateway', 'OTP Authentication', 'RBAC Permissions', 'JWT Authorization']
  },
  {
    category: 'Tools & Languages',
    icon: Wrench,
    color: 'text-rose-400',
    items: ['Git', 'GitHub', 'VS Code', 'C++', 'Python (Basic)', 'Postman', 'Vite']
  }
];

const achievements = [
  { text: 'Engineered responsive Admin & Vendor Panels with Role-Based Access Control', icon: '⚡' },
  { text: 'Built and uploaded multiple full stack production web applications on GitHub', icon: '🚀' },
  { text: '6+ months professional experience as Junior Full Stack Developer at JT Brothers', icon: '💻' },
  { text: 'Integrated Razorpay payment gateway with secure order creation & signature verification', icon: '🔧' }
];

const education = [
  { 
    degree: 'Master of Computer Applications (MCA)', 
    institution: 'Chandigarh University, Mohali', 
    period: '2023 – 2025',
    grade: 'First Division'
  },
  { 
    degree: 'B.Sc. (Hons) Mathematics', 
    institution: 'J.N. College, Darbhanga', 
    period: '2019 – 2023',
    grade: 'Honours'
  }
];

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.map(group => ({
    ...group,
    items: group.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block mb-2">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technical Stack
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Verified technical proficiencies and hands-on production technologies.
            </p>
          </div>

          {/* Interactive Skill Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technical skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0d0f17] border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <TiltCard maxTilt={6} scale={1.02} className="h-full">
                  <div className="bg-[#0d0f17] border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl p-6 h-full transition-colors shadow-xl group">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2.5 bg-zinc-900 rounded-xl ${group.color} border border-zinc-800 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements & Education Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Achievements */}
          <TiltCard maxTilt={4} scale={1.01}>
            <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 h-full space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Key Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* Education */}
          <TiltCard maxTilt={4} scale={1.01}>
            <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 h-full space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Education History</h3>
              </div>

              <div className="space-y-4">
                {education.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 space-y-1.5">
                    <span className="text-sm font-bold text-white block">{item.degree}</span>
                    <span className="text-xs text-emerald-400 font-medium block">{item.institution}</span>
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-1">
                      <span>{item.period}</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">{item.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
