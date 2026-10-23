import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, FileText, Cpu, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';

const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Lab', href: '#ailab' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#overview"
          className="group flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-neon-cyan group-hover:scale-105 transition-transform">
            <Cpu className="w-4 h-4 text-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-wider text-sm bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              AJAY TIWARI
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400/90 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>AI / ML ENGINEER</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full glass-panel border border-white/10 shadow-glass">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wide rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-400/40 rounded-full -z-10 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume, Social, Connect) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
            title="View &amp; Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>
          <a
            href="https://github.com/ajtiwari1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-tiwari67/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:scale-105 transition-all"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto rounded-2xl glass-panel border border-cyan-500/30 p-5 shadow-2xl space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-mono transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border border-cyan-500/30 text-cyan-300 font-mono text-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                </button>
                <a
                  href="https://github.com/ajtiwari1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-tiwari67/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-blue-400"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
