import React from 'react';
import { Cpu, Network, Cloud, BrainCircuit, Layout, Terminal } from 'lucide-react';

interface BentoModule {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: { name: string; highlight?: boolean }[];
}

export const TechMatrix: React.FC = () => {
  const modules: BentoModule[] = [
    {
      id: 'MOD_01 // RUNTIME_CORE',
      badge: 'ACTIVE',
      title: 'Backend & High Concurrency',
      description: 'Multi-threaded microservices engineered for millions of operations per second with Java 21 Virtual Threads (Project Loom) and reactive asynchronous execution.',
      icon: <Cpu size={18} className="text-[#e5a442]" />,
      tags: [
        { name: 'Java 17/21', highlight: true },
        { name: 'Spring Boot 3.x', highlight: true },
        { name: 'Hibernate/JPA' },
        { name: 'Reactive Streams' },
        { name: 'Project Loom' },
        { name: 'ZGC Collector' },
      ],
    },
    {
      id: 'MOD_02 // INGEST_BUS',
      badge: '128 BROKERS',
      title: 'Streaming & Distributed State',
      description: 'Fault-tolerant event streaming backbones, partition strategies, idempotent consumer reconciliation, dead-letter routing, and Redis distributed caching.',
      icon: <Network size={18} className="text-[#f5bc65]" />,
      tags: [
        { name: 'Apache Kafka', highlight: true },
        { name: 'Kafka Streams', highlight: true },
        { name: 'Event-Driven Mesh' },
        { name: 'Redis Cluster' },
        { name: 'Dead-Letter Topologies' },
        { name: 'Idempotent Semantics' },
      ],
    },
    {
      id: 'MOD_03 // HYPERVISOR_K8S',
      badge: '512 NODES',
      title: 'Cloud & Container Fabrics',
      description: 'Enterprise cloud footprints across Red Hat OpenShift and AWS with zero-trust mTLS security, automated horizontal pod autoscaling, and Canary deployments.',
      icon: <Cloud size={18} className="text-[#38bdf8]" />,
      tags: [
        { name: 'Red Hat OpenShift', highlight: true },
        { name: 'AWS (ECS, S3, RDS)', highlight: true },
        { name: 'Docker Engine' },
        { name: 'Kubernetes' },
        { name: 'Helm Charts' },
        { name: 'Terraform IaC' },
      ],
    },
    {
      id: 'MOD_04 // NEURAL_OPS',
      badge: 'LLM_ORCH',
      title: 'Enterprise AI & Multi-Agent Swarms',
      description: 'Productionizing retrieval-augmented generation (RAG) and autonomous AI workflows for TransUnion credit & fraud telemetry with vector semantic routing.',
      icon: <BrainCircuit size={18} className="text-[#f87171]" />,
      tags: [
        { name: 'Spring AI', highlight: true },
        { name: 'RAG Pipelines', highlight: true },
        { name: 'Autonomous Agents' },
        { name: 'Vector Databases' },
        { name: 'AWS Bedrock' },
        { name: 'LangChain' },
      ],
    },
    {
      id: 'MOD_05 // INTERACTION_LAYER',
      badge: '60 FPS',
      title: 'Frontend & HUD Systems',
      description: 'Dense command-center consoles, real-time WebSocket telemetry feeds, and ergonomic developer dashboards built with React, TypeScript, and modern Tailwind.',
      icon: <Layout size={18} className="text-[#34d399]" />,
      tags: [
        { name: 'React 18', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'Zustand / Redux' },
        { name: 'WebSocket Streaming' },
        { name: 'Motion Graphics' },
        { name: 'Tailwind v4' },
      ],
    },
    {
      id: 'MOD_06 // KERNEL_SPACE',
      badge: 'SYS_CALL',
      title: 'OS & Low-Level Environment Rigor',
      description: 'Host optimization, Linux kernel parameter tuning, automated pipeline gating, memory leak profiling, and zero-defect deterministic release builds.',
      icon: <Terminal size={18} className="text-[#94a3b8]" />,
      tags: [
        { name: 'Linux Kernel Tuning', highlight: true },
        { name: 'POSIX Bash', highlight: true },
        { name: 'CI/CD Automation' },
        { name: 'SonarQube' },
        { name: 'Perf / eBPF Profiling' },
        { name: 'Deterministic Builds' },
      ],
    },
  ];

  return (
    <section id="matrix" className="py-24 relative z-10">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_01</span>
            <span className="text-[#64748b]">/</span>
            <span>SYSTEM_CAPABILITIES_TOPOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Architecture & Tech Matrix
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            Hardened distributed engineering across backend concurrency, streaming message buses, container fabrics, and autonomous enterprise intelligence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {modules.map((m) => (
            <div
              key={m.id}
              className="group relative bg-[#151923] border border-[rgba(148,163,184,0.12)] hover:border-[rgba(229,164,66,0.35)] rounded-xl p-6 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(229,164,66,0.15)] transition-all duration-200 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b87e2b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    {m.icon}
                    <span className="font-mono text-xs text-[#e5a442] font-semibold tracking-wider">
                      {m.id}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.25)]">
                    {m.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="font-mono text-xs text-[#94a3b8] leading-relaxed mb-5">
                  {m.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {m.tags.map((t) => (
                  <span
                    key={t.name}
                    className={`font-mono text-[11px] px-2 py-1 rounded bg-[#1c2230] border ${
                      t.highlight
                        ? 'border-[rgba(229,164,66,0.3)] text-[#e5a442]'
                        : 'border-[rgba(148,163,184,0.12)] text-[#e2e8f0]'
                    }`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
