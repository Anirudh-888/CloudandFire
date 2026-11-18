import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Mic, Radio, Layers, Database, Cpu, CheckCircle2, Sliders, Volume2, Activity, Play } from 'lucide-react';
import { projects } from '../data/projectsData';

export const BentoCaseStudies = ({ onSelectProject }) => {
  // Interactive state for Heliri Card
  const [selectedWard, setSelectedWard] = useState('Koramangala');
  const [grievanceFilter, setGrievanceFilter] = useState('all');

  // Interactive state for Retaiq Card
  const [activeVoiceSample, setActiveVoiceSample] = useState(0);
  const voiceQueries = [
    {
      query: "Check stock balance for 500ml Cold Pressed Olive Oil",
      response: "Inventory: 42 bottles in Aisle 4B. Status: Healthy. Last sale: 14 mins ago.",
      intent: "INVENTORY_QUERY",
      confidence: "98.4%",
      latency: "280ms"
    },
    {
      query: "Draft PO for 30 packs of Organic Filter Coffee",
      response: "Drafted PO #PO-8821 for Supplier: Coorg Roast Co. Total: ₹7,800. Awaiting manager approval.",
      intent: "PURCHASE_ORDER_DRAFT",
      confidence: "99.1%",
      latency: "340ms"
    },
    {
      query: "Flag variance in Dairy refrigeration unit 2",
      response: "Variance logged: 6 units shortfall. Sent alert to Floor Supervisor Raghav.",
      intent: "STOCK_VARIANCE_FLAG",
      confidence: "97.8%",
      latency: "310ms"
    }
  ];

  // Interactive state for EvntPulse Card
  const [telemetryPlaying, setTelemetryPlaying] = useState(true);
  const [activeFrame, setActiveFrame] = useState(1);

  return (
    <section id="proof-of-work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-obsidian overflow-hidden">
      
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rednoir/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-rednoir/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Glowing Red Noir Typography */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rednoir/30 bg-rednoir/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-rednoir animate-ping" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-rednoir uppercase">
              REAL PRODUCTION CLIENT SYSTEMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              PROOF OF 
            </span>{' '}
            <span className="text-rednoir drop-shadow-[0_0_30px_rgba(239,35,60,0.5)]">
              WORK
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
            We don't showcase design mockups or generic templates. Every platform below was architected, engineered, and deployed to solve critical operational workloads.
          </p>
        </div>

        {/* Bento Grid Layout (3 Detailed Bento Cards with glowing 2px red borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* =========================================================================
              CARD 1: HELIRI BENGALURU (Span 7 columns on desktop)
             ========================================================================= */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between group">
            
            {/* Top Bar: Tags + Action */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap items-center gap-2">
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
                  className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors"
                >
                  <span className="hidden sm:inline">Inspect Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                </button>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-rednoir transition-colors">
                {projects[0].name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-rednoir/90 uppercase tracking-widest mt-1">
                {projects[0].tagline}
              </p>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {projects[0].description}
              </p>
            </div>

            {/* Interactive Leaflet Spatial Simulator */}
            <div className="my-6 rounded-xl border border-zinc-800 bg-black/90 p-4 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rednoir" />
                  <span className="text-white font-semibold">Live Ward Spatial View</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-zinc-500">198 Wards Synced</span>
                </div>
              </div>

              {/* Ward Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Koramangala', 'HSR Layout', 'Indiranagar', 'Bellandur'].map(ward => (
                  <button
                    key={ward}
                    onClick={() => setSelectedWard(ward)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      selectedWard === ward 
                        ? 'bg-rednoir text-white font-semibold' 
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {ward}
                  </button>
                ))}
              </div>

              {/* Mock Geospatial Map Viewport */}
              <div className="relative h-44 rounded-lg bg-zinc-950 border border-zinc-800/70 p-3 flex flex-col justify-between overflow-hidden">
                {/* Visual grid representing spatial coordinates */}
                <div className="absolute inset-0 red-noir-grid-dense opacity-40" />

                {/* Simulated Ward Boundaries & Coordinate Overlay */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>EPSG:4326 | Lat 12.9352° N, Long 77.6245° E</span>
                  <span className="text-rednoir font-semibold">BBMP Ward Polygon #{selectedWard === 'Koramangala' ? '151' : selectedWard === 'HSR Layout' ? '174' : selectedWard === 'Indiranagar' ? '89' : '150'}</span>
                </div>

                {/* Simulated Active Hotspots */}
                <div className="relative z-10 grid grid-cols-3 gap-2 my-auto">
                  <div className="p-2 rounded bg-black/85 border border-rednoir/40 backdrop-blur-sm">
                    <div className="text-[10px] font-mono text-rednoir font-bold">Pothole / Road Distress</div>
                    <div className="text-xs font-semibold text-white mt-0.5">80ft Rd Junction</div>
                    <div className="text-[10px] text-amber-400 flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Assigned to Ward Engineer</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-black/85 border border-emerald-500/40 backdrop-blur-sm">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold">Streetlight Failure</div>
                    <div className="text-xs font-semibold text-white mt-0.5">5th Cross Extension</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      <span>Resolved in 4 hrs</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-black/85 border border-red-500/40 backdrop-blur-sm">
                    <div className="text-[10px] font-mono text-red-400 font-bold">Drainage Overflow</div>
                    <div className="text-xs font-semibold text-white mt-0.5">Main Canal Gate</div>
                    <div className="text-[10px] text-rednoir flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rednoir animate-ping" />
                      <span>Priority Escalation</span>
                    </div>
                  </div>
                </div>

                {/* Bottom telemetry line */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>FastAPI GeoJSON Query: 84ms</span>
                  <span className="text-zinc-500">PostGIS ST_DWithin Indexing Active</span>
                </div>
              </div>
            </div>

            {/* Bottom Highlights & Metrics */}
            <div className="pt-4 border-t border-zinc-900 grid grid-cols-3 gap-2 text-center">
              {projects[0].metrics.map(metric => (
                <div key={metric.label} className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-900">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              CARD 2: RETAIQ (Span 5 columns on desktop)
             ========================================================================= */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between group">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap items-center gap-2">
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
                  className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-rednoir transition-colors">
                {projects[1].name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-rednoir/90 uppercase tracking-widest mt-1">
                {projects[1].tagline}
              </p>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {projects[1].description}
              </p>
            </div>

            {/* Interactive Voice Command Demo */}
            <div className="my-6 rounded-xl border border-zinc-800 bg-black/90 p-4">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-2">
                <div className="flex items-center gap-2">
                  <Mic className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                  <span className="text-white font-semibold">Interactive Voice Simulator</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">Select Query:</span>
              </div>

              {/* Sample Voice Prompts */}
              <div className="flex flex-col gap-1.5 mb-3">
                {voiceQueries.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVoiceSample(idx)}
                    className={`text-left p-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                      activeVoiceSample === idx 
                        ? 'bg-zinc-900 border border-rednoir/40 text-white' 
                        : 'bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 border border-transparent'
                    }`}
                  >
                    <span className="truncate mr-2">"{item.query}"</span>
                    <span className="shrink-0 text-[10px] text-rednoir font-bold">RUN</span>
                  </button>
                ))}
              </div>

              {/* Simulated Audio Wave & AI Extraction Result */}
              <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                  <span className="text-brand-blue font-bold flex items-center gap-1.5">
                    <Volume2 className="w-3 h-3" />
                    <span>AUDIO RECOGNITION</span>
                  </span>
                  <span className="text-emerald-400 font-mono">Latency: {voiceQueries[activeVoiceSample].latency}</span>
                </div>

                {/* Simulated Audio Spectrum Waveform */}
                <div className="flex items-end gap-1 h-7 mb-3 px-1">
                  {[40, 70, 30, 85, 100, 60, 45, 90, 80, 50, 95, 30, 60, 85, 40, 70, 90, 35, 60].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-brand-blue to-rednoir rounded-full transition-all duration-300"
                      style={{ height: `${(h * (activeVoiceSample + 1) * 23) % 100}%` }}
                    />
                  ))}
                </div>

                {/* Extracted Structured Response */}
                <div className="p-2.5 rounded bg-black/80 border border-zinc-800 text-[11px] font-mono">
                  <div className="text-zinc-500 text-[10px] mb-1">INTENT: {voiceQueries[activeVoiceSample].intent} (Confidence: {voiceQueries[activeVoiceSample].confidence})</div>
                  <div className="text-white font-medium">{voiceQueries[activeVoiceSample].response}</div>
                </div>
              </div>

            </div>

            {/* Bottom Metrics */}
            <div className="pt-4 border-t border-zinc-900 grid grid-cols-3 gap-2 text-center">
              {projects[1].metrics.map(metric => (
                <div key={metric.label} className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-900">
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              CARD 3: EVNTPULSE (Span Full 12 columns on desktop)
             ========================================================================= */}
          <div className="lg:col-span-12 bento-card p-6 sm:p-8 flex flex-col lg:flex-row gap-8 justify-between group">
            
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
                      Telemetry & Media Pipeline
                    </span>
                    <div className="flex items-center gap-1.5">
                      {projects[2].tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectProject(projects[2])}
                    className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-rednoir transition-colors"
                  >
                    <span className="hidden sm:inline">Inspect Architecture</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rednoir transition-all" />
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-rednoir transition-colors">
                  {projects[2].name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-rednoir/90 uppercase tracking-widest mt-1">
                  {projects[2].tagline}
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
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

              {/* Bottom Metrics */}
              <div className="pt-6 mt-6 border-t border-zinc-900 grid grid-cols-3 gap-3 text-center">
                {projects[2].metrics.map(metric => (
                  <div key={metric.label} className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900">
                    <div className="text-sm font-bold text-white font-mono">{metric.value}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Montage Engine Simulation */}
            <div className="lg:w-1/2 flex flex-col justify-between rounded-xl border border-zinc-800 bg-black/90 p-4 sm:p-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-white font-semibold">Automated Media Assembly Pipeline</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Worker Queue: Healthy (0 Lag)</span>
              </div>

              {/* Visual FFmpeg Reel Timeline Preview */}
              <div className="my-4">
                <div className="text-[11px] font-mono text-zinc-400 mb-2 flex items-center justify-between">
                  <span>Dynamic Montage Timeline</span>
                  <span className="text-rednoir">4K Stream Splicing</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 1, title: "Stage Keynote", time: "00:04", status: "Processed" },
                    { id: 2, title: "Crowd Pulse", time: "00:12", status: "Rendering" },
                    { id: 3, title: "Speaker Close-up", time: "00:18", status: "Queued" },
                    { id: 4, title: "Closing Montage", time: "00:24", status: "Queued" }
                  ].map((frame) => (
                    <div 
                      key={frame.id}
                      onClick={() => setActiveFrame(frame.id)}
                      className={`cursor-pointer p-2.5 rounded-lg border text-center transition-all ${
                        activeFrame === frame.id 
                          ? 'border-rednoir bg-rednoir/10 shadow-[0_0_15px_rgba(239,35,60,0.3)]' 
                          : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                      }`}
                    >
                      <div className="h-10 rounded bg-zinc-900 border border-zinc-800/80 flex items-center justify-center mb-1.5 relative overflow-hidden">
                        <Play className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="absolute bottom-0.5 right-1 text-[9px] font-mono text-zinc-500">{frame.time}</span>
                      </div>
                      <div className="text-[10px] font-semibold text-white truncate">{frame.title}</div>
                      <div className={`text-[9px] font-mono mt-0.5 ${
                        frame.status === 'Processed' ? 'text-emerald-400' :
                        frame.status === 'Rendering' ? 'text-amber-400 animate-pulse' : 'text-zinc-500'
                      }`}>
                        {frame.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Stream Output Log */}
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-[11px] text-zinc-300">
                <div className="text-[10px] text-zinc-500 mb-1 flex items-center justify-between">
                  <span>TELEMETRY INGESTION STREAM</span>
                  <span className="text-zinc-600">STDOUT / JSON</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-emerald-400">[200 OK]</span> Batch #4892: 1,420 attendee telemetry points aggregated into MongoDB time-series collection.
                </div>
                <div className="text-zinc-400 mt-1">
                  <span className="text-rednoir">[FFmpeg]</span> Compiling 60fps dynamic highlight clip with GPU acceleration.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
