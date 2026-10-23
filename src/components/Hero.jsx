import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  Cpu,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Play,
  RotateCw,
  CheckCircle2,
} from 'lucide-react';

const specialties = [
  'Large Language Models & Agentic Workflows',
  'Real-Time Multi-Modal Computer Vision',
  'Distributed MLOps & Low-Latency Serving',
  'Retrieval-Augmented Generation (RAG)',
  'Transformer Architecture Optimization',
];

const simulatedTokens = [
  'Initializing weights [BF16]...',
  'Compiling FlashAttention-3 kernel...',
  'Synthesizing multi-modal context vectors...',
  'Optimal routing identified via MoE gating (3/8 experts active).',
  'Convergence reached. Output loss: 0.0412.',
  'Done. Ready for real-time inference (P99: 11.2ms).',
];

export default function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [inferenceRunning, setInferenceRunning] = useState(false);
  const [inferenceOutput, setInferenceOutput] = useState(simulatedTokens.slice(0, 3));
  const [activeStep, setActiveStep] = useState(2);

  // Cycle specialties
  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const runSimulatedInference = () => {
    if (inferenceRunning) return;
    setInferenceRunning(true);
    setInferenceOutput(['[SYS] Allocating CUDA streams...']);
    setActiveStep(0);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < simulatedTokens.length) {
        setInferenceOutput((prev) => [...prev, simulatedTokens[idx]]);
        setActiveStep(idx);
      } else {
        clearInterval(interval);
        setInferenceRunning(false);
      }
    }, 450);
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>NEURAL CORE OPERATIONAL</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-400">Available for Senior AI/ML Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Architecting{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
                  Autonomous AI
                </span>{' '}
                & Scalable Deep Learning Systems
              </h1>
            </motion.div>

            {/* Specialty dynamic rotater */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-slate-300 font-mono text-sm sm:text-base h-8"
            >
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-slate-400">Specializing in:</span>
              <span className="text-cyan-300 font-semibold border-b border-cyan-400/50 pb-0.5">
                {specialties[specialtyIndex]}
              </span>
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-light"
            >
              Hi, I’m <strong className="text-white font-medium">Ajay Tiwari</strong>. I build high-performance
              machine learning systems from foundational model architectures to production serving pipelines.
              Bridging the gap between cutting-edge AI research and low-latency, scalable real-world deployments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white font-mono text-sm font-semibold shadow-neon-cyan hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#ailab"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-cyan-500/30 text-cyan-300 font-mono text-sm hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-[1.02] transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>Launch AI Lab</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-white/10 text-slate-300 font-mono text-sm hover:text-white hover:border-white/25 transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Neural Engine Simulation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-2xl">
              <div className="relative rounded-2xl bg-[#090d21]/90 backdrop-blur-xl p-5 border border-white/10 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      inference_engine_v4.py
                    </span>
                  </div>
                  <button
                    onClick={runSimulatedInference}
                    disabled={inferenceRunning}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-mono text-[11px] border border-cyan-400/30 transition-all disabled:opacity-50"
                  >
                    {inferenceRunning ? (
                      <RotateCw className="w-3 h-3 animate-spin" />
                    ) : (
                      <Play className="w-3 h-3 text-cyan-300" />
                    )}
                    <span>{inferenceRunning ? 'Processing' : 'Run Test'}</span>
                  </button>
                </div>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">P99 LATENCY</div>
                    <div className="text-sm font-mono font-bold text-cyan-400">11.4 ms</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">VRAM ALLOC</div>
                    <div className="text-sm font-mono font-bold text-purple-400">14.2 / 24 GB</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">THROUGHPUT</div>
                    <div className="text-sm font-mono font-bold text-emerald-400">184 tok/s</div>
                  </div>
                </div>

                {/* Animated Stream Terminal */}
                <div className="space-y-1.5 font-mono text-xs text-slate-300 bg-black/40 rounded-xl p-3.5 border border-white/5 h-44 overflow-y-auto">
                  {inferenceOutput.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-400 select-none">›</span>
                      <span className={idx === activeStep ? 'text-cyan-300 font-semibold' : 'text-slate-300'}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                  {inferenceRunning && (
                    <div className="flex items-center gap-2 text-cyan-400 animate-pulse text-[11px] pt-1">
                      <span className="inline-block w-2 h-3.5 bg-cyan-400" />
                      <span>Streaming tokens...</span>
                    </div>
                  )}
                </div>

                {/* Architecture pipeline footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Model: LLaMA-3-8B-Instruct (AWQ)
                  </span>
                  <span className="text-cyan-400 font-semibold">Triton / CUDA 12.4</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Key Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">15+</div>
            <div className="text-xs sm:text-sm text-slate-400">Production AI Models Deployed</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400">99.4%</div>
            <div className="text-xs sm:text-sm text-slate-400">Peak Top-1 Accuracy Achieved</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">10M+</div>
            <div className="text-xs sm:text-sm text-slate-400">Daily Inferences Handled</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-400">&lt;15ms</div>
            <div className="text-xs sm:text-sm text-slate-400">Sub-20ms P99 Real-Time Latency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
