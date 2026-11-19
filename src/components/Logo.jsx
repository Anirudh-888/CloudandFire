import React from 'react';

export const Logo = ({ size = "default", showText = true, className = "" }) => {
  const isLarge = size === "large";
  
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Uncontained, prominent electric Cloud & Fire mark */}
      <img 
        src="/cloud-and-fire-mark.png" 
        alt="Cloud & Fire" 
        className={`object-contain transition-transform duration-300 hover:scale-105 shrink-0 ${
          isLarge 
            ? 'h-11 sm:h-14 w-auto drop-shadow-[0_0_20px_rgba(239,35,60,0.35)]' 
            : 'h-8 sm:h-9.5 w-auto drop-shadow-[0_0_14px_rgba(239,35,60,0.25)]'
        }`}
        onError={(e) => {
          e.currentTarget.src = '/cloud-and-fire-logo.jpg';
        }}
      />

      {/* Clean, Prominent White Typography (No restrictive box or borders) */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className={`font-display font-extrabold tracking-tight text-white flex items-center leading-none ${
            isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}>
            <span>Cloud</span>
            <span className="text-rednoir mx-1 font-black">&</span>
            <span>Fire</span>
          </div>
          <span className={`tracking-[0.25em] text-zinc-400 uppercase font-mono font-medium ${
            isLarge ? 'text-[11px] mt-1' : 'text-[9px] sm:text-[10px] mt-0.5'
          }`}>
            cloudandfire.tech
          </span>
        </div>
      )}
    </div>
  );
};
