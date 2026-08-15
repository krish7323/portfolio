import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone, Award, Terminal } from 'lucide-react';

export default function Hero() {
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Parallax Background Orbs */}
      <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Full Stack & Frontend Roles</span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">Krishna Chandra Jha</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Junior Full Stack Developer & MERN Specialist
              </p>
            </motion.div>

            {/* Subtitle Bio */}
            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Experienced in building scalable full-stack web platforms and cross-platform mobile apps using 
              <span className="text-slate-200 font-semibold"> React.js, Node.js, Express.js, MongoDB, and React Native</span>. 
              Currently contributing at <span className="text-indigo-400 font-semibold">JT Brothers</span> across client portals, REST APIs, and RBAC admin panels.
            </motion.p>

            {/* Badges / Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>500+ LeetCode DSA Solved</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>MCA Graduate (2025)</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 25px -5px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-xl shadow-indigo-600/30 transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700/80 transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Connect:</span>
              {[
                { icon: Github, href: 'https://github.com/krish7323', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/krishna-chandra-jha-423909321', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jhasatya7323@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+917323000894', label: 'Phone' }
              ].map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <motion.a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                    title={s.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

          </div>

          {/* Right Column: Code Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl relative"
            >
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-xs font-mono text-slate-500">developer.config.js</span>
              </div>

              {/* Code Snippet Display */}
              <pre className="font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto">
                <code>
                  <span className="text-indigo-400">const</span> developer = &#123;<br/>
                  &nbsp;&nbsp;name: <span className="text-emerald-400">'Krishna Chandra Jha'</span>,<br/>
                  &nbsp;&nbsp;role: <span className="text-emerald-400">'Junior Full Stack Developer'</span>,<br/>
                  &nbsp;&nbsp;company: <span className="text-emerald-400">'JT Brothers'</span>,<br/>
                  &nbsp;&nbsp;stack: [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">'React.js'</span>, <span className="text-amber-300">'Node.js'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">'Express.js'</span>, <span className="text-amber-300">'MongoDB'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">'React Native'</span>, <span className="text-amber-300">'Tailwind CSS'</span><br/>
                  &nbsp;&nbsp;],<br/>
                  &nbsp;&nbsp;leetcodeSolved: <span className="text-cyan-400">500</span>,<br/>
                  &nbsp;&nbsp;education: <span className="text-emerald-400">'MCA (Chandigarh University)'</span>,<br/>
                  &nbsp;&nbsp;passion: <span className="text-emerald-400">'Building scalable web & app solutions'</span><br/>
                  &#125;;
                </code>
              </pre>

              {/* Feature Highlights Grid */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400 block font-mono">Core Focus</span>
                  <span className="text-white font-semibold">REST APIs & RBAC</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400 block font-mono">Payment Tech</span>
                  <span className="text-white font-semibold">Razorpay Integration</span>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
