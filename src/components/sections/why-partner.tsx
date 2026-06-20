'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Handshake,
  Users,
  Cpu,
  Layers,
  Network,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Architectural premium icon mapping matching the reference image
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Shield: Shield,
  Handshake: Handshake,
  Users: Users,
  Cpu: Cpu,
  Layers: Layers,
  Network: Network,
};

interface Pillar {
  id: number;
  roman: string;
  title: string;
  titleLines: string[];
  description: string;
  iconName: string;
  left: string;
  top: string;
}

// 6 Outer core values precisely ordered and sequenced with mathematically centered 34% grid placement coordinates
const pillars: Pillar[] = [
  {
    id: 1,
    roman: '01',
    title: 'Experienced Leadership',
    titleLines: ['Experienced', 'Leadership'],
    description: 'Led by industry professionals with deep expertise in land acquisition and regulatory processes, we bring strategic direction, informed decision-making, and execution confidence to every project.',
    iconName: 'Shield',
    left: '35%',
    top: '0.7%'
  },
  {
    id: 2,
    roman: '02',
    title: 'Deal Structuring & Negotiation Support',
    titleLines: ['Deal Structuring &', 'Negotiation Support'],
    description: 'We help structure financially sound deals that align with your strategic goals.',
    iconName: 'Handshake',
    left: '62.7%',
    top: '16.7%'
  },
  {
    id: 3,
    roman: '03',
    title: 'On-Ground Execution Support',
    titleLines: ['On-Ground Execution', 'Support'],
    description: 'From site visits to coordination, we ensure strong physical presence where it matters most.',
    iconName: 'Users',
    left: '62.7%',
    top: '48.7%'
  },
  {
    id: 4,
    roman: '04',
    title: 'Tailored, Client-Centric Solutions',
    titleLines: ['Tailored, Client-Centric', 'Solutions'],
    description: 'Every requirement is unique. We deliver customized land and approval strategies aligned with your business goals, risk appetite, and long-term vision.',
    iconName: 'Cpu',
    left: '35%',
    top: '64.7%'
  },
  {
    id: 5,
    roman: '05',
    title: 'End-to-End Development Capability',
    titleLines: ['End-to-End Development', 'Capability'],
    description: 'From land acquisition to final construction, we deliver fully integrated project execution through our associate company, Conservve',
    iconName: 'Layers',
    left: '7.3%',
    top: '48.7%'
  },
  {
    id: 6,
    roman: '06',
    title: 'Long-Term Partnership Approach',
    titleLines: ['Long-Term Partnership', 'Approach'],
    description: 'We focus on building lasting relationships, supporting you not just for one transaction but across multiple growth phases.',
    iconName: 'Network',
    left: '7.3%',
    top: '16.7%'
  }
];

export function WhyPartnerSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(99);

  const isUserHovering = useRef(false);
  const autoIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // The complete loop sequence including the center node (99) and the 6 outer pillars
  const loopSequence = [99, 1, 2, 3, 4, 5, 6];

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isUserHovering.current) return;
      autoIndexRef.current = (autoIndexRef.current + 1) % loopSequence.length;
      setActiveId(loopSequence[autoIndexRef.current]);
    }, 3000); // 3 seconds per item
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleHoverStart = (id: number) => {
    isUserHovering.current = true;
    setHoveredId(id);
    const idx = loopSequence.indexOf(id);
    if (idx >= 0) autoIndexRef.current = idx;
    setActiveId(id);
  };

  const handleHoverEnd = () => {
    isUserHovering.current = false;
    setHoveredId(null);
  };

  // Derive the active node
  const currentActiveId = hoveredId !== null ? hoveredId : activeId;

  return (
    <section 
      className="why-partner-section text-brand-navy relative transition-colors duration-700 py-16 md:py-24 lg:py-28 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '300px'
      }}
    >
      {/* ── Symmetrical Top Gold Border & Navy Transition Divider ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#BFA052] z-20" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C2C4D]/10 to-transparent pointer-events-none z-10" />

      {/* Bottom seamless blend gradient overlay to Footer section (subtle brand navy) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C2C4D]/12 to-transparent pointer-events-none z-10" />

      {/* Master definitions of premium visual gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Active Hexagon watermark background pattern to carry design uniformity */}
          <pattern id="activeHexPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect width="120" height="120" fill="#FFFFFF" />
            <image href="/Logo_Distort_BG.png" x="0" y="0" width="120" height="120" opacity="0.08" />
          </pattern>
          {/* Active Gold radial shading for 3D depth using brand colors */}
          <radialGradient id="activeGoldShade" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#D4B76A" stopOpacity="1" />
            <stop offset="70%" stopColor="#BFA052" stopOpacity="1" />
            <stop offset="100%" stopColor="#A8893D" stopOpacity="1" />
          </radialGradient>
          {/* Central Hex glow gradient using Brand Navy */}
          <linearGradient id="centerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C4B75" stopOpacity="1" />
            <stop offset="100%" stopColor="#0C2C4D" stopOpacity="1" />
          </linearGradient>

          {/* Cell glow style for active/hovered hexagon cells */}
          <linearGradient id="cellGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#123e6b" stopOpacity="1" />
            <stop offset="100%" stopColor="#061626" stopOpacity="1" />
          </linearGradient>

          {/* Hexagon Inner depth with a nice radial center shine using Brand Navy */}
          <radialGradient id="hexInnerDepth" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#163f66" stopOpacity="1" />
            <stop offset="60%" stopColor="#0C2C4D" stopOpacity="1" />
            <stop offset="100%" stopColor="#081e35" stopOpacity="1" />
          </radialGradient>

          {/* Glowing outer gold borders for active states */}
          <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFECA1" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#BFA052" />
            <stop offset="100%" stopColor="#7c6328" />
          </linearGradient>

          {/* Golden borders for inactive states */}
          <linearGradient id="inactiveBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFA052" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#DFB24F" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7c6328" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>

      {/* Blueprint fine aesthetic network vector grid lines */}
      <div className="absolute inset-0 opacity-[0.09] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-[#BFA052]/35 fill-none stroke-[0.06]">
          <pattern id="hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexes)" />
        </svg>
      </div>

      {/* Futuristic soft gradient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFA052]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#1e5c94]/6 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Structural Block / True Two-Column Layout */}
      <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 md:grid-cols-[52%_48%] lg:grid-cols-[48%_52%] xl:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading, Introduction text, and Interactive Accordion */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 h-full">
          <div className="space-y-4 animate-fade-in">
            {/* Section Label */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-xs font-gotham font-bold uppercase tracking-[0.2em] text-brand-gold">
                The Distinction
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tibere font-black text-brand-navy tracking-normal uppercase leading-none mb-0 whitespace-nowrap" style={{ wordSpacing: '0.18em' }}>
              Why Partner <span className="text-brand-gold">With Us</span>
            </h2>
            
            {/* Introductory Paragraph */}
            <div className="text-sm md:text-base text-slate-700 font-poppins font-medium leading-relaxed border-l-4 border-brand-gold pl-6 max-w-2xl mt-6">
              We understand that every decision you make carries risk, timelines, and long-term impact. That's why we approach every engagement with a sharp focus on due diligence, clarity, and foresight, helping you navigate uncertainty, anticipate challenges early, and make well-informed choices that stand strong not just today, but well into the future.
            </div>
          </div>

          {/* Interactive Benefit List (Accordion) */}
          <div className="relative pt-6 border-t border-brand-navy/10 space-y-2.5">
            {pillars.map((pillar) => {
              const isPillarActive = currentActiveId === pillar.id;

              return (
                <div
                  key={`pillar-accordion-${pillar.id}`}
                  id={`pillar-left-node-${pillar.id}`}
                  className={cn(
                    'w-full border rounded-xl p-3 sm:p-4 transition-all duration-300 cursor-pointer select-none relative z-10 flex flex-col gap-2',
                    isPillarActive
                      ? 'border-[#BFA052] shadow-[0_12px_32px_rgba(12,44,77,0.15),0_4px_16px_rgba(191,160,82,0.2)]'
                      : 'border-brand-navy/10 bg-white/40 hover:bg-white/85 hover:shadow-[0_8px_20px_rgba(12,44,77,0.04)]'
                  )}
                  style={isPillarActive ? {
                    backgroundImage: "linear-gradient(rgba(12, 44, 77, 0.95), rgba(12, 44, 77, 0.95)), url('/Logo_Distort_BG.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '120px',
                    backgroundColor: '#0C2C4D'
                  } : undefined}
                  onClick={() => setActiveId(pillar.id)}
                  onMouseEnter={() => handleHoverStart(pillar.id)}
                  onMouseLeave={handleHoverEnd}
                >
                  {/* Glowing background accent on active */}
                  {isPillarActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gold/10 via-transparent to-transparent pointer-events-none -z-10"
                      animate={{
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Header Row */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {/* Number Indicator */}
                      <span className={cn(
                        'font-gotham text-xs font-bold transition-colors duration-300',
                        isPillarActive ? 'text-[#BFA052]' : 'text-slate-500'
                      )}>
                        0{pillar.id}
                      </span>
                      
                      {/* Accordion Title */}
                      <h3 className={cn(
                        'font-gotham text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300',
                        isPillarActive ? 'text-white' : 'text-slate-700'
                      )}>
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Chevron Indicator */}
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-all duration-300',
                      isPillarActive ? 'rotate-180 text-[#BFA052]' : 'text-brand-navy/35'
                    )} />
                  </div>

                  {/* Collapsible Accordion Body */}
                  <motion.div
                    initial={false}
                    animate={{ height: isPillarActive ? 'auto' : 0, opacity: isPillarActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className={cn(
                      "mt-1 text-[13px] sm:text-[14px] leading-relaxed font-gotham font-normal border-l-2 pl-4 py-0.5 select-text tracking-wide transition-all duration-300",
                      isPillarActive
                        ? "text-white/90 border-[#BFA052]"
                        : "text-slate-600 border-brand-gold/40"
                    )}>
                      {pillar.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Structured, symmetric architectural Hexagon Grid */}
        <div className="flex items-center justify-center relative w-full overflow-visible select-none lg:pl-3 xl:pl-6">
          <div className="relative w-full min-w-[320px] max-w-[380px] xs:max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[660px] xl:max-w-[720px] aspect-square mx-auto">
            
            {/* Subtle architectural background alignment cross-axis layout */}
            <div className="absolute inset-x-[-3%] inset-y-[-3%] border border-dashed border-brand-navy/5 opacity-10 pointer-events-none z-0">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] border-t border-dashed border-brand-gold/5 translate-y-[-50%]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-brand-gold/5 translate-x-[-50%]" />
            </div>

            {/* Dynamic physical vector grid wire connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none">
              {pillars.map((pillar) => {
                const isPillarActive = currentActiveId === pillar.id;
                const isCenterActive = currentActiveId === 99;
                const isLineActive = isPillarActive || isCenterActive;

                // Center Node is balanced at (50%, 50%)
                const startX = '50%';
                const startY = '50%';
                
                let endX = '50%';
                let endY = '50%';

                if (pillar.id === 1) { endX = '50%'; endY = '18%'; }
                else if (pillar.id === 2) { endX = '77.7%'; endY = '34%'; }
                else if (pillar.id === 3) { endX = '77.7%'; endY = '66%'; }
                else if (pillar.id === 4) { endX = '50%'; endY = '82%'; }
                else if (pillar.id === 5) { endX = '22.3%'; endY = '66%'; }
                else if (pillar.id === 6) { endX = '22.3%'; endY = '34%'; }

                return (
                  <g key={`mesh-wire-${pillar.id}`}>
                    {/* Dark steady ambient line segment shadow */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isLineActive ? '#BFA052' : 'rgba(12, 44, 77, 0.12)'}
                      strokeWidth={isLineActive ? 2 : 0.75}
                      strokeOpacity={isLineActive ? 0.85 : 0.4}
                      className="transition-all duration-300"
                    />
                    
                    {/* Active floating beam data transmission pulses */}
                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isLineActive ? '#BFA052' : 'rgba(191, 160, 82, 0.25)'}
                      strokeWidth={isLineActive ? 2.5 : 1}
                      strokeDasharray="16, 48"
                      animate={{
                        strokeDashoffset: [0, -64],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: isLineActive ? 2.0 : 4.5,
                        ease: 'linear',
                      }}
                      opacity={isLineActive ? 1 : 0.35}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Dynamic responsive hexagonal grid overlay */}
            <AnimatePresence mode="popLayout">
              <div key="hex-grid-container" className="absolute inset-0">
                
                {/* CENTRAL CONSERVVE INFRA SOLUTIONS CORE SHIELD ENGINE (ID: 99) */}
                {(() => {
                  const isCenterActive = currentActiveId === 99;

                  return (
                    <motion.div
                      key="partnership-center"
                      id="pillar-hex-partnership"
                      className="absolute aspect-[208/240] cursor-pointer"
                      style={{
                        left: '35%',
                        top: '32.7%',
                        width: '30%',
                        zIndex: 35,
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: isCenterActive ? 1.05 : [1.0, 1.02, 1.0],
                        opacity: 1,
                      }}
                      whileHover={{
                        scale: 1.08,
                        transition: { type: 'spring', stiffness: 350, damping: 12 }
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.3 }
                      }}
                      transition={{
                        scale: {
                          repeat: isCenterActive ? 0 : Infinity,
                          duration: 3.5,
                          ease: 'easeInOut'
                        },
                        opacity: { duration: 0.3 }
                      }}
                      onMouseEnter={() => handleHoverStart(99)}
                      onMouseLeave={handleHoverEnd}
                    >
                      <div className="relative w-full h-full animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
                                                {/* Pointy-topped hexagon SVG center node with slightly rounded corners */}
                        <svg
                          className="absolute inset-0 w-full h-full transition-all duration-500 ease-out z-0"
                          viewBox="0 0 208 240"
                          style={{
                            filter: isCenterActive
                              ? 'drop-shadow(0 14px 28px rgba(0,0,0,0.6)) drop-shadow(0 0 24px rgba(191,160,82,0.6))'
                              : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))',
                          }}
                        >
                          {/* Center back shadow block */}
                          <path
                            d="M 112.6,9.5 L 194.9,57.0 Q 203.5,62 203.5,72.0 L 203.5,168.0 Q 203.5,178 194.9,183.0 L 112.6,230.5 Q 104,235.5 95.4,230.5 L 13.1,183.0 Q 4.5,178 4.5,168.0 L 4.5,72.0 Q 4.5,62 13.1,57.0 L 95.4,9.5 Q 104,4.5 112.6,9.5 Z"
                            fill="#051424"
                            stroke="rgba(191,160,82,0.2)"
                            strokeWidth="2"
                            transform="translate(0, 6)"
                            className="pointer-events-none"
                          />

                          {/* Main core center piece block */}
                          <path
                            d="M 112.6,9.5 L 194.9,57.0 Q 203.5,62 203.5,72.0 L 203.5,168.0 Q 203.5,178 194.9,183.0 L 112.6,230.5 Q 104,235.5 95.4,230.5 L 13.1,183.0 Q 4.5,178 4.5,168.0 L 4.5,72.0 Q 4.5,62 13.1,57.0 L 95.4,9.5 Q 104,4.5 112.6,9.5 Z"
                            fill="url(#centerGlow)"
                            fillOpacity={1.0}
                            stroke="#BFA052"
                            strokeWidth={2.4}
                            className="transition-all duration-300 ease-out"
                          />

                          {/* Hairline trace nested grid ring */}
                          <path
                            d="M 110.9,18.5 L 187.6,63.0 Q 194.5,67 194.5,75.0 L 194.5,165.0 Q 194.5,173 187.6,177.0 L 110.9,221.5 Q 104,225.5 97.1,221.5 L 20.4,177.0 Q 13.5,173 13.5,165.0 L 13.5,75.0 Q 13.5,67 20.4,63.0 L 97.1,18.5 Q 104,14.5 110.9,18.5 Z"
                            fill="none"
                            stroke="#BFA052"
                            strokeWidth="0.8"
                            strokeOpacity={0.45}
                            className="transition-all duration-500 ease-out"
                          />
                        </svg>

                        {/* Inner detailed company logo branding layout */}
                        <div 
                          className="absolute inset-[6%] flex flex-col justify-center items-center text-center text-white select-none z-10"
                          style={{ transform: 'translateZ(15px)' }}
                        >
                          {/* Logo Image */}
                           <div className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 mb-0.5 drop-shadow-[0_0_12px_rgba(191,160,82,0.45)]">
                            <Image
                              src="/logo-transparent-dark.png"
                              alt="Conservve Logo"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>

                          {/* Company Name Typography matching Navbar */}
                          <div className="flex flex-col items-center justify-center text-center w-full mt-0">
                            <span 
                              className="font-bold text-white tracking-wide whitespace-nowrap text-[8px] xs:text-[9.5px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]"
                              style={{ 
                                fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif", 
                                letterSpacing: '0.06em', 
                                lineHeight: '0.9', 
                                fontWeight: 700 
                              }}
                            >
                              CONSERVVE
                            </span>
                            <span 
                              className="font-bold text-white/90 mt-0.5 sm:mt-1 whitespace-nowrap text-[5px] xs:text-[6px] sm:text-[6.5px] md:text-[7.5px] lg:text-[8px] xl:text-[8.5px]"
                              style={{ 
                                fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif", 
                                letterSpacing: '0.08em', 
                                lineHeight: '0.9', 
                                fontWeight: 700 
                              }}
                            >
                              INFRA SOLUTIONS
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* 6 OUTER SYMMETRIC INTERACTIVE HEXAGON CELLS */}
                {pillars.map((pillar, idx) => {
                  const IconComponent = IconMap[pillar.iconName];
                  const isPillarActive = currentActiveId === pillar.id;

                  // Flyout assembly variables based on current 30% hex grid bounds
                  const initX = ((35 - parseFloat(pillar.left)) / 30) * 100 + '%';
                  const initY = ((32.7 - parseFloat(pillar.top)) / 34.6) * 100 + '%';
                  const isLongTitle = pillar.title.length > 25;

                  return (
                    <motion.div
                      key={`cell-${pillar.id}`}
                      id={`pillar-hex-${pillar.id}`}
                      className="absolute aspect-[208/240] cursor-pointer"
                      style={{
                        left: pillar.left,
                        top: pillar.top,
                        width: '30%',
                        zIndex: isPillarActive ? 40 : 20,
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{
                        x: initX,
                        y: initY,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: isPillarActive ? 1.15 : 1.02,
                        rotateX: isPillarActive ? 10 : 0,
                        rotateY: isPillarActive ? -10 : 0,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.3 }
                      }}
                      transition={{
                        x: { 
                          type: 'spring', 
                          stiffness: 90, 
                          damping: 14, 
                          mass: 1.1, 
                          delay: idx * 0.06 
                        },
                        y: { 
                          type: 'spring', 
                          stiffness: 90, 
                          damping: 14, 
                          mass: 1.1, 
                          delay: idx * 0.06 
                        },
                        scale: { 
                          type: 'spring', 
                          stiffness: 125, 
                          damping: 15 
                        },
                        rotateX: { type: 'spring', stiffness: 100, damping: 15 },
                        rotateY: { type: 'spring', stiffness: 100, damping: 15 },
                        opacity: { 
                          duration: 0.25 
                        },
                      }}
                      onMouseEnter={() => handleHoverStart(pillar.id)}
                      onMouseLeave={handleHoverEnd}
                      onClick={() => {
                        setActiveId(pillar.id);
                        setHoveredId(null);
                      }}
                    >
                      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                                                {/* Pointy-topped crisp responsive outline cell with slightly rounded corners */}
                        <svg
                          className="absolute inset-0 w-full h-full transition-all duration-500 ease-out z-0"
                          viewBox="0 0 208 240"
                          style={{
                            filter: isPillarActive
                              ? 'drop-shadow(0 14px 28px rgba(0,0,0,0.5)) drop-shadow(0 0 20px rgba(191,160,82,0.45))'
                              : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))',
                          }}
                        >
                          
                          {/* Base drop-layer shadow extrusion */}
                          <path
                            d="M 112.6,9.5 L 194.9,57.0 Q 203.5,62 203.5,72.0 L 203.5,168.0 Q 203.5,178 194.9,183.0 L 112.6,230.5 Q 104,235.5 95.4,230.5 L 13.1,183.0 Q 4.5,178 4.5,168.0 L 4.5,72.0 Q 4.5,62 13.1,57.0 L 95.4,9.5 Q 104,4.5 112.6,9.5 Z"
                            fill="#04101e"
                            stroke="rgba(191,160,82,0.12)"
                            strokeWidth="2"
                            transform={isPillarActive ? 'translate(0, 8)' : 'translate(0, 4)'}
                            className="transition-all duration-500 ease-out pointer-events-none"
                          />

                          {/* Inner central vector container reflecting deep volumetric polish */}
                          <path
                            d="M 112.6,9.5 L 194.9,57.0 Q 203.5,62 203.5,72.0 L 203.5,168.0 Q 203.5,178 194.9,183.0 L 112.6,230.5 Q 104,235.5 95.4,230.5 L 13.1,183.0 Q 4.5,178 4.5,168.0 L 4.5,72.0 Q 4.5,62 13.1,57.0 L 95.4,9.5 Q 104,4.5 112.6,9.5 Z"
                            fill={isPillarActive ? 'url(#activeGoldShade)' : 'url(#hexInnerDepth)'}
                            fillOpacity={1.0}
                            stroke={isPillarActive ? 'url(#goldBorderGrad)' : 'url(#inactiveBorderGrad)'}
                            strokeWidth={isPillarActive ? 2.8 : 2.0}
                            className="transition-all duration-500 ease-out"
                          />
                          
                          {/* Inner fine nested visual blueprint trace overlay */}
                          <path
                            d="M 110.9,18.5 L 187.6,63.0 Q 194.5,67 194.5,75.0 L 194.5,165.0 Q 194.5,173 187.6,177.0 L 110.9,221.5 Q 104,225.5 97.1,221.5 L 20.4,177.0 Q 13.5,173 13.5,165.0 L 13.5,75.0 Q 13.5,67 20.4,63.0 L 97.1,18.5 Q 104,14.5 110.9,18.5 Z"
                            fill="none"
                            stroke="#BFA052"
                            strokeWidth="0.5"
                            strokeOpacity={isPillarActive ? 0.5 : 0.08}
                            className="transition-all duration-500 ease-out"
                          />

                          {/* Corner diagnostic micro ticks inside custom grid */}
                          {isPillarActive && (
                            <g className="animate-pulse">
                              <line x1="104" y1="4.5" x2="104" y2="16.5" stroke="#BFA052" strokeWidth="1" />
                              <line x1="104" y1="223.5" x2="104" y2="235.5" stroke="#BFA052" strokeWidth="1" />
                            </g>
                          )}
                        </svg>

                        {/* Outer cell descriptive interactive block details */}
                        <div 
                          className="absolute inset-0 flex flex-col justify-center items-center text-center px-1.5 py-3 sm:px-2.5 sm:py-4 select-none z-10"
                          style={{ transform: 'translateZ(10px)' }}
                        >
                          {/* Large sequence number inside the comb */}
                          <div className={cn(
                            "font-gotham font-black tracking-wider transition-colors duration-500",
                            isPillarActive ? "text-[#0C2C4D]" : "text-[#BFA052]",
                            "text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] leading-none mb-2.5 sm:mb-4"
                          )}>
                            0{pillar.id}
                          </div>
                          
                          {/* Glowing vector icon wrapping Halo structural blueprint detail */}
                          <div className="relative mb-2.5 sm:mb-4">
                            {/* Rotating geometric drafting ticks to align with architectural-tech theme */}
                            {isPillarActive && (
                              <motion.div
                                className="absolute -inset-2.5 rounded-full border border-dashed border-brand-navy/55 pointer-events-none"
                                animate={{ rotate: 360 }}
                                transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
                              />
                            )}
                            {/* Glowing backdrop cloud */}
                            <div className={`absolute -inset-5 bg-gradient-to-r from-brand-gold to-brand-gold/20 rounded-full blur-[12px] transition-opacity duration-500 ${
                              isPillarActive ? 'opacity-45' : 'opacity-0 group-hover:opacity-20'
                            }`} />
                            <div className={cn(
                              "w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-500 relative z-10",
                              isPillarActive
                                ? "border-[#0C2C4D] bg-[#0C2C4D] shadow-[0_4px_12px_rgba(12,44,77,0.3)]"
                                : "border-white/10 bg-[#07182b]/70 backdrop-blur-sm group-hover:border-brand-gold/30"
                            )}>
                              <IconComponent className={cn(
                                "w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 relative z-10",
                                isPillarActive
                                  ? "text-[#BFA052] scale-110 drop-shadow-[0_0_8px_#BFA052]"
                                  : "text-brand-gold group-hover:text-white"
                              )} />
                            </div>
                          </div>

                          {/* Highly polished upper Title heading */}
                          {/* Long titles dynamically scale down their font sizes to avoid wrapping too tightly or clipping */}
                          <h3 className={cn(
                            'font-gotham font-extrabold uppercase tracking-wide text-center leading-tight transition-colors duration-300 w-full px-1',
                            isPillarActive ? 'text-[#0C2C4D]' : 'text-white/95',
                            isLongTitle 
                              ? 'text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px]' 
                              : 'text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12.5px]'
                          )}>
                            {pillar.titleLines.map((line, lineIdx) => (
                              <React.Fragment key={lineIdx}>
                                {lineIdx > 0 && <br />}
                                {line}
                              </React.Fragment>
                            ))}
                          </h3>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
