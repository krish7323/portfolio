import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Layers, GraduationCap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      label: 'Professional Experience',
      value: '6+ Months',
      subtext: 'Junior Full Stack Developer at JT Brothers',
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      label: 'LeetCode Problems Solved',
      value: '500+',
      subtext: 'Strong DSA & Algorithmic Problem Solving',
      icon: Code,
      color: 'from-cyan-400 to-blue-600',
    },
    {
      label: 'Production Applications',
      value: '3+ Full-Stack',
      subtext: 'Viz Travels, OTT Streaming, HR Management',
      icon: Layers,
      color: 'from-emerald-400 to-teal-600',
    },
    {
      label: 'Degree & Background',
      value: 'MCA Graduate',
      subtext: 'Chandigarh University (2023 - 2025)',
      icon: GraduationCap,
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 15px 30px -10px rgba(79, 70, 229, 0.25)' }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
