import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, Linkedin, Github, Mail, Twitter, Code, Sparkles, 
  ShieldCheck, Zap, Smartphone, CheckCircle, Award, Star, ChevronLeft, ChevronRight, Terminal 
} from 'lucide-react';

export default function LeftColumn() {
  const [codeTab, setCodeTab] = useState('Code');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Verma',
      title: 'CTO, JT Brothers',
      quote: 'Krishna is a highly skilled developer with excellent problem-solving abilities and great communication.',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      title: 'Senior Developer, Agumentik',
      quote: 'He delivers clean, efficient code and is always eager to learn and master new technologies.',
      rating: 5,
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. HERO HEADER CARD & PROFILE AVATAR SPLIT */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12193e] border border-[#232f6a] text-[#818cf8] text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
              <span>Available for Full Stack & MERN Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-[#60a5fa] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
                  Krishna Chandra Jha
                </span>
              </h1>
              <p className="text-sm font-semibold text-slate-300 mt-1">
                Junior Full Stack Developer & MERN Specialist
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              I build scalable full-stack web applications using the MERN stack with a strong focus on performance, clean code, and great user experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <span>View My Work</span>
              </a>

              <a
                href="file:///c:/Users/jhasa/OneDrive/Desktop/New%20folder/ATS_Resume_Krishna_Chandra_Jha.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#111736] hover:bg-[#19224f] border border-[#222e64] text-slate-200 text-xs font-semibold flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 font-mono block mb-2">Connect with me</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/krishna-chandra-jha-423909321' },
                  { icon: Github, href: 'https://github.com/krish7323' },
                  { icon: Mail, href: 'mailto:jhasatya7323@gmail.com' },
                  { icon: Twitter, href: 'https://twitter.com' },
                  { icon: Code, href: 'https://leetcode.com' },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#111736] hover:bg-[#1e2758] border border-[#1e2756] text-slate-300 hover:text-white transition-colors"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Profile Portrait Card */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-48 h-56 rounded-2xl bg-gradient-to-b from-[#1c2452] to-[#0c1026] p-2 border border-[#283577] flex flex-col items-center justify-between shadow-2xl">
              
              {/* Profile Image Representation */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-tr from-indigo-950 via-slate-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#0d122b] flex items-center justify-center text-white font-extrabold text-2xl">
                    KC
                  </div>
                </div>
                
                {/* Floating Tech Badges */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-indigo-950/90 text-[10px] text-cyan-300 border border-cyan-500/30 font-mono">React</div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-purple-950/90 text-[10px] text-purple-300 border border-purple-500/30 font-mono">Node.js</div>
              </div>

              {/* Status footer */}
              <div className="w-full py-1.5 px-3 rounded-lg bg-[#0d122b] border border-[#1b234f] flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[10px] font-semibold text-slate-200">Available for opportunities</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 2. TABBED CODE EDITOR WIDGET */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 shadow-xl">
        
        {/* Editor Tabs Header */}
        <div className="flex items-center justify-between border-b border-[#182046] pb-3 mb-4">
          <div className="flex items-center gap-2">
            {['About Me', 'Code', 'Tech Stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setCodeTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  codeTab === tab
                    ? 'bg-[#18214d] text-indigo-300 border border-[#2b3980]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        {/* Code Content */}
        {codeTab === 'Code' && (
          <pre className="font-mono text-xs text-slate-300 space-y-1 bg-[#070a18] p-4 rounded-xl border border-[#141b3d] overflow-x-auto">
            <code>
              <span className="text-indigo-400">const</span> developer = &#123;<br/>
              &nbsp;&nbsp;name: <span className="text-emerald-400">"Krishna Chandra Jha"</span>,<br/>
              &nbsp;&nbsp;role: <span className="text-emerald-400">"Full Stack Developer"</span>,<br/>
              &nbsp;&nbsp;stack: [<span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"Express.js"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>],<br/>
              &nbsp;&nbsp;passion: <span className="text-emerald-400">"Building scalable solutions"</span>,<br/>
              &nbsp;&nbsp;challenge: <span className="text-emerald-400">"Solving real-world problems"</span>,<br/>
              &nbsp;&nbsp;learning: <span className="text-emerald-400">"System Architecture"</span><br/>
              &#125;;<br/><br/>
              <span className="text-indigo-400">function</span> <span className="text-cyan-400">BuildAmazingThings</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-purple-400">while</span> (passion &amp;&amp; coffee) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;code();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;solve();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;impact();<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;
            </code>
          </pre>
        )}

        {codeTab === 'About Me' && (
          <div className="text-xs text-slate-300 leading-relaxed p-4 bg-[#070a18] rounded-xl border border-[#141b3d]">
            MCA Graduate from Chandigarh University with 6+ months experience at JT Brothers. Skilled in building MERN stack applications, REST APIs, Razorpay payment integrations, and React Native mobile apps. 500+ LeetCode DSA problems solved.
          </div>
        )}

        {codeTab === 'Tech Stack' && (
          <div className="flex flex-wrap gap-2 p-4 bg-[#070a18] rounded-xl border border-[#141b3d]">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'React Native', 'TailwindCSS'].map(t => (
              <span key={t} className="px-2.5 py-1 rounded bg-[#131b42] text-indigo-300 text-xs font-mono border border-[#232f6a]">
                {t}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* 3. FIVE FEATURE CARDS ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { title: 'Clean Code', desc: 'Writing maintainable code', icon: Code, color: 'text-indigo-400' },
          { title: 'Performance', desc: 'Optimized for speed', icon: Zap, color: 'text-emerald-400' },
          { title: 'Responsive', desc: 'Mobile-first design', icon: Smartphone, color: 'text-cyan-400' },
          { title: 'Security', desc: 'Secure auth & data', icon: ShieldCheck, color: 'text-purple-400' },
          { title: 'Best Practices', desc: 'Modern standards', icon: CheckCircle, color: 'text-amber-400' },
        ].map((f, i) => {
          const IconComponent = f.icon;
          return (
            <div key={i} className="bg-[#0b0f24] border border-[#171f46] rounded-xl p-3 text-center space-y-1.5 hover:border-indigo-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#111736] flex items-center justify-center mx-auto">
                <IconComponent className={`w-4 h-4 ${f.color}`} />
              </div>
              <h4 className="text-xs font-bold text-white">{f.title}</h4>
              <p className="text-[10px] text-slate-400 leading-tight">{f.desc}</p>
            </div>
          );
        })}
      </div>

      {/* 4. WHAT I DO GRID */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>What I Do</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Full Stack Development',
              desc: 'End-to-end web applications using MERN stack and modern technologies.',
            },
            {
              title: 'Frontend Development',
              desc: 'Building interactive and responsive UIs with React, Next.js & TailwindCSS.',
            },
            {
              title: 'Backend Development',
              desc: 'Developing scalable REST APIs with Node.js, Express, and microservices.',
            },
            {
              title: 'Database & DevOps',
              desc: 'Designing databases and deploying with modern cloud & container tools.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0b0f24] border border-[#171f46] rounded-xl p-4 space-y-2 hover:border-indigo-500/40 transition-colors">
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              <a href="#projects" className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300">
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 5. WHAT PEOPLE SAY (TESTIMONIALS CAROUSEL) */}
      <div className="bg-[#0b0f24] border border-[#171f46] rounded-2xl p-5 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">What People Say</h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-1 rounded bg-[#131b40] text-slate-300 hover:text-white"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-1 rounded bg-[#131b40] text-slate-300 hover:text-white"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#070a18] border border-[#141b3d] space-y-2">
          <p className="text-xs text-slate-300 italic">"{testimonials[testimonialIdx].quote}"</p>
          <div className="flex items-center justify-between pt-2 border-t border-[#141b3d]">
            <div>
              <span className="text-xs font-bold text-white block">{testimonials[testimonialIdx].name}</span>
              <span className="text-[10px] text-slate-400">{testimonials[testimonialIdx].title}</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
