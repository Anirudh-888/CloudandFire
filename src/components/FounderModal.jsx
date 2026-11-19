import React from 'react';
import { X, ArrowUpRight, Github, Linkedin, Twitter, MapPin, Terminal, Award, ShieldCheck, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const FounderModal = ({ isOpen, onClose, onBookConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fade-in">
      
      <div 
        className="relative w-full max-w-2xl rounded-3xl border border-rednoir/40 bg-[#09090c] p-6 sm:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(239,35,60,0.2)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-rednoir/15 rounded-full blur-[90px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
          aria-label="Close founder profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Founder Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-zinc-800/80">
          
          {/* Avatar / Profile Initials */}
          <div className="relative h-20 w-20 rounded-2xl overflow-hidden border-2 border-rednoir/40 p-1 bg-black flex items-center justify-center shadow-[0_0_25px_rgba(239,35,60,0.25)] shrink-0">
            <img 
              src="/cloud-and-fire-mark.png" 
              alt="Founder Mark" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="pr-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-rednoir/20 text-rednoir border border-rednoir/30">
                FOUNDER & LEAD ARCHITECT
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                cloudandfire.tech
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              S. Anirudh
            </h3>
            
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 mt-1">
              <MapPin className="w-3.5 h-3.5 text-rednoir" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>

        {/* Technical Philosophy & Background */}
        <div className="py-6 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
            <Terminal className="w-4 h-4 text-rednoir" />
            <span>Engineering Philosophy</span>
          </div>
          
          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            "We founded Cloud & Fire to provide startups and enterprise platforms with relentless execution speed without compromising on architectural rigor. No layers of non-technical management, no brittle AI prompt wrappers. We build production software meant to survive sustained high-throughput enterprise scale."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black border border-zinc-800">
              <span className="text-rednoir font-bold block mb-1">CORE EXPERTISE</span>
              <span className="text-zinc-400">High-Concurrency React/FastAPI, Streaming Speech AI, Spatial PostGIS Telemetry.</span>
            </div>

            <div className="p-3 rounded-xl bg-black border border-zinc-800">
              <span className="text-brand-blue font-bold block mb-1">VENTURE SPRINT</span>
              <span className="text-zinc-400">Direct zero-to-one MVP engineering for venture-backed and bootstrapped founders.</span>
            </div>
          </div>
        </div>

        {/* Social Links & Direct Action */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a 
              href="mailto:contact@cloudandfire.tech" 
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir transition-colors"
              title="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookConsultation) onBookConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-rednoir hover:bg-rednoir-deep text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,35,60,0.4)] flex items-center justify-center gap-2"
          >
            <span>Book Founder Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
