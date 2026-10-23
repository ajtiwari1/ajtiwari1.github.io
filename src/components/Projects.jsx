import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Filter, Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

const projectsData = [
  {
    id: 'omniagent-x',
    category: 'LLMs & Agents',
    title: 'OmniAgent X: Autonomous Multi-Modal Agent',
    description:
      'Engineered an enterprise autonomous AI agent featuring Tree-of-Thought planning, dynamic tool-use calling, and self-reflection loops for complex workflows.',
    fullDescription:
      'OmniAgent X solves multi-step analytical and programmatic tasks by orchestrating specialized LLM sub-agents. It integrates dynamic tool routing, code execution sandboxing, and hierarchical memory retrieval to achieve state-of-the-art autonomy on the GAIA benchmark.',
    architecture: `[User Request] ➔ [Intent Router] ➔ [Planner Sub-agent (Tree-of-Thought)]
                      ↓
       [Tool Registry & Python Sandbox] ⇄ [Vector Memory (Qdrant)]
                      ↓
         [Critic / Verifier Node] ➔ [Validated Synthesis]`,
    highlights: [
      'Implemented Tree-of-Thought search achieving 84.6% GAIA benchmark success',
      'Dynamic sandboxed Python code execution with safety AST verification',
      'Async streaming execution reducing latency to first token by 45%',
      'Integrated hybrid memory with semantic embeddings and session cache',
    ],
    codeSnippet: `class OmniAgent:
    def __init__(self, model_id: str, memory_store: VectorStore):
        self.router = IntentRouter(model=model_id)
        self.planner = TreeOfThoughtPlanner(depth=4, beam_width=3)
        self.tools = ToolRegistry()

    async def execute_task(self, query: str) -> AgentResult:
        plan = await self.planner.generate_plan(query)
        while not plan.is_complete():
            action = plan.get_next_action()
            observation = await self.tools.invoke(action)
            plan.update_with_critique(observation)
        return plan.synthesize()`,
    metrics: [
      { label: 'BENCHMARK GAIA', value: '84.6% Acc' },
      { label: 'PLANNING SPEED', value: '420ms avg' },
    ],
    tags: ['PyTorch', 'LangChain', 'LLaMA-3', 'FastAPI', 'Qdrant', 'Docker'],
    github: 'https://github.com/ajtiwari1/omniagent-x',
    demo: 'https://github.com/ajtiwari1',
    status: 'v2.1 Production',
  },
  {
    id: 'visionpulse-3d',
    category: 'Computer Vision',
    title: 'VisionPulse 3D: Multi-Camera Tracking Pipeline',
    description:
      'High-throughput real-time 3D object detection, tracking, and spatial velocity estimation using customized YOLOv10 and TensorRT acceleration.',
    fullDescription:
      'A multi-camera computer vision infrastructure designed for autonomous robotics and smart city surveillance. Built with custom CUDA kernels and TensorRT optimization, achieving 110 FPS on dual 4K video feeds with sub-pixel spatial calibration.',
    architecture: `[4K Dual Video Feed] ➔ [Hardware Video Decode (NVDEC)]
                      ↓
     [TensorRT YOLOv10 Backbone] ➔ [DeepSORT 3D Re-ID]
                      ↓
 [Kalman Filter Spatial Mapping] ➔ [ZeroMQ Stream output: 110 FPS]`,
    highlights: [
      'Sub-10ms end-to-end latency per 4K camera frame',
      'Custom TensorRT FP16 quantization reducing VRAM footprint by 58%',
      'Robust cross-camera re-identification under extreme occlusions and lighting shifts',
      'Seamless ROS2 integration for physical robotic actuation',
    ],
    codeSnippet: `// Custom TensorRT Inference Loop
void VisionEngine::processStream(const cv::cuda::GpuMat& inputFrame) {
    cudaStream_t stream;
    cudaStreamCreate(&stream);
    preprocessKernel<<<grid, block, 0, stream>>>(inputFrame.data, devBuffer_);
    context_->enqueueV3(stream);
    postprocessBoxes<<<grid, block, 0, stream>>>(devBuffer_, outDetections_);
    cudaStreamSynchronize(stream);
}`,
    metrics: [
      { label: 'FRAME RATE', value: '110 FPS @ 4K' },
      { label: 'LATENCY', value: '8.4ms P99' },
    ],
    tags: ['C++', 'CUDA', 'TensorRT', 'PyTorch', 'OpenCV', 'ROS2'],
    github: 'https://github.com/ajtiwari1/visionpulse-3d',
    demo: 'https://github.com/ajtiwari1',
    status: 'Deployed Edge',
  },
  {
    id: 'synapserag-enterprise',
    category: 'LLMs & Agents',
    title: 'SynapseRAG: Production Hybrid Vector & Re-Ranker',
    description:
      'Enterprise-grade Retrieval-Augmented Generation system blending dense semantic embeddings with sparse BM25 and cross-encoder re-ranking.',
    fullDescription:
      'Designed to ingest millions of unstructured technical documents and financial filings with zero hallucination guarantee. Features contextual chunking, dynamic query expansion with HyDE, and real-time citation attribution.',
    architecture: `[User Query] ➔ [HyDE Expansion] ➔ [Hybrid Retrieval: Dense + BM25]
                      ↓
     [Cross-Encoder Re-ranker (Cohere / BGE)]
                      ↓
 [Context Pruning & Citation Attribution] ➔ [vLLM Generator]`,
    highlights: [
      'Retrieval MRR@10 improved from 0.62 to 0.89 using cross-encoder re-ranking',
      'vLLM integration with PagedAttention delivering 3.8x higher concurrency',
      'Sub-document citation attribution with 99.1% factual precision',
      'Handles 50M+ document vector indexes with sub-50ms query time',
    ],
    codeSnippet: `async def hybrid_retrieve(query: str, top_k: int = 5):
    dense_vec = await embed_model.encode_async(query)
    # Concurrent dense and BM25 search
    dense_results, sparse_results = await asyncio.gather(
        qdrant_client.search_async(vector=dense_vec, limit=30),
        bm25_index.search_async(query=query, limit=30)
    )
    combined = reciprocal_rank_fusion(dense_results, sparse_results)
    return await reranker.score(query=query, candidates=combined[:top_k])`,
    metrics: [
      { label: 'MRR@10 ACCURACY', value: '0.89 Score' },
      { label: 'CONCURRENCY', value: '1,200 req/s' },
    ],
    tags: ['Python', 'vLLM', 'FastAPI', 'Qdrant', 'Hugging Face', 'LangChain'],
    github: 'https://github.com/ajtiwari1/synapserag-enterprise',
    demo: 'https://github.com/ajtiwari1',
    status: 'Enterprise Prod',
  },
  {
    id: 'neuroscan-health',
    category: 'Healthcare AI',
    title: 'NeuroScan: Explainable Med-Vision AI',
    description:
      'Deep learning diagnostic assistant for CT and MRI neuro-imaging with integrated Grad-CAM heatmaps and uncertainty quantification.',
    fullDescription:
      'Developed a Vision Transformer architecture fine-tuned on multi-institutional neuro-imaging datasets. Provides clinicians with pixel-level diagnostic saliency maps, SHAP feature importance explanations, and Bayesian uncertainty bounds.',
    architecture: `[3D DICOM Volume] ➔ [Volumetric Preprocessing & Normalization]
                      ↓
 [Swin UNETR Vision Transformer] ➔ [Monte Carlo Dropout Uncertainty]
                      ↓
 [Grad-CAM++ Saliency Maps] ➔ [Clinician Diagnostic Report API]`,
    highlights: [
      'Achieved 97.8% AUC on early-stage pathology detection',
      'Integrated Monte Carlo Dropout for Bayesian epistemic uncertainty estimation',
      'Compliant with HIPAA data isolation and DICOM format ingestion',
      'Grad-CAM++ saliency overlays validated by certified radiologists',
    ],
    codeSnippet: `class DiagnosticViT(nn.Module):
    def __init__(self, in_channels=1, num_classes=4):
        super().__init__()
        self.backbone = SwinUNETR(img_size=(96, 96, 96), in_channels=in_channels)
        self.uncertainty_head = MCDropout(p=0.3)
        self.classifier = nn.Linear(768, num_classes)

    def forward_with_uncertainty(self, x, num_samples=25):
        samples = torch.stack([self.forward(x) for _ in range(num_samples)])
        mean_prediction = samples.mean(dim=0)
        variance = samples.var(dim=0)
        return mean_prediction, variance`,
    metrics: [
      { label: 'ROC-AUC', value: '97.8%' },
      { label: 'SLICES / SEC', value: '340 vol/s' },
    ],
    tags: ['PyTorch Lightning', 'MONAI', 'Vision Transformers', 'SHAP', 'Docker'],
    github: 'https://github.com/ajtiwari1/neuroscan-health',
    demo: 'https://github.com/ajtiwari1',
    status: 'Research Clinical',
  },
  {
    id: 'pulseserve-mlops',
    category: 'MLOps & Infra',
    title: 'PulseServe: Distributed Model Mesh & Drift Engine',
    description:
      'Autonomous model serving control plane with automated Canary rollouts, real-time embedding drift detection, and GPU autoscaling.',
    fullDescription:
      'A cloud-native MLOps orchestration engine built for multi-cluster Kubernetes deployments. Continuously tracks statistical Wasserstein distance across incoming embeddings to detect data distribution drift before degradation occurs.',
    architecture: `[Traffic Ingress] ➔ [Dynamic Canary Traffic Splitter (Istio)]
                      ↓
    [Ray Serve GPU Workers] ⇄ [Prometheus Metrics & Evidently AI]
                      ↓
 [Automated Retraining Trigger] ➔ [MLflow Model Registry]`,
    highlights: [
      'Automated fallback to shadow models when drift p-value drops below 0.01',
      'Kubernetes Ray Serve cluster with dynamic GPU scale-to-zero capability',
      'Reduced cloud GPU infrastructure cost by 42% through smart batching',
      'Sub-5ms telemetry overhead with Prometheus and Grafana dashboards',
    ],
    codeSnippet: `class DriftDetector:
    def __init__(self, baseline_embeddings: np.ndarray, threshold: float = 0.05):
        self.baseline = baseline_embeddings
        self.threshold = threshold

    def evaluate_batch(self, current_batch: np.ndarray) -> bool:
        stat, p_val = ks_2samp(self.baseline.flatten(), current_batch.flatten())
        if p_val < self.threshold:
            logger.warn(f"Data drift detected! P-value: {p_val:.5f}")
            self.trigger_canary_rollback()
            return True
        return False`,
    metrics: [
      { label: 'COST REDUCTION', value: '42% Lower GPU' },
      { label: 'AVAILABILITY', value: '99.99% SLA' },
    ],
    tags: ['Kubernetes', 'Ray Serve', 'Docker', 'MLflow', 'Triton', 'AWS'],
    github: 'https://github.com/ajtiwari1/pulseserve-mlops',
    demo: 'https://github.com/ajtiwari1',
    status: 'Infra Active',
  },
  {
    id: 'quantizellm-engine',
    category: 'LLMs & Agents',
    title: 'QuantizeLLM: 4-Bit Edge Tensor Acceleration',
    description:
      'Custom activation-aware weight quantization (AWQ) kernel library running 70B parameter models on single consumer GPUs.',
    fullDescription:
      'Implements custom CUDA and Triton kernels for fused GEMM and dequantization. Preserves 99.2% perplexity compared to FP16 baselines while speeding up inference throughput by 3.2x on edge devices.',
    architecture: `[FP16 Checkpoint] ➔ [Salient Weight Sensitivity Profiler]
                      ↓
 [AWQ Matrix Transformation] ➔ [Fused FP4/INT4 Dequant Kernel]
                      ↓
 [Direct VRAM Execution] ➔ [125 tok/s Edge Throughput]`,
    highlights: [
      'Fused CUDA kernel eliminates redundant global memory writebacks',
      'Reduces model footprint from 140 GB to 35 GB with negligible loss',
      'Triton-based cross-platform support across NVIDIA and Apple Silicon (Metal)',
      'Adopted by 500+ open-source developers on Hugging Face',
    ],
    codeSnippet: `@triton.jit
def fused_dequant_matmul_kernel(
    a_ptr, b_ptr, c_ptr, scales_ptr,
    M, N, K, stride_am, stride_ak, stride_bk, stride_bn, stride_cm, stride_cn,
    BLOCK_M: tl.constexpr, BLOCK_N: tl.constexpr, BLOCK_K: tl.constexpr,
):
    pid = tl.program_id(0)
    # Fused fast dequantization into register cache
    ...`,
    metrics: [
      { label: 'COMPRESSION', value: '75% Size Cut' },
      { label: 'SPEEDUP', value: '3.2x Higher' },
    ],
    tags: ['CUDA', 'Triton', 'PyTorch', 'C++', 'Hugging Face'],
    github: 'https://github.com/ajtiwari1/quantizellm-engine',
    demo: 'https://github.com/ajtiwari1',
    status: 'Open Source',
  },
];

const categories = ['All Projects', 'LLMs & Agents', 'Computer Vision', 'MLOps & Infra', 'Healthcare AI'];

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
              <span>PRODUCTION SYSTEMS &amp; RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Flagship{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                AI Architectures
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
              High-impact solutions spanning Large Language Models, Multi-Modal Computer Vision, and
              distributed low-latency inference pipelines.
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
