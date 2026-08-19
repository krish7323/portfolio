import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import StatsOverviewSection from './components/sections/StatsOverviewSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import FooterDashboard from './components/FooterDashboard';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#06080F] text-zinc-100 font-sans relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-white">
      {/* Precision Spring Cursor */}
      <CustomCursor />

      {/* Atmospheric Aurora Multi-Glow Background */}
      <AmbientBackground />

      {/* Glassmorphism Sticky Header */}
      <Header />

      {/* Main Full-Width Content Sections */}
      <main className="w-full relative z-10 space-y-0">
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
