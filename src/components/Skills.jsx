import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Server, Terminal, Wrench, Layers, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    icon: Cpu,
    skills: [
      { name: 'LLaMA-3 / Mistral / DeepSeek', level: 96, desc: 'Fine-tuning, LoRA/QLoRA & prompt engineering' },
      { name: 'LangChain & LlamaIndex', level: 94, desc: 'Multi-agent orchestration & vector toolchains' },
      { name: 'vLLM / TensorRT-LLM', level: 92, desc: 'High-throughput PagedAttention serving' },
      { name: 'RAG Architectures', level: 95, desc: 'Hybrid dense/sparse retrieval with re-ranking' },
      { name: 'Autonomous Tool Use / CoT', level: 90, desc: 'Reasoning loops & execution sandboxes' },
    ],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning & Vision',
    icon: Layers,
    skills: [
      { name: 'PyTorch / PyTorch Lightning', level: 98, desc: 'Custom autograd, training loops, DDP' },
      { name: 'Computer Vision & YOLOv10', level: 92, desc: 'Object detection, 3D tracking, segmentation' },
      { name: 'Vision Transformers (ViT)', level: 88, desc: 'Attention maps, medical imaging, patch encoders' },
      { name: 'Hugging Face Ecosystem', level: 96, desc: 'Transformers, Datasets, PEFT, Accelerate' },
      { name: 'TensorFlow / Keras', level: 85, desc: 'Graph execution & legacy model migration' },
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps & Distributed Infra',
    icon: Server,
    skills: [
      { name: 'Docker & Kubernetes', level: 92, desc: 'Containerization, KubeFlow, GPU scheduling' },
      { name: 'Ray / Ray Serve', level: 90, desc: 'Distributed training & model serving clusters' },
      { name: 'Triton Inference Server', level: 89, desc: 'Multi-model concurrent dynamic batching' },
      { name: 'MLflow & Weights & Biases', level: 94, desc: 'Experiment tracking, model registry, CI/CD' },
      { name: 'AWS SageMaker & Cloud GPUs', level: 88, desc: 'Distributed clusters, spot orchestration' },
    ],
  },
  {
    id: 'languages-data',
    title: 'Languages & Core Systems',
    icon: Terminal,
    skills: [
      { name: 'Python (Expert)', level: 98, desc: 'AsyncIO, NumPy, C-extensions, Cython' },
      { name: 'C++ / CUDA', level: 84, desc: 'Custom GPU kernels, low-level optimization' },
      { name: 'Vector DBs (Qdrant, FAISS)', level: 94, desc: 'HNSW indexing, distance metrics, sharding' },
      { name: 'SQL & Polars / Pandas', level: 92, desc: 'High-speed analytical feature engineering' },
      { name: 'Git & Linux Internals', level: 95, desc: 'Bash scripting, kernel profiling, systemd' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Wrench className="w-3.5 h-3.5" />
              <span>CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Expertise &amp; Arsenal
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
              From low-level CUDA acceleration and mathematical loss formulations to cloud-native
              distributed deployment clusters.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-black font-semibold shadow-neon-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeTab === c.id
                    ? 'bg-cyan-500 text-black font-semibold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs font-mono text-slate-400">Production Mastery &amp; Applied Dev</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_12px_rgba(0,242,254,0.4)]"
                        />
                      </div>
                      <div className="text-[11px] text-slate-400 font-light">{skill.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
