import React from 'react';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="chronology" className="py-24 relative z-10 bg-[#10141c]/45">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_02</span>
            <span className="text-[#64748b]">/</span>
            <span>HARDWARE_TRACE_CHRONOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career Telemetry & System Evolution
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            Continuous execution track record spanning 7+ years across global enterprise data nodes.
          </p>
        </div>

        {/* Timeline Trace */}
        <div className="relative pl-9 sm:pl-12 flex flex-col gap-8 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-3.5 before:w-[2px] before:bg-gradient-to-b before:from-[#e5a442] before:via-[#b87e2b] before:to-[rgba(148,163,184,0.2)]">
          
          {/* Node 1: TransUnion */}
          <div className="relative group">
            {/* Pulse Marker */}
            <div className="absolute -left-9 sm:-left-12 top-5 w-7 h-7 rounded-full bg-[#10131b] border-2 border-[#e5a442] flex items-center justify-center shadow-[0_0_12px_rgba(229,164,66,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#e5a442]" />
            </div>

            <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Senior Developer @ TransUnion
                  </h3>
                  <span className="font-mono text-xs text-[#e5a442] font-semibold tracking-wider">
                    PRIMARY DEPLOYMENT // BANGALORE, INDIA
                  </span>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[rgba(229,164,66,0.1)] text-[#f5bc65] border border-[rgba(229,164,66,0.25)]">
                  ACTIVE DEPLOYMENT (PRESENT)
                </span>
              </div>

              <ul className="font-mono text-xs sm:text-[13px] text-[#94a3b8] space-y-2.5 mb-6">
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#e5a442] before:font-bold">
                  Architecting enterprise-scale AI-driven analytics, fraud prevention microservices, and identity verification pipelines handling ultra-high transaction concurrency.
                </li>
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#e5a442] before:font-bold">
                  Implementing Apache Kafka event streaming topologies ingesting millions of daily transactional records with custom zero-loss dead-letter error handling and replay idempotency.
                </li>
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#e5a442] before:font-bold">
                  Spearheading GenAI enterprise integration: deploying autonomous workflow agents, vector semantic caches, and deterministic rule verifications to reduce analyst turnaround latency by 64%.
                </li>
              </ul>

              {/* Metric Readout Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#10131b] rounded-lg border border-[rgba(148,163,184,0.1)] font-mono text-xs">
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">AVAILABILITY</span>
                  <span className="text-[#e5a442] font-bold">99.995% SLA</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">KAFKA MSG RATE</span>
                  <span className="text-[#f5bc65] font-bold">&gt; 12.5M / DAY</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">PRIMARY STACK</span>
                  <span className="text-[#e2e8f0]">JAVA 21 / SPRING AI</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">PLATFORM</span>
                  <span className="text-[#38bdf8]">K8S / AWS ECS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Node 2: IBM India */}
          <div className="relative group">
            {/* Pulse Marker */}
            <div className="absolute -left-9 sm:-left-12 top-5 w-7 h-7 rounded-full bg-[#10131b] border-2 border-[rgba(229,164,66,0.6)] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#b87e2b]" />
            </div>

            <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Full-Stack Developer @ IBM India
                  </h3>
                  <span className="font-mono text-xs text-[#f5bc65] font-semibold tracking-wider">
                    ENTERPRISE CLIENT SERVICES // BANGALORE, INDIA
                  </span>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#1c2230] text-[#94a3b8] border border-[rgba(148,163,184,0.15)]">
                  6+ YEARS CONTINUOUS TENURE
                </span>
              </div>

              <ul className="font-mono text-xs sm:text-[13px] text-[#94a3b8] space-y-2.5 mb-6">
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#b87e2b] before:font-bold">
                  Engineered large-scale Java Spring Boot distributed backend systems and decoupled OpenShift microservices for tier-one global financial and logistics enterprises.
                </li>
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#b87e2b] before:font-bold">
                  Designed and provisioned AWS infrastructure (ECS, S3, RDS, IAM) paired with automated CI/CD deployment pipelines, enforcing zero-defect release criteria.
                </li>
                <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-[#b87e2b] before:font-bold">
                  Mentored engineering pods across code reviews, memory leak profiling, database query indexing, and reactive architecture patterns to maintain a persistent 99.99% uptime benchmark.
                </li>
              </ul>

              {/* Metric Readout Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#10131b] rounded-lg border border-[rgba(148,163,184,0.1)] font-mono text-xs">
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">TENURE</span>
                  <span className="text-[#f5bc65] font-bold">6+ YEARS</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">CONTAINER FABRIC</span>
                  <span className="text-[#38bdf8] font-bold">OPENSHIFT / AWS</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">SYSTEM UPTIME</span>
                  <span className="text-[#34d399] font-bold">99.99% BENCHMARK</span>
                </div>
                <div>
                  <span className="text-[#64748b] block text-[10.5px]">LEADERSHIP</span>
                  <span className="text-[#e2e8f0]">POD LEAD & MENTOR</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
