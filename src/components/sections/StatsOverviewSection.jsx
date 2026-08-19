import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TiltCard from '../TiltCard';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target, 10);
    let start = 0;
    const duration = 1400; // ms
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
    { value: 6, suffix: '+', label: 'Months Experience', desc: 'At Viz Digital building full-stack web and mobile apps', color: 'from-emerald-400 to-teal-500' },
    { value: 20, suffix: '+', label: 'Modules & Features', desc: 'Production APIs, admin panels, and payment pipelines', color: 'from-cyan-400 to-blue-500' },
    { value: 6, suffix: '+', label: 'Deployed Projects', desc: 'React Native, MERN stack, matrimonial & FinTech platforms', color: 'from-indigo-400 to-purple-500' },
    { value: 10, suffix: '+', label: 'Core Technologies', desc: 'React.js, Node.js, Express, MongoDB, React Native & RBAC', color: 'from-amber-400 to-rose-500' }
  ];

  return (
    <section className="py-14 px-6 sm:px-12 lg:px-20 bg-transparent border-y border-white/[0.06] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <TiltCard maxTilt={8} scale={1.03} className="h-full">
                <div className="h-full bg-[#0C111E]/65 border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group backdrop-blur-md">
                  <div>
                    <div className="text-4xl sm:text-5xl tracking-tight text-white mb-2 font-black">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className={`w-10 h-1 bg-gradient-to-r ${stat.color} rounded-full mb-3 group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]`} />
                    <h4 className="text-sm font-bold text-zinc-100 tracking-tight mb-1">
                      {stat.label}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
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
