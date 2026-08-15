import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TiltCard from '../TiltCard';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target, 10);
    let start = 0;
    const duration = 1500; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = num / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-black text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsOverviewSection() {
  const stats = [
    { value: 6, suffix: '+', label: 'Months Professional Experience', desc: 'At JT Brothers working on full-stack web applications' },
    { value: 20, suffix: '+', label: 'Completed Projects & Modules', desc: 'Full-stack applications, admin panels, and REST APIs' },
    { value: 5, suffix: '+', label: 'Production Web & Mobile Apps', desc: 'Deployed React Native, MERN & FinTech platforms' },
    { value: 10, suffix: '+', label: 'Core Full Stack Technologies', desc: 'MERN Stack, React Native, REST APIs, Razorpay & RBAC' }
  ];

  return (
    <section className="py-12 px-6 sm:px-12 lg:px-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={8} scale={1.03} className="h-full">
                <div className="h-full bg-[#0d0f17] border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between transition-colors shadow-xl group">
                  <div>
                    <div className="text-4xl sm:text-5xl tracking-tight text-white mb-2">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-3 group-hover:w-16 transition-all duration-300" />
                    <h4 className="text-sm font-bold text-zinc-200 leading-snug mb-1.5">
                      {stat.label}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                    {stat.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
