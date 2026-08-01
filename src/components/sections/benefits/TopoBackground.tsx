'use client';

import React, { useMemo } from 'react';
import { BackgroundStyle } from './types';

interface TopoBackgroundProps {
  style: BackgroundStyle;
  contourCount: number;
  contourOpacity: number;
  gridOpacity: number;
}

export const TopoBackground: React.FC<TopoBackgroundProps> = ({
  style,
  contourCount,
  contourOpacity,
  gridOpacity,
}) => {
  const peaks = useMemo(() => [
    { x: 150, y: 150, rMax: 120, strength: 1.2 },
    { x: 800, y: 180, rMax: 200, strength: 0.9 },
    { x: 1200, y: 550, rMax: 220, strength: 1.5 },
    { x: 300, y: 600, rMax: 180, strength: 1.0 },
    { x: 950, y: 400, rMax: 150, strength: 0.8 },
  ], []);

  const contours = useMemo(() => {
    const list: string[][] = Array.from({ length: peaks.length }, () => []);
    
    peaks.forEach((peak, peakIdx) => {
      for (let ring = 1; ring <= contourCount; ring++) {
        const baseRadius = (ring / contourCount) * peak.rMax;
        const points: { x: number; y: number }[] = [];
        const numPoints = 24;

        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const wiggle = 
            Math.sin(angle * 3 + peakIdx) * 12 * peak.strength +
            Math.cos(angle * 5 - ring) * 6 +
            Math.sin(angle * 1.5 + ring) * 8;
          
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
  }, [peaks, contourCount]);

  const landParcels = useMemo(() => {
    return [
      "M 50 100 L 400 80 L 350 450 L 80 400 Z",
      "M 400 80 L 850 120 L 780 480 L 350 450 Z",
      "M 850 120 L 1250 90 L 1300 420 L 780 480 Z",
      "M 80 400 L 350 450 L 300 750 L 50 700 Z",
      "M 350 450 L 780 480 L 750 780 L 300 750 Z",
      "M 780 480 L 1300 420 L 1200 760 L 750 780 Z",
    ];
  }, []);

  const showTopo = style === 'topographic' || style === 'hybrid';
  const showGrid = style === 'blueprint' || style === 'hybrid';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-transparent">
      {showGrid && (
        <div 
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: gridOpacity }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(12, 44, 77, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(12, 44, 77, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(191, 160, 82, 0.06) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(191, 160, 82, 0.06) 2px, transparent 2px)
              `,
              backgroundSize: '200px 200px',
            }}
          />

          <svg className="absolute inset-0 w-full h-full text-navy/10 stroke-[0.5] fill-none">
            {landParcels.map((p, idx) => (
              <path
                key={`parcel-${idx}`}
                d={p}
                className="stroke-navy/5 stroke-dasharray-[4_4]"
                style={{ strokeDasharray: '4 4' }}
              />
            ))}
          </svg>
        </div>
      )}

      {showTopo && (
        <svg 
          className="absolute inset-0 w-full h-full fill-none transition-opacity duration-700"
          style={{ opacity: contourOpacity }}
        >
          {contours.map((peakPaths, peakIdx) => (
            <g key={`peak-${peakIdx}`} className="stroke-navy/12 stroke-[0.75]">
              {peakPaths.map((d, ringIdx) => {
                return (
                  <path 
                    key={`ring-${ringIdx}`}
                    d={d} 
                    className={`hover:stroke-gold/40 transition-colors duration-300 ${
                      ringIdx === contourCount - 1 ? 'stroke-[1.2] stroke-navy/20' : ''
                    }`}
                  />
                );
              })}
            </g>
          ))}
        </svg>
      )}
    </div>
  );
};
