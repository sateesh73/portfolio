import React from 'react';
import { Terminal, Download, Sparkles, Cpu } from 'lucide-react';
import { WaveformCanvas } from './WaveformCanvas';
import { HeroTerminal } from './HeroTerminal';
import { playKeyClick } from '../utils/audio';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    playKeyClick(640, 'sine', 0.04);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center z-10 overflow-hidden">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Systems Architecture Narrative & Direct CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[rgba(229,164,66,0.08)] border border-[rgba(229,164,66,0.28)] text-[#e5a442] text-xs font-mono tracking-wider mb-5 shadow-[0_0_14px_rgba(229,164,66,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399] animate-pulse-glow" />
              <span>RUNTIME: 7+ YRS ACTIVE // TRANSUNION &amp; EX-IBM</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.1] mb-5">
              SATEESH VARMA <br />
              <span className="text-[#e5a442] drop-shadow-[0_0_20px_rgba(229,164,66,0.25)]">
                SENIOR SYSTEMS ARCHITECT
              </span>
            </h1>

            <p className="font-mono text-sm sm:text-[14.5px] text-[#94a3b8] leading-relaxed max-w-xl mb-7">
              Specialized in architecting high-throughput distributed microservices, ultra-low-latency event streaming backbones on Apache Kafka, and enterprise-grade autonomous AI multi-agent workflows.
            </p>

            {/* Telemetry Metric Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="px-3 py-1.5 bg-[#151923] border border-[rgba(148,163,184,0.14)] rounded-md text-xs font-mono flex items-center gap-1.5 shadow-sm">
                <span className="text-[#64748b]">CORE:</span>
                <span className="text-[#e5a442] font-semibold">JAVA 21 / LOOM</span>
              </div>
              <div className="px-3 py-1.5 bg-[#151923] border border-[rgba(148,163,184,0.14)] rounded-md text-xs font-mono flex items-center gap-1.5 shadow-sm">
                <span className="text-[#64748b]">STREAM:</span>
                <span className="text-[#e5a442] font-semibold">KAFKA (&gt;12.5M/DAY)</span>
              </div>
              <div className="px-3 py-1.5 bg-[#151923] border border-[rgba(148,163,184,0.14)] rounded-md text-xs font-mono flex items-center gap-1.5 shadow-sm">
                <span className="text-[#64748b]">CLOUD:</span>
                <span className="text-[#38bdf8] font-semibold">OPENSHIFT / AWS</span>
              </div>
              <div className="px-3 py-1.5 bg-[#151923] border border-[rgba(148,163,184,0.14)] rounded-md text-xs font-mono flex items-center gap-1.5 shadow-sm">
                <span className="text-[#64748b]">NODE:</span>
                <span className="text-[#94a3b8]">BLR (12.97° N, 77.59° E)</span>
              </div>
            </div>

            {/* 3D Tactile CTA Keycaps */}
            <div className="flex flex-wrap items-center gap-3.5 mb-4">
              <button onClick={handleScrollToContact} className="btn-primary-3d">
                <Terminal size={17} />
                <span>[INITIATE_TRANSMISSION -&gt;]</span>
              </button>

              <a
                href="https://github.com/sateesh73"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playKeyClick(580, 'sine', 0.04)}
                className="btn-secondary-3d"
              >
                <Download size={17} />
                <span>[DOWNLOAD_SYS_PROFILE.BIN]</span>
              </a>
            </div>

            {/* Quick interactive note */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#64748b] mt-2">
              <Cpu size={13} className="text-[#e5a442]" />
              <span>Use the interactive terminal console on the right to navigate the system directly.</span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Mounted in 2D Waveform Stage (Photo Removed) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px]">
            {/* 2D Motion Waveform Canvas Backdrop */}
            <WaveformCanvas />

            {/* Floating Terminal Stage Container */}
            <div className="relative z-10 w-full max-w-[560px] flex items-center justify-center p-2">
              {/* HUD Diagnostic Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#b87e2b] pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#b87e2b] pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#b87e2b] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#b87e2b] pointer-events-none" />

              {/* Top Floating HUD Status Badge */}
              <div className="absolute -top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#10131b]/95 border border-[rgba(229,164,66,0.35)] text-[10.5px] font-mono text-[#e5a442] shadow-[0_6px_14px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#34d399]" />
                <span>ORION-9 TELEMETRY ENGINE</span>
              </div>

              {/* Bottom Floating HUD Status Badge */}
              <div className="absolute -bottom-4 right-4 z-20 px-2.5 py-1 rounded bg-[#10131b]/95 border border-[rgba(56,189,248,0.35)] text-[10.5px] font-mono text-[#38bdf8] shadow-[0_6px_14px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>INTERACTIVE_CONSOLE // 60 FPS</span>
              </div>

              {/* The Computer Terminal Console (Replacing the previous photo) */}
              <HeroTerminal />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
