import React from 'react';

export const Payloads: React.FC = () => {
  return (
    <section id="payloads" className="py-24 relative z-10 bg-[#10141c]/45">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_04</span>
            <span className="text-[#64748b]">/</span>
            <span>DEPLOYED_PAYLOADS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured High-Impact Payloads
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            Production-proven systems engineered for fault tolerance, high throughput, and enterprise resilience.
          </p>
        </div>

        {/* Payloads Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Payload 1 */}
          <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#e5a442] font-semibold">
                  PAYLOAD_01 // EVENT_STREAM
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.25)]">
                  PROD VERIFIED
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Distributed Event Stream Processing Engine
              </h3>
              <p className="font-mono text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed mb-5">
                Event-driven real-time pipeline consuming and transforming high-frequency financial telemetry data. Implemented partition keys for strict ordered semantics and decoupled retry queues.
              </p>

              {/* Sparkline Box */}
              <div className="bg-[#10131b] border border-[rgba(148,163,184,0.1)] rounded-lg p-3.5 mb-5 font-mono text-xs">
                <div className="flex justify-between text-[#64748b] text-[11px] mb-2">
                  <span>INGEST THROUGHPUT (24H PEAK)</span>
                  <span className="text-[#e5a442] font-semibold">120K MSG/SEC</span>
                </div>
                <svg className="w-full h-11 text-[#e5a442]" viewBox="0 0 400 48" fill="none">
                  <path
                    d="M0,38 Q30,8 60,30 T120,18 T180,34 T240,12 T300,26 T360,6 T400,22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,38 Q30,8 60,30 T120,18 T180,34 T240,12 T300,26 T360,6 T400,22 L400,48 L0,48 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">Kafka</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">Java 17</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Spring Cloud Stream</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Redis</span>
            </div>
          </div>

          {/* Payload 2 */}
          <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#f5bc65] font-semibold">
                  PAYLOAD_02 // AI_AGENT_MESH
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(56,189,248,0.1)] text-[#38bdf8] border border-[rgba(56,189,248,0.25)]">
                  TRANSUNION PILOT
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Enterprise Multi-Agent AI Knowledge Pipeline
              </h3>
              <p className="font-mono text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed mb-5">
                RAG orchestration system synthesizing multi-tenant regulatory policies, credit intelligence documents, and real-time structured databases into deterministic decision responses.
              </p>

              {/* Sparkline Box */}
              <div className="bg-[#10131b] border border-[rgba(148,163,184,0.1)] rounded-lg p-3.5 mb-5 font-mono text-xs">
                <div className="flex justify-between text-[#64748b] text-[11px] mb-2">
                  <span>VECTOR RETRIEVAL P95</span>
                  <span className="text-[#34d399] font-semibold">&lt; 42ms</span>
                </div>
                <svg className="w-full h-11 text-[#38bdf8]" viewBox="0 0 400 48" fill="none">
                  <path
                    d="M0,28 Q40,32 80,18 T160,24 T240,10 T320,16 T400,12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,28 Q40,32 80,18 T160,24 T240,10 T320,16 T400,12 L400,48 L0,48 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">Spring AI</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">Vector Embeddings</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">AWS Bedrock</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Multi-Agent RAG</span>
            </div>
          </div>

          {/* Payload 3 */}
          <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#38bdf8] font-semibold">
                  PAYLOAD_03 // K8S_MESH
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.25)]">
                  ZERO DOWNTIME
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Cloud-Native Microservices Mesh on OpenShift
              </h3>
              <p className="font-mono text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed mb-5">
                Hardened container platform spanning Red Hat OpenShift and AWS ECS, featuring zero-trust service-to-service mTLS mesh, automated horizontal pod autoscaling, and live Canary routing.
              </p>

              {/* Telemetry Graph Box (Matches Height with Payloads 1, 2, 4) */}
              <div className="bg-[#10131b] border border-[rgba(148,163,184,0.1)] rounded-lg p-3.5 mb-5 font-mono text-xs">
                <div className="flex justify-between text-[#64748b] text-[11px] mb-2">
                  <span>POD AUTOSCALE HEALTH // CANARY</span>
                  <span className="text-[#34d399] font-semibold">100% HEALTHY</span>
                </div>
                <svg className="w-full h-11 text-[#34d399]" viewBox="0 0 400 48" fill="none">
                  <path
                    d="M0,32 L60,32 L60,20 L140,20 L140,12 L220,12 L220,18 L300,18 L300,8 L400,8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,32 L60,32 L60,20 L140,20 L140,12 L220,12 L220,18 L300,18 L300,8 L400,8 L400,48 L0,48 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(56,189,248,0.3)] text-[#38bdf8]">OpenShift</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(56,189,248,0.3)] text-[#38bdf8]">Docker</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">AWS ECS</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Helm</span>
            </div>
          </div>

          {/* Payload 4 */}
          <div className="bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#e5a442] font-semibold">
                  PAYLOAD_04 // REALTIME_HUD
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.25)]">
                  SUB-FRAME SYNC
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Real-Time Credit Risk Telemetry Dashboard
              </h3>
              <p className="font-mono text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed mb-5">
                High-frequency front-end workstation telemetry connecting React 18 to a reactive Spring Boot WebSocket gateway, providing real-time dispute monitoring and risk alerts.
              </p>

              {/* Sparkline Box */}
              <div className="bg-[#10131b] border border-[rgba(148,163,184,0.1)] rounded-lg p-3.5 mb-5 font-mono text-xs">
                <div className="flex justify-between text-[#64748b] text-[11px] mb-2">
                  <span>WEBSOCKET FRAME LATENCY</span>
                  <span className="text-[#38bdf8] font-semibold">11ms (SUB-FRAME)</span>
                </div>
                <svg className="w-full h-11 text-[#e5a442]" viewBox="0 0 400 48" fill="none">
                  <path
                    d="M0,20 Q50,30 100,15 T200,25 T300,10 T400,20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,20 Q50,30 100,15 T200,25 T300,10 T400,20 L400,48 L0,48 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">React 18</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(229,164,66,0.3)] text-[#e5a442]">TypeScript</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Spring WebSocket</span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-[#1c2230] border border-[rgba(148,163,184,0.12)] text-[#e2e8f0]">Tailwind</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
