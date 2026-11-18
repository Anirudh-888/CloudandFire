import React from 'react';

export const Logo = ({ size = "default", showText = true, className = "" }) => {
  const isLarge = size === "large";
  
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Uncontained, crisp, fluidly aligned Logo Mark */}
      <img 
        src="/cloud-and-fire-mark.png" 
        alt="Cloud & Fire Mark" 
        className={`object-contain transition-transform duration-300 hover:scale-105 shrink-0 ${
          isLarge 
            ? 'h-10 sm:h-12 w-auto drop-shadow-[0_0_16px_rgba(239,35,60,0.35)]' 
            : 'h-8 sm:h-9 w-auto drop-shadow-[0_0_12px_rgba(239,35,60,0.25)]'
        }`}
        onError={(e) => {
          // Fallback if image path has issue
          e.currentTarget.src = '/cloud-and-fire-logo.jpg';
        }}
      />

      {/* Clean, Prominent Typography (No restrictive box) */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className={`font-display font-black tracking-tight text-white flex items-center leading-none ${
            isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}>
            <span>Cloud</span>
            <span className="text-rednoir mx-1 font-bold">&</span>
            <span>Fire</span>
          </div>
          <span className={`tracking-[0.24em] text-zinc-400 uppercase font-mono font-medium ${
            isLarge ? 'text-[11px] mt-1' : 'text-[9.5px] mt-0.5'
          }`}>
            cloudandfire.tech
          </span>
        </div>
      )}
    </div>
  );
};
