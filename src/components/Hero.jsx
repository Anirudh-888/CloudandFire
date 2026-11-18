import React from 'react';
import { ArrowUpRight, Code2, Layers, MapPin, Sparkles, Terminal } from 'lucide-react';

export const Hero = ({ onBookConsultation, onExploreWork }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 red-noir-grid">
      
      {/* Controlled Radial Red Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-rednoir/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-16 left-12 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-16 right-12 w-96 h-96 bg-rednoir/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid overlay with vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10 w-full">
        
        {/* Metadata Subtext Badges (Strictly Matching Specification) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          
          {/* Badge 1: AGENCY FOR STARTUPS & ENTERPRISE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rednoir/30 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(239,35,60,0.15)]">
            <span className="w-2 h-2 rounded-full bg-rednoir animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-zinc-200">
              AGENCY FOR STARTUPS & ENTERPRISE
            </span>
          </div>

          {/* Badge 2: BASED IN BENGALURU */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-rednoir" />
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.18em] uppercase text-zinc-300">
              BASED IN BENGALURU
            </span>
          </div>

          {/* Status Indicator */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
              ACCEPTING Q1/Q2 ENGAGEMENTS
            </span>
          </div>

        </div>

        {/* Fluid, Balanced Massive Hero Typography (No single-word awkward breaks) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-black font-display tracking-tight leading-[1.12] sm:leading-[1.08] text-white uppercase max-w-5xl">
          <span className="block">
            ENGINEERING ENTERPRISE PLATFORMS
          </span>
          <span className="block mt-2 sm:mt-3">
            <span className="text-white">& PRACTICAL </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rednoir via-[#ff5e13] to-red-400 drop-shadow-[0_0_35px_rgba(239,35,60,0.55)]">
              AI SOLUTIONS
            </span>
          </span>
        </h1>

        {/* Rigorous, Anti-AI Slop Subheading (Pure Real Context) */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl font-normal leading-relaxed">
          Cloud & Fire builds production-grade geospatial platforms, voice-first operational AI, and distributed software systems. High velocity from prototype to enterprise scale.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-11 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          
          {/* Primary CTA: Book Consultation */}
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-rednoir hover:bg-rednoir-deep text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-[0_0_30px_rgba(239,35,60,0.45)] hover:shadow-[0_0_45px_rgba(239,35,60,0.7)] flex items-center justify-center gap-3 active:scale-95 group"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Secondary CTA: Explore Proof of Work */}
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-rednoir/30 hover:border-rednoir bg-black/60 hover:bg-zinc-950 text-zinc-300 hover:text-white font-semibold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 active:scale-95"
          >
            <span>Explore Proof of Work</span>
            <Layers className="w-4 h-4 text-rednoir" />
          </button>

        </div>

        {/* Engineering Architecture Pillars Bar (No fake stats, pure technical capabilities) */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-900 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          
          <div className="p-3.5 rounded-xl border border-zinc-900 bg-noir-950/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono tracking-wider text-rednoir uppercase flex items-center gap-1.5 mb-1 font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Stack</span>
            </div>
            <div className="text-sm font-semibold text-white">React & FastAPI</div>
            <div className="text-xs text-zinc-500 mt-0.5">High-throughput async architectures</div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-900 bg-noir-950/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono tracking-wider text-brand-blue uppercase flex items-center gap-1.5 mb-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Voice AI</span>
            </div>
            <div className="text-sm font-semibold text-white">Speech-to-Text</div>
            <div className="text-xs text-zinc-500 mt-0.5">Sub-400ms hands-free catalog lookup</div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-900 bg-noir-950/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase flex items-center gap-1.5 mb-1 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Spatial</span>
            </div>
            <div className="text-sm font-semibold text-white">Leaflet & PostGIS</div>
            <div className="text-xs text-zinc-500 mt-0.5">Sub-second ward polygon indexing</div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-900 bg-noir-950/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono tracking-wider text-amber-400 uppercase flex items-center gap-1.5 mb-1 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Telemetry</span>
            </div>
            <div className="text-sm font-semibold text-white">Node & MongoDB</div>
            <div className="text-xs text-zinc-500 mt-0.5">Automated dynamic montage processing</div>
          </div>

        </div>

      </div>

    </section>
  );
};
