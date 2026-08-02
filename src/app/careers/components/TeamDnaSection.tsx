'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  CalendarCheck, 
  BookOpen, 
  Award, 
  Hammer, 
  ChevronRight 
} from 'lucide-react';

export interface DnaLevel {
  id: number;
  name: string;
  color: 'blue' | 'gold';
  hexColor: string;
  quote: string;
  description: string;
  traits: string[];
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export const dnaLevels: DnaLevel[] = [
  {
    id: 1,
    name: 'CHARACTER',
    color: 'blue',
    hexColor: '#0C2C4D',
    quote: 'Character is the foundation on which all structural and personal trust is built.',
    description: 'The foundation of trust. Integrity, honesty, and doing the right thing always.',
    traits: [
      'Absolute Honesty & Transparency',
      'Ethical Project Delivery',
      'Respect & Inclusivity',
      'Ownership & Personal Integrity'
    ],
    icon: ShieldCheck
  },
  {
    id: 2,
    name: 'ATTITUDE',
    color: 'gold',
    hexColor: '#BFA052',
    quote: 'Our mindset shapes our reality; we approach every challenge with enthusiasm and resilience.',
    description: 'A positive outlook, resilience, and a solution-first mindset.',
    traits: [
      'Solution-Oriented Focus',
      'Optimism & Collaborative Energy',
      'Resilience in the Face of Obstacles',
      'Eagerness to Support Colleagues'
    ],
    icon: Sparkles
  },
  {
    id: 3,
    name: 'RELIABILITY',
    color: 'blue',
    hexColor: '#0C2C4D',
    quote: 'Consistency is our trademark; we deliver on our promises on time, every time.',
    description: 'The confidence that our people deliver on their word, every time.',
    traits: [
      'Strict Adherence to Timelines',
      'Uncompromising Quality Standards',
      'Dependable Peer-to-Peer Support',
      'Punctuality & Structured Workflows'
    ],
    icon: CalendarCheck
  },
  {
    id: 4,
    name: 'TEACHABILITY',
    color: 'gold',
    hexColor: '#BFA052',
    quote: 'Growth begins with a willingness to learn, listen, and evolve continuously.',
    description: 'The openness to learn, adapt, and grow with evolving challenges.',
    traits: [
      'Humility & Openness to Feedback',
      'Continuous Skill Upgradation',
      'Adaptability to Industry Innovations',
      'Active Listening & Curiosity'
    ],
    icon: BookOpen
  },
  {
    id: 5,
    name: 'EXPERIENCE',
    color: 'blue',
    hexColor: '#0C2C4D',
    quote: 'Leveraging years of craftsmanship and deep industry wisdom to build masterpieces.',
    description: 'Lessons gained through practice, challenges, and achievements.',
    traits: [
      'Proven Industry Expertise',
      'Technical Mastery & Safety',
      'Risk Assessment & Mitigation',
      'Informed Decision-Making'
    ],
    icon: Award
  },
  {
    id: 6,
    name: 'SKILLS',
    color: 'gold',
    hexColor: '#BFA052',
    quote: 'Precision, execution, and master-level capability turn blueprints into landmarks.',
    description: 'The tools and technical know-how that sharpen our delivery.',
    traits: [
      'Precision Engineering & Planning',
      'Advanced Technology Integration',
      'Exquisite Aesthetic Craftsmanship',
      'Effective Cross-Functional Leadership'
    ],
    icon: Hammer
  }
];

interface PyramidSvgProps {
  activeId: number;
  hoveredId: number | null;
  onHover: (id: number | null) => void;
}

export const PyramidSvg: React.FC<PyramidSvgProps> = ({
  activeId,
  onHover,
}) => {
  const height = 430 / 6; // Height of each level (71.67px per level)
  const centerX_pyramid = 600; // Accurately centered at X = 600 in 1200-wide canvas
  const y_top_limit = 35;
  const slant_ratio = 0.50;
  const center_slant_ratio = 0.27;

  const getLevelAnchor = (id: number) => {
    const y_top_full = y_top_limit + (6 - id) * height;
    const y_bottom_full = y_top_full + height;
    const y_mid = (y_top_full + y_bottom_full) / 2;

    const xl = centerX_pyramid - slant_ratio * (y_mid - y_top_limit);
    const xr = centerX_pyramid + slant_ratio * (y_mid - y_top_limit);

    const isLeft = id % 2 !== 0; // 1, 3, 5 on Left | 2, 4, 6 on Right

    if (isLeft) {
      const numberX = xl - 110;
      const textRightX = numberX - 36;
      return {
        isLeft: true,
        pyramidEdgeX: xl,
        y_mid,
        pointerStartX: xl - 12,
        pointerEndX: xl - 75,
        numberX,
        textX: 20,
        textWidth: Math.max(160, textRightX - 20),
      };
    } else {
      const numberX = xr + 110;
      const textLeftX = numberX + 36;
      return {
        isLeft: false,
        pyramidEdgeX: xr,
        y_mid,
        pointerStartX: xr + 12,
        pointerEndX: xr + 75,
        numberX,
        textX: textLeftX,
        textWidth: Math.max(160, 1180 - textLeftX),
      };
    }
  };

  const y_base_top = y_top_limit + 6 * height; // 465
  const y_base_bottom = y_base_top + 32; // 497

  const xl_base_top = centerX_pyramid - slant_ratio * (y_base_top - y_top_limit);
  const xr_base_top = centerX_pyramid + slant_ratio * (y_base_top - y_top_limit);

  const xl_base_bottom = xl_base_top + 16;
  const xr_base_bottom = xr_base_top - 16;

  return (
    <div className="w-full max-w-[1320px] mx-auto select-none flex items-center justify-center">
      <svg viewBox="0 0 1200 525" className="w-full h-auto overflow-visible">
        <defs>
          <clipPath id="pyramid-only-clip">
            <polygon
              points={`
                ${centerX_pyramid},${y_top_limit}
                ${xr_base_top},${y_base_top}
                ${xr_base_bottom},${y_base_bottom}
                ${xl_base_bottom},${y_base_bottom}
                ${xl_base_top},${y_base_top}
              `}
            />
          </clipPath>

          <filter id="shadow-blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" />
          </filter>

          <linearGradient id="glass-left-shading" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00020a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00020a" stopOpacity="0.32" />
          </linearGradient>

          <linearGradient id="glass-center-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.24" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="glass-right-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.16" />
          </linearGradient>

          <linearGradient id="global-ambient-light" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.14" />
          </linearGradient>

          <linearGradient id="glass-gloss-diagonal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* --- 3D PYRAMID BASE SLICES & FACETS --- */}
        {dnaLevels.map((level) => {
          const isActive = activeId === level.id;

          const baseColor = level.color === 'gold' ? '#BFA052' : '#0C2C4D';
          const activeColor = level.color === 'gold' ? '#CFAE5C' : '#143D66';

          const y_top_full = y_top_limit + (6 - level.id) * height;
          const y_bottom_full = y_top_full + height;

          const gap = 4;
          const y_top = y_top_full + (level.id === 6 ? 0 : gap / 2);
          const y_bottom = y_bottom_full - (level.id === 1 ? 0 : gap / 2);

          const xl = (y: number) => centerX_pyramid - slant_ratio * (y - y_top_limit);
          const xr = (y: number) => centerX_pyramid + slant_ratio * (y - y_top_limit);
          const xcl = (y: number) => centerX_pyramid - center_slant_ratio * (y - y_top_limit);
          const xcr = (y: number) => centerX_pyramid + center_slant_ratio * (y - y_top_limit);

          const centerY_level = (y_top_full + y_bottom_full) / 2;
          const glossX = (y: number) => centerX_pyramid + 3.5 + (y - y_top_limit) * 0.10;

          let basePoints = '';
          let leftPoints = '';
          let centerPoints = '';
          let rightPoints = '';
          let ambientPoints = '';

          const glossYBottom = level.id === 1 ? y_base_bottom : y_bottom;
          const glossPoints = `
            ${glossX(y_top) - 8},${y_top}
            ${glossX(y_top) + 12},${y_top}
            ${glossX(glossYBottom) + 12},${glossYBottom}
            ${glossX(glossYBottom) - 8},${glossYBottom}
          `;

          const creaseYBottom = level.id === 1 ? y_base_bottom : y_bottom;
          const creaseXclBottom = level.id === 1 ? centerX_pyramid - center_slant_ratio * (y_base_bottom - y_top_limit) : xcl(y_bottom);
          const creaseXcrBottom = level.id === 1 ? centerX_pyramid + center_slant_ratio * (y_base_bottom - y_top_limit) : xcr(y_bottom);

          if (level.id === 6) {
            basePoints = `${centerX_pyramid},${y_top} ${xr(y_bottom)},${y_bottom} ${xl(y_bottom)},${y_bottom}`;
            leftPoints = `${centerX_pyramid},${y_top} ${xcl(y_bottom)},${y_bottom} ${xl(y_bottom)},${y_bottom}`;
            centerPoints = `${centerX_pyramid},${y_top} ${xcr(y_bottom)},${y_bottom} ${xcl(y_bottom)},${y_bottom}`;
            rightPoints = `${centerX_pyramid},${y_top} ${xr(y_bottom)},${y_bottom} ${xcr(y_bottom)},${y_bottom}`;
            ambientPoints = basePoints;
          } else if (level.id === 1) {
            basePoints = `${xl(y_top)},${y_top} ${xr(y_top)},${y_top} ${xr(y_bottom)},${y_bottom} ${xr_base_bottom},${y_base_bottom} ${xl_base_bottom},${y_base_bottom} ${xl(y_bottom)},${y_bottom}`;
            leftPoints = `${xl(y_top)},${y_top} ${xcl(y_top)},${y_top} ${creaseXclBottom},${y_base_bottom} ${xl_base_bottom},${y_base_bottom} ${xl(y_bottom)},${y_bottom}`;
            centerPoints = `${xcl(y_top)},${y_top} ${xcr(y_top)},${y_top} ${creaseXcrBottom},${y_base_bottom} ${creaseXclBottom},${y_base_bottom}`;
            rightPoints = `${xcr(y_top)},${y_top} ${xr(y_top)},${y_top} ${xr(y_bottom)},${y_bottom} ${xr_base_bottom},${y_base_bottom} ${creaseXcrBottom},${y_base_bottom}`;
            ambientPoints = basePoints;
          } else {
            basePoints = `${xl(y_top)},${y_top} ${xr(y_top)},${y_top} ${xr(y_bottom)},${y_bottom} ${xl(y_bottom)},${y_bottom}`;
            leftPoints = `${xl(y_top)},${y_top} ${xcl(y_top)},${y_top} ${xcl(y_bottom)},${y_bottom} ${xl(y_bottom)},${y_bottom}`;
            centerPoints = `${xcl(y_top)},${y_top} ${xcr(y_top)},${y_top} ${xcr(y_bottom)},${y_bottom} ${xcl(y_bottom)},${y_bottom}`;
            rightPoints = `${xcr(y_top)},${y_top} ${xr(y_top)},${y_top} ${xr(y_bottom)},${y_bottom} ${xcr(y_bottom)},${y_bottom}`;
            ambientPoints = basePoints;
          }

          return (
            <motion.g
              key={`pyramid-level-${level.id}`}
              className="cursor-pointer"
              onMouseEnter={() => onHover(level.id)}
              onMouseLeave={() => onHover(null)}
              animate={{
                scale: isActive ? 1.028 : 1,
                y: isActive ? -4 : 0,
                filter: isActive
                  ? 'brightness(1.08) drop-shadow(0 8px 16px rgba(12, 44, 77, 0.25))'
                  : 'brightness(1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))',
              }}
              style={{
                transformOrigin: `${centerX_pyramid}px ${centerY_level}px`
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              <polygon
                points={basePoints}
                fill={isActive ? activeColor : baseColor}
                className="transition-colors duration-300"
              />

              <polygon
                points={leftPoints}
                fill="url(#glass-left-shading)"
                style={{ mixBlendMode: 'multiply' }}
                className="pointer-events-none"
              />

              <polygon
                points={centerPoints}
                fill="url(#glass-center-highlight)"
                style={{ mixBlendMode: 'screen' }}
                className="pointer-events-none"
              />

              <polygon
                points={rightPoints}
                fill="url(#glass-right-shading)"
                className="pointer-events-none"
              />

              <polygon
                points={ambientPoints}
                fill="url(#global-ambient-light)"
                style={{ mixBlendMode: 'overlay' }}
                className="pointer-events-none"
              />

              <polygon
                points={glossPoints}
                fill="url(#glass-gloss-diagonal)"
                style={{ mixBlendMode: 'screen' }}
                className="pointer-events-none"
              />

              <line
                x1={level.id === 6 ? centerX_pyramid : xcl(y_top)}
                y1={y_top}
                x2={creaseXclBottom}
                y2={creaseYBottom}
                stroke="#000000"
                strokeWidth={0.75}
                opacity={0.08}
                className="pointer-events-none"
              />
              <line
                x1={level.id === 6 ? centerX_pyramid : xcr(y_top)}
                y1={y_top}
                x2={creaseXcrBottom}
                y2={creaseYBottom}
                stroke="#ffffff"
                strokeWidth={0.75}
                opacity={0.15}
                className="pointer-events-none"
              />

              {level.id === 1 && (
                <line
                  x1={xl_base_top}
                  y1={y_base_top}
                  x2={xr_base_top}
                  y2={y_base_top}
                  stroke="#ffffff"
                  strokeWidth={1.2}
                  opacity={0.4}
                  className="pointer-events-none"
                />
              )}

              {isActive && (
                <polygon
                  points={basePoints}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1.2}
                  opacity={0.8}
                  className="pointer-events-none"
                />
              )}
            </motion.g>
          );
        })}

        {/* --- SYMMETRICAL ALIGNED NUMBER BADGES, POINTER LINES, AND BALANCED TEXT WRAPPING --- */}
        {dnaLevels.map((level) => {
          const isActive = activeId === level.id;
          const blockColor = level.color === 'gold' ? '#BFA052' : '#0C2C4D';
          const { isLeft, pointerStartX, pointerEndX, numberX, textX, textWidth, y_mid } = getLevelAnchor(level.id);

          return (
            <motion.g
              key={`block-group-${level.id}`}
              className="cursor-pointer"
              onMouseEnter={() => onHover(level.id)}
              onMouseLeave={() => onHover(null)}
              animate={{
                y: isActive ? -6 : 0,
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              {/* Geometrically Centered Slanted Number Badge */}
              <g transform={`translate(${numberX}, ${y_mid})`}>
                <motion.polygon
                  points={
                    isLeft
                      ? "-14,-22 26,-22 14,22 -26,22"   // Left side: Geometrically centered, slanting down & left
                      : "-26,-22 14,-22 26,22 -14,22"   // Right side: Geometrically centered, slanting down & right
                  }
                  fill={blockColor}
                  stroke={isActive ? '#ffffff' : 'none'}
                  strokeWidth={isActive ? 2 : 0}
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    fill: isActive
                      ? level.color === 'gold' ? '#CFAE5C' : '#143D66'
                      : blockColor,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />

                {/* Number Inside Badge - 100% Dead-Center Aligned at (0, 0) */}
                <text
                  x={0}
                  y={0}
                  dominantBaseline="central"
                  textAnchor="middle"
                  fill="#ffffff"
                  className="font-poppins font-black text-[22px] sm:text-[24px] tracking-tight pointer-events-none"
                >
                  {level.id.toString().padStart(2, '0')}
                </text>
              </g>

              {/* Connecting Pointer Line to Level Edge */}
              <motion.line
                x1={pointerStartX}
                y1={y_mid}
                x2={pointerEndX}
                y2={y_mid}
                stroke={level.color === 'gold' ? '#BFA052' : '#0C2C4D'}
                strokeWidth={1.8}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0.45,
                  scaleX: isActive ? 1 : 0.8,
                }}
                style={{ originX: isLeft ? 1 : 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />

              {/* Symmetrical Non-Overlapping Text Area */}
              <foreignObject
                x={textX}
                y={y_mid - 20}
                width={textWidth}
                height={130}
                style={{ overflow: 'visible' }}
                className="pointer-events-none"
              >
                <div
                  className={`flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'} pointer-events-auto select-none w-full`}
                  style={{ overflow: 'visible' }}
                >
                  {/* Level Title */}
                  <div
                    className="font-poppins font-black text-[16px] sm:text-[18px] md:text-[20px] tracking-[0.12em] uppercase select-none transition-all duration-300 whitespace-nowrap"
                    style={{
                      color: level.color === 'gold' ? '#BFA052' : '#0C2C4D',
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    {level.name}
                  </div>

                  {/* Secondary Explanation Text */}
                  <div className={`h-0 overflow-visible relative w-full flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, x: isLeft ? 12 : -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: isLeft ? 6 : -6 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute ${isLeft ? 'right-0 text-right' : 'left-0 text-left'} top-[4px] font-poppins text-[12px] sm:text-[13px] font-bold text-slate-700 max-w-[210px] sm:max-w-[240px] leading-snug`}
                        >
                          {level.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </foreignObject>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

export default function TeamDnaSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [autoActiveId, setAutoActiveId] = useState<number>(1);

  // Sequential counter loop from bottom (Pillar 01) to top (Pillar 06)
  useEffect(() => {
    // If user is actively hovering over a pillar, pause the auto-counter
    if (hoveredId !== null) return;

    const interval = setInterval(() => {
      setAutoActiveId((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 2600);

    return () => clearInterval(interval);
  }, [hoveredId]);

  // Active pillar is either the currently hovered pillar or the auto-counter pillar
  const activeId = hoveredId !== null ? hoveredId : autoActiveId;

  return (
    <section className="max-w-[94rem] mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center pt-10 pb-0">
      
      {/* SECTION HEADER: Title with side gold arrows + Underline (100% Single Line) */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center mb-6">
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-3 w-full">
          {/* Left Gold Arrow */}
          <div className="hidden sm:flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFA052]" />
            <span className="w-12 md:w-20 h-[2px] bg-[#BFA052]" />
            <ChevronRight className="w-4 h-4 text-[#BFA052] -ml-2" />
          </div>

          {/* Title rendered strictly on ONE single line */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.06em] uppercase whitespace-nowrap flex items-center justify-center gap-2 sm:gap-3.5">
            <span className="text-[#0C2C4D]">THE CONSERVVE</span>{' '}
            <span className="text-[#BFA052]">TEAM DNA</span>
          </h2>

          {/* Right Gold Arrow */}
          <div className="hidden sm:flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[#BFA052] rotate-180 -mr-2" />
            <span className="w-12 md:w-20 h-[2px] bg-[#BFA052]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFA052]" />
          </div>
        </div>

        {/* Gold Underline Accent with Center Dot */}
        <div className="relative flex items-center justify-center">
          <div className="w-32 h-[3px] bg-[#BFA052] rounded-full" />
          <div className="absolute w-3 h-3 bg-[#BFA052] rounded-full border-2 border-white shadow-sm" />
        </div>
      </div>

      {/* 3D PYRAMID CANVAS - Centered & Enlarged */}
      <div className="w-full max-w-[1250px] mx-auto flex items-center justify-center min-h-[420px]">
        <PyramidSvg
          activeId={activeId}
          hoveredId={hoveredId}
          onHover={setHoveredId}
        />
      </div>

    </section>
  );
}
