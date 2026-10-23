# Ajay Tiwari — AI & Machine Learning Engineer Portfolio

A cutting-edge, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, featuring an interactive dark cyber/tech visual aesthetic with real-time hardware-accelerated animations.

🌐 **Live URL**: [https://ajtiwari1.github.io](https://ajtiwari1.github.io)

---

## ✨ Key Features & Interactive Animations

- 🧠 **Interactive Neural Network / Constellation Canvas**:
  - High-performance 60+ FPS Canvas 2D background.
  - Dynamically renders interconnected synaptic nodes that track mouse movement with gentle gravitational pull.
  - Periodic synaptic energy pulses traveling along active connections.

- 🎯 **3D Mouse Tilt & Dynamic Glare Cards**:
  - Real-time perspective transforms on project cards responding to exact cursor coordinates.
  - Interactive radial light glare that follows mouse position.

- 🕹️ **Interactive AI Neural Lab**:
  - **Forward Propagation Visualizer**: Adjust input features ($x_1, x_2, x_3$), select activation functions (`GELU`, `ReLU`, `Sigmoid`), and watch real-time forward propagation pulses illuminate network layers to compute Softmax classification probabilities.
  - **Live NLP Token & Sentiment Analyzer**: Type custom prompts and inspect real-time token embeddings, attention saliency scores, and sentiment distribution.

- ⚡ **Real-Time Inference Telemetry Simulation**:
  - Hero card with live simulated CUDA streams, token generation latency ($11.4\text{ ms}$ P99), and VRAM metrics.
  - "Run Test" trigger to stream simulated token-by-token generation.

- 🛸 **Cyber Cursor Follower**:
  - Smooth lerp outer glow ring with magnetic hover reaction over interactive elements.
  - Gracefully disabled on touch devices for mobile accessibility.

- 🛠️ **Categorized Skills Matrix**:
  - Generative AI & LLMs, Deep Learning & Vision, MLOps & Infra, Languages & Core Systems.
  - Animated proficiency indicators that fill on scroll.

- ⏳ **Chronological Career Timeline**:
  - Glowing timeline milestones detailing real production AI impact and tech stacks.

- 📬 **Interactive Transmission / Contact Terminal**:
  - One-click email copy with instant feedback.
  - Message submission triggering festive cyber confetti celebration (`canvas-confetti`).

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 3 + Custom Glassmorphism & Cyber Grids
- **Animations**: Framer Motion 12 + HTML5 Canvas API
- **Icons**: Lucide React + Custom SVGs
- **Celebration**: Canvas-Confetti

---

## 🛠️ Local Development

To run the portfolio locally:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
# Build optimized production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Automated Deployment to GitHub Pages

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

Whenever you push to the `main` or `master` branch:
1. GitHub Actions automatically installs dependencies.
2. Builds the Vite production bundle.
3. Deploys the static assets directly to **GitHub Pages** at `https://ajtiwari1.github.io`.

To ensure GitHub Pages uses Actions:
1. Go to your GitHub repository: `github.com/ajtiwari1/ajtiwari1.github.io`
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment > Source**, select **GitHub Actions**.
