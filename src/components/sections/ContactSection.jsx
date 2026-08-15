import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Copy, Check, Send, Sparkles } from 'lucide-react';
import TiltCard from '../TiltCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jhasatya7323@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-7323000894');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Start A Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm">
            Have a role opening or freelance project? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard maxTilt={5} scale={1.01}>
              <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 space-y-6 shadow-xl">
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 font-mono block">Direct Email</span>
                      <a href="mailto:jhasatya7323@gmail.com" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                        jhasatya7323@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 font-mono block">Phone Number</span>
                      <a href="tel:+917323000894" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        +91-7323000894
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-mono block">Current Location</span>
                    <span className="text-sm font-semibold text-white">India (Available for Remote / Relocation)</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href="https://github.com/krish7323"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GitHub"
                    className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/krishna-chandra-jha-423909321"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LinkedIn"
                    className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 sm:p-8 shadow-xl">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                      Thank you for reaching out, Krishna Chandra Jha has received your note and will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Scott Ownbey"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Email</label>
                        <input
                          type="email"
                          required
                          placeholder="scott@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="Junior Full Stack Role Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Hi Krishna, we would love to discuss a developer opportunity with you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      data-cursor="Send"
                      className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Direct Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
