import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Zap,
  Sliders,
  Play,
  RotateCcw,
  Sparkles,
  BarChart2,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export default function AILab() {
  const [activeTab, setActiveTab] = useState('neural-net'); // 'neural-net' or 'nlp-analyzer'

  // Neural Net state
  const [inputs, setInputs] = useState([0.8, -0.4, 0.6]);
  const [activation, setActivation] = useState('GELU'); // GELU, ReLU, Sigmoid
  const [isPropagating, setIsPropagating] = useState(false);
  const [pulseStep, setPulseStep] = useState(0);

  // NLP Analyzer state
  const [sampleText, setSampleText] = useState(
    'The transformer model demonstrates astonishing reasoning capability and sub-10ms inference throughput!'
  );
  const [tokens, setTokens] = useState([]);
  const [sentiment, setSentiment] = useState({ label: 'Highly Positive', score: 94, tone: 'Technical / Analytical' });

  // Compute forward pass for neural net simulation
  const applyActivation = (x, fn) => {
    switch (fn) {
      case 'ReLU':
        return Math.max(0, x);
      case 'Sigmoid':
        return 1 / (1 + Math.exp(-x));
      case 'GELU':
      default:
        return 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
    }
  };

  // Hidden layer 1 nodes (4 nodes)
  const weights1 = [
    [0.7, -0.3, 0.5],
    [-0.5, 0.8, 0.2],
    [0.3, 0.4, -0.6],
    [0.9, -0.2, 0.1],
  ];
  const h1 = weights1.map((w) =>
    applyActivation(
      w[0] * inputs[0] + w[1] * inputs[1] + w[2] * inputs[2],
      activation
    )
  );

  // Hidden layer 2 nodes (3 nodes)
  const weights2 = [
    [0.6, -0.4, 0.5, 0.2],
    [0.2, 0.7, -0.3, 0.8],
    [-0.5, 0.3, 0.6, -0.2],
  ];
  const h2 = weights2.map((w) =>
    applyActivation(
      w[0] * h1[0] + w[1] * h1[1] + w[2] * h1[2] + w[3] * h1[3],
      activation
    )
  );

  // Output layer (2 nodes - Class A vs Class B)
  const outA = Math.max(0.01, applyActivation(0.8 * h2[0] - 0.4 * h2[1] + 0.5 * h2[2], 'Sigmoid'));
  const outB = Math.max(0.01, applyActivation(-0.6 * h2[0] + 0.9 * h2[1] - 0.3 * h2[2], 'Sigmoid'));
  const sumOut = outA + outB;
  const probA = Math.round((outA / sumOut) * 100);
  const probB = 100 - probA;

  const triggerPropagation = () => {
    setIsPropagating(true);
    setPulseStep(1);
    setTimeout(() => setPulseStep(2), 250);
    setTimeout(() => setPulseStep(3), 500);
    setTimeout(() => {
      setPulseStep(4);
      setIsPropagating(false);
    }, 750);
  };

  // NLP Tokenizer analysis simulation
  useEffect(() => {
    if (!sampleText.trim()) {
      setTokens([]);
      return;
    }
    const words = sampleText.split(/\s+/).filter(Boolean);
    const tokenized = words.map((w, idx) => ({
      text: w,
      weight: Math.min(1, Math.max(0.2, 0.3 + ((w.length * 7 + idx * 11) % 70) / 100)),
    }));
    setTokens(tokenized);

    const lower = sampleText.toLowerCase();
    const positiveWords = ['astonishing', 'great', 'awesome', 'efficient', 'breakthrough', 'superb', 'fast', 'cutting-edge'];
    const negativeWords = ['slow', 'bottleneck', 'error', 'bug', 'failure', 'poor', 'degraded', 'bad'];

    let posCount = 0;
    let negCount = 0;
    positiveWords.forEach((pw) => {
      if (lower.includes(pw)) posCount++;
    });
    negativeWords.forEach((nw) => {
      if (lower.includes(nw)) negCount++;
    });

    if (posCount > negCount) {
      setSentiment({
        label: 'Positive / High Confidence',
        score: Math.min(98, 75 + posCount * 8),
        tone: 'Insightful & Technical',
      });
    } else if (negCount > posCount) {
      setSentiment({
        label: 'Anomaly / Negative Alert',
        score: Math.max(15, 40 - negCount * 10),
        tone: 'Diagnostic / Critical',
      });
    } else {
      setSentiment({
        label: 'Balanced / Neutral',
        score: 52,
        tone: 'Informational',
      });
    }
  }, [sampleText]);

  return (
    <section id="ailab" className="relative py-24 sm:py-32 bg-[#060a1c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE EXPERIMENTAL SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              AI Neural Lab
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Test and visualize live deep learning mathematical operations and NLP token embeddings
            directly inside your browser runtime.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 mt-4">
            <button
              onClick={() => setActiveTab('neural-net')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeTab === 'neural-net'
                  ? 'bg-cyan-500 text-black font-semibold shadow-neon-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Forward Propagation Visualizer</span>
            </button>
            <button
              onClick={() => setActiveTab('nlp-analyzer')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeTab === 'nlp-analyzer'
                  ? 'bg-purple-500 text-white font-semibold shadow-neon-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Token Attention &amp; Sentiment Analyzer</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Neural Network Visualizer */}
        {activeTab === 'neural-net' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl glass-panel-glow p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-8"
          >
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-mono text-slate-400">Activation Function:</span>
                {['GELU', 'ReLU', 'Sigmoid'].map((act) => (
                  <button
                    key={act}
                    onClick={() => setActivation(act)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activation === act
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                        : 'text-slate-400 hover:text-white bg-white/5'
                    }`}
                  >
                    {act}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setInputs([0.5, 0.5, 0.5])}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5"
                  title="Reset inputs"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={triggerPropagation}
                  disabled={isPropagating}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold hover:shadow-neon-cyan transition-all disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isPropagating ? 'Propagating Pulse...' : 'Forward Pass'}</span>
                </button>
              </div>
            </div>

            {/* Neural Net Architecture Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center py-4">
              {/* Layer 0: Inputs */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">INPUT LAYER (x)</span>
                  <span className="text-[10px] font-mono text-slate-400">3 Features</span>
                </div>
                {inputs.map((val, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">x_{idx + 1}</span>
                      <span className="text-cyan-300 font-bold">{val.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.05"
                      value={val}
                      onChange={(e) => {
                        const copy = [...inputs];
                        copy[idx] = parseFloat(e.target.value);
                        setInputs(copy);
                      }}
                      className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Layer 1: Hidden Layer 1 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-semibold">HIDDEN LAYER 1</span>
                  <span className="text-[10px] font-mono text-slate-400">4 Neurons</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {h1.map((v, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        scale: pulseStep === 2 ? 1.08 : 1,
                        borderColor: pulseStep === 2 ? '#00f2fe' : 'rgba(255,255,255,0.08)',
                      }}
                      className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-center font-mono"
                    >
                      <div className="text-[10px] text-slate-400">h1_{idx + 1}</div>
                      <div className="text-xs font-bold text-cyan-300">{v.toFixed(3)}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-slate-400 text-center pt-1">
                  σ: {activation} activated
                </div>
              </div>

              {/* Layer 2: Hidden Layer 2 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 font-semibold">HIDDEN LAYER 2</span>
                  <span className="text-[10px] font-mono text-slate-400">3 Neurons</span>
                </div>
                <div className="space-y-2">
                  {h2.map((v, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        scale: pulseStep === 3 ? 1.08 : 1,
                        borderColor: pulseStep === 3 ? '#a855f7' : 'rgba(255,255,255,0.08)',
                      }}
                      className="p-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between font-mono"
                    >
                      <span className="text-[11px] text-slate-400">h2_{idx + 1}</span>
                      <span className="text-xs font-bold text-purple-300">{v.toFixed(3)}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Layer 3: Output Classification */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 font-semibold">SOFTMAX PROBABILITIES</span>
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">Class Alpha (Signal)</span>
                      <span className="text-cyan-400 font-bold">{probA}%</span>
                    </div>
                    <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-cyan-400 h-full rounded-full"
                        animate={{ width: `${probA}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">Class Beta (Noise)</span>
                      <span className="text-purple-400 font-bold">{probB}%</span>
                    </div>
                    <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-purple-500 h-full rounded-full"
                        animate={{ width: `${probB}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-black/40 text-[11px] font-mono text-center text-slate-300 border border-white/5 mt-2">
                  Winner: <strong className="text-white">{probA >= probB ? 'Class Alpha' : 'Class Beta'}</strong>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: NLP Attention & Sentiment Analyzer */}
        {activeTab === 'nlp-analyzer' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl glass-panel-glow p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6"
          >
            {/* Input area */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>INPUT PROMPT / SEQUENCE:</span>
                <span className="text-slate-400 text-[11px]">Type or modify text below</span>
              </label>
              <textarea
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                rows={3}
                className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Enter prompt to evaluate..."
              />
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Presets:</span>
              {[
                'The vision model delivers remarkable accuracy and lightning fast response time.',
                'Critical bottleneck detected in gradient sync across distributed nodes.',
                'Synthesizing latent embeddings using self-attention and dynamic routing.',
              ].map((preset, i) => (
                <button
                  key={i}
                  onClick={() => setSampleText(preset)}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-colors"
                >
                  Preset {i + 1}
                </button>
              ))}
            </div>

            {/* Token Attention Heatmap */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  TOKEN EMBEDDING &amp; ATTENTION SALIENCY
                </span>
                <span className="text-[10px] font-mono text-slate-400">{tokens.length} Tokens Parsed</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {tokens.map((tok, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: `rgba(0, 242, 254, ${tok.weight * 0.35})`,
                      borderColor: `rgba(0, 242, 254, ${tok.weight * 0.6})`,
                    }}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border text-slate-100 hover:scale-105 transition-transform cursor-default"
                    title={`Token: ${tok.text} | Saliency: ${(tok.weight * 100).toFixed(0)}%`}
                  >
                    {tok.text}
                    <span className="ml-1 text-[9px] opacity-75 text-cyan-300">
                      {(tok.weight * 10).toFixed(1)}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400">PREDICTED CLASSIFICATION</div>
                <div className="text-base font-bold font-mono text-emerald-400 mt-1">{sentiment.label}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400">CONFIDENCE SCORE</div>
                <div className="text-base font-bold font-mono text-cyan-400 mt-1">{sentiment.score}%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400">DETECTED TONE</div>
                <div className="text-base font-bold font-mono text-purple-400 mt-1">{sentiment.tone}</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
