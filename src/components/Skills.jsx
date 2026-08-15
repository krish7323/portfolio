import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Server, Database, Smartphone, Wrench, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillBars = [
    { name: 'React.js & Frontend Development', level: 92, color: 'from-indigo-500 to-cyan-400' },
    { name: 'Node.js & Express.js REST APIs', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'MongoDB Schema & Query Optimization', level: 88, color: 'from-emerald-400 to-teal-500' },
    { name: 'React Native Cross-Platform Apps', level: 82, color: 'from-purple-500 to-pink-500' },
    { name: 'Data Structures & Algorithms (LeetCode 500+)', level: 94, color: 'from-amber-400 to-orange-500' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-indigo-400',
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Reusable Components', 'Responsive Design']
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      color: 'text-cyan-400',
      skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Service-Controller-Route Pattern', 'Middleware Architecture']
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      color: 'text-emerald-400',
      skills: ['MongoDB (NoSQL)', 'SQL', 'MySQL', 'Database Indexing', 'Mongoose ODM']
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      color: 'text-purple-400',
      skills: ['React Native', 'Cross-Platform Mobile Apps', 'Mobile Component State']
    },
    {
      title: 'Security & Integrations',
      icon: ShieldCheck,
      color: 'text-amber-400',
      skills: ['Razorpay Payment Gateway', 'OTP Authentication', 'Role-Based Access Control (RBAC)', 'JWT Authorization']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'text-rose-400',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'npm / npx']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive overview of tools, programming languages, and frameworks I use to build production systems.
          </p>
        </motion.div>

        {/* Animated Progress Bars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-16 space-y-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Core Proficiency Metrics</h3>

          <div className="space-y-5">
            {skillBars.map((bar, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-200">{bar.name}</span>
                  <span className="text-indigo-400 font-mono">{bar.level}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.15, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <IconComponent className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-medium border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LeetCode & DSA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              Data Structures & Algorithms Proficiency
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Solved <strong className="text-cyan-400">500+ problems on LeetCode</strong> covering Data Structures, Algorithms, Arrays, Trees, Dynamic Programming, and Graph algorithms.
            </p>
          </div>
          <motion.a
            href="https://github.com/krish7323"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30 whitespace-nowrap"
          >
            Check GitHub Code
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
