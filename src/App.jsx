import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoCaseStudies } from './components/BentoCaseStudies';
import { Capabilities } from './components/Capabilities';
import { ConsultationSection } from './components/ConsultationSection';
import { KineticMarquee } from './components/KineticMarquee';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

const FOUNDER_PORTFOLIO_URL = 'https://anirudh.cloudandfire.tech';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const isFounderRoute =
      window.location.hash === '#founder' ||
      window.location.pathname === '/founder' ||
      window.location.pathname.startsWith('/founder');

    if (isFounderRoute) {
      window.location.replace(FOUNDER_PORTFOLIO_URL);
    }
  }, []);

  const handleOpenFounder = () => {
    window.open(FOUNDER_PORTFOLIO_URL, '_blank', 'noopener,noreferrer');
  };

  const handleBookConsultation = () => {
    const consultationEl = document.getElementById('consultation');
    if (consultationEl) {
      consultationEl.scrollIntoView({ behavior: 'smooth' });
      // Add subtle interactive highlight effect
      consultationEl.classList.add('ring-2', 'ring-rednoir/60');
      setTimeout(() => {
        consultationEl.classList.remove('ring-2', 'ring-rednoir/60');
      }, 1500);
    }
  };

  const handleExploreWork = () => {
    const el = document.getElementById('proof-of-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-sans selection:bg-rednoir selection:text-white w-full max-w-full overflow-x-clip min-w-0">
      
      {/* Sticky Header with Floating Glassmorphism Pill Nav */}
      <Navbar 
        onOpenConsultation={handleBookConsultation} 
        onOpenFounder={handleOpenFounder}
      />

      {/* Main Single Page Layout */}
      <main className="flex-1 w-full max-w-full min-w-0">
        
        {/* Section 1: Sticky Header & Hero */}
        <Hero 
          onBookConsultation={handleBookConsultation} 
          onExploreWork={handleExploreWork} 
        />

        {/* Section 2: Proof of Work (Case Studies Bento Grid) */}
        <BentoCaseStudies 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* Full-Width Skewed Kinetic Marquee Ticker */}
        <KineticMarquee />

        {/* Section 3: Core Capabilities */}
        <Capabilities 
          onBookConsultation={handleBookConsultation} 
        />

        {/* Section 4: High-End Enterprise Consultation Intake Card */}
        <ConsultationSection />

      </main>

      {/* Section 5: Minimalist Red Noir Footer */}
      <Footer 
        onOpenFounder={handleOpenFounder} 
      />

      {/* Detailed Architectural Blueprint Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onBookConsultation={handleBookConsultation}
        />
      )}

    </div>
  );
}

export default App;