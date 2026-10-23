import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Lead AI / Machine Learning Engineer',
    company: 'Cognitive Systems Lab',
    location: 'San Francisco, CA (Remote)',
    period: '2023 - Present',
    description:
      'Spearheading the engineering of enterprise autonomous agent architectures and large-scale multi-modal foundation model fine-tuning.',
    achievements: [
      'Architected distributed vLLM inference mesh serving 10M+ daily inferences with sub-15ms P99 latency.',
      'Designed Tree-of-Thought agentic framework reducing multi-step reasoning hallucination rate by 38%.',
      'Orchestrated multi-node PyTorch training pipelines across 64x NVIDIA H100 GPUs using DeepSpeed ZeRO-3.',
      'Authored internal model alignment handbook implementing DPO and RLHF reward modeling.',
    ],
    tech: ['PyTorch', 'vLLM', 'Ray', 'Kubernetes', 'DeepSpeed', 'Triton', 'Qdrant'],
  },
  {
    role: 'Senior Machine Learning Engineer',
    company: 'Synthetix Neural Solutions',
    location: 'Bengaluru, India',
    period: '2021 - 2023',
    description:
      'Engineered high-throughput computer vision and NLP pipelines for autonomous tracking and intelligent document processing.',
    achievements: [
      'Built real-time YOLOv8 + TensorRT multi-camera surveillance tracking running at 110 FPS on edge Jetson devices.',
      'Implemented enterprise RAG search platform cutting document retrieval latency from 4.2s to 210ms.',
      'Developed automated drift detection pipelines with Evidently AI & MLflow triggering continuous canary re-training.',
      'Mentored 6 junior engineers and contributed 3 open-source packages to the Python AI community.',
    ],
    tech: ['TensorRT', 'CUDA', 'Python', 'Docker', 'FastAPI', 'OpenCV', 'MLflow'],
  },
  {
    role: 'AI Research & Software Engineer',
    company: 'Nexus Advanced Labs',
    location: 'Bengaluru, India',
    period: '2019 - 2021',
    description:
      'Researched deep learning architectures for anomaly detection and volumetric medical imaging.',
    achievements: [
      'Trained Vision Transformer backbones for 3D MRI diagnostic triaging achieving 97.8% ROC-AUC.',
      'Implemented Grad-CAM saliency heatmaps enabling verifiable clinician interpretability.',
      'Optimized deep learning training time by 40% with mixed precision FP16 and gradient accumulation.',
    ],
    tech: ['PyTorch', 'TorchVision', 'MONAI', 'NumPy', 'SciPy', 'AWS SageMaker'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#050817]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>CAREER PATH &amp; INDUSTRY IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Proven track record of designing, shipping, and scaling mission-critical artificial intelligence
            architectures in high-growth environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050713] border-2 border-cyan-400 flex items-center justify-center shadow-neon-cyan z-20 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-32px)]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-colors shadow-glass space-y-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <h4 className="text-sm font-mono text-purple-300 mt-0.5">{exp.company}</h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 pt-1">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300/90 font-light">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono text-cyan-300/90 bg-cyan-500/10 border border-cyan-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
