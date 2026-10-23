import React from 'react';
import NeuralCanvas from './components/NeuralCanvas.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AILab from './components/AILab.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#040714] text-slate-100 cyber-grid selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Neural Synapse Canvas */}
      <NeuralCanvas />

      {/* Cyber Cursor Follower (Desktop) */}
      <CustomCursor />

      {/* Ambient Lighting Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <Projects />
          <AILab />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
