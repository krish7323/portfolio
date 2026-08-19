import InteractiveParticles from './InteractiveParticles';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06080F]">
      {/* Top Left Radiant Emerald Aurora */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-600/12 to-transparent blur-[140px] animate-aurora-1 pointer-events-none"
      />
      
      {/* Top Right Cyber Cyan Glow */}
      <div 
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/18 via-blue-600/12 to-transparent blur-[150px] animate-aurora-2 pointer-events-none"
      />

      {/* Bottom Center Indigo / Violet Atmospheric Depth */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-indigo-600/18 via-purple-900/12 to-transparent blur-[160px] animate-aurora-3 pointer-events-none"
      />

      {/* Subtle modern coordinate dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Full-Page Interactive Kinetic Particles Canvas */}
      <InteractiveParticles />
    </div>
  );
}
