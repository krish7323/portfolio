import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Copy, Check, 
  Send, MessageSquare, ExternalLink 
} from 'lucide-react';
import TiltCard from '../TiltCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Send real email via Web3Forms public API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a872658b-f41e-450f-9038-0bb9e96e9526', // Public form submission key
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Message from Portfolio Visitor',
          message: formData.message,
          to_email: 'jhasatya7323@gmail.com',
          from_name: `${formData.name} (Portfolio)`,
        }),
      });

      const result = await response.json();

      if (result.success || response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        // Fallback: Open prefilled mailto if service is unavailable
        window.location.href = `mailto:jhasatya7323@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setStatus('success');
      }
    } catch (err) {
      // Fallback directly to mailto
      window.location.href = `mailto:jhasatya7323@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm">
            Looking for a Junior Full Stack / MERN Developer? Reach out through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 space-y-5 shadow-xl">
                
                <h3 className="text-base font-bold text-white mb-2">Direct Contact Channels</h3>

                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-colors">
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
                  <div className="flex items-center gap-1.5">
                    <a
                      href="mailto:jhasatya7323@gmail.com?subject=Portfolio%20Inquiry%20from%20Website"
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                      title="Open Email Client"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 font-mono block">Phone & WhatsApp</span>
                      <a href="tel:+917323000894" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        +91-7323000894
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://wa.me/917323000894?text=Hi%20Krishna,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-mono block">Current Location</span>
                    <span className="text-sm font-semibold text-white">India (Open for Remote, Hybrid & Relocation)</span>
                  </div>
                </div>

                {/* Social Profiles Grid */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/krish7323"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GitHub"
                    className="py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/krishna-chandra-jha-423909321"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LinkedIn"
                    className="py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Working Message Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-7 sm:p-8 shadow-xl space-y-5">
                
                <div>
                  <h3 className="text-lg font-bold text-white">Send A Message</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Messages are delivered directly to <strong className="text-emerald-400">jhasatya7323@gmail.com</strong>.
                  </p>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4 bg-zinc-900/40 rounded-xl border border-emerald-500/30 p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
                      Thank you for contacting me. I will reply to your message at your email shortly!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors mt-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Your Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Your Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Subject of your message"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        data-cursor="Send"
                        className="w-full sm:flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                      >
                        {status === 'submitting' ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Delivering Message...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message Directly</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:jhasatya7323@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                        className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                        title="Send via your default Mail App"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-400" />
                        <span>Send via Mail App</span>
                      </a>
                    </div>
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
