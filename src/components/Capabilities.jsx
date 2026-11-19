import React, { useState } from 'react';
import { capabilities } from '../data/projectsData';
import { ArrowUpRight, Terminal } from 'lucide-react';

export const Capabilities = ({ onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState('enterprise-platforms');

  return (
    <section id="capabilities" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-zinc-900/80 overflow-hidden w-full max-w-full">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-rednoir/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rednoir/30 bg-rednoir/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-rednoir" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-rednoir uppercase">
              PRECISION ENGINEERING PILLARS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white uppercase">
            <span>CORE </span>
            <span className="text-white">
              CAPABILITIES
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-sans font-normal leading-relaxed">
            Three focused service pillars engineered for startups and enterprise systems requiring bulletproof execution.
          </p>
        </div>

        {/* Clean Vertical Layout for the Three Precise Service Pillars */}
        <div id="services" className="space-y-6 sm:space-y-8">
          {capabilities.map((pillar) => {
            const isActive = activeTab === pillar.id;

            return (
              <div 
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-10 border-2 bg-gradient-to-b from-noir-900/90 to-noir-950/95 backdrop-blur-md min-w-0 ${
                  isActive 
                    ? 'border-rednoir shadow-[0_0_35px_rgba(239,35,60,0.22)]' 
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left: Monospace Index Label, Title, Subtitle, and Tech Stack */}
                  <div className="lg:w-5/12">
                    <div className="mb-3">
                      <span className="text-xs sm:text-sm font-mono font-bold text-rednoir tracking-[0.2em] uppercase tabular-nums">
                        {pillar.number} // SERVICE PILLAR
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display tracking-tight mt-2">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans font-normal">
                      {pillar.subtitle}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                      {pillar.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onBookConsultation) onBookConsultation();
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-rednoir hover:text-white uppercase tracking-wider transition-colors"
                      >
                        <span>Scope this capability</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Architectural Approach & Hairline Divider Deliverables */}
                  <div className="lg:w-6/12 pt-4 lg:pt-0 lg:border-l lg:border-zinc-800/80 lg:pl-10">
                    
                    <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 mb-6">
                      <div className="text-[11px] font-mono text-rednoir uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Engineering Approach</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        {pillar.approach}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3">
                        Core Deliverables
                      </div>
                      <ul className="divide-y divide-white/10 border-t border-b border-white/10">
                        {pillar.deliverables.map((del, idx) => (
                          <li key={idx} className="py-2 sm:py-2.5 flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-300 font-sans font-normal min-w-0">
                            <span className="text-rednoir font-mono select-none shrink-0 font-bold">—</span>
                            <span className="leading-relaxed">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};