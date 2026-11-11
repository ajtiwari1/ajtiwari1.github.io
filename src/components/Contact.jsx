import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Sparkles,
  Terminal,
  ExternalLink,
  GraduationCap,
  Award,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';

// ── EmailJS credentials ────────────────────────────────────────────────────
// Replace these three values with your own from https://www.emailjs.com
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';
// ──────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const myEmail = 'tiwariajay12351@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formState.name,
          from_email:   formState.email,
          message:      formState.message,
          to_email:     myEmail,
          reply_to:     formState.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#8b5cf6', '#38bdf8', '#10b981'],
      });

      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(
        err?.text ||
        'Failed to send message. Please email me directly at tiwariajay12351@gmail.com'
      );
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>TRANSMISSION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Initiate{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Connection
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Looking to collaborate on cutting-edge Agentic AI, enterprise RAG architectures, or senior
            engineering leadership roles? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Details</span>
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-slate-400">PRIMARY CONTACT EMAIL</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-cyan-300 font-semibold truncate">
                    {myEmail}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/30 font-mono text-xs transition-colors shrink-0"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>LOCATION</span>
                  </div>
                  <div className="text-white font-medium">India</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>TIMEZONE</span>
                  </div>
                  <div className="text-white font-medium">IST (UTC +5:30)</div>
                </div>
              </div>

              {/* Education Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 font-mono text-xs">
                <div className="text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px]">EDUCATION</span>
                </div>
                <div className="text-white font-semibold pt-1">B.Tech (ECE)</div>
                <div className="text-slate-400 text-[11px]">
                  Bundelkhand Institute of Engineering &amp; Technology (2015 – 2019)
                </div>
              </div>

              {/* Social Channels & Credly Badge */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400">EXTERNAL PROFILES &amp; BADGES:</div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/ajtiwari1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ajay-tiwari67/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 hover:border-blue-400 text-slate-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.credly.com/badges/5bf21504-3fe0-453e-b86d-23c98dc086f3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-400/40 text-purple-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Claude Architect Badge</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Contact Form powered by EmailJS */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Send a Direct Message</span>
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">YOUR NAME</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="e.g. Dario Amodei"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">YOUR EMAIL</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="e.g. dario@anthropic.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">MESSAGE / OPPORTUNITY DETAILS</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your team, challenge, or project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Status messages */}
                <div className="min-h-[28px]">
                  {status === 'sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-emerald-400 font-mono text-xs"
                    >
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Message delivered to {myEmail}! I'll reply soon.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 text-red-400 font-mono text-xs"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}
                  {status === 'idle' && (
                    <span className="text-[11px] font-mono text-slate-400">
                      Sends directly to {myEmail} via EmailJS
                    </span>
                  )}
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
