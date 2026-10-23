# Ajay Tiwari — Senior AI/ML & Generative AI Engineer Portfolio

A cutting-edge, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, featuring an interactive dark cyber/tech visual aesthetic with real-time hardware-accelerated animations.

🌐 **Live URL**: [https://ajtiwari1.github.io](https://ajtiwari1.github.io)

---

## 🌿 Multi-Branch Architecture & Deployment

This repository uses a dual-branch strategy designed for clean static hosting on GitHub Pages while keeping your previous portfolio completely intact:

| Branch | Content | Purpose |
| :--- | :--- | :--- |
| **`main`** | **Build format only** (`index.html`, `assets/`, `resume.pdf`, `.nojekyll`) | Production branch served by GitHub Pages |
| **`source`** | Full React 19 + Vite 6 source code | Active development & components |
| **`gh-pages`** | Previous portfolio (preserved on GitHub) | Fallback option to switch back anytime |

> [!TIP]
> **Switch between portfolios anytime**:
> In GitHub under **Settings > Pages > Branch**, simply select:
> - `main` (root `/`) ➔ Shows this new AI & Machine Learning animated portfolio.
> - `gh-pages` (root `/`) ➔ Instantly switches back to your previous portfolio.

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
  - "Simulate Chain" trigger to stream simulated token-by-token generation.

- 📄 **Direct Resume Access & Interactive Viewer**:
  - Top navigation bar & Hero section **"Resume / CV"** button.
  - Interactive in-browser resume viewer modal with 1-click **Download PDF** (`Ajay_Tiwari_Resume.pdf`).

- 🛸 **Cyber Cursor Follower**:
  - Smooth lerp outer glow ring with magnetic hover reaction over interactive elements.
  - Gracefully disabled on touch devices for mobile accessibility.

- 🛠️ **Categorized Skills Matrix & Official Credential**:
  - Anthropic **Claude Certified Architect – Professional** badge with direct Credly verification link.
  - Generative AI, Deep Learning & Vision, Frameworks, Cloud & Edge Deployments.

- ⏳ **Chronological Career Timeline (7+ Years)**:
  - Accenture, Audax Labs, WalkingTree Technology, Asadel Technologies, and Bharat Aero.

---

## 🛠️ Local Development & Deployment Workflow

### 1. Run Locally
```bash
# Start local dev server
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Update the Production Build (`main` branch)
Whenever you want to build and update the `main` branch:
```bash
npm run deploy
```
This automatically compiles the React application into `dist/` and commits the compiled files into the `main` branch.

### 3. Push to GitHub
```bash
# Push the production build branch (for GitHub Pages)
git push origin main

# Push the source code branch
git push origin source
```
