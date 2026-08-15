import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import InteractiveParticles from './components/InteractiveParticles';
import CommandPalette from './components/CommandPalette';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import StatsOverviewSection from './components/sections/StatsOverviewSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import FooterDashboard from './components/FooterDashboard';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-zinc-100 font-sans relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-white">
      {/* Custom Spring Follower Cursor */}
      <CustomCursor />

      {/* Interactive Connecting Particle Background */}
      <InteractiveParticles />

      {/* Spotlight Command Search Modal (Cmd+K / Ctrl+K) */}
      <CommandPalette isOpen={commandPaletteOpen} setIsOpen={setCommandPaletteOpen} />

      {/* Ultra Pro Sticky Header with Search Trigger */}
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Full-Width Content Sections */}
      <main className="w-full relative z-10 space-y-4">
        <HeroSection />
        <StatsOverviewSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterDashboard />
    </div>
  );
}
