import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, BadgeAlert, Code2, Terminal, Send } from 'lucide-react';
import { playKeyClick } from '../utils/audio';

interface LogEntry {
  type: 'user' | 'output';
  content: string | React.ReactNode;
}

export const CliTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: 'output',
      content: (
        <span className="text-[#64748b] text-[11px]">
          [SATEESH_VARMA KERNEL READY] - TYPE <span className="text-[#e5a442] font-semibold">help</span> OR CLICK OPERATIONS BELOW:
        </span>
      ),
    },
    {
      type: 'user',
      content: 'sateesh@transunion_node:~$ echo "Senior Distributed Systems Architect // 7+ YOE"',
    },
    {
      type: 'output',
      content: (
        <span className="text-[#94a3b8]">
          Output: High-throughput Kafka backends, Spring Boot microservices, OpenShift/AWS orchestration & Enterprise AI agents.
        </span>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (raw: string) => {
    playKeyClick(580, 'sine', 0.04);
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    const newLogs: LogEntry[] = [
      ...logs,
      {
        type: 'user',
        content: `guest@transunion_node:~$ ${raw}`,
      },
    ];

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs">
            <div className="text-[#e5a442] font-semibold">AVAILABLE OPERATIONS:</div>
            <div>• <span className="text-[#38bdf8]">contact</span> : Display direct comms endpoints</div>
            <div>• <span className="text-[#38bdf8]">stack</span> : View core distributed systems telemetry</div>
            <div>• <span className="text-[#38bdf8]">download_resume</span> : Fetch official sys profile package</div>
            <div>• <span className="text-[#38bdf8]">whoami</span> : Authenticated session credentials</div>
            <div>• <span className="text-[#38bdf8]">clear</span> : Flush buffer console</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs">
            <div className="text-[#e5a442] font-semibold">[VERIFIED TRANSMISSION ROUTES]</div>
            <div>Email: <a href="mailto:sateeshvarma2360@gmail.com" className="text-[#38bdf8] underline">sateeshvarma2360@gmail.com</a></div>
            <div>Phone: <a href="tel:+919109576423" className="text-[#f5bc65] underline">+91 9109576423</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/sateesh-varma/" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] underline">linkedin.com/in/sateesh-varma</a></div>
            <div>GitHub: <a href="https://github.com/sateesh73" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] underline">github.com/sateesh73</a></div>
          </div>
        );
        break;

      case 'stack':
        outputNode = (
          <div className="space-y-1 text-xs">
            <div className="text-[#e5a442] font-semibold">[RUNTIME SPECIFICATION // ARCH_TOPOLOGY]</div>
            <div>Core: Java 17/21, Spring Boot 3.x, Hibernate, Project Loom (Virtual Threads)</div>
            <div>Streaming: Apache Kafka, Partition Optimization, Dead-Letter Queues, Redis Cluster</div>
            <div>Infrastructure: Red Hat OpenShift, Docker, AWS ECS/S3/RDS, Helm, Terraform</div>
            <div>Intelligence: Enterprise RAG Pipelines, Multi-Agent Workflows, Spring AI</div>
            <div>Frontend: React 18, TypeScript, WebSocket High-Frequency Telemetry</div>
          </div>
        );
        break;

      case 'download_resume':
      case 'resume':
        outputNode = (
          <div className="text-xs space-y-1">
            <div className="text-[#34d399]">[SYS_PROFILE_ARCHIVE GENERATED]</div>
            <div>Direct access ready at <a href="https://github.com/sateesh73" target="_blank" rel="noopener noreferrer" className="text-[#f5bc65] underline">github.com/sateesh73</a> or via direct contact email.</div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <span className="text-[#94a3b8] text-xs">
            IDENTITY: GUEST_AUTHORIZED // NODE: BLR_STATION // ROLE: SATEESH_VARMA_PORTFOLIO
          </span>
        );
        break;

      default:
        outputNode = (
          <span className="text-[#f87171] text-xs">
            COMMAND NOT RECOGNIZED: '{raw}'. Type 'help' for operation manual.
          </span>
        );
        break;
    }

    newLogs.push({ type: 'output', content: outputNode });
    setLogs(newLogs);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="transmission" className="py-24 relative z-10">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_05</span>
            <span className="text-[#64748b]">/</span>
            <span>UPLINK_CARRIER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Secure Transmission Terminal
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            Direct comms uplink for Senior Architecture roles, distributed systems consulting, and technical leadership.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* Direct Telemetry Endpoints (5 cols) */}
          <div className="lg:col-span-5 bg-[#151923] border border-[rgba(148,163,184,0.12)] rounded-xl p-7 flex flex-col gap-5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            <div className="font-mono text-xs text-[#e5a442] font-semibold tracking-wider">
              [VERIFIED TRANSMISSION ENDPOINTS]
            </div>

            <a
              href="mailto:sateeshvarma2360@gmail.com"
              className="flex items-center gap-3.5 p-3 bg-[#10131b] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(229,164,66,0.35)] rounded-lg transition-all hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#e5a442]">
                <Mail size={17} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-[#64748b] uppercase">DIRECT INBOX</div>
                <div className="font-mono text-xs sm:text-[13px] text-[#e2e8f0] truncate font-medium">
                  sateeshvarma2360@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+919109576423"
              className="flex items-center gap-3.5 p-3 bg-[#10131b] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(229,164,66,0.35)] rounded-lg transition-all hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#f5bc65]">
                <Phone size={17} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-[#64748b] uppercase">VOICE SIGNAL</div>
                <div className="font-mono text-xs sm:text-[13px] text-[#f5bc65] truncate font-medium">
                  +91 9109576423
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sateesh-varma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 bg-[#10131b] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(229,164,66,0.35)] rounded-lg transition-all hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#38bdf8]">
                <BadgeAlert size={17} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-[#64748b] uppercase">PROFESSIONAL NETWORK</div>
                <div className="font-mono text-xs sm:text-[13px] text-[#38bdf8] truncate font-medium">
                  linkedin.com/in/sateesh-varma
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sateesh73"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 bg-[#10131b] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(229,164,66,0.35)] rounded-lg transition-all hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#e2e8f0]">
                <Code2 size={17} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-[#64748b] uppercase">CODE REPOSITORY</div>
                <div className="font-mono text-xs sm:text-[13px] text-[#e2e8f0] truncate font-medium">
                  github.com/sateesh73
                </div>
              </div>
            </a>

            <div className="p-3 bg-[#10131b] rounded-lg border border-[rgba(148,163,184,0.08)] flex items-center justify-between font-mono text-[11px] text-[#94a3b8]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                AVAILABLE FOR ARCHITECT ROLES
              </span>
              <span className="text-[#e5a442]">UTC+05:30 (IST)</span>
            </div>
          </div>

          {/* Interactive Retro CLI Emulator (7 cols) */}
          <div className="lg:col-span-7 bg-[#080a0e] border border-[rgba(229,164,66,0.3)] rounded-xl p-6 shadow-[0_16px_36px_rgba(0,0,0,0.7),0_0_24px_rgba(229,164,66,0.1)] flex flex-col justify-between">
            
            {/* Titlebar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(148,163,184,0.1)] font-mono text-xs text-[#e5a442]">
              <div className="flex items-center gap-2">
                <Terminal size={15} />
                <span>SATEESH_SHELL_v4.8.2 // CONSOLE_SESSION_01</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#242b3a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgba(229,164,66,0.4)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgba(52,211,153,0.4)]" />
              </div>
            </div>

            {/* Output Log */}
            <div
              ref={logContainerRef}
              className="min-h-[220px] max-h-[300px] overflow-y-auto space-y-2.5 mb-4 pr-1 font-mono text-xs leading-relaxed"
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

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                type="button"
                onClick={() => handleCommand('help')}
                className="chip-cmd-3d"
              >
                [help]
              </button>
              <button
                type="button"
                onClick={() => handleCommand('contact')}
                className="chip-cmd-3d"
              >
                [contact]
              </button>
              <button
                type="button"
                onClick={() => handleCommand('stack')}
                className="chip-cmd-3d"
              >
                [stack]
              </button>
              <button
                type="button"
                onClick={() => handleCommand('download_resume')}
                className="chip-cmd-3d"
              >
                [download_resume]
              </button>
              <button
                type="button"
                onClick={() => handleCommand('whoami')}
                className="chip-cmd-3d"
              >
                [whoami]
              </button>
              <button
                type="button"
                onClick={() => handleCommand('clear')}
                className="chip-cmd-3d ml-auto text-[#64748b]"
              >
                [clear]
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-[#10131b] border border-[rgba(148,163,184,0.12)] rounded-lg p-2 font-mono text-xs">
              <span className="text-[#e5a442] font-semibold whitespace-nowrap pl-1">
                guest@transunion_node:~$
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. 'contact', 'stack', 'help')..."
                className="w-full bg-transparent border-none outline-none text-white placeholder-[#64748b] text-xs font-mono"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn-terminal-3d !py-1 !px-2.5 !text-[11px]"
              >
                <Send size={12} />
                <span>EXEC</span>
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};
