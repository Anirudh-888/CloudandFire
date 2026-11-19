import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Mic, Layers, Database, Cpu, CheckCircle2, Volume2, Activity, Play, Terminal, ShieldAlert, Clock, Radio, Sparkles } from 'lucide-react';
import { projects, heliriWardData, retaiqVoiceData, evntpulseStageData } from '../data/projectsData';

export const BentoCaseStudies = ({ onSelectProject }) => {
  // 1. Heliri Bengaluru Ward State Machine
  const [selectedWard, setSelectedWard] = useState('Koramangala');
  const currentWard = heliriWardData[selectedWard] || heliriWardData['Koramangala'];

  // 2. Retaiq Voice AI State Machine
  const [activeVoiceIndex, setActiveVoiceIndex] = useState(0);
  const [isSimulatingVoice, setIsSimulatingVoice] = useState(false);
  const activeVoice = retaiqVoiceData[activeVoiceIndex] || retaiqVoiceData[0];

  const handleVoiceQuerySelect = (idx) => {
    setIsSimulatingVoice(true);
    setActiveVoiceIndex(idx);
    setTimeout(() => {
      setIsSimulatingVoice(false);
    }, 280);
  };

  // 3. EvntPulse Pipeline Stage State Machine
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = evntpulseStageData[activeStageIndex] || evntpulseStageData[0];

  return (
    <section id="proof-of-work" className="relative pt-10 sm:pt-14 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-obsidian overflow-hidden w-full max-w-full">
      
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rednoir/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-rednoir/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Disciplined Typography */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rednoir/30 bg-rednoir/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-rednoir animate-ping" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-rednoir uppercase">
              REAL PRODUCTION CLIENT SYSTEMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white uppercase">
            <span className="text-white">
              PROOF OF 
            </span>{' '}
            <span className="text-rednoir drop-shadow-[0_0_30px_rgba(239,35,60,0.5)]">
              WORK
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-sans font-normal leading-relaxed">
            Every platform below was architected, engineered, and deployed to solve real-world operational bottlenecks. Fully interactive client-side state models below illustrate production system behavior.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* =========================================================================
              CARD 1: HELIRI BENGALURU (7 cols) - Civic Grievance & Spatial Mapping
             ========================================================================= */}
          <div className="lg:col-span-7 bento-card p-4 sm:p-8 flex flex-col justify-between group min-w-0">
            
            {/* Top Bar: Tags + Action */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-rednoir/20 text-rednoir border border-rednoir/40">
                    Civic & Spatial
                  </span>
                  <div className="flex items-center gap-1.5">
                    {projects[0].tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onSelectProject(projects[0])}
                  className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors focus:outline-none"
                  aria-label="Inspect Heliri Architecture"
                >
                  <span className="hidden sm:inline">Inspect Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                </button>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-rednoir transition-colors break-words">
                {projects[0].name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-rednoir uppercase tracking-wider mt-1">
                {projects[0].tagline}
              </p>

              <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed">
                {projects[0].description}
              </p>
            </div>

            {/* Interactive Leaflet Spatial Simulator (Driven by heliriWardData) */}
            <div className="my-5 sm:my-6 rounded-xl border border-zinc-800 bg-black/90 p-3 sm:p-4 shadow-inner relative overflow-hidden min-w-0">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rednoir shrink-0" />
                  <span className="text-white font-semibold truncate">Ward Spatial Telemetry View</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-mono tabular-nums">198 Wards</span>
                </div>
              </div>

              {/* Ward Selector Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mr-1">Select Ward:</span>
                {['Koramangala', 'HSR Layout', 'Indiranagar', 'Bellandur'].map(ward => (
                  <button
                    key={ward}
                    onClick={() => setSelectedWard(ward)}
                    className={`px-2.5 sm:px-3 py-1 rounded text-[11px] sm:text-xs font-mono transition-all focus:outline-none ${
                      selectedWard === ward 
                        ? 'bg-rednoir text-white font-semibold shadow-[0_0_12px_rgba(239,35,60,0.4)]' 
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    {ward}
                  </button>
                ))}
              </div>

              {/* Geospatial Map Viewport & State Machine Readout */}
              <div className="relative rounded-lg bg-zinc-950 border border-zinc-800/70 p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden min-w-0">
                <div className="absolute inset-0 red-noir-grid-dense opacity-35" />

                {/* Spatial Coordinate Header */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-900 pb-2 mb-3 gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap min-w-0">
                    <span className="text-zinc-500 shrink-0">{currentWard.epsg}</span>
                    <span className="text-zinc-600 shrink-0">•</span>
                    <span className="text-zinc-300 font-medium tabular-nums break-all sm:break-normal">{currentWard.coordinates}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-rednoir font-bold text-[10px] border border-rednoir/30">
                      BBMP Ward #{currentWard.wardNumber}
                    </span>
                    <span className="text-zinc-500 text-[10px]">{currentWard.zone}</span>
                  </div>
                </div>

                {/* Dynamic Civic Grievance Triage Cards */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-1">
                  
                  {/* Primary Issue Card */}
                  <div className="p-2.5 rounded bg-black/90 border border-rednoir/50 backdrop-blur-sm min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-rednoir font-bold uppercase truncate">{currentWard.primaryIssue.priority} PRIORITY</span>
                      <span className="text-zinc-500 tabular-nums shrink-0">{currentWard.primaryIssue.reportedAt}</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate" title={currentWard.primaryIssue.category}>
                      {currentWard.primaryIssue.category}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5" title={currentWard.primaryIssue.location}>
                      {currentWard.primaryIssue.location}
                    </div>
                    <div className="text-[10px] font-mono text-amber-400 flex items-center gap-1.5 mt-2 pt-1.5 border-t border-zinc-800">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span className="truncate">{currentWard.primaryIssue.status}</span>
                    </div>
                  </div>

                  {/* Secondary Hotspot Card */}
                  <div className="p-2.5 rounded bg-black/90 border border-emerald-500/40 backdrop-blur-sm min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-emerald-400 font-bold uppercase truncate">HOTSPOT MONITORED</span>
                      <span className="text-emerald-400 shrink-0">RESOLVED</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate" title={currentWard.secondaryHotspot.category}>
                      {currentWard.secondaryHotspot.category}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5" title={currentWard.secondaryHotspot.location}>
                      {currentWard.secondaryHotspot.location}
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 mt-2 pt-1.5 border-t border-zinc-800">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span className="truncate">{currentWard.secondaryHotspot.status}</span>
                    </div>
                  </div>

                  {/* Critical Escalation Card */}
                  <div className="p-2.5 rounded bg-black/90 border border-red-500/40 backdrop-blur-sm min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-rednoir font-bold uppercase truncate">SLA ESCALATION</span>
                      <span className="w-2 h-2 rounded-full bg-rednoir animate-pulse shrink-0" />
                    </div>
                    <div className="text-xs font-semibold text-white truncate" title={currentWard.criticalEscalation.category}>
                      {currentWard.criticalEscalation.category}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5" title={currentWard.criticalEscalation.location}>
                      {currentWard.criticalEscalation.location}
                    </div>
                    <div className="text-[10px] font-mono text-rednoir flex items-center gap-1.5 mt-2 pt-1.5 border-t border-zinc-800">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      <span className="truncate">{currentWard.criticalEscalation.status}</span>
                    </div>
                  </div>

                </div>

                {/* Spatial Engine Telemetry Footer */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-zinc-400 pt-2.5 mt-2 border-t border-zinc-900 gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-rednoir font-semibold">PostGIS ST_Contains:</span>
                    <span className="text-white font-mono tabular-nums">{currentWard.queryLatency}</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-400 tabular-nums">{currentWard.polygonVertices} vertices</span>
                  </div>
                  <div className="text-zinc-500">
                    Active Team: <span className="text-zinc-300">{currentWard.primaryIssue.team}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Highlights & Metrics (Tabular Numbers) */}
            <div className="pt-4 border-t border-zinc-900 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              {currentWard.metrics.map(metric => (
                <div key={metric.label} className="p-1.5 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">{metric.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">{metric.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              CARD 2: RETAILIQ (5 cols) - Voice-First AI Store Assistant
             ========================================================================= */}
          <div className="lg:col-span-5 bento-card p-4 sm:p-8 flex flex-col justify-between group min-w-0">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-brand-blue/20 text-brand-blue border border-brand-blue/40">
                    Voice-First AI
                  </span>
                  <div className="flex items-center gap-1">
                    {projects[1].tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onSelectProject(projects[1])}
                  className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors focus:outline-none"
                  aria-label="Inspect Retaiq Architecture"
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                </button>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-rednoir transition-colors break-words">
                {projects[1].name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-rednoir uppercase tracking-wider mt-1">
                {projects[1].tagline}
              </p>

              <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed">
                {projects[1].description}
              </p>
            </div>

            {/* Interactive Voice Command State Machine */}
            <div className="my-5 sm:my-6 rounded-xl border border-zinc-800 bg-black/90 p-3 sm:p-4 shadow-inner min-w-0">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-2">
                <div className="flex items-center gap-2">
                  <Mic className={`w-3.5 h-3.5 text-brand-blue shrink-0 ${isSimulatingVoice ? 'animate-bounce' : 'animate-pulse'}`} />
                  <span className="text-white font-semibold truncate">Store Manager Voice Dispatch</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono shrink-0">Select Prompt:</span>
              </div>

              {/* Sample Voice Prompts Selector (Single column on mobile for full legibility, 2 cols on sm+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {retaiqVoiceData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleVoiceQuerySelect(idx)}
                    className={`text-left p-2.5 sm:p-2 rounded-lg text-xs font-mono transition-all border focus:outline-none min-w-0 ${
                      activeVoiceIndex === idx 
                        ? 'bg-zinc-900 border-rednoir/60 text-white shadow-[0_0_12px_rgba(239,35,60,0.25)]' 
                        : 'bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 border-zinc-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-zinc-300 truncate">{item.label}</span>
                      <span className="text-[9px] text-rednoir font-bold font-mono shrink-0">RUN</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 leading-snug break-words">
                      "{item.audioQuery}"
                    </div>
                  </button>
                ))}
              </div>

              {/* Simulated Audio Spectrum Waveform & Parsing Feedback */}
              <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-3 min-w-0">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                  <span className="text-brand-blue font-bold flex items-center gap-1.5 truncate">
                    <Volume2 className="w-3 h-3 shrink-0" />
                    <span>AUDIO RECOGNITION</span>
                  </span>
                  <div className="flex items-center gap-2 font-mono shrink-0">
                    <span className="text-zinc-500">Latency:</span>
                    <span className="text-emerald-400 font-bold tabular-nums">{activeVoice.latency}</span>
                  </div>
                </div>

                {/* Simulated Audio Spectrum Waveform */}
                <div className="flex items-end gap-1 h-7 mb-3 px-1">
                  {activeVoice.waveformPattern.map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isSimulatingVoice 
                          ? 'bg-rednoir animate-pulse' 
                          : 'bg-gradient-to-t from-brand-blue via-rednoir/80 to-rednoir'
                      }`}
                      style={{ 
                        height: isSimulatingVoice ? `${Math.min(100, h * 1.25)}%` : `${h}%` 
                      }}
                    />
                  ))}
                </div>

                {/* Structured Deterministic Intent & Action Extraction */}
                <div className="p-3 rounded bg-black/85 border border-zinc-800 font-mono text-xs space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-2 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-500">INTENT:</span>
                      <span className="text-rednoir font-bold">{activeVoice.parsedIntent}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-500">CONFIDENCE:</span>
                      <span className="text-emerald-400 font-bold tabular-nums">{activeVoice.confidence}</span>
                    </div>
                  </div>

                  <div className="text-zinc-300 text-[11px] leading-relaxed">
                    <span className="text-zinc-500 block text-[10px] mb-0.5">RETAIL INVENTORY LEDGER:</span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-white font-semibold truncate">{activeVoice.item}</span>
                      <span className="text-white font-mono font-bold tabular-nums bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 shrink-0">
                        {activeVoice.stockLevel}
                      </span>
                    </div>
                    <div className="text-zinc-400 text-[10px] mt-1 truncate">
                      {activeVoice.location} • <span className="text-zinc-500">{activeVoice.sku}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-900 text-[11px] text-zinc-300 break-words">
                    <span className="text-rednoir font-bold">ACTION: </span>
                    <span>{activeVoice.actionOutput}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-4 border-t border-zinc-900 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              {projects[1].metrics.map(metric => (
                <div key={metric.label} className="p-1.5 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">{metric.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">{metric.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              CARD 3: EVNTPULSE (Full 12 cols) - Smart Campus Event Intelligence Hub
             ========================================================================= */}
          <div className="lg:col-span-12 bento-card p-4 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between group min-w-0">
            
            <div className="lg:w-1/2 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      Campus Event OS
                    </span>
                    <div className="flex items-center gap-1.5">
                      {projects[2].tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <a 
                      href={projects[2].liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-white transition-colors"
                      aria-label="Open EvntPulse Live Deployment"
                    >
                      <span className="hidden sm:inline">Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <button 
                      onClick={() => onSelectProject(projects[2])}
                      className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors focus:outline-none"
                      aria-label="Inspect EvntPulse Architecture"
                    >
                      <span className="hidden sm:inline">Inspect Architecture</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-rednoir transition-colors break-words">
                  {projects[2].name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-rednoir uppercase tracking-wider mt-1">
                  {projects[2].tagline}
                </p>

                {/* Recognition Badge */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-amber-500/15 text-amber-400 border border-amber-500/30 max-w-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                  <span className="truncate">1st Place Winner (9 Teams) • MVJCE SDC Challenge</span>
                </div>

                {/* Live Deployment Link (safe for 360px mobile) */}
                <div className="mt-2 flex items-center gap-2 max-w-full min-w-0">
                  <span className="text-[10px] font-mono text-zinc-500 shrink-0">Live:</span>
                  <a
                    href={projects[2].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-emerald-400 hover:text-white hover:underline transition-colors truncate max-w-full inline-flex items-center gap-1 min-w-0"
                  >
                    <span className="truncate">{projects[2].liveUrl}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed">
                  {projects[2].description}
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300 font-mono">
                  {projects[2].highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rednoir font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metrics with Tabular Numbers */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-zinc-900 grid grid-cols-3 gap-1.5 sm:gap-3 text-center">
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">{currentStage.throughput}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">{currentStage.metric1Label || "Scan Latency"}</div>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">{currentStage.dataBitrate}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">{currentStage.metric2Label || "Gate Backend"}</div>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono tabular-nums truncate">{currentStage.fps}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">{currentStage.metric3Label || "Pass Integrity"}</div>
                </div>
              </div>
            </div>

            {/* Right: EvntPulse Pipeline State Machine & Live Synchronized Terminal */}
            <div className="lg:w-1/2 flex flex-col justify-between rounded-xl border border-zinc-800 bg-black/90 p-3.5 sm:p-5 shadow-inner min-w-0">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2 min-w-0">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                  <span className="text-white font-semibold truncate">Campus Event Intelligence Engine</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono tabular-nums shrink-0">{currentStage.queueDepth}</span>
              </div>

              {/* 4 Pipeline Stages Selector (Requirement: QR Gate Scanner, Live Polling, Health Score, Campus Ecosystem) */}
              <div className="my-4 min-w-0">
                <div className="text-[11px] font-mono text-zinc-400 mb-2.5 flex items-center justify-between">
                  <span>SELECT OPERATING MODULE:</span>
                  <span className="text-rednoir font-bold tabular-nums">{currentStage.gpuLoad}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                  {evntpulseStageData.map((stage, idx) => {
                    const isSelected = activeStageIndex === idx;

                    return (
                      <button 
                        key={stage.id}
                        onClick={() => setActiveStageIndex(idx)}
                        className={`p-2 sm:p-2.5 rounded-lg border text-left transition-all focus:outline-none min-w-0 ${
                          isSelected 
                            ? 'border-rednoir bg-rednoir/15 shadow-[0_0_15px_rgba(239,35,60,0.3)] ring-1 ring-rednoir/60' 
                            : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                        }`}
                      >
                        <div className="h-8 sm:h-9 rounded bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-1.5 relative overflow-hidden">
                          <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-rednoir' : 'text-zinc-500'}`} />
                          <span className="absolute bottom-0.5 right-1 text-[8px] sm:text-[9px] font-mono text-zinc-500 tabular-nums">{stage.timestamp}</span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-white truncate font-display">{stage.name}</div>
                        <div className={`text-[8px] sm:text-[9px] font-mono mt-0.5 font-bold truncate ${
                          isSelected ? 'text-rednoir' : 'text-zinc-500'
                        }`}>
                          {stage.stageStatus}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Worker Node Readout */}
              <div className="mb-3 px-3 py-2 rounded-lg bg-zinc-950/80 border border-zinc-850 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-rednoir shrink-0" />
                  <span className="text-zinc-300 font-semibold truncate">{currentStage.activeWorker}</span>
                </div>
                <span className="text-zinc-500 text-[10px] tabular-nums shrink-0">{currentStage.workerThreads}</span>
              </div>

              {/* Live Synchronized Telemetry & Terminal Logs */}
              <div className="p-2.5 sm:p-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs overflow-hidden min-w-0">
                <div className="text-[10px] text-zinc-500 mb-2 flex items-center justify-between border-b border-zinc-900 pb-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Terminal className="w-3 h-3 text-rednoir shrink-0" />
                    <span className="truncate">SYNCHRONIZED STAGE STDOUT</span>
                  </div>
                  <span className="text-zinc-600 tabular-nums text-[9px] sm:text-[10px] shrink-0">STAGE ID: {currentStage.id.toUpperCase()}</span>
                </div>
                
                <div className="space-y-1 overflow-hidden min-w-0">
                  {currentStage.logStdout.map((logLine, lIdx) => (
                    <div key={lIdx} className="text-zinc-300 text-[10px] sm:text-[11px] leading-relaxed break-words break-all sm:break-normal min-w-0">
                      {logLine}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};