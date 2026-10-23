import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  FileText,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  Phone,
  CheckCircle2,
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-2xl bg-[#0a0f24] border border-cyan-500/30 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Ajay_Tiwari_Resume.pdf</h3>
                <span className="text-[11px] font-mono text-cyan-400">Senior AI/ML &amp; Generative AI Engineer</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="./Ajay_Tiwari_Resume.pdf"
                download="Ajay_Tiwari_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan transition-all"
                title="Download PDF to computer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href="./Ajay_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                title="Open PDF directly in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Raw</span>
              </a>

              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                aria-label="Close resume viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Viewer Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#060919] text-slate-200">
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                AJAY TIWARI
              </h1>
              <div className="text-sm font-mono text-cyan-400 font-semibold">
                Senior AI/ML &amp; Generative AI Engineer
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-400" /> +91-9667281261
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-400" /> tiwariajay12351@gmail.com
                </span>
                <span>•</span>
                <a
                  href="https://github.com/ajtiwari1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/ajay-tiwari67/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                PROFILE SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Senior Generative AI Engineer with <strong>7 years of experience</strong> designing and deploying production-grade AI solutions, specializing in LLM-powered applications, agentic AI, and Retrieval-Augmented Generation (RAG). Experienced in developing a Marketing AI platform featuring conversational AI and Pulse Insights to generate actionable insights from database-driven data. Built agentic workflows integrating RAG, SQL agents, upstream systems, automated chart generation, and downloadable reports to enable natural-language data exploration and intelligent business insights. Skilled in AWS Bedrock, LangGraph, AutoGen, prompt engineering, and scalable AI application development using FastAPI, Docker, and Kubernetes.
              </p>
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Anthropic-certified Claude Certified Architect – Professional (2026 – 2027)</span>
                  </div>
                  <a
                    href="https://www.credly.com/badges/5bf21504-3fe0-453e-b86d-23c98dc086f3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline text-[11px]"
                  >
                    Credly Verify ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                <div>
                  <strong className="text-white">Programming Languages:</strong>{' '}
                  <span className="text-slate-300">Python, SQL, C</span>
                </div>
                <div>
                  <strong className="text-white">Generative AI:</strong>{' '}
                  <span className="text-slate-300">
                    RAG, SQL RAG (Text-to-SQL), Agentic AI, Model Context Protocol (MCP), Agent2Agent (A2A) Protocol, Amazon Bedrock, Gemini, LangChain, LangGraph, LangSmith, AutoGen, Vector Databases, LLM Fine-tuning (LoRA, QLoRA)
                  </span>
                </div>
                <div>
                  <strong className="text-white">Machine Learning &amp; Deep Learning:</strong>{' '}
                  <span className="text-slate-300">
                    Neural Networks (ANN, CNN, RNN), Transformers, Decision Trees, Random Forest, Logistic Regression, SVM, XGBoost
                  </span>
                </div>
                <div>
                  <strong className="text-white">Frameworks:</strong>{' '}
                  <span className="text-slate-300">
                    TensorFlow, PyTorch, OpenCV, Scikit-learn, Pandas, NumPy, FastAPI, Seaborn, Matplotlib
                  </span>
                </div>
                <div>
                  <strong className="text-white">Cloud Platforms &amp; Deployment:</strong>{' '}
                  <span className="text-slate-300">AWS (CloudWatch, Bedrock), Docker, Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                WORK EXPERIENCE
              </h2>

              {/* Accenture */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">Accenture</span>
                  <span className="text-cyan-400 font-semibold">February 2026 – Present</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Senior AI/ML &amp; Generative AI Engineer</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Designed and built the conversational layer of a GenAI chat application on AWS, using Amazon Bedrock foundation models to deliver context-aware, natural-language answers.</li>
                  <li>Implemented RAG pipelines in the chat flow to retrieve relevant context and ground LLM responses, improving answer relevance and reducing hallucinations.</li>
                  <li>Built a SQL RAG (text-to-SQL) capability that converts natural-language questions into SQL queries over structured data and returns the results as conversational answers.</li>
                  <li>Integrated upstream services to collect and consolidate the data feeding the retrieval and SQL layers, keeping chat responses accurate and up to date.</li>
                  <li>Applied Model Context Protocol (MCP) to connect agents with external tools and data sources, and the Agent2Agent (A2A) protocol to enable multiple agents to collaborate within agentic workflows.</li>
                </ul>
              </div>

              {/* Audax Labs */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">Audax Labs</span>
                  <span className="text-cyan-400">January 2025 – January 2026 (Rejoined)</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Senior Consultant (AI/ML)</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Designed and implemented an OCR and data extraction system for financial documents, combining a Vision-Language Model (Qwen2.5-VL) with classical ML to extract structured data from PDFs, images and scans.</li>
                  <li>Developed a smart bus safety system on NVIDIA Jetson Nano that detects standing students while the bus is moving, triggers alerts, and tracks boarding and deboarding counts in real time.</li>
                </ul>
              </div>

              {/* WalkingTree */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">WalkingTree Technology</span>
                  <span className="text-cyan-400">August 2024 – December 2024</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Senior Software Engineer (AI/ML)</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Designed and built a stock analysis agent using LangGraph that generates data-driven stock suggestions.</li>
                  <li>Automated strategy-based code generation and execution, with self-correcting error resolution using AutoGen.</li>
                </ul>
              </div>

              {/* Audax Labs prior */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">Audax Labs</span>
                  <span className="text-cyan-400">December 2021 – August 2024</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Senior Consultant (AI/ML)</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Designed and implemented a RAG-based chatbot for an electric bike manufacturer, achieving a 20% reduction in customer care costs.</li>
                  <li>Developed and deployed a patient-assessment chatbot using Azure OpenAI and Python, reducing patient intake time by 30%.</li>
                </ul>
              </div>

              {/* Asadel Technologies */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">Asadel Technologies</span>
                  <span className="text-cyan-400">December 2020 – December 2021</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Machine Learning Engineer</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Built a deep learning image-classification model that reached 86% accuracy and reduced the error rate by 12%.</li>
                  <li>Identified traffic patterns and optimized model parameters for speed and accuracy.</li>
                </ul>
              </div>

              {/* Bharat Aero */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="font-bold text-white text-sm">Bharat Aero</span>
                  <span className="text-cyan-400">July 2019 – December 2020</span>
                </div>
                <div className="text-xs text-purple-300 font-mono">Software Developer AI/ML</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light pt-1">
                  <li>Developed a deep learning-based object detection model to identify and track multiple objects in real-time video streams.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                EDUCATION
              </h2>
              <div className="flex justify-between items-baseline font-mono text-xs">
                <span className="font-bold text-white">B.Tech (ECE), Bundelkhand Institute of Engineering &amp; Technology</span>
                <span className="text-slate-400">Aug 2015 – 2019</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Verified document: <span className="text-white">Ajay_Tiwari_Resume.pdf</span>
            </span>
            <a
              href="./Ajay_Tiwari_Resume.pdf"
              download="Ajay_Tiwari_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
