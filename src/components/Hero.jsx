import React from 'react';
import { ArrowDown, ArrowUpRight, Layers, MapPin } from 'lucide-react';

export const Hero = ({ onBookConsultation, onExploreWork }) => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 red-noir-grid">
      
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

        {/* Fluid, Balanced Massive Hero Typography (Space Grotesk) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-black font-display tracking-tight leading-[1.12] sm:leading-[1.08] text-white uppercase max-w-5xl">
          <span className="block">
            ENGINEERING ENTERPRISE PLATFORMS
          </span>
          <span className="block mt-2 sm:mt-3">
            <span className="text-white">& PRACTICAL </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rednoir via-red-500 to-red-400 drop-shadow-[0_0_35px_rgba(239,35,60,0.55)]">
              AI SOLUTIONS
            </span>
          </span>
        </h1>

        {/* Disciplined Body Copy (Inter) */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl font-sans font-normal leading-relaxed">
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

        {/* Interactive Rotating Circular Scroll Badge / Indicator with Balanced Spacing */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={onExploreWork}
            className="group relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Scroll to explore work"
          >
            {/* Rotating circular SVG text */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="heroScrollBadgePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[7.8px] font-mono font-bold tracking-[0.24em] fill-zinc-400 group-hover:fill-zinc-200 uppercase transition-colors">
                <textPath href="#heroScrollBadgePath" startOffset="0%">
                  • SCROLL TO EXPLORE • CLOUD & FIRE •
                </textPath>
              </text>
            </svg>

            {/* Center glowing circular button with arrow */}
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/90 border border-rednoir/40 group-hover:border-rednoir flex items-center justify-center shadow-[0_0_20px_rgba(239,35,60,0.25)] group-hover:shadow-[0_0_30px_rgba(239,35,60,0.6)] transition-all">
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-rednoir group-hover:text-white transition-colors animate-bounce" />
            </div>
          </button>
        </div>

        {/* Clean Subtle 1px Horizontal Divider Separating Hero from Proof of Work */}
        <div className="w-full max-w-5xl mx-auto pt-8 sm:pt-10">
          <div className="w-full border-t border-white/10" />
        </div>

      </div>

    </section>
  );
};
