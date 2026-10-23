import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

const projectsData = [
  {
    id: 'marketing-ai-agentic',
    category: 'Agentic AI & Bedrock',
    title: 'Marketing AI for Agentic LLM Engineering',
    description:
      'Enterprise marketing conversational AI platform on AWS Bedrock featuring unified document RAG, SQL RAG (Text-to-SQL), and upstream telemetry integration.',
    fullDescription:
      'Developed a comprehensive Marketing AI platform featuring conversational AI and Pulse Insights to generate actionable business insights from database-driven data. Integrates RAG, SQL agents, upstream services, automated chart generation, and downloadable reports to enable natural-language enterprise data exploration.',
    architecture: `[User Natural Language Query]
                 ↓
      [Amazon Bedrock Orchestrator] ⇄ [Model Context Protocol (MCP)]
                 ↓
  ┌──────────────────────────────┴──────────────────────────────┐
  ↓                                                             ↓
[Document RAG Pipeline]                             [SQL RAG (Text-to-SQL)]
(Vector DB & Semantic Retrieval)                     (Dynamic Schema Mapping)
  ↓                                                             ↓
  └──────────────────────────────┬──────────────────────────────┘
                                 ↓
         [Agent2Agent (A2A) Synthesis & Pulse Insights]
                                 ↓
     [Streamed Conversational Response + Automated Charts]`,
    highlights: [
      'Built core conversational chat flow on Amazon Bedrock supporting both document RAG & SQL RAG simultaneously',
      'Engineered Text-to-SQL pipeline converting natural queries into validated relational queries over live databases',
      'Applied Model Context Protocol (MCP) and Agent2Agent (A2A) protocol for modular multi-agent collaboration',
      'Integrated upstream data collectors and Langfuse tracing with AWS CloudWatch monitoring',
    ],
    codeSnippet: `from langgraph.graph import StateGraph, END
from amazon_bedrock import BedrockRuntime

class MarketingAgentState(TypedDict):
    query: str
    intent: str
    sql_query: Optional[str]
    retrieved_docs: List[Document]
    final_response: str

async def route_query(state: MarketingAgentState):
    intent = await classify_intent(state["query"])
    if intent == "data_analytics":
        return "sql_rag_agent"
    return "document_rag_agent"`,
    metrics: [
      { label: 'ARCHITECTURE', value: 'MCP & A2A' },
      { label: 'PLATFORM', value: 'AWS Bedrock' },
    ],
    tags: ['Amazon Bedrock', 'LangGraph', 'LangChain', 'SQL RAG', 'MCP', 'Temporal', 'Langfuse'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'Production Live',
  },
  {
    id: 'multimedia-rag-vllm',
    category: 'Generative AI & RAG',
    title: 'Multimedia RAG Assistant & Audio/Video Q&A',
    description:
      'High-throughput multimodal retrieval-augmented generation system combining Whisper transcription, image OCR, ChromaDB embeddings, and Llama 3.1 on vLLM.',
    fullDescription:
      'Engineered an end-to-end multimedia generative AI pipeline capable of parsing audio, video, scanned imagery, and documents. Uses OpenAI Whisper for multi-lingual audio transcription, OCR for image text extraction, and stores normalized embeddings in ChromaDB for sub-second similarity search.',
    architecture: `[Audio / Video / Image Feeds] ➔ [Whisper & Vision OCR]
                      ↓
  [Chunking & Dense Embedding Model] ➔ [ChromaDB Vector Store]
                      ↓
   [User Query] ➔ [Hybrid Semantic Retriever]
                      ↓
 [Llama 3.1-8B via vLLM PagedAttention] ➔ [Faithful Synthesis]
                      ↓
       [Ragas Evaluation: 98% Faithfulness, 92% Correctness]`,
    highlights: [
      'Achieved 98% faithfulness and 92% answer correctness measured via Ragas evaluation framework',
      'Integrated Whisper transcription and vision OCR for rich multimodal ingestion',
      'Employed vLLM with PagedAttention serving Llama 3.1-8B with high concurrency',
      'Packaged performant FastAPI backend deployed on Kubernetes using Docker containers',
    ],
    codeSnippet: `from vllm import LLM, SamplingParams
from ragas import evaluate
from ragas.metrics import faithfulness, answer_correctness

# High-throughput vLLM serving pipeline
llm = LLM(model="meta-llama/Llama-3.1-8B-Instruct", tensor_parallel_size=1)
sampling_params = SamplingParams(temperature=0.2, max_tokens=512)

async def generate_grounded_answer(query: str, retrieved_context: list[str]):
    prompt = build_rag_prompt(query=query, context="\\n".join(retrieved_context))
    outputs = llm.generate([prompt], sampling_params)
    return outputs[0].outputs[0].text`,
    metrics: [
      { label: 'FAITHFULNESS', value: '98% Ragas' },
      { label: 'ANSWER CORRECTNESS', value: '92% Score' },
    ],
    tags: ['Llama 3.1', 'vLLM', 'LangChain', 'Ragas', 'FastAPI', 'Docker', 'Kubernetes'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'Benchmarked SOTA',
  },
  {
    id: 'financial-ocr-qwen-vl',
    category: 'Vision-Language & OCR',
    title: 'Financial Document OCR & Entity Extraction',
    description:
      'End-to-end financial intelligence pipeline combining Qwen2.5-VL Vision-Language Model, docTR, and Table Transformers for multi-format document understanding.',
    fullDescription:
      'Designed and deployed an intelligent document processing system at Audax Labs for complex invoices, balance sheets, and tax filings across PDFs, images, and skewed scans. Fuses Qwen2.5-VL zero-shot visual reasoning with classical regex and DBSCAN spatial text clustering for high-fidelity tabular extraction.',
    architecture: `[Scanned PDF / Image / Invoice]
                 ↓
    [docTR OCR & Table Transformer] ➔ [DBSCAN Spatial Clustering]
                 ↓
     [Qwen2.5-VL Vision-Language Model Visual Reasoning]
                 ↓
   [Classical ML & Regex Entity Normalization]
                 ↓
 [Structured JSON Financial Schema Output API]`,
    highlights: [
      'Eliminated manual financial entry errors across complex multi-page invoices and scanned PDFs',
      'Combined Qwen2.5-VL visual context comprehension with deterministic table transformers',
      'DBSCAN spatial clustering to accurately preserve multi-column financial layouts',
      'Containerized with FastAPI & Docker for high-throughput batch processing',
    ],
    codeSnippet: `from transformers import Qwen2_5_VLForConditionalGeneration, AutoProcessor
import torch

model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2.5-VL-7B-Instruct", torch_dtype="auto", device_map="auto"
)
processor = AutoProcessor.from_pretrained("Qwen/Qwen2.5-VL-7B-Instruct")

def extract_financial_entities(image_path: str):
    prompt = "Extract all line items, tax breakdown, and total invoice amounts into valid JSON."
    inputs = processor(text=[prompt], images=[image_path], return_tensors="pt")
    output = model.generate(**inputs, max_new_tokens=1024)
    return processor.batch_decode(output, skip_special_tokens=True)`,
    metrics: [
      { label: 'MODEL BACKBONE', value: 'Qwen2.5-VL' },
      { label: 'EXTRACTION SPEED', value: 'Real-Time Batch' },
    ],
    tags: ['Qwen2.5-VL', 'docTR', 'Table Transformer', 'DBSCAN', 'FastAPI', 'Docker'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'Audax Labs Prod',
  },
  {
    id: 'stock-analysis-langgraph',
    category: 'Agentic AI & Bedrock',
    title: 'Autonomous Stock Analysis & Code Agent',
    description:
      'Multi-agent financial analytics system built on LangGraph and AutoGen featuring automated strategy code synthesis and self-healing execution.',
    fullDescription:
      'Engineered at WalkingTree Technology, this autonomous agent orchestrates financial market data analysis. It dynamically generates quantitative strategy code, executes the code in a sandbox, detects runtime errors, and self-corrects using AutoGen feedback loops to deliver data-backed stock suggestions.',
    architecture: `[Market Prompt & Ticker] ➔ [LangGraph Supervisory Node]
                 ↓
 [Financial Data Fetcher] ⇄ [Technical Indicator Evaluator]
                 ↓
  [AutoGen Code Synthesizer] ➔ [Isolated Python Sandbox]
                 ↓
    {Runtime Error detected?} ➔ Yes ➔ [Self-Correction Loop]
                 ↓ No
   [Data-Driven Strategy Suggestions & Visual Charts]`,
    highlights: [
      'Architected LangGraph stateful workflow for complex financial analytics',
      'Automated strategy-based Python code generation and execution in secure runtime',
      'Self-correcting error resolution loop driven by AutoGen multi-agent dialogue',
      'Synthesizes real-time candlestick patterns and quantitative indicators',
    ],
    codeSnippet: `from autogen import AssistantAgent, UserProxyAgent

coder = AssistantAgent(
    name="StrategyCoder",
    system_message="Generate executable Python code using pandas & yfinance to backtest strategy."
)
executor = UserProxyAgent(
    name="CodeExecutor",
    code_execution_config={"work_dir": "sandbox", "use_docker": True}
)

def run_strategy_agent(stock_ticker: str):
    executor.initiate_chat(
        coder,
        message=f"Compute 200-day moving average crossover for {stock_ticker} and plot returns."
    )`,
    metrics: [
      { label: 'FRAMEWORK', value: 'LangGraph' },
      { label: 'COORDINATION', value: 'AutoGen' },
    ],
    tags: ['LangGraph', 'AutoGen', 'Python', 'Financial ML', 'Multi-Agent', 'Docker'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'WalkingTree Tech',
  },
  {
    id: 'jetson-bus-safety',
    category: 'Computer Vision & Edge',
    title: 'Edge Computer Vision Smart Bus Safety System',
    description:
      'Real-time edge AI safety monitoring system deployed on NVIDIA Jetson Nano detecting standing students on moving buses and tracking passenger flow.',
    fullDescription:
      'Engineered an edge computer vision solution for school transportation safety at Audax Labs. Embedded on NVIDIA Jetson Nano hardware, the pipeline uses optimized deep learning models and OpenCV to detect whether students are standing while the bus is in motion, triggering immediate driver alerts and logging boarding/deboarding counts in real time.',
    architecture: `[In-Bus Camera Video Stream]
                 ↓
 [Hardware Hardware Decode on NVIDIA Jetson Nano]
                 ↓
    [Optimized Deep Learning Detection Model]
                 ↓
  ┌──────────────────────────────┴──────────────────────────────┐
  ↓                                                             ↓
[Standing Passenger Detection]                [Boarding / Deboarding Counter]
(Motion & Posture Classification)              (Centroid Line-Crossing Tracker)
  ↓                                                             ↓
[Trigger Real-Time Safety Alert]              [Telemetry Cloud Sync]`,
    highlights: [
      'Deployed directly on low-power NVIDIA Jetson Nano edge hardware',
      'Real-time inference detecting standing passengers while vehicle motion sensors indicate movement',
      'Line-crossing passenger tracking for boarding and deboarding counts',
      'Robust performance under low-light and vibrating in-vehicle environments',
    ],
    codeSnippet: `import cv2

class BusSafetyMonitor:
    def __init__(self, jetson_engine_path: str):
        self.net = cv2.dnn.readNetFromTensorflow(jetson_engine_path)
        self.is_bus_moving = False

    def process_frame(self, frame):
        blob = cv2.dnn.blobFromImage(frame, 1/255.0, (300, 300), swapRB=True)
        self.net.setInput(blob)
        detections = self.net.forward()
        standing_count = self.detect_standing_posture(detections)
        if self.is_bus_moving and standing_count > 0:
            self.trigger_driver_alert(standing_count)`,
    metrics: [
      { label: 'HARDWARE', value: 'Jetson Nano' },
      { label: 'PROCESSING', value: 'Real-Time Edge' },
    ],
    tags: ['NVIDIA Jetson Nano', 'OpenCV', 'Deep Learning', 'Edge AI', 'Python'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'Audax Labs Prod',
  },
  {
    id: 'enterprise-chatbots-healthcare',
    category: 'Generative AI & RAG',
    title: 'Enterprise Customer Care & Patient Triage Chatbots',
    description:
      'Production conversational AI chatbots reducing electric bike customer care costs by 20% and clinical patient intake time by 30%.',
    fullDescription:
      'Spearheaded two flagship conversational AI deployments at Audax Labs. Built a domain-specific RAG support assistant for an electric bike manufacturer that automated 70%+ of tier-1 support queries. Also built a HIPAA-conscious patient-assessment chatbot using Azure OpenAI and Python, streamlining preliminary medical history intake.',
    architecture: `[User Support / Patient Query]
                 ↓
  [Semantic Router & Safety Guardrails] ➔ [Azure OpenAI / GPT-4]
                 ↓
  [Domain Knowledge Retrieval (Vector DB)]
                 ↓
 [Actionable Resolution: 20% Cost Reduction / 30% Intake Time Saved]`,
    highlights: [
      '20% reduction in customer care operational costs for electric bike manufacturer',
      '30% reduction in patient clinic intake time via Azure OpenAI conversational workflows',
      'Strict safety guardrails and domain hallucination prevention',
      'Smooth handoff to human agents when sentiment or triage thresholds exceeded',
    ],
    codeSnippet: `async def evaluate_patient_intake(conversation_history: list):
    system_prompt = "You are a clinical intake assistant. Extract symptoms, allergies, and duration."
    response = await azure_openai_client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "system", "content": system_prompt}, *conversation_history],
        temperature=0.0
    )
    return parse_clinical_json(response.choices[0].message.content)`,
    metrics: [
      { label: 'SUPPORT COST CUT', value: '20% Reduction' },
      { label: 'INTAKE TIME CUT', value: '30% Faster' },
    ],
    tags: ['Azure OpenAI', 'RAG', 'Python', 'FastAPI', 'Customer AI', 'Healthcare AI'],
    github: 'https://github.com/ajtiwari1',
    demo: 'https://github.com/ajtiwari1',
    status: 'Audax Labs Prod',
  },
];

const categories = [
  'All Projects',
  'Agentic AI & Bedrock',
  'Generative AI & RAG',
  'Vision-Language & OCR',
  'Computer Vision & Edge',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>ACTUAL PRODUCTION DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Flagship{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                AI Architectures
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
              Production systems designed and deployed across enterprise settings, spanning AWS Bedrock,
              RAG, Vision-Language Models, and edge computer vision.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-semibold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onOpenDetails={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep-dive Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
