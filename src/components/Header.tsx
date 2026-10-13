import React, { useEffect, useState } from 'react';
import { Terminal, Tv, Volume2, VolumeX, Code2 } from 'lucide-react';
import { playKeyClick, toggleAudioFeedback } from '../utils/audio';

interface HeaderProps {
  onToggleCrt: () => void;
  crtActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleCrt, crtActive }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'matrix', 'chronology', 'decision-loop', 'payloads', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'SYS_INIT' },
    { id: 'matrix', label: 'CORE_MATRIX' },
    { id: 'chronology', label: 'TRACE_CHRONO' },
    { id: 'decision-loop', label: 'DECISION_LOOP' },
    { id: 'payloads', label: 'PAYLOADS' },
    { id: 'contact', label: 'TRANSMISSION' },
  ];

  const handleNavClick = (id: string) => {
    playKeyClick(640, 'sine', 0.035);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudioToggle = () => {
    const nextState = toggleAudioFeedback();
    setAudioActive(nextState);
  };

  const handleCrtToggle = () => {
    playKeyClick(540, 'triangle', 0.04);
    onToggleCrt();
  };

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[min(1320px,calc(100%-32px))] z-50 bg-[#11151e]/85 backdrop-blur-xl border border-[rgba(229,164,66,0.24)] rounded-xl px-4 py-2.5 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.65),0_0_20px_rgba(229,164,66,0.06)]">
      {/* Brand & Telemetry Badge */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1e2433] to-[#121620] border border-[rgba(229,164,66,0.28)] flex items-center justify-center text-[#e5a442] shadow-[0_4px_0_#08090d,0_6px_12px_rgba(0,0,0,0.5)]">
          <Terminal size={18} />
        </div>
        <div className="flex flex-col">
          <div className="font-display font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
            <span>SATEESH_VARMA</span>
            <span className="text-[#e5a442] text-[10.5px]">// HUD_v4.8</span>
          </div>
          <div className="font-mono text-[10.5px] text-[#94a3b8] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_6px_#34d399]"></span>
            <span>SR_ARCHITECT :: DISTRIBUTED_SYS</span>
          </div>
        </div>
      </div>

      {/* 3D Floating Terminal Keycap Buttons */}
      <nav className="hidden lg:flex items-center gap-2" aria-label="Main Navigation">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`btn-terminal-3d ${isActive ? 'active' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? 'bg-[#e5a442] shadow-[0_0_8px_#e5a442]' : 'bg-[#64748b]'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Header Actions (CRT, Audio, GitHub) */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleCrtToggle}
          className="icon-keycap"
          title={crtActive ? 'CRT Scanlines: ON' : 'CRT Scanlines: OFF'}
          aria-label="Toggle CRT Scanlines"
        >
          <Tv size={17} className={crtActive ? 'text-[#e5a442]' : 'text-[#64748b]'} />
        </button>

        <button
          onClick={handleAudioToggle}
          className="icon-keycap"
          title={audioActive ? 'Synthesizer Audio: ON' : 'Synthesizer Audio: OFF'}
          aria-label="Toggle Audio"
        >
          {audioActive ? (
            <Volume2 size={17} className="text-[#e5a442]" />
          ) : (
            <VolumeX size={17} className="text-[#64748b]" />
          )}
        </button>

        <a
          href="https://github.com/sateesh73"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-keycap"
          title="GitHub Profile"
          aria-label="GitHub Profile"
          onClick={() => playKeyClick(700, 'sine', 0.03)}
        >
          <Code2 size={17} />
        </a>
      </div>
    </header>
  );
};
