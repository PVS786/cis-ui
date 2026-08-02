'use client';

import { useMemo } from 'react';

export default function TopoBackground() {
  const peaks = useMemo(() => [
    { x: 150, y: 150, rMax: 120, strength: 1.2 },
    { x: 800, y: 180, rMax: 200, strength: 0.9 },
    { x: 1200, y: 550, rMax: 220, strength: 1.5 },
    { x: 300, y: 600, rMax: 180, strength: 1.0 },
    { x: 950, y: 400, rMax: 150, strength: 0.8 },
  ], []);

  const contours = useMemo(() => {
    const list: string[][] = Array.from({ length: peaks.length }, () => []);
    const contourCount = 6;

    peaks.forEach((peak, peakIdx) => {
      for (let ring = 1; ring <= contourCount; ring++) {
        const baseRadius = (ring / contourCount) * peak.rMax;
        const points: { x: number; y: number }[] = [];
        const numPoints = 20;

        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const wiggle = 
            Math.sin(angle * 3 + peakIdx) * 10 * peak.strength +
            Math.cos(angle * 5 - ring) * 5;
          
          const r = baseRadius + wiggle;
          const px = peak.x + Math.cos(angle) * r;
          const py = peak.y + Math.sin(angle) * r;
          points.push({ x: px, y: py });
        }

        let pathData = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
        for (let i = 0; i < points.length; i++) {
          const curr = points[i];
          const next = points[(i + 1) % points.length];
          const cpX = (curr.x + next.x) / 2;
          const cpY = (curr.y + next.y) / 2;
          pathData += ` Q ${curr.x.toFixed(1)} ${curr.y.toFixed(1)}, ${cpX.toFixed(1)} ${cpY.toFixed(1)}`;
        }
        pathData += ' Z';
        list[peakIdx].push(pathData);
      }
    });

    return list;
  }, [peaks]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-30">
      <svg className="w-full h-full text-[#0C2C4D]" viewBox="0 0 1400 800" preserveAspectRatio="none">
        {contours.map((peakContours, pIdx) =>
          peakContours.map((d, rIdx) => (
            <path
              key={`${pIdx}-${rIdx}`}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeOpacity={0.12 - rIdx * 0.015}
            />
          ))
        )}
      </svg>
    </div>
  );
}
