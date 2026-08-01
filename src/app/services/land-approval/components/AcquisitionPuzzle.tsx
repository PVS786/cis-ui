'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileX, 
  ShieldAlert, 
  Hourglass, 
  Gavel, 
  Building2, 
  EyeOff, 
  Sparkles,
  FileCheck
} from 'lucide-react';

export interface Challenge {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  caseStudy: {
    location: string;
    size: string;
    outcome: string;
  };
  iconName: string;
}

export const challenges: Challenge[] = [
  {
    id: '01',
    number: '01',
    title: 'Documentation errors and rejections',
    shortDesc: 'Even minor mistakes can result in repeated submissions and setbacks.',
    longDesc: 'A single typo, missing signature, or incorrect layout size in submitted documents can trigger immediate rejection by municipal authorities, restarting the multi-month queuing cycle.',
    solutionTitle: 'Automated Document Verification',
    solutionDesc: 'Our digital verification framework scans every document against local municipal checklist rules before submission, ensuring absolute error-free compliance.',
    caseStudy: {
      location: 'Hudson Valley Area',
      size: '240 Acres',
      outcome: 'Identified and corrected 4 major zoning description errors, preventing a guaranteed 90-day delay.'
    },
    iconName: 'FileX'
  },
  {
    id: '02',
    number: '02',
    title: 'Compliance risks',
    shortDesc: 'Missing a regulation can lead to penalties or project shutdowns.',
    longDesc: 'Environmental restrictions, wetland acts, and historical preservation guidelines change frequently. Proceeding without up-to-date clearance risks sudden legal shutdowns and massive non-compliance fines.',
    solutionTitle: 'Continuous Compliance Monitoring',
    solutionDesc: 'We maintain real-time tracking of environmental, regulatory, and municipal zoning updates to guard your project against sudden regulatory shifts.',
    caseStudy: {
      location: 'Austin Tech Hub',
      size: '85 Acres',
      outcome: 'Proactively flagged a new local wetland conservation order, preserving full legal compliance.'
    },
    iconName: 'ShieldAlert'
  },
  {
    id: '03',
    number: '03',
    title: 'Delays impacting project launch',
    shortDesc: 'Approval bottlenecks can disrupt funding, planning, and overall execution.',
    longDesc: 'Unresolved municipal queues and bureaucratic stalling delay site preparation and structural work, causing critical deadlines to be missed and raising financing costs.',
    solutionTitle: 'Expedited Review Pipeline',
    solutionDesc: 'We coordinate concurrently across multiple departments using structured digital submission portals to significantly shorten public notice and hearing durations.',
    caseStudy: {
      location: 'Sonoma Development',
      size: '110 Acres',
      outcome: 'Shortened the environmental review cycle by 45 days, meeting the strict pre-funding timeline.'
    },
    iconName: 'Hourglass'
  },
  {
    id: '04',
    number: '04',
    title: 'Complex legal and regulatory hurdles',
    shortDesc: 'Navigating changing laws, zoning regulations, and government frameworks can be overwhelming.',
    longDesc: 'Urban-boundary zoning updates, easement negotiations, and complex public utility access rights require sophisticated legal and spatial analysis to prevent costly legal battles.',
    solutionTitle: 'Forensic Legal Engineering',
    solutionDesc: 'Our specialized legal teams dissect land titles, zoning covenants, and government frameworks to deliver clear, actionable strategies.',
    caseStudy: {
      location: 'Miami Waterfront Grid',
      size: '14 prime lots',
      outcome: 'Negotiated complex multi-party utility access easements to secure full construction permissions.'
    },
    iconName: 'Gavel'
  },
  {
    id: '05',
    number: '05',
    title: 'Multiple authority approvals',
    shortDesc: 'Dealing with different departments often leads to confusion and delays.',
    longDesc: 'Securing permits demands parallel approvals from water authorities, environmental agencies, traffic boards, and fire marshals, each operating on separate independent cycles.',
    solutionTitle: 'Unified Authority Coordination',
    solutionDesc: 'We act as the single point of contact, orchestrating and synchronizing all department hearings to prevent conflicting requirements.',
    caseStudy: {
      location: 'Nashville Metro Center',
      size: '42 Acres',
      outcome: 'Aligned 5 public departments for a synchronized, single-hearing permit approval.'
    },
    iconName: 'Building'
  },
  {
    id: '06',
    number: '06',
    title: 'Unclear approval timelines',
    shortDesc: 'Lack of visibility on timelines makes planning and execution difficult.',
    longDesc: 'Without a clear, predictable approval schedule, stakeholders cannot plan general contracting, materials delivery, or marketing outreach safely.',
    solutionTitle: 'Milestone Tracking & Transparency',
    solutionDesc: 'We implement advanced gantt-based project transparency, offering real-time progress updates on municipal and state-level approval stages.',
    caseStudy: {
      location: 'Denver Industrial Hub',
      size: '310 Acres',
      outcome: 'Supplied real-time milestone logs to investors, securing secondary-phase financing ahead of schedule.'
    },
    iconName: 'EyeOff'
  }
];

interface Point {
  x: number;
  y: number;
}

const X0 = 30;
const X1 = 410;
const X2 = 790;
const X3 = 1170;

const Y0 = 5;
const Y1 = 410;
const Y2 = 815;

function createJigsawEdge(p1: Point, p2: Point, hasKnob: boolean, knobDir: 'left' | 'right' | 'up' | 'down' | 'none'): string {
  if (!hasKnob || knobDir === 'none') {
    return `L ${p2.x},${p2.y}`;
  }

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);

  const ux = dx / len;
  const uy = dy / len;

  const nx = -uy;
  const ny = ux;

  const mx = p1.x + dx / 2;
  const my = p1.y + dy / 2;

  let s = 1;
  if (Math.abs(ux) < 0.1) {
    const normalX = -uy;
    if (knobDir === 'left') {
      s = normalX > 0 ? -1 : 1;
    } else if (knobDir === 'right') {
      s = normalX > 0 ? 1 : -1;
    }
  } else {
    const normalY = ux;
    if (knobDir === 'down') {
      s = normalY > 0 ? 1 : -1;
    } else if (knobDir === 'up') {
      s = normalY > 0 ? -1 : 1;
    }
  }

  const getPt = (uOffset: number, nOffset: number) => {
    return {
      x: mx + uOffset * ux + nOffset * nx,
      y: my + uOffset * uy + nOffset * ny
    };
  };

  const r = 32;
  const k = r * 0.5522847;

  const pStart = getPt(-r, 0);
  const cp1_1 = getPt(-r, k * s);
  const cp1_2 = getPt(-k, r * s);
  const pPeak = getPt(0, r * s);

  const cp2_1 = getPt(k, r * s);
  const cp2_2 = getPt(r, k * s);
  const pEnd = getPt(r, 0);

  return `L ${pStart.x.toFixed(2)},${pStart.y.toFixed(2)}
          C ${cp1_1.x.toFixed(2)},${cp1_1.y.toFixed(2)} ${cp1_2.x.toFixed(2)},${cp1_2.y.toFixed(2)} ${pPeak.x.toFixed(2)},${pPeak.y.toFixed(2)}
          C ${cp2_1.x.toFixed(2)},${cp2_1.y.toFixed(2)} ${cp2_2.x.toFixed(2)},${cp2_2.y.toFixed(2)} ${pEnd.x.toFixed(2)},${pEnd.y.toFixed(2)}
          L ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
}

interface AcquisitionPuzzleProps {
  onSelectChallenge: (challenge: Challenge) => void;
  selectedChallengeId: string | null;
  isHeroInserted: boolean;
  onToggleHero: () => void;
}

export default function AcquisitionPuzzle({
  onSelectChallenge,
  selectedChallengeId,
  isHeroInserted,
  onToggleHero
}: AcquisitionPuzzleProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'FileX': return <FileX className={className} strokeWidth={1.5} />;
      case 'ShieldAlert': return <ShieldAlert className={className} strokeWidth={1.5} />;
      case 'Hourglass': return <Hourglass className={className} strokeWidth={1.5} />;
      case 'Gavel': return <Gavel className={className} strokeWidth={1.5} />;
      case 'Building': return <Building2 className={className} strokeWidth={1.5} />;
      case 'EyeOff': return <EyeOff className={className} strokeWidth={1.5} />;
      default: return <FileX className={className} strokeWidth={1.5} />;
    }
  };

  const goldLeft = X1;
  const goldRight = X2;
  const goldTop = 270;
  const goldBottom = 550;

  const getPiecePath = (id: string): string => {
    switch (id) {
      case '01':
        return `M ${X0 + 24},${Y0}
                L ${X1},${Y0}
                ${createJigsawEdge({ x: X1, y: Y0 }, { x: X1, y: goldTop }, true, 'left')}
                L ${X1},${Y1}
                ${createJigsawEdge({ x: X1, y: Y1 }, { x: X0, y: Y1 }, true, 'down')}
                L ${X0},${Y0 + 24}
                C ${X0},${Y0 + 10.7} ${X0 + 10.7},${Y0} ${X0 + 24},${Y0}
                Z`;
      case '02':
        return `M ${X1},${Y0}
                L ${X2},${Y0}
                ${createJigsawEdge({ x: X2, y: Y0 }, { x: X2, y: goldTop }, true, 'left')}
                ${createJigsawEdge({ x: X2, y: goldTop }, { x: X1, y: goldTop }, true, 'up')}
                ${createJigsawEdge({ x: X1, y: goldTop }, { x: X1, y: Y0 }, true, 'left')}
                Z`;
      case '03':
        return `M ${X2},${Y0}
                L ${X3 - 24},${Y0}
                C ${X3 - 10.7},${Y0} ${X3},${Y0 + 10.7} ${X3},${Y0 + 24}
                L ${X3},${Y1}
                ${createJigsawEdge({ x: X3, y: Y1 }, { x: X2, y: Y1 }, true, 'down')}
                L ${X2},${Y1}
                ${createJigsawEdge({ x: X2, y: Y1 }, { x: X2, y: goldTop }, false, 'none')}
                ${createJigsawEdge({ x: X2, y: goldTop }, { x: X2, y: Y0 }, true, 'left')}
                Z`;
      case '04':
        return `M ${X0},${Y1}
                ${createJigsawEdge({ x: X0, y: Y1 }, { x: X1, y: Y1 }, true, 'down')}
                L ${X1},${Y1}
                ${createJigsawEdge({ x: X1, y: Y1 }, { x: X1, y: goldBottom }, false, 'none')}
                ${createJigsawEdge({ x: X1, y: goldBottom }, { x: X1, y: Y2 }, true, 'left')}
                L ${X0 + 24},${Y2}
                C ${X0 + 10.7},${Y2} ${X0},${Y2 - 10.7} ${X0},${Y2 - 24}
                L ${X0},${Y1}
                Z`;
      case '05':
        return `M ${X1},${goldBottom}
                ${createJigsawEdge({ x: X1, y: goldBottom }, { x: X2, y: goldBottom }, true, 'down')}
                ${createJigsawEdge({ x: X2, y: goldBottom }, { x: X2, y: Y2 }, true, 'left')}
                L ${X1},${Y2}
                ${createJigsawEdge({ x: X1, y: Y2 }, { x: X1, y: goldBottom }, true, 'left')}
                Z`;
      case '06':
        return `M ${X2},${Y1}
                ${createJigsawEdge({ x: X2, y: Y1 }, { x: X3, y: Y1 }, true, 'down')}
                L ${X3},${Y2 - 24}
                C ${X3},${Y2 - 10.7} ${X3 - 10.7},${Y2} ${X3 - 24},${Y2}
                L ${X2},${Y2}
                ${createJigsawEdge({ x: X2, y: Y2 }, { x: X2, y: goldBottom }, true, 'left')}
                L ${X2},${goldBottom}
                L ${X2},${Y1}
                Z`;
      default:
        return '';
    }
  };

  const getGoldPiecePath = (): string => {
    return `M ${goldLeft},${goldTop}
            ${createJigsawEdge({ x: goldLeft, y: goldTop }, { x: goldRight, y: goldTop }, true, 'up')}
            L ${goldRight},${goldBottom}
            ${createJigsawEdge({ x: goldRight, y: goldBottom }, { x: goldLeft, y: goldBottom }, true, 'down')}
            L ${goldLeft},${goldTop}
            Z`;
  };

  const getPieceColors = (_id: string, _isSelected: boolean, isHovered: boolean) => {
    if (isHovered) {
      return {
        fill: "url(#whiteMatte)",
        stroke: "#BFA052",
        strokeOpacity: 1,
        strokeWidth: "2.5",
        textTitleClass: "text-[#0C2C4D]",
        textDescClass: "text-slate-600",
        iconContainerClass: "bg-[#0C2C4D]/10 border-[#0C2C4D]/20",
        shadowFilter: "url(#gold-glow)"
      };
    } else {
      return {
        fill: "url(#navyMatte)",
        stroke: "#BFA052",
        strokeOpacity: 0.25,
        strokeWidth: "1.2",
        textTitleClass: "text-white",
        textDescClass: "text-[#DCE6F1]",
        iconContainerClass: "bg-white/10 border-white/15",
        shadowFilter: "none"
      };
    }
  };

  return (
    <div className="relative w-full max-w-[1240px] mx-auto py-4">
      <div className="relative w-full aspect-[1200/825] bg-transparent rounded-2xl overflow-visible p-2">
        <svg 
          viewBox="0 0 1200 825" 
          className="w-full h-full overflow-visible select-none"
          xmlns="http://www.w3.org/2000/svg"
          id="acquisition-puzzle-svg"
        >
          <defs>
            <filter id="luxury-bevel" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="-2" dy="5" stdDeviation="6" floodColor="#0C2C4D" floodOpacity="0.12" />
              <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="4.5" specularConstant="1.5" specularExponent="22" lightingColor="#ffffff" result="specular">
                <fePointLight x="-250" y="-200" z="350" />
              </feSpecularLighting>
              <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-clip" />
              <feComposite in="SourceGraphic" in2="specular-clip" operator="arithmetic" k1="0" k2="1" k3="0.45" k4="0" />
            </filter>

            <filter id="gold-hero-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-4" dy="12" stdDeviation="15" floodColor="#40300F" floodOpacity="0.45" />
              <feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="6" specularConstant="2.2" specularExponent="16" lightingColor="#FFF0CC" result="specular">
                <fePointLight x="-150" y="-150" z="400" />
              </feSpecularLighting>
              <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-clip" />
              <feComposite in="SourceGraphic" in2="specular-clip" operator="arithmetic" k1="0" k2="1" k3="0.8" k4="0" />
            </filter>

            <linearGradient id="whiteMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F9FAFB" />
              <stop offset="100%" stopColor="#F1F3F5" />
            </linearGradient>

            <linearGradient id="navyMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#143D66" />
              <stop offset="60%" stopColor="#0C2C4D" />
              <stop offset="100%" stopColor="#051526" />
            </linearGradient>

            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DF9E" />
              <stop offset="35%" stopColor="#D4B663" />
              <stop offset="70%" stopColor="#BFA052" />
              <stop offset="100%" stopColor="#8C6D28" />
            </linearGradient>
            
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 6 Surrounding Pieces */}
          <g>
            {challenges
              .slice()
              .sort((a, b) => {
                if (a.id === hoveredId) return 1;
                if (b.id === hoveredId) return -1;
                return 0;
              })
              .map((item) => {
                const isSelected = selectedChallengeId === item.id;
                const isHovered = hoveredId === item.id;
                const path = getPiecePath(item.id);

                const isCenterCol = item.id === '02' || item.id === '05';
                const isActive = isSelected || isHovered;
                const colors = getPieceColors(item.id, isSelected, isHovered);

                return (
                  <motion.g
                    key={item.id}
                    id={`puzzle-piece-group-${item.id}`}
                    className="cursor-pointer"
                    onClick={() => onSelectChallenge(item)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{
                      scale: 1,
                      transition: { duration: 0.2, ease: 'easeOut' }
                    }}
                    animate={{
                      opacity: isHeroInserted && isCenterCol ? 0.92 : 1,
                      scale: 1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <path
                      d={path}
                      fill="none"
                      stroke="#BFA052"
                      strokeWidth={isActive ? 4 : 0}
                      className="transition-all duration-300"
                      style={{ filter: colors.shadowFilter, opacity: 0.8 }}
                    />

                    <path
                      d={path}
                      fill={colors.fill}
                      stroke={colors.stroke}
                      strokeOpacity={colors.strokeOpacity}
                      strokeWidth={colors.strokeWidth}
                      filter="url(#luxury-bevel)"
                      id={`puzzle-piece-${item.id}`}
                    />

                    <foreignObject
                      x={item.id === '01' || item.id === '04' ? X0 + 20 : item.id === '02' || item.id === '05' ? X1 + 20 : X2 + 20}
                      y={
                        item.id === '02' 
                          ? Y0 + 10 
                          : item.id === '05' 
                            ? goldBottom + 10 
                            : item.id === '01' || item.id === '03' 
                              ? Y0 + 20 
                              : Y1 + 20
                      }
                      width={340}
                      height={
                        item.id === '02' || item.id === '05'
                          ? 245
                          : 365
                      }
                      className="pointer-events-none overflow-hidden"
                    >
                      <div className="flex flex-col h-full justify-center items-center text-center px-4 font-sans space-y-2.5">
                        <div className="flex items-center justify-center space-x-3 transition-all duration-300">
                          <div className={`p-2.5 border rounded-xl flex items-center justify-center shadow-inner transition-colors duration-300 ${colors.iconContainerClass}`}>
                            {renderIcon(item.iconName, "w-9 h-9 text-[#BFA052]")}
                          </div>
                          <span className="text-3xl font-tibere font-extrabold tracking-wider text-[#BFA052]">
                            {item.number}
                          </span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <h3 className={`text-[23px] sm:text-[25px] font-tibere font-bold tracking-normal leading-snug mb-1.5 transition-colors duration-300 ${colors.textTitleClass}`}>
                            {item.title}
                          </h3>
                          
                          <p className={`text-[15px] sm:text-[16px] font-poppins font-normal leading-relaxed max-w-[300px] mx-auto transition-colors duration-300 ${colors.textDescClass}`}>
                            {item.shortDesc}
                          </p>
                        </div>
                      </div>
                    </foreignObject>
                  </motion.g>
                );
              })}
          </g>

          {/* SEAMLESS 3D GOLD HERO PIECE (LAND APPROVAL) */}
          <g>
            <AnimatePresence>
              {isHeroInserted && (
                <motion.g
                  id="gold-hero-piece-group"
                  className="cursor-pointer"
                  initial={{
                    y: -400,
                    opacity: 0,
                    scale: 1.15,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    y: -400,
                    opacity: 0,
                    scale: 1.1
                  }}
                  transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                    mass: 1.1
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.25 }
                  }}
                  onClick={onToggleHero}
                >
                  <path
                    d={getGoldPiecePath()}
                    fill="none"
                    stroke="#F5DF9E"
                    strokeWidth="4"
                    className="animate-pulse"
                    style={{ filter: 'url(#gold-glow)', opacity: 0.6 }}
                  />

                  <path
                    d={getGoldPiecePath()}
                    fill="url(#goldMetallic)"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    filter="url(#gold-hero-filter)"
                    id="gold-hero-piece"
                  />

                  <foreignObject
                    x={goldLeft + 35}
                    y={goldTop + 25}
                    width={310}
                    height={230}
                    className="pointer-events-none overflow-hidden"
                  >
                    <div className="flex flex-col items-center justify-center text-center h-full text-white">
                      <div className="flex flex-col items-center mb-3">
                        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/35 shadow-inner flex items-center justify-center mb-1">
                          <FileCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="flex space-x-1 justify-center opacity-65 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-[26px] font-tibere font-extrabold tracking-wider text-white leading-normal">
                          LAND APPROVAL
                        </h2>
                      </div>
                    </div>
                  </foreignObject>
                </motion.g>
              )}
            </AnimatePresence>
          </g>
        </svg>

        {!isHeroInserted && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 pointer-events-none">
            <motion.button
              id="insert-hero-btn"
              onClick={onToggleHero}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#BFA052] to-[#E5C674] text-[#0C2C4D] font-bold tracking-widest text-xs uppercase shadow-2xl rounded-full border border-white/40 pointer-events-auto flex items-center space-x-2 cursor-pointer animate-pulse"
            >
              <Sparkles className="w-4 h-4" />
              <span>Insert Final Missing Piece</span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
