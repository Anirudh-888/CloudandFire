import React, { useState } from 'react';
import { ArrowUpRight, Building2, CheckCircle2, Clock, Mail, MapPin, Send, ShieldCheck, Terminal, User, AlertCircle } from 'lucide-react';

export const ConsultationSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    category: 'Enterprise Web & Mobile',
    timeline: '2–4 Weeks Rapid Sprint',
    brief: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formState.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formState.brief.trim()) {
      errs.brief = 'Technical scope summary is required.';
    } else if (formState.brief.trim().length < 15) {
      errs.brief = 'Please provide at least 15 characters describing requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Coherent client-side intake state machine without fake backend fetch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section id="consultation" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900/80 overflow-hidden">
      
      {/* Controlled Atmospheric Red & Blue Glow Accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[500px] bg-rednoir/12 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rednoir/30 bg-rednoir/10 mb-4 shadow-[0_0_20px_rgba(239,35,60,0.15)]">
            <span className="w-2 h-2 rounded-full bg-rednoir animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-rednoir uppercase">
              B2B TECHNICAL CONSULTATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white uppercase">
            <span>START AN </span>
            <span className="text-rednoir drop-shadow-[0_0_35px_rgba(239,35,60,0.5)]">
              ENGAGEMENT
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-sans font-normal leading-relaxed">
            Direct architectural intake with our senior systems engineering leads in Bengaluru. Zero sales intermediaries.
          </p>
        </div>

        {/* High-End Enterprise Card Container */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-rednoir/40 via-zinc-800/60 to-rednoir/20 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(239,35,60,0.15)]">
          
          <div className="relative rounded-[23px] bg-[#08080a] p-6 sm:p-10 md:p-12 overflow-hidden">
            
            {/* Subtle corner light accents */}
            <div className="absolute top-0 left-0 w-44 h-44 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-rednoir/15 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in relative z-10">
                <div className="w-16 h-16 rounded-full bg-rednoir/15 border-2 border-rednoir flex items-center justify-center mx-auto text-rednoir shadow-[0_0_35px_rgba(239,35,60,0.45)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Technical Intake Registered
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formState.name}</span>. Your brief for <span className="text-rednoir font-medium">{formState.category}</span> ({formState.timeline}) has been queued for architectural assessment.
                </p>
                <div className="p-3.5 rounded-xl bg-black/80 border border-zinc-800 max-w-md mx-auto text-left text-xs font-mono space-y-1 text-zinc-400">
                  <div><span className="text-zinc-500">Contact:</span> <span className="text-white">{formState.email}</span></div>
                  {formState.company && <div><span className="text-zinc-500">Entity:</span> <span className="text-white">{formState.company}</span></div>}
                  <div><span className="text-zinc-500">Status:</span> <span className="text-emerald-400">Direct Route to Bengaluru Engineering Team</span></div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        category: 'Enterprise Web & Mobile',
                        timeline: '2–4 Weeks Rapid Sprint',
                        brief: ''
                      });
                      setErrors({});
                    }}
                    className="px-6 py-2.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-rednoir transition-colors focus:outline-none"
                  >
                    Submit Another Scope Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                
                {/* Form Top Title */}
                <div className="border-b border-zinc-800/80 pb-5">
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-rednoir font-semibold mb-1">
                    ENGINEERING SCOPE & DISCOVERY
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Book a Technical Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
                    Provide project specifics below to match directly with the relevant systems lead.
                  </p>
                </div>

                {/* Input Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#030304] border ${
                          errors.name ? 'border-red-500' : 'border-zinc-800/90'
                        } focus:border-rednoir focus:ring-1 focus:ring-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-all shadow-inner font-sans`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rednoir mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2 font-medium">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="name@company.com"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#030304] border ${
                          errors.email ? 'border-red-500' : 'border-zinc-800/90'
                        } focus:border-rednoir focus:ring-1 focus:ring-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-all shadow-inner font-sans`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rednoir mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Input Row 2: Company Name */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2 font-medium">
                    Company / Organization Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Acme Tech / Enterprise Corp."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#030304] border border-zinc-800/90 focus:border-rednoir focus:ring-1 focus:ring-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-all shadow-inner font-sans"
                    />
                  </div>
                </div>

                {/* Service Category Selector */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2.5 font-medium">
                    Primary Service Category *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                    {[
                      'Enterprise Web & Mobile',
                      'Practical AI & LLM Automation',
                      'Founder MVP Engine',
                      'Spatial & High-Concurrency Systems'
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormState({ ...formState, category: cat })}
                        className={`p-3.5 rounded-xl text-left border transition-all focus:outline-none ${
                          formState.category === cat
                            ? 'border-rednoir bg-rednoir/15 text-white font-semibold shadow-[0_0_18px_rgba(239,35,60,0.25)] ring-1 ring-rednoir/50'
                            : 'border-zinc-800/90 bg-[#040405] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{cat}</span>
                          {formState.category === cat && (
                            <span className="w-2 h-2 rounded-full bg-rednoir" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Timeline Selector with Tabular Numbers */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2.5 font-medium">
                    Project Target Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      '2–4 Weeks Rapid Sprint',
                      '1–3 Months Enterprise Phase',
                      'Ongoing Retainer'
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormState({ ...formState, timeline: t })}
                        className={`py-3 px-3 rounded-xl text-center border transition-all focus:outline-none tabular-nums ${
                          formState.timeline === t
                            ? 'border-rednoir bg-rednoir/15 text-white font-semibold ring-1 ring-rednoir/50'
                            : 'border-zinc-800/90 bg-[#040405] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Scope / Brief */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2 font-medium">
                    Technical Scope & System Requirements *
                  </label>
                  <div className="relative">
                    <Terminal className="w-4 h-4 text-zinc-500 absolute left-4 top-4 pointer-events-none" />
                    <textarea
                      rows={4}
                      value={formState.brief}
                      onChange={(e) => {
                        setFormState({ ...formState, brief: e.target.value });
                        if (errors.brief) setErrors({ ...errors, brief: null });
                      }}
                      placeholder="Detail your architectural requirements, data scale, API integrations, or operational workflows..."
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#030304] border ${
                        errors.brief ? 'border-red-500' : 'border-zinc-800/90'
                      } focus:border-rednoir focus:ring-1 focus:ring-rednoir focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-all shadow-inner leading-relaxed font-sans`}
                    />
                  </div>
                  {errors.brief && (
                    <p className="text-[11px] font-mono text-rednoir mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.brief}</span>
                    </p>
                  )}
                </div>

                {/* Bold Red-Noir Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-rednoir via-red-600 to-[#d90429] hover:from-rednoir-deep hover:to-rednoir text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(239,35,60,0.45)] hover:shadow-[0_0_50px_rgba(239,35,60,0.7)] flex items-center justify-center gap-2.5 active:scale-98 disabled:opacity-50 focus:outline-none"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Intake to Lead Architect...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Technical Consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Security and SLA Trust Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mutual NDA Protected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rednoir" />
                    <span className="tabular-nums">24h Response SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Bengaluru Engineering Hub</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* Alternative Direct Inquiries Strip */}
        <div className="mt-8 text-center text-xs font-mono text-zinc-500">
          Prefer direct email? Reach our systems leads at{' '}
          <a href="mailto:contact@cloudandfire.tech" className="text-zinc-300 hover:text-rednoir transition-colors underline underline-offset-4">
            contact@cloudandfire.tech
          </a>
        </div>

      </div>

    </section>
  );
};