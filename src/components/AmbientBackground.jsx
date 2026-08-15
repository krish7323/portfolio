import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Emerald Aurora */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-600/10 to-transparent blur-[140px] animate-aurora-1" 
      />
      
      {/* Center Right Cyan Aurora */}
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-cyan-500/12 via-indigo-600/10 to-transparent blur-[150px] animate-aurora-2" 
      />

      {/* Bottom Center Subtle Indigo Glow */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-emerald-600/10 via-teal-900/10 to-transparent blur-[160px] animate-aurora-1" 
      />

      {/* Ultra-subtle overlay grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
