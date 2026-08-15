import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Floating Orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/15 blur-[120px]"
        animate={{
          x: ['-20%', '20%', '-10%', '-20%'],
          y: ['-10%', '20%', '30%', '-10%'],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '20%' }}
      />

      {/* Secondary Cyan Orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px]"
        animate={{
          x: ['20%', '-20%', '15%', '20%'],
          y: ['30%', '-10%', '10%', '30%'],
          scale: [1.1, 0.9, 1.15, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '40%', right: '10%' }}
      />

      {/* Purple Accent Orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/10 dark:bg-purple-600/12 blur-[110px]"
        animate={{
          x: ['-10%', '15%', '-25%', '-10%'],
          y: ['50%', '20%', '-10%', '50%'],
          scale: [0.95, 1.1, 0.85, 0.95],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', left: '30%' }}
      />
    </div>
  );
}
