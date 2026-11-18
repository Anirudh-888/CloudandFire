import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoCaseStudies } from './components/BentoCaseStudies';
import { Capabilities } from './components/Capabilities';
import { ConsultationSection } from './components/ConsultationSection';
import { KineticMarquee } from './components/KineticMarquee';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleBookConsultation = () => {
    const consultationEl = document.getElementById('consultation');
    if (consultationEl) {
      consultationEl.scrollIntoView({ behavior: 'smooth' });
      // Add subtle interactive highlight effect
      consultationEl.classList.add('ring-2', 'ring-rednoir/50');
      setTimeout(() => {
        consultationEl.classList.remove('ring-2', 'ring-rednoir/50');
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
    <div className="min-h-screen bg-black text-white relative flex flex-col font-sans selection:bg-rednoir selection:text-white">
      
      {/* Sticky Header with Floating Glassmorphism Pill Nav */}
      <Navbar onOpenConsultation={handleBookConsultation} />

      {/* Main Single Page Layout */}
      <main className="flex-1">
        
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

        {/* Section: Direct Technical Consultation Intake */}
        <ConsultationSection />

      </main>

      {/* Section 4: Minimalist Red Noir Footer */}
      <Footer />

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
