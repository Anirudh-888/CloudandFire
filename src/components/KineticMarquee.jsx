import React from 'react';

export const KineticMarquee = () => {
  const marqueeItems = [
    "PRACTICAL AI AUTOMATION",
    "WEB & MOBILE PLATFORMS",
    "FOUNDER MVP ENGINE",
    "CLOUD INFRASTRUCTURE",
    "PRACTICAL AI AUTOMATION",
    "WEB & MOBILE PLATFORMS",
    "FOUNDER MVP ENGINE",
    "CLOUD INFRASTRUCTURE"
  ];

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden bg-black border-y border-rednoir/30 select-none">
      
      {/* Background ambient red glow */}
      <div className="absolute inset-0 bg-rednoir/[0.03] pointer-events-none" />

      {/* Skewed Kinetic Wrapper */}
      <div className="relative transform -rotate-1 sm:-rotate-2 scale-105 overflow-hidden py-4 sm:py-5 bg-gradient-to-r from-noir-950 via-black to-noir-950 border-y-2 border-rednoir shadow-[0_0_40px_rgba(239,35,60,0.25)]">
        
        {/* Infinite scrolling ticker */}
        <div className="flex w-max animate-kinetic-ticker">
          
          {/* Loop Set 1 */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 px-4">
            {marqueeItems.map((text, idx) => (
              <div key={`set1-${idx}`} className="flex items-center gap-6 sm:gap-10">
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:text-rednoir transition-colors duration-200">
                  {text}
                </span>
                <span className="text-rednoir font-black text-2xl sm:text-4xl drop-shadow-[0_0_12px_rgba(239,35,60,0.8)]">
                  •
                </span>
              </div>
            ))}
          </div>

          {/* Loop Set 2 (Identical for seamless infinite scroll) */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 px-4" aria-hidden="true">
            {marqueeItems.map((text, idx) => (
              <div key={`set2-${idx}`} className="flex items-center gap-6 sm:gap-10">
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:text-rednoir transition-colors duration-200">
                  {text}
                </span>
                <span className="text-rednoir font-black text-2xl sm:text-4xl drop-shadow-[0_0_12px_rgba(239,35,60,0.8)]">
                  •
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
