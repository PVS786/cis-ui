'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Hourglass,
  Handshake,
  Network,
  Scale,
  Map,
  Sparkles,
  Building2
} from 'lucide-react';
import { Challenge, Point } from './types';
import { challenges } from './challengesData';

interface AcquisitionPuzzleProps {
  onSelectChallenge: (challenge: Challenge) => void;
  selectedChallengeId: string | null;
  isHeroInserted: boolean;
  onToggleHero: () => void;
}

// Coordinate constants
const X0 = 30;
const X1 = 410;
const X2 = 790;
const X3 = 1170;

const Y0 = 5;
const Y1 = 410;
const Y2 = 815;

// Jigsaw path edge generator (physical directions)
function createJigsawEdge(p1: Point, p2: Point, hasKnob: boolean, knobDir: 'left' | 'right' | 'up' | 'down' | 'none'): string {
  if (!hasKnob || knobDir === 'none') {
    return `L ${p2.x},${p2.y}`;
  }

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);

  const ux = dx / len;
  const uy = dy / len;

  // Normal vector (clockwise 90 deg)
  const nx = -uy;
  const ny = ux;

  const mx = p1.x + dx / 2;
  const my = p1.y + dy / 2;

  let s = 1;
  if (Math.abs(ux) < 0.1) {
    // Vertical edge
    const normalX = -uy;
    if (knobDir === 'left') {
      s = normalX > 0 ? -1 : 1;
    } else if (knobDir === 'right') {
      s = normalX > 0 ? 1 : -1;
    }
  } else {
    // Horizontal edge
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

  // Smooth semicircle parameters for knobs and sockets
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

export default function AcquisitionPuzzle({
  onSelectChallenge,
  selectedChallengeId,
  isHeroInserted,
  onToggleHero
}: AcquisitionPuzzleProps) {

  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  // Map icon names to Lucide icons
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className={className} strokeWidth={1.5} />;
      case 'Hourglass': return <Hourglass className={className} strokeWidth={1.5} />;
      case 'Handshake': return <Handshake className={className} strokeWidth={1.5} />;
      case 'Network': return <Network className={className} strokeWidth={1.5} />;
      case 'Scale': return <Scale className={className} strokeWidth={1.5} />;
      case 'Map': return <Map className={className} strokeWidth={1.5} />;
      default: return <ShieldCheck className={className} strokeWidth={1.5} />;
    }
  };

  const goldLeft = X1;
  const goldRight = X2;
  const goldTop = 270;
  const goldBottom = 550;

  // Define SVG Paths for the 6 surrounding pieces
  const getPiecePath = (id: string): string => {
    switch (id) {
      case '01': // Top-Left
        return `M ${X0 + 24},${Y0}
                L ${X1},${Y0}
                ${createJigsawEdge({ x: X1, y: Y0 }, { x: X1, y: goldTop }, true, 'left')}
                L ${X1},${Y1}
                ${createJigsawEdge({ x: X1, y: Y1 }, { x: X0, y: Y1 }, true, 'down')}
                L ${X0},${Y0 + 24}
                C ${X0},${Y0 + 10.7} ${X0 + 10.7},${Y0} ${X0 + 24},${Y0}
                Z`;
      case '02': // Top-Middle
        return `M ${X1},${Y0}
                L ${X2},${Y0}
                ${createJigsawEdge({ x: X2, y: Y0 }, { x: X2, y: goldTop }, true, 'left')}
                ${createJigsawEdge({ x: X2, y: goldTop }, { x: X1, y: goldTop }, true, 'up')}
                ${createJigsawEdge({ x: X1, y: goldTop }, { x: X1, y: Y0 }, true, 'left')}
                Z`;
      case '03': // Top-Right
        return `M ${X2},${Y0}
                L ${X3 - 24},${Y0}
                C ${X3 - 10.7},${Y0} ${X3},${Y0 + 10.7} ${X3},${Y0 + 24}
                L ${X3},${Y1}
                ${createJigsawEdge({ x: X3, y: Y1 }, { x: X2, y: Y1 }, true, 'down')}
                L ${X2},${Y1}
                ${createJigsawEdge({ x: X2, y: Y1 }, { x: X2, y: goldTop }, false, 'none')}
                ${createJigsawEdge({ x: X2, y: goldTop }, { x: X2, y: Y0 }, true, 'left')}
                Z`;
      case '04': // Bottom-Left
        return `M ${X0},${Y1}
                ${createJigsawEdge({ x: X0, y: Y1 }, { x: X1, y: Y1 }, true, 'down')}
                L ${X1},${Y1}
                ${createJigsawEdge({ x: X1, y: Y1 }, { x: X1, y: goldBottom }, false, 'none')}
                ${createJigsawEdge({ x: X1, y: goldBottom }, { x: X1, y: Y2 }, true, 'left')}
                L ${X0 + 24},${Y2}
                C ${X0 + 10.7},${Y2} ${X0},${Y2 - 10.7} ${X0},${Y2 - 24}
                L ${X0},${Y1}
                Z`;
      case '05': // Bottom-Middle
        return `M ${X1},${goldBottom}
                ${createJigsawEdge({ x: X1, y: goldBottom }, { x: X2, y: goldBottom }, true, 'down')}
                ${createJigsawEdge({ x: X2, y: goldBottom }, { x: X2, y: Y2 }, true, 'left')}
                L ${X1},${Y2}
                ${createJigsawEdge({ x: X1, y: Y2 }, { x: X1, y: goldBottom }, true, 'left')}
                Z`;
      case '06': // Bottom-Right
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
      // ON HOVER: White puzzle piece with Navy text & Gold highlights
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
      // DEFAULT (NO HOVER): Navy Blue puzzle piece with White text & Gold numbers
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
      {/* 3D Scene Container */}
      <div className="relative w-full aspect-[1200/825] bg-transparent rounded-2xl overflow-visible p-2">

        {/* Real SVG rendering of the puzzle */}
        <svg
          viewBox="0 0 1200 825"
          className="w-full h-full overflow-visible select-none"
          xmlns="http://www.w3.org/2000/svg"
          id="acquisition-puzzle-svg"
        >
          {/* DEFINITIONS & FILTERS */}
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

          {/* SIX SURROUNDING PIECES */}
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

          {/* SEAMLESS 3D GOLD HERO PIECE (COMPLETE ACQUISITION) */}
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
                          <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="flex space-x-1 justify-center opacity-65 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-[26px] font-tibere font-extrabold tracking-wider text-white leading-normal">
                          COMPLETE ACQUISITION
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
