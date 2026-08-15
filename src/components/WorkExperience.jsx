import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar, MapPin, Building2 } from 'lucide-react';

export default function WorkExperience() {
  const contributions = [
    {
      title: 'Full Stack Client Web Applications',
      description: 'Engineered frontend, backend, and panel-based modules across client web projects using React.js, Node.js, Express.js, and MongoDB.'
    },
    {
      title: 'Responsive Component Architecture',
      description: 'Built and maintained responsive frontend pages and reusable React component libraries styled with Tailwind CSS according to design specifications.'
    },
    {
      title: 'RESTful API Engineering & Integration',
      description: 'Developed scalable REST APIs for frontend features, mobile applications, and admin/vendor panel functionalities with structured service-controller-route pattern.'
    },
    {
      title: 'Admin & Vendor Management Panels (RBAC)',
      description: 'Contributed core modules for role-based access control (RBAC), enabling secure management of users, listings, permissions, and internal content.'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Integrated Razorpay payment processing into web applications with order creation, signature verification, and automated transaction handling.'
    },
    {
      title: 'Git Version Control & Agile Collaboration',
      description: 'Collaborated daily with cross-functional team members using Git/GitHub workflows, code reviews, and structured sprint tasks.'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text">Company Contributions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of my contributions as a Junior Full Stack Developer at JT Brothers.
          </p>
        </motion.div>

        {/* Experience Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 relative"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Building2 className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">JT Brothers</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">Current Role</span>
              </div>
              <p className="text-lg font-medium text-slate-300">Junior Full Stack Developer</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Jan 2026 – Present (6+ Months)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Grid of Key Contributions */}
          <h4 className="text-base font-semibold text-slate-200 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>Key Contributions & Technical Accomplishments:</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-colors space-y-2"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-mono block mb-3">STACK USED AT JT BROTHERS:</span>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Razorpay', 'Tailwind CSS', 'Git/GitHub', 'Role-Based Access Control'].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-mono cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
