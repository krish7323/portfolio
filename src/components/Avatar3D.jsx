import React, { useState, useRef, useEffect } from 'react';

export default function Avatar3D() {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)');
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-[340px] h-[400px] mx-auto flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* ===== BACKGROUND AMBIENT GLOW ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[280px] h-[280px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, #1e1b4b 50%, transparent 70%)' }}
        />
      </div>

      {/* ===== ORBITING RING 1 — Horizontal ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: 'orbit-ring-1 12s linear infinite' }}>
        <div className="w-[310px] h-[310px] rounded-full border border-indigo-500/20"
          style={{ 
            borderTopColor: 'rgba(99, 102, 241, 0.6)',
            borderRightColor: 'rgba(56, 189, 248, 0.4)',
          }}
        />
      </div>

      {/* ===== ORBITING RING 2 — Tilted ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          animation: 'orbit-ring-2 18s linear infinite reverse',
          transform: 'rotateX(60deg)',
        }}>
        <div className="w-[330px] h-[330px] rounded-full border border-cyan-400/15"
          style={{ 
            borderTopColor: 'rgba(56, 189, 248, 0.5)',
            borderLeftColor: 'rgba(168, 85, 247, 0.3)',
          }}
        />
      </div>

      {/* ===== ORBITING RING 3 — Opposite tilt ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          animation: 'orbit-ring-3 15s linear infinite',
          transform: 'rotateY(60deg)',
        }}>
        <div className="w-[300px] h-[300px] rounded-full border border-purple-500/15"
          style={{ 
            borderBottomColor: 'rgba(168, 85, 247, 0.5)',
            borderRightColor: 'rgba(99, 102, 241, 0.3)',
          }}
        />
      </div>

      {/* ===== MAIN 3D AVATAR CARD ===== */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        {/* Hexagonal clip path container */}
        <div className="relative w-[250px] h-[280px] mx-auto">
          
          {/* Outer hexagonal border glow */}
          <div className="absolute -inset-1 opacity-70"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #6366f1, #38bdf8, #a855f7, #6366f1)',
              filter: 'blur(3px)',
            }}
          />

          {/* Inner hexagonal image container */}
          <div className="absolute inset-0"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              overflow: 'hidden',
            }}
          >
            {/* The photo */}
            <img
              src="/avatar.jpg"
              alt="Krishna Chandra Jha"
              className="w-full h-full object-cover object-top scale-110"
              draggable={false}
            />

            {/* Dynamic spotlight on hover */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Scan line animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30"
              style={{ mixBlendMode: 'overlay' }}>
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{ animation: 'scan-line 4s linear infinite' }}
              />
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(6, 8, 20, 0.6) 0%, transparent 35%)' }}
            />
          </div>

          {/* Corner accent dots on hexagon vertices */}
          {[
            { left: '50%', top: '-4px', tx: '-50%' },
            { left: 'calc(100% + 2px)', top: '25%', tx: '-50%' },
            { left: 'calc(100% + 2px)', top: '75%', tx: '-50%' },
            { left: '50%', top: 'calc(100% + 2px)', tx: '-50%' },
            { left: '-4px', top: '75%', tx: '-50%' },
            { left: '-4px', top: '25%', tx: '-50%' },
          ].map((pos, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full z-20"
              style={{
                left: pos.left,
                top: pos.top,
                transform: `translate(${pos.tx || '0'}, -50%)`,
                background: i % 2 === 0 ? '#818cf8' : '#38bdf8',
                boxShadow: i % 2 === 0 ? '0 0 8px #818cf8' : '0 0 8px #38bdf8',
                animation: `vertex-pulse ${2 + i * 0.3}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* ===== NAME PLATE BELOW AVATAR ===== */}
        <div className="mt-5 text-center relative z-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#0b0f24]/90 border border-[#2b3980]/60 backdrop-blur-md shadow-xl shadow-indigo-900/20">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white tracking-wide">AVAILABLE TO HIRE</span>
          </div>
        </div>
      </div>

      {/* ===== FLOATING DATA PARTICLES ===== */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 360;
        const radius = 42 + (i % 3) * 5;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        const size = i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3;
        return (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none z-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              background: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#38bdf8' : '#a855f7',
              boxShadow: `0 0 ${size * 2}px ${i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#38bdf8' : '#a855f7'}`,
              animation: `particle-orbit-${i % 3} ${4 + i * 0.7}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}

      {/* ===== TECH LABEL FLOATING TAGS ===== */}
      <div className="absolute top-4 right-0 z-20 flex flex-col gap-2 opacity-70"
        style={{ animation: 'float-tag 5s ease-in-out infinite alternate' }}>
        <span className="px-2.5 py-1 rounded-md bg-[#111736]/80 border border-[#2b3980]/40 text-[9px] font-mono text-indigo-300 backdrop-blur-sm">React.js</span>
        <span className="px-2.5 py-1 rounded-md bg-[#111736]/80 border border-[#2b3980]/40 text-[9px] font-mono text-cyan-300 backdrop-blur-sm">Node.js</span>
      </div>
      <div className="absolute bottom-16 left-0 z-20 flex flex-col gap-2 opacity-70"
        style={{ animation: 'float-tag 6s ease-in-out infinite alternate-reverse' }}>
        <span className="px-2.5 py-1 rounded-md bg-[#111736]/80 border border-[#2b3980]/40 text-[9px] font-mono text-purple-300 backdrop-blur-sm">MongoDB</span>
        <span className="px-2.5 py-1 rounded-md bg-[#111736]/80 border border-[#2b3980]/40 text-[9px] font-mono text-emerald-300 backdrop-blur-sm">Express.js</span>
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>{`
        @keyframes orbit-ring-1 {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        @keyframes orbit-ring-2 {
          from { transform: rotateX(60deg) rotateZ(0deg); }
          to { transform: rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes orbit-ring-3 {
          from { transform: rotateY(60deg) rotateZ(0deg); }
          to { transform: rotateY(60deg) rotateZ(360deg); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(290px); }
        }
        @keyframes vertex-pulse {
          0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes particle-orbit-0 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          100% { transform: translate(6px, -8px) scale(1.5); opacity: 1; }
        }
        @keyframes particle-orbit-1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          100% { transform: translate(-5px, 7px) scale(1.3); opacity: 0.9; }
        }
        @keyframes particle-orbit-2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          100% { transform: translate(4px, 5px) scale(1.2); opacity: 1; }
        }
        @keyframes float-tag {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
