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
  Award,
  FileText,
} from 'lucide-react';

const specialties = [
  'Agentic AI & Model Context Protocol (MCP)',
  'RAG & SQL RAG (Text-to-SQL) Systems',
  'Amazon Bedrock & Claude Enterprise Deployments',
  'Multi-Agent Workflows (LangGraph & AutoGen)',
  'Vision-Language Models (Qwen2.5-VL) & Edge AI',
];

const simulatedTokens = [
  'Initializing AWS Bedrock client [Claude-3.5-Sonnet]...',
  'Connecting MCP tools & Agent2Agent (A2A) protocol...',
  'Parsing user query into schema-aware SQL RAG plan...',
  'Executing retrieved context grounding with 98% faithfulness.',
  'Generating conversational Pulse Insights and analytics charts.',
  'Transmission ready. Sub-second streaming active.',
];

export default function Hero({ onOpenResume }) {
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
    setInferenceOutput(['[BEDROCK] Initiating Claude Agentic Chain...']);
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
            {/* Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>SENIOR AI/ML &amp; GENERATIVE AI ENGINEER</span>
              </div>

              <a
                href="https://www.credly.com/badges/5bf21504-3fe0-453e-b86d-23c98dc086f3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-purple-500/40 text-xs font-mono text-purple-300 hover:border-purple-400 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>Anthropic Claude Certified Architect</span>
              </a>
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
                  Enterprise Agentic AI
                </span>{' '}
                &amp; Production RAG Systems
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
              <span className="text-slate-400">Core Focus:</span>
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
              Hi, I’m <strong className="text-white font-medium">Ajay Tiwari</strong>. With{' '}
              <strong className="text-cyan-300 font-medium">7 years of production AI experience</strong>,
              I design and deploy enterprise-grade LLM applications, agentic workflows (MCP, A2A, LangGraph, AutoGen),
              and high-fidelity SQL &amp; document RAG systems on AWS Bedrock.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white font-mono text-sm font-semibold shadow-neon-cyan hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Work Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-cyan-500/40 text-cyan-300 font-mono text-sm hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-neon-cyan hover:scale-[1.02] transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-white/10 text-slate-300 font-mono text-sm hover:border-cyan-400/40 hover:text-white hover:scale-[1.02] transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-white/10 text-slate-300 font-mono text-sm hover:text-white hover:border-white/25 transition-all"
              >
                <span>Connect</span>
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
                      bedrock_agent_mcp.py
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
                    <span>{inferenceRunning ? 'Processing' : 'Simulate Chain'}</span>
                  </button>
                </div>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">FAITHFULNESS</div>
                    <div className="text-sm font-mono font-bold text-cyan-400">98% Ragas</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">ORCHESTRATION</div>
                    <div className="text-sm font-mono font-bold text-purple-400">MCP + A2A</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400">INFRASTRUCTURE</div>
                    <div className="text-sm font-mono font-bold text-emerald-400">AWS Bedrock</div>
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
                      <span>Coordinating multi-agent context...</span>
                    </div>
                  )}
                </div>

                {/* Architecture pipeline footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Anthropic Claude Architect
                  </span>
                  <span className="text-cyan-400 font-semibold">FastAPI • Docker • K8s</span>
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
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">7+ Yrs</div>
            <div className="text-xs sm:text-sm text-slate-400">AI/ML &amp; Generative AI Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400">98%</div>
            <div className="text-xs sm:text-sm text-slate-400">Ragas Benchmark Faithfulness</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">20-30%</div>
            <div className="text-xs sm:text-sm text-slate-400">Operating Cost &amp; Intake Time Cut</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-400">Accenture</div>
            <div className="text-xs sm:text-sm text-slate-400">Senior AI/ML &amp; GenAI Engineer</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
