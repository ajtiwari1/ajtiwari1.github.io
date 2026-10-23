import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Database, Server, Zap, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons.jsx';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0b1126] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-white/[0.02]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 mb-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                {project.category}
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 font-light">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Executive Summary
              </h4>
              <p className="leading-relaxed text-slate-200">{project.fullDescription || project.description}</p>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  System Architecture Pipeline
                </h4>
                <div className="font-mono text-xs text-slate-300 bg-black/50 p-3.5 rounded-lg border border-white/5 overflow-x-auto whitespace-pre">
                  {project.architecture}
                </div>
              </div>
            )}

            {/* Technical Highlights / Key Capabilities */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Achievements
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Snippet */}
            {project.codeSnippet && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Core Implementation Snippet
                </h4>
                <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-cyan-300/90 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Stack Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Artifact ID: <span className="text-white">{project.id}</span>
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-white hover:border-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-xs font-mono font-semibold text-white hover:shadow-neon-cyan transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
