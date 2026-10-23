import React from 'react';
import { Cpu, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030611] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-neon-cyan">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-mono font-bold text-sm text-white">AJAY TIWARI</div>
              <div className="text-[11px] font-mono text-slate-400">
                Senior AI/ML &amp; Generative AI Engineer • Anthropic Claude Certified Architect
              </div>
            </div>
          </div>

          {/* System status */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Telemetry: All Neural Systems Operational</span>
          </div>

          {/* Social and back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ajtiwari1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              title="Return to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Ajay Tiwari. Built for high performance &amp; visual depth.
          </div>
          <div>
            Hosted on GitHub Pages (<span className="text-cyan-400">ajtiwari1.github.io</span>)
          </div>
        </div>
      </div>
    </footer>
  );
}
