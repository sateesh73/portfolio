import React from 'react';
import { Terminal, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const DecisionLoop: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Automate',
      quote: '"If it works by hand, script it."',
      desc: 'Eliminate manual drift across builds and deployments. Every repetitive task becomes a deterministic Bash script, CI/CD pipeline step, or automated container migration.',
      cmd: '$ ./automation_guard.sh --apply',
      icon: <Terminal size={18} className="text-[#e5a442]" />,
    },
    {
      num: '02',
      title: 'Document',
      quote: '"Update every file the next agent reads."',
      desc: 'Maintain living architecture decision records (ADRs), strict API contracts, and schema definitions. Code clarity is incomplete without context the next engineer or LLM requires.',
      cmd: 'REF://SCHEMA_CONTRACTS_V2.MD',
      icon: <FileText size={18} className="text-[#f5bc65]" />,
    },
    {
      num: '03',
      title: 'Verify',
      quote: '"Run lint, benchmark and verify."',
      desc: 'Never assume a service functions under pressure. Verify with high-concurrency JMeter load runs, memory leak profiling, mutation testing, and chaos testing scenarios.',
      cmd: 'STRESS_CHECK: 50K_VUSERS [PASSED]',
      icon: <CheckCircle2 size={18} className="text-[#34d399]" />,
    },
    {
      num: '04',
      title: 'Prevent',
      quote: '"Address root cause, remove permanently."',
      desc: 'When an outage or edge-case surfaces, don\'t patch a symptom. Construct architectural circuit breakers, idempotency locks, and compiler rules so the failure mode is physically impossible.',
      cmd: 'SYS_RULE_LOCK: ROOT_DEFECT_ELIMINATED',
      icon: <ShieldAlert size={18} className="text-[#f87171]" />,
    },
  ];

  return (
    <section id="decision-loop" className="py-24 relative z-10">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_03</span>
            <span className="text-[#64748b]">/</span>
            <span>SYSTEMATIZE_DISCIPLINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Engineering Decision Loop
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            A four-stage operational philosophy ensuring stability, predictability, and defect elimination in high-scale environments.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((c) => (
            <div
              key={c.num}
              className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-6 flex flex-col justify-between h-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-[#b87e2b]">
                    {c.num}
                  </span>
                  {c.icon}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1.5">
                  {c.title}
                </h3>
                <div className="font-mono text-[11px] text-[#e5a442] uppercase tracking-wide mb-3">
                  {c.quote}
                </div>
                <p className="font-mono text-xs text-[#94a3b8] leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              <div className="font-mono text-[11px] bg-[#10131b] p-2.5 rounded border border-[rgba(148,163,184,0.08)] text-[#94a3b8] truncate">
                {c.cmd}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
