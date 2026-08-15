import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const clickable = target.closest('a, button, input, textarea, [data-cursor]');
      if (clickable) {
        setIsHovered(true);
        const customText = clickable.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] flex items-center justify-center font-mono text-[9px] font-bold text-black"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 64 : 44) : 28,
          height: isHovered ? (cursorText ? 64 : 44) : 28,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.95)' : 'rgba(16, 185, 129, 0.1)',
          borderColor: isHovered ? 'rgba(16, 185, 129, 1)' : 'rgba(16, 185, 129, 0.4)',
          borderWidth: isHovered ? 0 : 1.5,
          boxShadow: isHovered ? '0 0 20px rgba(16, 185, 129, 0.5)' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-tighter uppercase font-extrabold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-400 pointer-events-none z-[1000] shadow-[0_0_8px_#10b981]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
      />
    </>
  );
}
