import React from 'react';
import { X, CheckCircle2, Cpu, Server, Database, Layers, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onBookConsultation }) => {
  if (!project) return null;

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in"
    >
      
      <div 
        className="relative w-full max-w-3xl rounded-2xl border-2 border-rednoir/60 bg-noir-950 p-4 sm:p-8 shadow-[0_0_60px_rgba(239,35,60,0.35)] overflow-hidden my-6 sm:my-8 min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rednoir/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-rednoir transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-rednoir/20 text-rednoir border border-rednoir/40">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
              {project.status}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-400 border border-amber-500/30">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold text-white font-display tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm font-mono text-rednoir uppercase tracking-wider mt-1">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <div className="mt-3 flex items-center gap-2 max-w-full min-w-0">
              <span className="text-xs font-mono text-zinc-500 shrink-0">Live:</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:text-white transition-colors underline underline-offset-4 max-w-full truncate inline-flex items-center gap-1 min-w-0"
              >
                <span className="truncate">{project.liveUrl}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          )}
        </div>

        {/* Detailed Description */}
        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-zinc-900 text-zinc-200 border border-zinc-700/80">
              {tag}
            </span>
          ))}
        </div>

        {/* Core Highlights */}
        <div className="mt-6 pt-5 border-t border-zinc-900">
          <h4 className="text-xs font-mono text-rednoir uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rednoir" />
            <span>Key Engineering Implementations</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-rednoir shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="mt-6 pt-5 border-t border-zinc-900">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-rednoir" />
            <span>Architectural Blueprint</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {Object.entries(project.architecture).map(([layer, spec]) => (
              <div key={layer} className="p-3 rounded-lg bg-black/70 border border-zinc-900">
                <span className="text-rednoir/90 font-bold uppercase block text-[10px] tracking-wider mb-0.5">
                  {layer.replace(/([A-Z])/g, ' $1')}
                </span>
                <span className="text-zinc-300 text-xs leading-normal">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-8 pt-5 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-500">
            System engineered & deployed by <span className="text-white font-medium">Cloud & Fire</span>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookConsultation) onBookConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-rednoir hover:bg-rednoir-deep text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,35,60,0.4)] flex items-center justify-center gap-2"
          >
            <span>Discuss Architecture With Our Engineers</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
