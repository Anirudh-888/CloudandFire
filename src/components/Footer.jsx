import React from 'react';
import { Logo } from './Logo';
import { Github, Linkedin, Twitter, ArrowUp, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t-2 border-rednoir text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-[0_-10px_35px_rgba(239,35,60,0.15)]">
      
      {/* Background ambient red glow along top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-rednoir/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900 items-start">
          
          {/* Col 1: Agency Brand & Identity (Clean, Uncontained, Fluidly Aligned) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Uncontained, Prominent Logo */}
              <div className="mb-4">
                <Logo size="large" />
              </div>
              <p className="mt-3 text-sm text-zinc-400 font-normal max-w-sm leading-relaxed">
                Elite software engineering agency for high-growth startups and enterprise platforms. Specializing in geospatial mapping, voice-first AI systems, and high-velocity MVP execution.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-rednoir shrink-0" />
              <span>Headquartered in Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-rednoir uppercase tracking-widest font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-400">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="hover:text-white transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('proof-of-work')} 
                  className="hover:text-white transition-colors"
                >
                  Proof of Work (Case Studies)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('capabilities')} 
                  className="hover:text-white transition-colors"
                >
                  Core Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-white transition-colors"
                >
                  Engineering Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('consultation')} 
                  className="hover:text-white transition-colors"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Real Projects Recap */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-rednoir uppercase tracking-widest font-bold mb-4">
              Featured Systems
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">HELIRI BENGALURU</div>
                  <div className="text-zinc-500 text-[10px]">Civic & Spatial Mapping (React, Leaflet)</div>
                </div>
                <span className="text-emerald-400 text-[10px]">LIVE</span>
              </li>
              <li className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">RETAIQ</div>
                  <div className="text-zinc-500 text-[10px]">Voice-First AI Store Assistant (FastAPI)</div>
                </div>
                <span className="text-brand-blue text-[10px]">PILOT</span>
              </li>
              <li className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">EVNTPULSE</div>
                  <div className="text-zinc-500 text-[10px]">Real-Time Montage Engine (Node, Mongo)</div>
                </div>
                <span className="text-amber-400 text-[10px]">ACTIVE</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Clean Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Exact Copyright Notice Required */}
          <div className="text-xs font-mono text-zinc-500 text-center sm:text-left">
            © 2026 Cloud and Fire. All rights reserved.
          </div>

          {/* Clean Social Links */}
          <div className="flex items-center gap-4">
            
            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir hover:shadow-[0_0_15px_rgba(239,35,60,0.3)] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir hover:shadow-[0_0_15px_rgba(239,35,60,0.3)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-rednoir hover:shadow-[0_0_15px_rgba(239,35,60,0.3)] transition-all"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full border border-rednoir/40 bg-black text-rednoir hover:bg-rednoir hover:text-white transition-all shadow-[0_0_10px_rgba(239,35,60,0.2)]"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};
