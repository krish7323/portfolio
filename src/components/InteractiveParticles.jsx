import { useEffect, useRef } from 'react';

export default function InteractiveParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let dpr = window.devicePixelRatio || 1;
    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Global cursor & touch tracking state
    const pointer = { x: null, y: null, targetX: null, targetY: null, radius: 170 };

    const handleMouseMove = (e) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      pointer.targetX = null;
      pointer.targetY = null;
    };

    // Mobile touch support
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      pointer.targetX = null;
      pointer.targetY = null;
    };

    // Global shockwave explosion on click or mobile tap anywhere on screen
    const triggerShockwave = (clientX, clientY) => {
      const originX = clientX !== undefined ? clientX : (pointer.x || window.innerWidth / 2);
      const originY = clientY !== undefined ? clientY : (pointer.y || window.innerHeight / 2);

      particles.forEach((p) => {
        const dx = p.x - originX;
        const dy = p.y - originY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxDist = Math.max(window.innerWidth, window.innerHeight) * 0.6;
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist * 18;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    const handleClick = (e) => {
      triggerShockwave(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        triggerShockwave(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Glowing vibrant multi-spectral color palette
    const colors = [
      { fill: '#10B981', glow: 'rgba(16, 185, 129, 0.85)' }, // Emerald
      { fill: '#06B6D4', glow: 'rgba(6, 182, 212, 0.85)' },  // Cyan
      { fill: '#6366F1', glow: 'rgba(99, 102, 241, 0.80)' }, // Indigo
      { fill: '#F43F5E', glow: 'rgba(244, 63, 94, 0.80)' },  // Rose Coral
      { fill: '#38BDF8', glow: 'rgba(56, 189, 248, 0.75)' }, // Sky
      { fill: '#A855F7', glow: 'rgba(168, 85, 247, 0.80)' }, // Purple
    ];

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 48 : Math.min(Math.floor(window.innerWidth / 16), 85);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const colorScheme = colors[i % colors.length];
      
      let radius;
      const rand = Math.random();
      if (rand > 0.90) {
        radius = Math.random() * 6 + 9;  // Major focal nodes
      } else if (rand > 0.60) {
        radius = Math.random() * 3 + 5;  // Medium nodes
      } else if (rand > 0.25) {
        radius = Math.random() * 2 + 3;  // Small-medium
      } else {
        radius = Math.random() * 1.5 + 2; // Spark nodes
      }

      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius,
        color: colorScheme.fill,
        glowColor: colorScheme.glow,
        friction: 0.94,
      });
    }

    const animate = () => {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      ctx.clearRect(0, 0, screenW, screenH);

      // Pointer interpolation (mouse or touch)
      if (pointer.targetX !== null && pointer.targetY !== null) {
        if (pointer.x === null) {
          pointer.x = pointer.targetX;
          pointer.y = pointer.targetY;
        } else {
          pointer.x += (pointer.targetX - pointer.x) * 0.18;
          pointer.y += (pointer.targetY - pointer.y) * 0.18;
        }
      } else {
        pointer.x = null;
        pointer.y = null;
      }

      // 1. Draw glowing constellation connection beams
      const maxConnectDist = isMobile ? 95 : 125;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = 0.28 * (1 - dist / maxConnectDist);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw nodes with radiant halo glow and pointer repulsion
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply friction to dampen shockwaves back to normal speed
        p.vx *= p.friction;
        p.vy *= p.friction;

        // Maintain gentle base drift
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < 0.3) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off screen boundaries smoothly
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > screenW) { p.x = screenW; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > screenH) { p.y = screenH; p.vy *= -1; }

        // Pointer proximity repulsion (works with mouse hover and mobile touch drag)
        if (pointer.x !== null && pointer.y !== null) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < pointer.radius && dist > 0) {
            const force = (pointer.radius - dist) / pointer.radius;
            const repelStrength = 5.5 * force;
            p.vx += (dx / dist) * repelStrength;
            p.vy += (dy / dist) * repelStrength;
          }
        }

        // Draw radiant glowing node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.radius > 5 ? 14 : 6;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}
