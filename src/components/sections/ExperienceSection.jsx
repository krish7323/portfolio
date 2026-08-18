import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import TiltCard from '../TiltCard';

const experiences = [
  {
    id: 1,
    company: 'Viz Digital',
    role: 'Web Developer',
    period: 'March 2026 – Present (6+ Months)',
    location: 'Zirakpur, Punjab, India',
    summary: 'Full-stack web application development across client websites, frontend, backend, and panel modules using React.js, React Native, and the MERN stack.',
    bullets: [
      'Work across the full stack on client web projects, handling frontend, backend, and panel-based modules using React.js, Node.js, Express.js, and MongoDB',
      'Build and maintain responsive frontend pages and reusable React components based on project requirements',
      'Develop and integrate backend REST APIs to support frontend features and admin/vendor panel functionality',
      'Contribute to admin and vendor panel modules, enabling role-based management of users, listings, and content',
      'Collaborate with the team using Git/GitHub for version control and code reviews'
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind CSS', 'REST APIs', 'RBAC', 'Git/GitHub']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block mb-2">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Professional track record and contributions in production environments.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard maxTilt={4} scale={1.01}>
                <div className="bg-[#0d0f17] border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl p-7 sm:p-9 transition-colors shadow-2xl space-y-6">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      </div>
                      <span className="text-sm font-semibold text-emerald-400 block mt-1">
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5">
                    {exp.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800 hover:border-emerald-500/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
