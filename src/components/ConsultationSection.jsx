import React, { useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Send, ShieldCheck } from 'lucide-react';

export const ConsultationSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    category: 'Enterprise Web & Mobile Platform',
    timeline: '2-4 Weeks Sprint',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instant local intake submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900/80 overflow-hidden">
      
      {/* Background Red Noir Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rednoir/12 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Agency Information & Contact Directives */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rednoir/30 bg-rednoir/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-rednoir animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-rednoir uppercase">
                  DIRECT TECHNICAL INTAKE
                </span>
              </div>

              {/* Responsive Headline (No clipping on "CONSULTATION") */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black font-display tracking-tight text-white uppercase leading-[1.1]">
                <span className="block">BOOK A</span>
                <span className="block text-rednoir drop-shadow-[0_0_30px_rgba(239,35,60,0.5)]">
                  CONSULTATION
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                Connect directly with our senior systems architects in Bengaluru. We review your requirements, assess technical feasibility, and outline a concrete execution roadmap.
              </p>

              {/* Direct Details Card */}
              <div className="mt-8 space-y-3.5 font-mono text-xs sm:text-sm">
                
                <div className="p-4 rounded-xl border border-zinc-800 bg-noir-950/80 backdrop-blur-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black border border-zinc-800 text-rednoir shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Direct Engineering Inquiries</div>
                    <a href="mailto:contact@cloudandfire.tech" className="text-white hover:text-rednoir transition-colors font-medium truncate block">
                      contact@cloudandfire.tech
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-800 bg-noir-950/80 backdrop-blur-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black border border-zinc-800 text-rednoir shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Headquarters</div>
                    <div className="text-white font-medium">Bengaluru, Karnataka, India</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-800 bg-noir-950/80 backdrop-blur-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black border border-zinc-800 text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Response SLA</div>
                    <div className="text-white font-medium">Technical evaluation within 24 hours</div>
                  </div>
                </div>

              </div>

              {/* Strict No-Slop Assurance */}
              <div className="mt-8 p-4 rounded-xl border border-rednoir/20 bg-rednoir/5 text-xs text-zinc-400 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-rednoir shrink-0 mt-0.5" />
                <span>
                  No sales representatives or generic discovery calls. Your technical intake is handled by engineers who write code and design systems.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-rednoir/40 bg-noir-950/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(239,35,60,0.18)]">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-rednoir/20 border-2 border-rednoir flex items-center justify-center mx-auto text-rednoir shadow-[0_0_30px_rgba(239,35,60,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Consultation Request Logged
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto font-mono">
                    Thank you, {formState.name || 'Founder'}. Our engineering team has received your brief for <span className="text-white">{formState.category}</span>. We will follow up via {formState.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        category: 'Enterprise Web & Mobile Platform',
                        timeline: '2-4 Weeks Sprint',
                        brief: ''
                      });
                    }}
                    className="mt-6 px-6 py-2 rounded-full border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-800 pb-3 mb-6">
                    <h3 className="text-xl font-bold font-display text-white">
                      Technical Scope & Consultation Intake
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Provide project specifics to match you with the relevant systems lead.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Acme Tech / Stealth Startup"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Project Category */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Primary Service Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      {[
                        'Enterprise Web & Mobile Platform',
                        'Practical AI & LLM Automation',
                        'Founder-Focused MVP Engineering',
                        'Geospatial & High-Throughput Telemetry'
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormState({ ...formState, category: cat })}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            formState.category === cat
                              ? 'border-rednoir bg-rednoir/15 text-white font-semibold shadow-[0_0_15px_rgba(239,35,60,0.2)]'
                              : 'border-zinc-800 bg-black/70 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Timeline */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      {[
                        '2-4 Weeks Sprint',
                        '1-3 Months Phase',
                        'Ongoing Retainer'
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormState({ ...formState, timeline: t })}
                          className={`py-2 px-3 rounded-xl text-center border transition-all ${
                            formState.timeline === t
                              ? 'border-rednoir bg-rednoir/15 text-white font-semibold'
                              : 'border-zinc-800 bg-black/70 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Project Specifications & Technical Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.brief}
                      onChange={(e) => setFormState({ ...formState, brief: e.target.value })}
                      placeholder="Outline your architectural requirements, data scale, required integrations, or user workflows..."
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-rednoir hover:bg-rednoir-deep text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(239,35,60,0.4)] hover:shadow-[0_0_40px_rgba(239,35,60,0.6)] flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Routing to Engineering Lead...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 font-mono text-center">
                    All project data and IP discussions are protected under standard non-disclosure terms.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
