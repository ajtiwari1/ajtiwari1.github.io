import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
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
  Phone,
  GraduationCap,
  Award,
} from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const myEmail = 'tiwariajay12351@gmail.com';
  const myPhone = '+91-9667281261';

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(myPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger celebratory cyber confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#8b5cf6', '#38bdf8', '#10b981'],
      });

      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
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
            Looking to collaborate on cutting-edge Agentic AI, enterprise RAG architectures, or senior engineering leadership roles? Reach out directly.
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

              {/* Phone Card with Copy button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-slate-400">DIRECT PHONE / WHATSAPP</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-purple-300 font-semibold truncate flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    {myPhone}
                  </span>
                  <button
                    onClick={copyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 font-mono text-xs transition-colors shrink-0"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
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
                  <div className="text-white font-medium">Bengaluru / Remote</div>
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

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Send a Direct Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dario Amodei"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">EMAIL ADDRESS</label>
                    <input
                      type="email"
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
                    required
                    rows={5}
                    placeholder="Tell me about your team, challenge, or project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  {isSent ? (
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                      <Check className="w-4 h-4" />
                      <span>Transmission delivered successfully!</span>
                    </div>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">
                      Encrypted dispatch direct to tiwariajay12351@gmail.com
                    </span>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
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
