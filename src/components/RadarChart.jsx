import React from 'react';

export default function RadarChart() {
  // 6 skill axes for radar chart
  const skills = [
    { label: 'Frontend', score: 95 },
    { label: 'Backend', score: 90 },
    { label: 'Database', score: 85 },
    { label: 'DevOps', score: 80 },
    { label: 'Tools', score: 88 },
    { label: 'Problem Solving', score: 95 },
  ];

  const size = 180;
  const center = size / 2;
  const radius = 65;
  const totalAxes = skills.length;

  const getCoordinates = (index, value) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (radius * value) / 100;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const polyPoints = skills
    .map((s, i) => {
      const { x, y } = getCoordinates(i, s.score);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grid Concentric Circles */}
        {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
          <polygon
            key={idx}
            points={skills
              .map((_, i) => {
                const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
                const r = radius * scale;
                return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
              })
              .join(' ')}
            fill="none"
            stroke="#1a234d"
            strokeWidth="1"
            strokeDasharray={scale === 1 ? 'none' : '2,2'}
          />
        ))}

        {/* Axis Lines */}
        {skills.map((_, i) => {
          const { x, y } = getCoordinates(i, 100);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#1a234d" strokeWidth="1" />;
        })}

        {/* Filled Radar Polygon */}
        <polygon
          points={polyPoints}
          fill="rgba(124, 58, 237, 0.25)"
          stroke="#8b5cf6"
          strokeWidth="2"
        />

        {/* Data Points */}
        {skills.map((s, i) => {
          const { x, y } = getCoordinates(i, s.score);
          return <circle key={i} cx={x} cy={y} r="3.5" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" />;
        })}
      </svg>
    </div>
  );
}
