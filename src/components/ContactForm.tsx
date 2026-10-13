import React, { useState } from 'react';
import { Mail, Phone, BadgeAlert, Code2, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { playKeyClick } from '../utils/audio';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior Architecture Role',
    timeline: 'Immediate',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playKeyClick(640, 'sine', 0.04);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setStatusMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        setStatusMsg('Transmission encrypted & saved to SQLite (contacts.db). Sateesh has received your payload.');
        setFormData({
          name: '',
          email: '',
          subject: 'Senior Architecture Role',
          timeline: 'Immediate',
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMsg(json.error || 'Failed to dispatch packet to server.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network uplink error. Please use direct email comms.');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="w-[min(1320px,calc(100%-32px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e5a442] tracking-widest uppercase">
            <span>// CH_05</span>
            <span className="text-[#64748b]">/</span>
            <span>SECURE_UPLINK_CARRIER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Secure Transmission &amp; Contact
          </h2>
          <p className="font-mono text-sm text-[#94a3b8] max-w-2xl">
            Dispatch queries for Senior Architecture positions, high-concurrency systems consulting, or tech advisory. Messages are stored in a localized SQLite database.
          </p>
        </div>

        {/* Contact Split Grid (Symmetrical items-stretch for equal height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Comms Channels (5 cols, strictly matched height) */}
          <div className="lg:col-span-5 bg-[#151923] border border-[rgba(229,164,66,0.24)] hover:border-[rgba(229,164,66,0.38)] rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b87e2b] to-transparent opacity-80" />

            <div>
              {/* Symmetrical Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[rgba(148,163,184,0.1)] font-mono text-xs text-[#e5a442]">
                <span className="font-semibold flex items-center gap-2">
                  <span>// DIRECT_COMMS_CHANNELS</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[rgba(229,164,66,0.1)] text-[#e5a442] border border-[rgba(229,164,66,0.25)]">
                    ACTIVE_LINK
                  </span>
                </span>
                <span className="text-[#64748b] text-[10.5px]">4 CHANNELS</span>
              </div>

              {/* 4 Direct Channels */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sateeshvarma2360@gmail.com"
                  className="flex items-center gap-3.5 p-3 bg-[#10131b] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(229,164,66,0.35)] rounded-lg transition-all hover:translate-x-1"
                >
                  <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#e5a442] shrink-0">
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
                  <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#f5bc65] shrink-0">
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
                  <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#38bdf8] shrink-0">
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
                  <div className="w-9 h-9 rounded-md bg-[#1c2230] flex items-center justify-center text-[#e2e8f0] shrink-0">
                    <Code2 size={17} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-[#64748b] uppercase">CODE REPOSITORY</div>
                    <div className="font-mono text-xs sm:text-[13px] text-[#e2e8f0] truncate font-medium">
                      github.com/sateesh73
                    </div>
                  </div>
                </a>
              </div>

              {/* Engagement & SLA Specifications Panel (Balances height with form inputs) */}
              <div className="p-3 bg-[#10131b] rounded-lg border border-[rgba(148,163,184,0.1)] font-mono text-xs space-y-2 mt-4">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#64748b]">SLA RESPONSE:</span>
                  <span className="text-[#34d399] font-semibold">&lt; 12 HRS GUARANTEED</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#64748b]">PREFERRED ROLE:</span>
                  <span className="text-[#e2e8f0]">STAFF / PRINCIPAL ARCHITECT</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#64748b]">GEOGRAPHIC NODE:</span>
                  <span className="text-[#e5a442]">BANGALORE (IST // UTC+05:30)</span>
                </div>
              </div>
            </div>

            {/* Symmetrical Card Footer */}
            <div className="pt-4 mt-4 border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between font-mono text-[11px] text-[#94a3b8]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                AVAILABLE FOR ARCHITECT ROLES
              </span>
              <span className="text-[#e5a442]">UTC+05:30 (IST)</span>
            </div>
          </div>

          {/* SQLite Form (7 cols, strictly matched height) */}
          <div className="lg:col-span-7 bg-[#151923] border border-[rgba(229,164,66,0.24)] hover:border-[rgba(229,164,66,0.38)] rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b87e2b] to-transparent opacity-80" />

            <div>
              {/* Symmetrical Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[rgba(148,163,184,0.1)] font-mono text-xs text-[#e5a442]">
                <span className="font-semibold flex items-center gap-2">
                  <span>// DISPATCH_FORM_INTERFACE</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.2)]">
                    SQLITE_BACKED
                  </span>
                </span>
                <span className="text-[#64748b] text-[10.5px]">TABLE: contacts.db</span>
              </div>

              {/* Notification Banner */}
              {status === 'success' && (
                <div className="mb-4 p-3 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] rounded-lg flex items-center gap-2 text-xs font-mono text-[#34d399]">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3 bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.3)] rounded-lg flex items-center gap-2 text-xs font-mono text-[#f87171]">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} id="contact-form-el" className="space-y-3.5 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[#94a3b8] mb-1 font-medium text-[11px]">
                      YOUR NAME <span className="text-[#e5a442]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      required
                      className="w-full bg-[#10131b] border border-[rgba(148,163,184,0.16)] focus:border-[#e5a442] rounded-lg px-3 py-2 text-[#e2e8f0] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#94a3b8] mb-1 font-medium text-[11px]">
                      EMAIL ADDRESS <span className="text-[#e5a442]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@enterprise.io"
                      required
                      className="w-full bg-[#10131b] border border-[rgba(148,163,184,0.16)] focus:border-[#e5a442] rounded-lg px-3 py-2 text-[#e2e8f0] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[#94a3b8] mb-1 font-medium text-[11px]">
                      AREA OF INTEREST / ROLE TYPE
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#10131b] border border-[rgba(148,163,184,0.16)] focus:border-[#e5a442] rounded-lg px-3 py-2 text-[#e2e8f0] outline-none transition-colors"
                    >
                      <option value="Senior Architecture Role">Senior Architecture Role</option>
                      <option value="Distributed Systems Consulting">Distributed Systems Consulting</option>
                      <option value="Enterprise AI / RAG Swarms">Enterprise AI / RAG Swarms</option>
                      <option value="High-Throughput Kafka Advisory">High-Throughput Kafka Advisory</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#94a3b8] mb-1 font-medium text-[11px]">
                      TARGET TIMELINE
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[#10131b] border border-[rgba(148,163,184,0.16)] focus:border-[#e5a442] rounded-lg px-3 py-2 text-[#e2e8f0] outline-none transition-colors"
                    >
                      <option value="Immediate (Active Hiring)">Immediate (Active Hiring)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Quarterly / Exploratory">Quarterly / Exploratory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#94a3b8] mb-1 font-medium text-[11px]">
                    TRANSMISSION PAYLOAD (MESSAGE) <span className="text-[#e5a442]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Outline the architectural scope, infrastructure challenges, or opportunity parameters..."
                    required
                    className="w-full bg-[#10131b] border border-[rgba(148,163,184,0.16)] focus:border-[#e5a442] rounded-lg p-3 text-[#e2e8f0] outline-none transition-colors resize-none"
                  />
                </div>
              </form>
            </div>

            {/* Symmetrical Card Footer */}
            <div className="pt-4 mt-4 border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between font-mono text-xs">
              <span className="text-[11px] text-[#64748b]">
                STORAGE: SQLITE_3 (contacts.db)
              </span>

              <button
                type="submit"
                form="contact-form-el"
                disabled={status === 'loading'}
                className="btn-primary-3d !py-2 !px-4 text-xs flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>[TRANSMIT_PACKET -&gt;]</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
