import React, { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
  const [utcClock, setUtcClock] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcClock(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#080a0e] border-t border-[rgba(148,163,184,0.12)] py-6 mt-16 font-mono text-xs text-[#64748b] relative z-10">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[#e5a442] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e5a442] animate-pulse" />
            NODE_BLR_01
          </span>
          <span className="text-[rgba(148,163,184,0.2)]">|</span>
          <span>PING: 12ms</span>
          <span className="text-[rgba(148,163,184,0.2)]">|</span>
          <span>[7+ YRS ACTIVE RUNTIME]</span>
          <span className="text-[rgba(148,163,184,0.2)]">|</span>
          <span>TRANSUNION & EX-IBM</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sateesh73"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e5a442] transition-colors"
          >
            [GITHUB]
          </a>
          <a
            href="https://www.linkedin.com/in/sateesh-varma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e5a442] transition-colors"
          >
            [LINKEDIN]
          </a>
          <span className="text-[#94a3b8]">{utcClock}</span>
        </div>

      </div>
    </footer>
  );
};
