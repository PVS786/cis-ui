import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { Challenge, Point } from '../types';
import { challenges } from '../challengesData';

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
  
  // Slightly big, smooth semicircle parameters for all knobs and sockets
  const r = 32; // radius of the semicircle connector (slightly big and smooth)
  const k = r * 0.5522847; // Bezier constant for circle approximation
  
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

  // Define SVG Paths for the 6 surrounding pieces
  const getPiecePath = (id: string): string => {
    switch (id) {
      case '01': // Top-Left
        return `M ${X0 + 24},${Y0}
                L ${X1},${Y0}
                ${createJigsawEdge({x: X1, y: Y0}, {x: X1, y: goldTop}, true, 'left')}
                L ${X1},${Y1}
                ${createJigsawEdge({x: X1, y: Y1}, {x: X0, y: Y1}, true, 'down')}
                L ${X0},${Y0 + 24}
                C ${X0},${Y0 + 10.7} ${X0 + 10.7},${Y0} ${X0 + 24},${Y0}
                Z`;
      case '02': // Top-Middle
        return `M ${X1},${Y0}
                L ${X2},${Y0}
                ${createJigsawEdge({x: X2, y: Y0}, {x: X2, y: goldTop}, true, 'left')}
                ${createJigsawEdge({x: X2, y: goldTop}, {x: X1, y: goldTop}, true, 'up')}
                ${createJigsawEdge({x: X1, y: goldTop}, {x: X1, y: Y0}, true, 'left')}
                Z`;
      case '03': // Top-Right
        return `M ${X2},${Y0}
                L ${X3 - 24},${Y0}
                C ${X3 - 10.7},${Y0} ${X3},${Y0 + 10.7} ${X3},${Y0 + 24}
                L ${X3},${Y1}
                ${createJigsawEdge({x: X3, y: Y1}, {x: X2, y: Y1}, true, 'down')}
                L ${X2},${Y1}
                ${createJigsawEdge({x: X2, y: Y1}, {x: X2, y: goldTop}, false, 'none')}
                ${createJigsawEdge({x: X2, y: goldTop}, {x: X2, y: Y0}, true, 'left')}
                Z`;
      case '04': // Bottom-Left
        return `M ${X0},${Y1}
                ${createJigsawEdge({x: X0, y: Y1}, {x: X1, y: Y1}, true, 'down')}
                L ${X1},${Y1}
                ${createJigsawEdge({x: X1, y: Y1}, {x: X1, y: goldBottom}, false, 'none')}
                ${createJigsawEdge({x: X1, y: goldBottom}, {x: X1, y: Y2}, true, 'left')}
                L ${X0 + 24},${Y2}
                C ${X0 + 10.7},${Y2} ${X0},${Y2 - 10.7} ${X0},${Y2 - 24}
                L ${X0},${Y1}
                Z`;
      case '05': // Bottom-Middle
        return `M ${X1},${goldBottom}
                ${createJigsawEdge({x: X1, y: goldBottom}, {x: X2, y: goldBottom}, true, 'down')}
                ${createJigsawEdge({x: X2, y: goldBottom}, {x: X2, y: Y2}, true, 'left')}
                L ${X1},${Y2}
                ${createJigsawEdge({x: X1, y: Y2}, {x: X1, y: goldBottom}, true, 'left')}
                Z`;
      case '06': // Bottom-Right
        return `M ${X2},${Y1}
                ${createJigsawEdge({x: X2, y: Y1}, {x: X3, y: Y1}, true, 'down')}
                L ${X3},${Y2 - 24}
                C ${X3},${Y2 - 10.7} ${X3 - 10.7},${Y2} ${X3 - 24},${Y2}
                L ${X2},${Y2}
                ${createJigsawEdge({x: X2, y: Y2}, {x: X2, y: goldBottom}, true, 'left')}
                L ${X2},${goldBottom}
                L ${X2},${Y1}
                Z`;
      default:
        return '';
    }
  };

  // Gold Hero Piece bounds & path
  // Centered at (600, 410), width 380, height 280.
  // Overlaps from X = 410 to 790, Y = 270 to 550.
  const goldLeft = X1;
  const goldRight = X2;
  const goldTop = 270;
  const goldBottom = 550;

  const getGoldPiecePath = (): string => {
    return `M ${goldLeft},${goldTop}
            ${createJigsawEdge({x: goldLeft, y: goldTop}, {x: goldRight, y: goldTop}, true, 'up')}
            L ${goldRight},${goldBottom}
            ${createJigsawEdge({x: goldRight, y: goldBottom}, {x: goldLeft, y: goldBottom}, true, 'down')}
            L ${goldLeft},${goldTop}
            Z`;
  };

  // Define hover animations that shift the pieces slightly outward (3D expansion)
  const getPieceTranslation = (id: string) => {
    const shift = 12;
    switch (id) {
      case '01': return { x: -shift, y: -shift };
      case '02': return { x: 0, y: -shift };
      case '03': return { x: shift, y: -shift };
      case '04': return { x: -shift, y: shift };
      case '05': return { x: 0, y: shift };
      case '06': return { x: shift, y: shift };
      default: return { x: 0, y: 0 };
    }
  };

  const getPieceColors = (id: string, isSelected: boolean, isHovered: boolean) => {
    const isPieceActive = isHovered;
    
    if (isPieceActive) {
      return {
        fill: "#0C2C4D",
        stroke: "#FFFFFF",
        strokeOpacity: 1,
        strokeWidth: "2.5",
        textTitleClass: "text-white",
        textDescClass: "text-slate-200",
        iconContainerClass: "bg-white/10 border-white/20",
        shadowFilter: "url(#gold-glow)"
      };
    } else {
      return {
        fill: "url(#whiteMatte)",
        stroke: "#0C2C4D",
        strokeOpacity: 0.15,
        strokeWidth: "1.2",
        textTitleClass: "text-[#0C2C4D]",
        textDescClass: "text-slate-500",
        iconContainerClass: "bg-[#0C2C4D]/5 border-[#0C2C4D]/10",
        shadowFilter: "none"
      };
    }
  };

  return (
    <div className="relative w-full max-w-[1240px] mx-auto py-8">
      {/* 3D Scene Container */}
      <div className="relative w-full aspect-[1200/825] bg-white rounded-2xl overflow-visible p-2">
        
        {/* Real SVG rendering of the puzzle */}
        <svg 
          viewBox="0 0 1200 825" 
          className="w-full h-full overflow-visible select-none"
          xmlns="http://www.w3.org/2000/svg"
          id="acquisition-puzzle-svg"
        >
          {/* DEFINITIONS & FILTERS */}
          <defs>
            {/* Custom high-end 3D Bevel/Lighting filter for Matte Acrylic pieces */}
            <filter id="luxury-bevel" x="-15%" y="-15%" width="130%" height="130%">
              {/* Soft Ambient drop shadow */}
              <feDropShadow dx="-2" dy="5" stdDeviation="6" floodColor="#0C2C4D" floodOpacity="0.12" />
              
              {/* Soft highlight / lighting map */}
              <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="4.5" specularConstant="1.5" specularExponent="22" lightingColor="#ffffff" result="specular">
                <fePointLight x="-250" y="-200" z="350" />
              </feSpecularLighting>
              
              {/* Clip specular light inside source boundary */}
              <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-clip" />
              
              {/* Blend lighting with primary graphic */}
              <feComposite in="SourceGraphic" in2="specular-clip" operator="arithmetic" k1="0" k2="1" k3="0.45" k4="0" />
            </filter>

            {/* Special intense filter for the gold hero piece */}
            <filter id="gold-hero-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-4" dy="12" stdDeviation="15" floodColor="#40300F" floodOpacity="0.45" />
              <feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="6" specularConstant="2.2" specularExponent="16" lightingColor="#FFF0CC" result="specular">
                <fePointLight x="-150" y="-150" z="400" />
              </feSpecularLighting>
              <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-clip" />
              <feComposite in="SourceGraphic" in2="specular-clip" operator="arithmetic" k1="0" k2="1" k3="0.8" k4="0" />
            </filter>

            {/* Premium Luxury White Matte Gradient */}
            <linearGradient id="whiteMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F9FAFB" />
              <stop offset="100%" stopColor="#F1F3F5" />
            </linearGradient>

            {/* Navy Matte Gradient */}
            <linearGradient id="navyMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#143D66" />
              <stop offset="60%" stopColor="#0C2C4D" />
              <stop offset="100%" stopColor="#051526" />
            </linearGradient>

            {/* Premium Gold Metallic Gradient */}
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DF9E" />
              <stop offset="35%" stopColor="#D4B663" />
              <stop offset="70%" stopColor="#BFA052" />
              <stop offset="100%" stopColor="#8C6D28" />
            </linearGradient>
            
            {/* Subtle glow filter for hovered items */}
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* BACKGROUND FAINT MAP DESIGN */}
          <g opacity="0.06">
            <path d="M100 100 Q 300 150, 500 120 T 900 180 T 1100 130" className="topo-contour" />
            <path d="M80 180 Q 280 240, 480 210 T 880 270 T 1120 220" className="topo-contour" />
            <path d="M120 300 Q 320 340, 520 320 T 920 390 T 1080 310" className="topo-contour" />
            <path d="M150 420 Q 350 460, 550 450 T 950 510 T 1110 430" className="topo-contour" />
            <path d="M110 540 Q 310 580, 510 560 T 910 620 T 1090 550" className="topo-contour" />
          </g>

          {/* SIX NAVY SURROUNDING PIECES */}
          <g>
            {challenges.map((item) => {
              const isSelected = selectedChallengeId === item.id;
              const isHovered = hoveredId === item.id;
              const path = getPiecePath(item.id);
              const shift = getPieceTranslation(item.id);
              
              // Shift the content window for Piece 02 and 05 slightly to keep them legible around the Gold Piece
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
                    x: shift.x,
                    y: shift.y,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                  animate={{
                    opacity: isHeroInserted && isCenterCol ? 0.92 : 1,
                    scale: isActive ? 1.01 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Outer glow on hover / selection */}
                  <path
                    d={path}
                    fill="none"
                    stroke="#BFA052"
                    strokeWidth={isActive ? 4 : 0}
                    className="transition-all duration-300"
                    style={{ filter: colors.shadowFilter, opacity: 0.8 }}
                  />

                  {/* Puzzle piece body */}
                  <path
                    d={path}
                    fill={colors.fill}
                    stroke={colors.stroke}
                    strokeOpacity={colors.strokeOpacity}
                    strokeWidth={colors.strokeWidth}
                    filter="url(#luxury-bevel)"
                    id={`puzzle-piece-${item.id}`}
                  />

                   {/* Jigsaw Content Overlay using foreignObject */}
                   {/* Position coordinates mapped to our column coordinates */}
                   <foreignObject
                     x={item.id === '01' || item.id === '04' ? X0 + 35 : item.id === '02' || item.id === '05' ? X1 + 35 : X2 + 35}
                     y={
                        item.id === '02' 
                          ? Y0 + 10 
                          : item.id === '05' 
                            ? goldBottom + 55 
                            : item.id === '01' || item.id === '03' 
                              ? Y0 + 30 
                              : Y1 + 60
                      }
                     width={310}
                     height={
                        item.id === '02'
                          ? 245
                          : item.id === '05'
                            ? 190
                            : item.id === '04' || item.id === '06' ? 310 : 350 }
                     className="pointer-events-none overflow-hidden"
                   >
                     <div className="flex flex-col h-full justify-center items-center text-center px-4 font-sans">
                       {/* Top row: Icon and Number side-by-side, centered */}
                       <div className="flex items-center justify-center space-x-3 transition-all duration-300 mb-2.5">
                         <div className={`p-2.5 border rounded-xl flex items-center justify-center shadow-inner transition-colors duration-300 ${colors.iconContainerClass}`}>
                           {renderIcon(item.iconName, "w-9 h-9 text-[#BFA052]")}
                         </div>
                         <span className="text-3xl font-serif font-black tracking-wider text-[#BFA052]">
                           {item.number}
                         </span>
                       </div>
 
                       {/* Main Copy */}
                       <div className="flex-grow flex flex-col justify-start">
                         <h3 className={`text-[23px] font-serif font-black tracking-normal leading-snug mb-1.5 transition-colors duration-300 ${colors.textTitleClass}`}>
                           {item.title}
                         </h3>
                         
                         <p className={`mt-1 text-[16px] font-medium leading-relaxed max-w-[260px] mx-auto transition-colors duration-300 ${colors.textDescClass}`}>
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
                    filter: "drop-shadow(0px 40px 30px rgba(0,0,0,0.65))" 
                  }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    filter: "drop-shadow(0px 10px 12px rgba(12,44,77,0.25))" 
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
                  {/* Subtle pulsing background glow of the Gold Piece */}
                  <path
                    d={getGoldPiecePath()}
                    fill="none"
                    stroke="#F5DF9E"
                    strokeWidth="4"
                    className="animate-pulse"
                    style={{ filter: 'url(#gold-glow)', opacity: 0.6 }}
                  />

                  {/* Golden piece body */}
                  <path
                    d={getGoldPiecePath()}
                    fill="url(#goldMetallic)"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    filter="url(#gold-hero-filter)"
                    id="gold-hero-piece"
                  />

                   {/* Golden content overlay using foreignObject */}
                     <foreignObject
                     x={goldLeft + 35}
                     y={goldTop + 25}
                     width={310}
                     height={230}
                     className="pointer-events-none overflow-hidden"
                   >
                     <div className="flex flex-col items-center justify-center text-center h-full text-white">
                       {/* Elegant Architectural Icon Line Art */}
                       <div className="flex flex-col items-center mb-3">
                         <div className="w-16 h-16 rounded-full bg-white/20 border border-white/35 shadow-inner flex items-center justify-center mb-1 animate-bounce-slow">
                           <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />
                         </div>
                         <div className="flex space-x-1 justify-center opacity-65 mt-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                           <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                           <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                         </div>
                       </div>
 
                       {/* Large text */}
                       <div>
                         <h2 className="text-[28px] font-serif font-black tracking-wider text-white leading-normal">
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

        {/* Dynamic click overlay to insert Hero Piece if it was removed */}
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
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Insert Final Missing Piece</span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Caption instruction */}
      {!isHeroInserted && (
        <p className="text-center text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-4">
          The puzzle is fragmented. Click the button to insert our Complete Acquisition solution.
        </p>
      )}
    </div>
  );
}
