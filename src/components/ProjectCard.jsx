import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Layers, Activity, Eye, Code } from 'lucide-react';
import { Github } from './Icons.jsx';

export default function ProjectCard({ project, onOpenDetails }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="h-full"
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
          }`,
          transition: isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative h-full flex flex-col justify-between rounded-2xl bg-[#0b1126]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 shadow-glass overflow-hidden group transition-colors duration-300"
      >
        {/* Dynamic mouse glare reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 242, 254, 0.12), transparent 80%)`,
            }}
          />
        )}

        {/* Top Header & Category */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
              <Cpu className="w-3 h-3 text-cyan-400" />
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-slate-300/85 line-clamp-3 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-2 mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-400">{metric.label}</span>
                <span className="font-semibold text-cyan-300 text-xs mt-0.5">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.05] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer action */}
        <div className="p-4 border-t border-white/5 bg-black/20 flex items-center justify-between">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
          >
            <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
            <span>Architecture &amp; Deep Dive</span>
          </button>
          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400" />
            {project.status || 'Production'}
          </span>
        </div>
      </div>
    </div>
  );
}
