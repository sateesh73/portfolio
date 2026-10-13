import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechMatrix } from './components/TechMatrix';
import { CareerTimeline } from './components/CareerTimeline';
import { DecisionLoop } from './components/DecisionLoop';
import { Payloads } from './components/Payloads';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  const [crtActive, setCrtActive] = useState(true);

  // Butter-Smooth Momentum Scrolling via Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (crtActive) {
      document.body.classList.remove('scanlines-off');
    } else {
      document.body.classList.add('scanlines-off');
    }
  }, [crtActive]);

  const handleToggleCrt = () => {
    setCrtActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0b0d12] text-[#e2e8f0] relative">
      {/* CRT Scanline Overlay */}
      <div className="scanlines-overlay" aria-hidden="true" />

      {/* Ambient Subtle Background Grid */}
      <div className="ambient-grid" aria-hidden="true" />

      {/* 3D Floating Terminal Keycap Header */}
      <Header onToggleCrt={handleToggleCrt} crtActive={crtActive} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Hero Section (Contains Integrated HeroTerminal Console) */}
        <Hero />
        <TechMatrix />
        <CareerTimeline />
        <DecisionLoop />
        <Payloads />
        {/* Dedicated SQLite Contact Form */}
        <ContactForm />
      </main>

      {/* Telemetry Footer */}
      <Footer />
    </div>
  );
}

export default App;
