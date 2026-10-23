import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Senior AI/ML & Generative AI Engineer',
    company: 'Accenture',
    period: 'February 2026 – Present',
    location: 'Bengaluru, India',
    isCurrent: true,
    description:
      'Spearheading the conversational layer and agentic workflows of enterprise GenAI chat applications on AWS Bedrock.',
    achievements: [
      'Designed and built the conversational layer of a GenAI chat application on AWS using Amazon Bedrock foundation models to deliver context-aware, natural-language answers.',
      'Implemented RAG pipelines in the chat flow to retrieve relevant context and ground LLM responses, improving answer relevance and reducing hallucinations.',
      'Built a SQL RAG (text-to-SQL) capability that converts natural-language questions into SQL queries over structured data and returns the results as conversational answers.',
      'Integrated upstream services to collect and consolidate the data feeding the retrieval and SQL layers, keeping chat responses accurate and up to date.',
      'Applied Model Context Protocol (MCP) to connect agents with external tools and data sources, and the Agent2Agent (A2A) protocol to enable multiple agents to collaborate within agentic workflows.',
    ],
    tech: ['Amazon Bedrock', 'RAG', 'SQL RAG (Text-to-SQL)', 'MCP Protocol', 'Agent2Agent (A2A)', 'FastAPI', 'AWS'],
  },
  {
    role: 'Senior Consultant (AI/ML)',
    company: 'Audax Labs',
    period: 'January 2025 – January 2026 (Rejoined)',
    location: 'Noida, India',
    isCurrent: false,
    description:
      'Developed state-of-the-art vision-language extraction systems and real-time edge computer vision architectures.',
    achievements: [
      'Designed and implemented an OCR and data extraction system for financial documents, combining a Vision-Language Model (Qwen2.5-VL) with classical ML to extract structured data from PDFs, images and scans.',
      'Developed a smart bus safety system on NVIDIA Jetson Nano that detects standing students while the bus is moving, triggers alerts, and tracks boarding and deboarding counts in real time.',
    ],
    tech: ['Qwen2.5-VL', 'Vision-Language Models', 'NVIDIA Jetson Nano', 'OpenCV', 'PyTorch', 'docTR', 'FastAPI'],
  },
  {
    role: 'Senior Software Engineer (AI/ML)',
    company: 'WalkingTree Technology',
    period: 'August 2024 – December 2024',
    location: 'Hyderabad, India',
    isCurrent: false,
    description:
      'Engineered autonomous financial market intelligence agents and self-healing code synthesis pipelines.',
    achievements: [
      'Designed and built an autonomous stock analysis agent using LangGraph that generates data-driven stock suggestions and market insights.',
      'Automated strategy-based code generation and execution with self-correcting error resolution loops using AutoGen multi-agent coordination.',
    ],
    tech: ['LangGraph', 'AutoGen', 'Multi-Agent Systems', 'Python', 'LLM Agents', 'Vector DBs'],
  },
  {
    role: 'Senior Consultant (AI/ML)',
    company: 'Audax Labs',
    period: 'December 2021 – August 2024',
    location: 'Noida, India',
    isCurrent: false,
    description:
      'Architected conversational AI assistants for enterprise customer support and healthcare triage.',
    achievements: [
      'Designed and implemented a RAG-based chatbot for an electric bike manufacturer, achieving a 20% reduction in customer care operational costs.',
      'Developed and deployed an automated patient-assessment chatbot using Azure OpenAI and Python, reducing clinic patient intake time by 30%.',
    ],
    tech: ['Azure OpenAI', 'RAG', 'LangChain', 'Python', 'FastAPI', 'Embeddings', 'ChromaDB'],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Asadel Technologies',
    period: 'December 2020 – December 2021',
    location: 'Bengaluru, India',
    isCurrent: false,
    description:
      'Trained and optimized deep learning image classification and traffic pattern modeling engines.',
    achievements: [
      'Built a deep learning image-classification model that reached 86% accuracy and reduced error rates by 12%.',
      'Identified complex vehicular traffic patterns and optimized deep learning model parameters for inference speed and high-precision accuracy.',
    ],
    tech: ['CNN', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas'],
  },
  {
    role: 'Software Developer AI/ML',
    company: 'Bharat Aero',
    period: 'July 2019 – December 2020',
    location: 'Bengaluru, India',
    isCurrent: false,
    description:
      'Engineered real-time computer vision object detection and multi-stream tracking algorithms.',
    achievements: [
      'Developed a deep learning-based object detection model to identify and track multiple objects in real-time video streams.',
      'Optimized frame extraction and bounding box regression pipelines for continuous high-rate video feeds.',
    ],
    tech: ['Computer Vision', 'Object Detection', 'OpenCV', 'Python', 'Deep Learning'],
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
            <span>7+ YEARS INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Engineering Impact
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Proven progression from core computer vision and deep learning to designing enterprise-grade
            Agentic AI, RAG, and multi-agent systems at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050713] border-2 flex items-center justify-center z-20 hidden sm:flex ${
                      exp.isCurrent
                        ? 'border-cyan-400 shadow-neon-cyan'
                        : 'border-purple-400/80 shadow-neon-purple'
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        exp.isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-purple-400'
                      }`}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-32px)]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 sm:p-7 rounded-2xl glass-panel border transition-all duration-300 shadow-glass space-y-4 ${
                        exp.isCurrent
                          ? 'border-cyan-500/40 hover:border-cyan-400 bg-[#09112a]/80 shadow-[0_0_25px_rgba(0,242,254,0.1)]'
                          : 'border-white/10 hover:border-cyan-400/30'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                              Present Role
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-mono text-purple-300 mt-0.5 flex items-center gap-1.5 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet Achievements */}
                      <ul className="space-y-2.5 pt-1">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
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
