import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Award, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Send, 
  Sparkles, ExternalLink, Calendar, Building2, User, FileText 
} from 'lucide-react';

export default function RightColumn() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const experiences = [
    {
      company: 'JT Brothers',
      role: 'Junior Full Stack Developer',
      period: 'Jan 2026 - Present',
      bullets: [
        'Built scalable client web applications using React, Redux & TailwindCSS.',
        'Integrated RESTful APIs and third-party payment services.',
        'Developed reusable components improving code reusability.'
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS']
    },
    {
      company: 'Agumentik Group of Companies',
      role: 'Full Stack Engineer',
      period: 'Jul 2025 - Dec 2025',
      bullets: [
        'Implemented secure authentication and role-based access.',
        'Built and maintained RESTful APIs with Node.js & Express.',
        'Optimized database queries and improved application performance.'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs']
    },
    {
      company: 'Newton School',
      role: 'Frontend Intern',
      period: 'Sep 2024 - Aug 2025',
      bullets: [
        'Developed responsive UI components with React.js.',
        'Collaborated with design teams to implement pixel-perfect UIs.',
        'Gained hands-on experience in frontend best practices.'
      ],
      tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
    }
  ];

  const achievements = [
    { title: '5 Star HackerRank Problem Solver', icon: '🏆' },
    { title: '100 Days Coding Challenge Completed', icon: '💯' },
    { title: 'Top 10% In Coding Competitions', icon: '⚡' },
    { title: '500+ Problems Solved on LeetCode', icon: '🎯' },
  ];

  const certifications = [
    { title: 'Meta Front-End Developer', provider: 'Coursera' },
    { title: 'MongoDB Developer', provider: 'MongoDB University' },
    { title: 'React Developer', provider: 'freeCodeCamp' },
    { title: 'AWS Cloud Practitioner', provider: 'Amazon Web Services' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-6">
      
      {/* 1. WORK EXPERIENCE VERTICAL TIMELINE */}
      <div id="experience" className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span>Work Experience</span>
          </h3>
          <a href="#" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300">
            View All
          </a>
        </div>

        <div className="relative border-l-2 border-[#1e2756] ml-3 pl-5 space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Bullet Dot */}
              <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-2 border-[#0b0f24]"></span>

              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">{exp.company}</h4>
                <span className="text-[10px] text-slate-500 font-mono">{exp.period}</span>
              </div>
              <p className="text-[11px] font-semibold text-indigo-300 mb-2">{exp.role}</p>

              <ul className="space-y-1 mb-3">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1">
                {exp.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#131b42] text-[9px] font-mono text-indigo-300 border border-[#222e64]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ACHIEVEMENTS & CERTIFICATIONS SPLIT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Achievements */}
        <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white">Achievements</h4>
            <span className="text-[10px] font-mono text-indigo-400">View All</span>
          </div>

          <div className="space-y-2">
            {achievements.map((item, i) => (
              <div key={i} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span className="text-[11px] font-semibold text-slate-300 leading-tight">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white">Certifications</h4>
            <span className="text-[10px] font-mono text-indigo-400">View All</span>
          </div>

          <div className="space-y-2">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-[#070a18] border border-[#141b3d] rounded-xl p-2.5">
                <span className="text-[11px] font-bold text-white block leading-tight">{cert.title}</span>
                <span className="text-[9px] text-slate-500 font-mono block mt-0.5">{cert.provider}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. "LET'S WORK TOGETHER" CONTACT CARD WITH 3D WORKSPACE */}
      <div id="contact" className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white">Let's Work <span className="text-indigo-400">Together</span></h3>
          <p className="text-[11px] text-slate-400">I'm currently open to new opportunities. Let's connect!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          
          {/* Direct Info */}
          <div className="md:col-span-5 space-y-3 text-xs">
            <div className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">Email</span>
              <a href="mailto:jhasatya7323@gmail.com" className="font-semibold text-white hover:text-indigo-400 transition-colors block truncate">
                jhasatya7323@gmail.com
              </a>
            </div>

            <div className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">Phone</span>
              <a href="tel:+917323000894" className="font-semibold text-white hover:text-indigo-400 transition-colors block">
                +91-7323000894
              </a>
            </div>

            <div className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">Location</span>
              <span className="font-semibold text-white block">India</span>
            </div>

            <div className="bg-[#070a18] border border-[#141b3d] rounded-xl p-3 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">Availability</span>
              <span className="font-semibold text-emerald-400 block">Open to Work</span>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-1">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-xs font-bold text-white">Message Sent!</h4>
                <p className="text-[10px] text-slate-300">I will reply to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#070a18] border border-[#141b3d] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#070a18] border border-[#141b3d] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#070a18] border border-[#141b3d] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />

                <textarea
                  rows="3"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#070a18] border border-[#141b3d] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message 🚀</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
