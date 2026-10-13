import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ArrowDownRight, Sparkles, CornerDownLeft } from 'lucide-react';
import { playKeyClick } from '../utils/audio';

interface HeroTerminalProps {
  onNavigateSection?: (id: string) => void;
}

interface LogEntry {
  type: 'user' | 'system' | 'nav';
  content: string | React.ReactNode;
}

export const HeroTerminal: React.FC<HeroTerminalProps> = ({ onNavigateSection }) => {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: 'system',
      content: (
        <div className="space-y-1">
          <div className="text-[#e5a442] font-semibold flex items-center gap-2">
            <Sparkles size={13} className="text-[#34d399]" />
            <span>SATEESH_SYS KERNEL v4.8 [ONLINE]</span>
          </div>
          <div className="text-[#94a3b8]">
            Senior Distributed Systems Architect // TransUnion &amp; ex-IBM (7+ YOE).
          </div>
          <div className="text-[#64748b] text-[11px]">
            &gt; Type a command or click an operation below to jump across the system:
          </div>
        </div>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  const scrollToSection = (id: string, label: string) => {
    playKeyClick(720, 'sine', 0.04);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigateSection) {
      onNavigateSection(id);
    }
    return (
      <div className="text-[#34d399] flex items-center gap-1.5 font-semibold">
        <ArrowDownRight size={13} />
        <span>NAVIGATING TO // {label.toUpperCase()} [EXEC_OK]</span>
      </div>
    );
  };

  const handleCommand = (raw: string) => {
    playKeyClick(600, 'sine', 0.035);
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    const nextLogs: LogEntry[] = [
      ...logs,
      {
        type: 'user',
        content: `sateesh@systems_hub:~$ ${raw}`,
      },
    ];

    let outputNode: React.ReactNode = null;

    // Navigation and information commands
    if (cmd === 'matrix' || cmd === 'goto matrix' || cmd === 'tech') {
      outputNode = scrollToSection('matrix', 'Core Tech Matrix');
    } else if (cmd === 'chronology' || cmd === 'goto chronology' || cmd === 'experience' || cmd === 'goto experience' || cmd === 'history') {
      outputNode = scrollToSection('chronology', 'Career Telemetry Timeline');
    } else if (cmd === 'decision' || cmd === 'goto decision' || cmd === 'loop' || cmd === 'philosophy') {
      outputNode = scrollToSection('decision-loop', 'Engineering Decision Loop');
    } else if (cmd === 'payloads' || cmd === 'goto payloads' || cmd === 'projects') {
      outputNode = scrollToSection('payloads', 'Deployed Engineering Payloads');
    } else if (cmd === 'contact' || cmd === 'goto contact' || cmd === 'transmission') {
      outputNode = scrollToSection('contact', 'Secure Contact Form');
    } else if (cmd === 'help') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <div className="text-[#e5a442] font-semibold">[TELEMETRY COMMAND REGISTRY]</div>
          <div>• <button type="button" onClick={() => handleCommand('goto matrix')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">goto matrix</button> : Jump to Tech &amp; Architecture Matrix</div>
          <div>• <button type="button" onClick={() => handleCommand('goto experience')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">goto experience</button> : Jump to Career Trace Chronology</div>
          <div>• <button type="button" onClick={() => handleCommand('goto decision')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">goto decision</button> : Jump to Engineering Decision Loop</div>
          <div>• <button type="button" onClick={() => handleCommand('goto payloads')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">goto payloads</button> : Jump to Featured Production Payloads</div>
          <div>• <button type="button" onClick={() => handleCommand('goto contact')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">goto contact</button> : Jump to Direct Transmission Form</div>
          <div>• <button type="button" onClick={() => handleCommand('stack')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">stack</button> : View core distributed systems runtime profile</div>
          <div>• <button type="button" onClick={() => handleCommand('uptime')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">uptime</button> : Check active runtime duration &amp; SLA metrics</div>
          <div>• <button type="button" onClick={() => handleCommand('resume')} className="text-[#38bdf8] underline hover:text-[#f5bc65]">resume</button> : Fetch verified sys profile archive</div>
          <div>• <button type="button" onClick={() => handleCommand('clear')} className="text-[#64748b] underline">clear</button> : Flush terminal buffer</div>
        </div>
      );
    } else if (cmd === 'stack' || cmd === 'skills') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <div className="text-[#e5a442] font-semibold">[CORE DISTRIBUTED RUNTIME SPEC]</div>
          <div>Backend: Java 21 Virtual Threads (Loom), Spring Boot 3.x, ZGC Collector</div>
          <div>Streaming: Apache Kafka (&gt;12.5M msgs/day), Zero-Loss DLQ Topologies, Redis</div>
          <div>Fabric: Red Hat OpenShift, AWS ECS, Docker, Helm, Terraform GitOps</div>
          <div>AI Intelligence: Spring AI, Autonomous Agents, Vector Semantic Caching, Bedrock</div>
        </div>
      );
    } else if (cmd === 'uptime' || cmd === 'status') {
      outputNode = (
        <div className="space-y-1 text-xs">
          <div className="text-[#34d399] font-semibold">[SYSTEM TELEMETRY HEALTH REPORT]</div>
          <div>Active Runtime: 7+ Years Continuous Professional Tenure</div>
          <div>Enterprise Nodes: TransUnion (Bangalore) &amp; ex-IBM India</div>
          <div>SLA Reliability: 99.995% Uptime Benchmark // Zero-Loss Idempotent Ingestion</div>
          <div>Cluster Health: NOMINAL // Ready for Principal / Lead Architecture Roles</div>
        </div>
      );
    } else if (cmd === 'resume' || cmd === 'download_resume') {
      outputNode = (
        <div className="text-xs space-y-1">
          <div className="text-[#34d399]">[SYS_PROFILE_ARCHIVE PREPARED]</div>
          <div>Direct access available at <a href="https://github.com/sateesh73" target="_blank" rel="noopener noreferrer" className="text-[#f5bc65] underline">github.com/sateesh73</a>.</div>
        </div>
      );
    } else if (cmd === 'whoami') {
      outputNode = (
        <span className="text-[#94a3b8] text-xs">
          IDENTITY: GUEST_AUTHORIZED // NODE: BLR_STATION // ACCESS: LEVEL_4_HUD
        </span>
      );
    } else {
      outputNode = (
        <span className="text-[#f87171] text-xs">
          COMMAND NOT RECOGNIZED: '{raw}'. Type 'help' or click suggestions below.
        </span>
      );
    }

    nextLogs.push({ type: 'system', content: outputNode });
    setLogs(nextLogs);
    setInputVal('');
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleFocusInput}
      className="relative w-full max-w-[560px] bg-[#0c0f16]/95 border-2 border-[#1f2638] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_28px_rgba(229,164,66,0.14)] flex flex-col overflow-hidden backdrop-blur-xl transition-all hover:border-[rgba(229,164,66,0.4)]"
    >
      {/* Computer Workstation Hardware Bezel Top Bar */}
      <div className="bg-[#141926] px-3.5 py-1.5 border-b border-[#232b3e] flex items-center justify-between font-mono text-[11px] text-[#64748b]">
        {/* Chassis Ventilation Slits & Terminal Model */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1 bg-[#283247] rounded-sm" />
            <span className="w-1.5 h-1 bg-[#283247] rounded-sm" />
            <span className="w-1.5 h-1 bg-[#283247] rounded-sm" />
            <span className="w-1.5 h-1 bg-[#283247] rounded-sm" />
          </div>
          <span className="text-[10px] text-[#94a3b8] tracking-widest uppercase">
            TERMINAL // MODEL SV-8400
          </span>
        </div>

        {/* Dual Hardware Activity LEDs */}
        <div className="flex items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1 text-[#34d399]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_6px_#34d399]" />
            PWR
          </span>
          <span className="flex items-center gap-1 text-[#e5a442]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5a442] animate-pulse shadow-[0_0_6px_#e5a442]" />
            DISK
          </span>
        </div>
      </div>

      {/* Retro-Futuristic Terminal Window Header */}
      <div className="bg-[#10141f] px-3.5 py-2 border-b border-[rgba(148,163,184,0.12)] flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          {/* Hardware CRT Window Controls */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]/80 shadow-[0_0_6px_rgba(248,113,113,0.4)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5bc65]/80 shadow-[0_0_6px_rgba(245,188,101,0.4)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]/80 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
          </div>
          <span className="text-[#64748b] text-[10px] pl-1">|</span>
          <div className="flex items-center gap-1.5 text-[#e5a442] font-semibold text-[11px]">
            <Terminal size={13} />
            <span>SATEESH_COMMAND_CONSOLE // TTY_01</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10.5px]">
          <span className="text-[#34d399] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Screen CRT Buffer (Click to Focus) */}
      <div
        ref={logRef}
        className="p-4 min-h-[250px] max-h-[290px] overflow-y-auto space-y-2.5 font-mono text-xs leading-relaxed select-text bg-[#090c12]/95 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)] cursor-text"
      >
        {logs.map((log, idx) => (
          <div
            key={idx}
            className={log.type === 'user' ? 'text-[#f5bc65]' : 'text-[#e2e8f0]'}
          >
            {log.content}
          </div>
        ))}
      </div>

      {/* Quick Interactive Command Suggestion Chips */}
      <div className="px-3 py-2 bg-[#0d1018] border-t border-[rgba(148,163,184,0.08)] flex flex-wrap gap-1.5 items-center">
        <span className="text-[10px] text-[#64748b] font-mono mr-1">QUICK JUMP:</span>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('goto matrix'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [matrix]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('goto experience'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [experience]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('goto decision'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [decision]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('goto payloads'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [payloads]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('goto contact'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px] text-[#34d399]"
        >
          [contact]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('stack'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [stack]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('uptime'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px] text-[#38bdf8]"
        >
          [uptime]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('help'); }}
          className="chip-cmd-3d !py-0.5 !px-2 !text-[10.5px]"
        >
          [help]
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleCommand('clear'); }}
          className="chip-cmd-3d !py-0.5 !px-1.5 !text-[10.5px] ml-auto text-[#64748b]"
          title="Clear Terminal"
        >
          [clear]
        </button>
      </div>

      {/* Interactive Command Input Form */}
      <form
        onSubmit={handleSubmit}
        className="px-3.5 py-2.5 bg-[#121622] border-t border-[rgba(148,163,184,0.12)] flex items-center gap-2 font-mono text-xs"
      >
        <span className="text-[#e5a442] font-semibold whitespace-nowrap text-xs">
          sateesh@systems_hub:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. 'goto matrix', 'contact', 'uptime')..."
          className="w-full bg-transparent border-none outline-none text-white placeholder-[#64748b] text-xs font-mono"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className="btn-terminal-3d !py-1 !px-2.5 !text-[11px] flex items-center gap-1"
          title="Execute Command"
        >
          <CornerDownLeft size={11} />
          <span>EXEC</span>
        </button>
      </form>
    </div>
  );
};
