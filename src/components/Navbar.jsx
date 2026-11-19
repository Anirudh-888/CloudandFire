import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, Menu, X, User } from 'lucide-react';

export const Navbar = ({ onOpenConsultation, onOpenFounder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    setMobileMenuOpen(false);
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      scrollToSection('consultation');
    }
  };

  const handleFounderClick = () => {
    setMobileMenuOpen(false);
    if (onOpenFounder) {
      onOpenFounder();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300 pointer-events-none w-full max-w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Glassmorphism Pill Nav */}
        <div className={`w-full flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'glass-pill shadow-[0_12px_36px_rgba(0,0,0,0.92)] border-rednoir/35 bg-black/85' 
            : 'glass-pill bg-black/65'
        }`}>
          
          {/* Uncontained Prominent Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center group transition-transform duration-200 active:scale-95"
            aria-label="Cloud & Fire Home"
          >
            <Logo size="default" />
          </a>

          {/* Clean Desktop Navigation Links: Services, Case Studies, Capabilities, Founder */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-zinc-400 hover:text-white transition-colors duration-150 py-1"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('proof-of-work')}
              className="text-zinc-400 hover:text-white transition-colors duration-150 py-1"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="text-zinc-400 hover:text-white transition-colors duration-150 py-1"
            >
              Capabilities
            </button>
            <button 
              onClick={handleFounderClick}
              className="text-zinc-400 hover:text-white transition-colors duration-150 py-1 flex items-center gap-1.5 group"
            >
              <span>Founder</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rednoir/20 text-rednoir border border-rednoir/30 group-hover:bg-rednoir group-hover:text-white transition-colors">
                Profile
              </span>
            </button>
          </nav>

          {/* Right Action: Glowing CTA Button (hidden on <sm to prevent mobile crowding; accessible in drawer) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleBookConsultation}
              className="hidden sm:inline-flex relative group overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rednoir via-red-500 to-red-600 rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[2px]" />
              
              <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-black text-xs sm:text-sm font-semibold text-white transition-colors group-hover:bg-zinc-950 shadow-[0_0_20px_rgba(239,35,60,0.35)] group-hover:shadow-[0_0_28px_rgba(239,35,60,0.6)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rednoir opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rednoir"></span>
                </span>
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rednoir group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rednoir" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl glass-pill bg-black/95 p-6 border border-rednoir/30 shadow-[0_20px_40px_rgba(0,0,0,0.95)] pointer-events-auto animate-fade-in">
          <div className="flex flex-col gap-3.5 text-base font-medium">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left py-2 px-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors flex items-center justify-between"
            >
              <span>Services</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button 
              onClick={() => scrollToSection('proof-of-work')}
              className="text-left py-2 px-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors flex items-center justify-between"
            >
              <span>Case Studies (Proof of Work)</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="text-left py-2 px-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors flex items-center justify-between"
            >
              <span>Core Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button 
              onClick={handleFounderClick}
              className="text-left py-2 px-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span>Founder Profile</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rednoir/20 text-rednoir">Direct</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button 
              onClick={() => scrollToSection('consultation')}
              className="text-left py-2 px-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors flex items-center justify-between"
            >
              <span>Direct Intake & Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>BASED IN BENGALURU, INDIA</span>
              </div>
              <button
                onClick={handleBookConsultation}
                className="w-full py-3 px-4 rounded-xl bg-rednoir hover:bg-rednoir-deep text-white font-semibold text-center text-sm shadow-[0_0_20px_rgba(239,35,60,0.4)] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
