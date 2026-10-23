import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Server, Terminal, Wrench, Layers, Award, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'genai',
    title: 'Generative AI & Agentic Systems',
    icon: Cpu,
    skills: [
      { name: 'RAG & SQL RAG (Text-to-SQL)', level: 98, desc: 'Context retrieval, grounding, enterprise database natural querying' },
      { name: 'Model Context Protocol (MCP) & A2A', level: 95, desc: 'External tools integration & multi-agent collaborative workflows' },
      { name: 'Amazon Bedrock & Gemini', level: 96, desc: 'Foundation model orchestration, conversational chat applications' },
      { name: 'LangGraph, AutoGen & LangChain', level: 96, desc: 'Stateful agent graphs, autonomous strategy synthesis, self-correction' },
      { name: 'Vector Databases & LangSmith', level: 92, desc: 'ChromaDB, semantic search, evaluation tracing, Ragas metrics' },
      { name: 'LLM Fine-tuning (LoRA / QLoRA)', level: 90, desc: 'Parameter-efficient fine-tuning & domain adaptation' },
    ],
  },
  {
    id: 'deep-learning',
    title: 'Machine Learning & Deep Learning',
    icon: Layers,
    skills: [
      { name: 'Transformers & LLM Architectures', level: 96, desc: 'Self-attention, tokenization, vision-language backbones' },
      { name: 'Neural Networks (ANN, CNN, RNN)', level: 95, desc: 'Image classification, sequence modeling, pattern recognition' },
      { name: 'Classical ML & Ensembles', level: 94, desc: 'XGBoost, Random Forest, Decision Trees, SVM, Logistic Regression' },
      { name: 'Vision-Language Models (Qwen2.5-VL)', level: 92, desc: 'Document understanding, visual OCR reasoning, multimodal extraction' },
      { name: 'Computer Vision & Tracking', level: 90, desc: 'Object detection, OpenCV, real-time video stream analytics' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Terminal,
    skills: [
      { name: 'PyTorch & TensorFlow', level: 94, desc: 'Deep learning model training, optimization, inference graph building' },
      { name: 'FastAPI (Python)', level: 98, desc: 'High-throughput async backend microservices for GenAI serving' },
      { name: 'OpenCV & docTR', level: 92, desc: 'Computer vision, table parsing, financial document OCR pipelines' },
      { name: 'NumPy, Pandas & Scikit-learn', level: 96, desc: 'High-performance data manipulation, feature extraction, tabular ML' },
      { name: 'Matplotlib & Seaborn', level: 90, desc: 'Analytical data visualization, model metric diagnostics' },
    ],
  },
  {
    id: 'cloud-deploy',
    title: 'Cloud, Deployment & Languages',
    icon: Server,
    skills: [
      { name: 'AWS (Bedrock, CloudWatch)', level: 95, desc: 'Enterprise GenAI services, logging, telemetry and model monitoring' },
      { name: 'Docker & Kubernetes', level: 92, desc: 'Containerization, scalable cluster orchestration, resilient deployments' },
      { name: 'Programming: Python, SQL, C', level: 98, desc: 'Idiomatic Python development, complex relational SQL, systems C' },
      { name: 'NVIDIA Jetson Nano Edge AI', level: 88, desc: 'On-device edge inference, camera pipeline integration, motion alerts' },
      { name: 'Git & Linux Development', level: 95, desc: 'CI/CD workflows, terminal automation, bash scripting' },
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
              <span>CORE TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Skills &amp; Expertise
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
              Full-spectrum technical proficiencies across Generative AI architectures, Agentic protocols,
              Deep Learning frameworks, and scalable cloud deployments.
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

        {/* Featured Credential Banner */}
        <div className="mb-10 p-5 rounded-2xl glass-panel-glow border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-400/30 mb-1">
                VALIDATED OFFICIAL CREDENTIAL
              </div>
              <h3 className="text-base font-bold text-white">
                Claude Certified Architect – Professional
              </h3>
              <p className="text-xs text-slate-300 font-light">
                Issued by Anthropic (October 2026 – October 2027) • Validated expertise in designing &amp; leading enterprise-scale Claude deployments, governance &amp; responsible architectures.
              </p>
            </div>
          </div>
          <a
            href="https://www.credly.com/badges/5bf21504-3fe0-453e-b86d-23c98dc086f3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-mono text-xs font-semibold hover:shadow-neon-purple hover:scale-[1.02] transition-all shrink-0"
          >
            Verify Credly Badge ↗
          </a>
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
