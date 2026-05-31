'use client';

import React, { useState } from 'react';
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
    description: 'Led by industry professionals with deep expertise in land acquisition and regulatory processes, we bring strategic direction, informed decision-making, and execution confidence to every project.',
    iconName: 'Shield',
    left: '33%',
    top: '5.5%'
  },
  {
    id: 2,
    roman: '02',
    title: 'Deal Structuring & Negotiation Support',
    description: 'We help structure financially sound deals that align with your strategic goals.',
    iconName: 'Handshake',
    left: '58.5%',
    top: '19.25%'
  },
  {
    id: 3,
    roman: '03',
    title: 'On-Ground Execution Support',
    description: 'From site visits to coordination, we ensure strong physical presence where it matters most.',
    iconName: 'Users',
    left: '58.5%',
    top: '46.75%'
  },
  {
    id: 4,
    roman: '04',
    title: 'Tailored, Client-Centric Solutions',
    description: 'Every requirement is unique. We deliver customized land and approval strategies aligned with your business goals, risk appetite, and long-term vision.',
    iconName: 'Cpu',
    left: '33%',
    top: '60.5%'
  },
  {
    id: 5,
    roman: '05',
    title: 'End-to-End Development Capability',
    description: 'From land acquisition to final construction, we deliver fully integrated project execution through our associate company, Conservve',
    iconName: 'Layers',
    left: '7.5%',
    top: '46.75%'
  },
  {
    id: 6,
    roman: '06',
    title: 'Long-Term Partnership Approach',
    description: 'We focus on building lasting relationships, supporting you not just for one transaction but across multiple growth phases.',
    iconName: 'Network',
    left: '7.5%',
    top: '19.25%'
  }
];

export function WhyPartnerSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number>(1);

  // Derive the active node
  const currentActiveId = hoveredId !== null ? hoveredId : activeId;

  return (
    <section 
      className="why-partner-section text-[#f8f9fa] relative transition-colors duration-700 py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        backgroundColor: '#051628',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #0c2c4d 0%, #041424 100%)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Master definitions of premium visual gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Central Hex glow gradient */}
          <linearGradient id="centerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e5c94" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0b243b" stopOpacity="0.95" />
          </linearGradient>

          {/* Cell glow style for active/hovered hexagon cells */}
          <linearGradient id="cellGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#123e6b" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#061626" stopOpacity="0.98" />
          </linearGradient>

          {/* Hexagon Inner depth with a nice radial center shine */}
          <radialGradient id="hexInnerDepth" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#0e2f50" stopOpacity="0.87" />
            <stop offset="60%" stopColor="#06182c" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#04101e" stopOpacity="1" />
          </radialGradient>

          {/* Glowing outer gold borders for active states */}
          <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFECA1" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#BFA052" />
            <stop offset="100%" stopColor="#7c6328" />
          </linearGradient>

          {/* Subtle/inactive borders for rest states */}
          <linearGradient id="inactiveBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(191,160,82,0.12)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Blueprint fine aesthetic network vector grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-[#BFA052]/20 fill-none stroke-[0.06]">
          <pattern id="hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexes)" />
        </svg>
      </div>

      {/* Futuristic soft gradient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFA052]/3 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#1e5c94]/4 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Structural Block / True Two-Column Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading, Introduction text, and Interactive Accordion */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 h-full">
          <div className="space-y-4 animate-fade-in">
            {/* Section Label */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">
                The Distinction
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tight leading-none">
              Why Partner <span className="text-brand-gold">With Us</span>
            </h2>
            
            {/* Introductory Paragraph */}
            <div className="text-sm md:text-base text-slate-300 font-medium leading-relaxed border-l-4 border-brand-gold pl-6 max-w-2xl mt-6">
              We understand that every decision you make carries risk, timelines, and long-term impact. That’s why we approach every engagement with a sharp focus on due diligence, clarity, and foresight, helping you navigate uncertainty, anticipate challenges early, and make well-informed choices that stand strong not just today, but well into the future.
            </div>
          </div>

          {/* Interactive Benefit List (Accordion) */}
          <div className="relative pt-6 border-t border-white/10 space-y-2.5">
            {pillars.map((pillar) => {
              const isPillarActive = currentActiveId === pillar.id;

              return (
                <div
                  key={`pillar-accordion-${pillar.id}`}
                  id={`pillar-left-node-${pillar.id}`}
                  className={cn(
                    'w-full border border-white/5 rounded-xl p-3 sm:p-4 transition-all duration-300 cursor-pointer select-none relative z-10 flex flex-col gap-2 hover:bg-white/[0.02]',
                    isPillarActive
                      ? 'border-brand-gold/30 bg-brand-gold/[0.04] shadow-[0_0_20px_rgba(191,160,82,0.08)]'
                      : 'bg-white/[0.005]'
                  )}
                  onClick={() => setActiveId(pillar.id)}
                  onMouseEnter={() => setHoveredId(pillar.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Glowing background accent on active */}
                  {isPillarActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gold/5 via-transparent to-transparent pointer-events-none -z-10"
                      animate={{
                        opacity: [0.6, 1.0, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Header Row */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {/* Number Indicator */}
                      <span className={cn(
                        'font-mono text-xs font-bold transition-colors duration-300',
                        isPillarActive ? 'text-brand-gold' : 'text-slate-400'
                      )}>
                        0{pillar.id}
                      </span>
                      
                      {/* Accordion Title */}
                      <h3 className={cn(
                        'font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors duration-300',
                        isPillarActive ? 'text-brand-gold' : 'text-slate-200'
                      )}>
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Chevron Indicator */}
                    <ChevronDown className={cn(
                      'w-4 h-4 text-brand-gold/50 transition-transform duration-300',
                      isPillarActive && 'rotate-180 text-brand-gold'
                    )} />
                  </div>

                  {/* Collapsible Accordion Body */}
                  <motion.div
                    initial={false}
                    animate={{ height: isPillarActive ? 'auto' : 0, opacity: isPillarActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-1 text-[13px] sm:text-[14px] leading-relaxed text-white/80 font-sans font-light border-l border-brand-gold/40 pl-4 py-0.5 select-text tracking-wide">
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
          <div className="relative w-full min-w-[280px] max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-[540px] xl:max-w-[600px] aspect-square mx-auto">
            
            {/* Subtle architectural background alignment cross-axis layout */}
            <div className="absolute inset-x-[-3%] inset-y-[-3%] border border-dashed border-white/5 opacity-20 pointer-events-none z-0">
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

                if (pillar.id === 1) { endX = '50%'; endY = '22.5%'; }
                else if (pillar.id === 2) { endX = '75.5%'; endY = '36.25%'; }
                else if (pillar.id === 3) { endX = '75.5%'; endY = '63.75%'; }
                else if (pillar.id === 4) { endX = '50%'; endY = '77.5%'; }
                else if (pillar.id === 5) { endX = '24.5%'; endY = '63.75%'; }
                else if (pillar.id === 6) { endX = '24.5%'; endY = '36.25%'; }

                return (
                  <g key={`mesh-wire-${pillar.id}`}>
                    {/* Dark steady ambient line segment shadow */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isLineActive ? '#BFA052' : 'rgba(255, 255, 255, 0.08)'}
                      strokeWidth={isLineActive ? 2 : 0.75}
                      strokeOpacity={isLineActive ? 0.8 : 0.3}
                      className="transition-all duration-300"
                    />
                    
                    {/* Active floating beam data transmission pulses */}
                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isLineActive ? '#BFA052' : 'rgba(191,160,82,0.15)'}
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
                  const isAnyActive = currentActiveId !== null;
                  const isOtherActive = isAnyActive && !isCenterActive;

                  return (
                    <motion.div
                      key="partnership-center"
                      id="pillar-hex-partnership"
                      className="absolute aspect-[208/240] cursor-pointer"
                      style={{
                        left: '33%',
                        top: '33%',
                        width: '34%',
                        height: '34%',
                        zIndex: 35,
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: isCenterActive ? 1.05 : [1.0, 1.02, 1.0],
                        opacity: isOtherActive ? 0.6 : 1,
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
                      onMouseEnter={() => setHoveredId(99)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="relative w-full h-full animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
                        
                        {/* Pointy-topped hexagon SVG center node */}
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
                          <polygon
                            points="104,4.5 203.5,62 203.5,178 104,235.5 4.5,178 4.5,62"
                            fill="#051424"
                            stroke="rgba(191,160,82,0.2)"
                            strokeWidth="2"
                            transform="translate(0, 6)"
                            className="pointer-events-none"
                          />

                          {/* Main core center piece polygon block */}
                          <polygon
                            points="104,4.5 203.5,62 203.5,178 104,235.5 4.5,178 4.5,62"
                            fill="url(#centerGlow)"
                            fillOpacity={1.0}
                            stroke="#BFA052"
                            strokeWidth={2.4}
                            className="transition-all duration-300 ease-out"
                          />

                          {/* Hairline trace nested grid ring */}
                          <polygon
                            points="104,14.5 194.5,67 194.5,173 104,225.5 13.5,173 13.5,67"
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
                          <svg viewBox="0 0 100 115" className="w-20 h-22 sm:w-24 sm:h-26 drop-shadow-[0_0_12px_rgba(191,160,82,0.45)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* White outer square boundary */}
                            <rect x="23" y="10" width="54" height="54" stroke="#FFFFFF" strokeWidth="2.4" />
                            
                            {/* Precision stylized block "C" */}
                            <path d="M 48 22 L 35 22 L 35 45 L 48 45" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
                            
                            {/* Precision stylized block "I" */}
                            <line x1="62" y1="22" x2="62" y2="45" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="square" />
                            
                            {/* Parallel dual gold detail lines */}
                            <line x1="31" y1="51" x2="69" y2="51" stroke="#BFA052" strokeWidth="3.2" strokeLinecap="square" />
                            <line x1="31" y1="57" x2="69" y2="57" stroke="#BFA052" strokeWidth="3.2" strokeLinecap="square" />

                            {/* Company Logo Wordmark Typography */}
                            <text 
                              x="50" 
                              y="82" 
                              textAnchor="middle" 
                              fill="#FFFFFF"
                              className="font-serif font-bold text-[9px] tracking-[0.16em] uppercase"
                            >
                              CONSERVVE
                            </text>
                            <text 
                              x="50" 
                              y="92" 
                              textAnchor="middle" 
                              fill="#FFFFFF"
                              className="font-mono text-[4px] tracking-[0.22em] uppercase font-light opacity-90 text-slate-200"
                            >
                              INFRA SOLUTIONS
                            </text>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* 6 OUTER SYMMETRIC INTERACTIVE HEXAGON CELLS */}
                {pillars.map((pillar, idx) => {
                  const IconComponent = IconMap[pillar.iconName];
                  const isPillarActive = currentActiveId === pillar.id;
                  const isAnyActive = currentActiveId !== null;
                  const isOtherActive = isAnyActive && !isPillarActive;

                  // Flyout assembly variables based on current 34% hex grid bounds
                  const initX = ((33 - parseFloat(pillar.left)) / 34) * 100 + '%';
                  const initY = ((33 - parseFloat(pillar.top)) / 34) * 100 + '%';
                  const isLongTitle = pillar.title.length > 25;

                  return (
                    <motion.div
                      key={`cell-${pillar.id}`}
                      id={`pillar-hex-${pillar.id}`}
                      className="absolute aspect-[208/240] cursor-pointer"
                      style={{
                        left: pillar.left,
                        top: pillar.top,
                        width: '34%',
                        height: '34%',
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
                        opacity: isOtherActive ? 0.45 : 1,
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
                      onMouseEnter={() => setHoveredId(pillar.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => {
                        setActiveId(pillar.id);
                        setHoveredId(null);
                      }}
                    >
                      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                        
                        {/* Pointy-topped crisp responsive outline cell */}
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
                          <polygon
                            points="104,4.5 203.5,62 203.5,178 104,235.5 4.5,178 4.5,62"
                            fill="#04101e"
                            stroke="rgba(191,160,82,0.12)"
                            strokeWidth="2"
                            transform={isPillarActive ? 'translate(0, 8)' : 'translate(0, 4)'}
                            className="transition-all duration-500 ease-out pointer-events-none"
                          />

                          {/* Inner central vector container reflecting deep radial/linear volumetric polish */}
                          <polygon
                            points="104,4.5 203.5,62 203.5,178 104,235.5 4.5,178 4.5,62"
                            fill={isPillarActive ? 'url(#cellGlowGrad)' : 'url(#hexInnerDepth)'}
                            fillOpacity={1.0}
                            stroke={isPillarActive ? 'url(#goldBorderGrad)' : 'url(#inactiveBorderGrad)'}
                            strokeWidth={isPillarActive ? 2.5 : 1.3}
                            className="transition-all duration-500 ease-out"
                          />
                          
                          {/* Inner fine nested visual blueprint trace overlay */}
                          <polygon
                            points="104,14.5 194.5,67 194.5,173 104,225.5 13.5,173 13.5,67"
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

                        {/* Top vertex micro outline badge indicating the sequence number exactly matching the design */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
                          <div className={`px-2 py-0.5 border text-[9px] font-mono rounded-md font-extrabold tracking-tight transition-all duration-500 ${
                            isPillarActive 
                              ? 'border-brand-gold text-white bg-brand-gold shadow-[0_0_10px_rgba(191,160,82,0.5)]' 
                              : 'border-white/10 text-brand-gold bg-[#07182b]'
                          }`}>
                            0{pillar.id}
                          </div>
                        </div>

                        {/* Outer cell descriptive interactive block details */}
                        <div 
                          className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 sm:p-4 select-none z-10"
                          style={{ transform: 'translateZ(10px)' }}
                        >
                          
                          {/* Glowing vector icon wrapping Halo structural blueprint detail */}
                          <div className="relative mb-2">
                            {/* Rotating geometric drafting ticks to align with architectural-tech theme */}
                            {isPillarActive && (
                              <motion.div
                                className="absolute -inset-2.5 rounded-full border border-dashed border-brand-gold/50 pointer-events-none"
                                animate={{ rotate: 360 }}
                                transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
                              />
                            )}
                            {/* Glowing backdrop cloud */}
                            <div className={`absolute -inset-5 bg-gradient-to-r from-brand-gold to-brand-gold/20 rounded-full blur-[12px] transition-opacity duration-500 ${
                              isPillarActive ? 'opacity-45' : 'opacity-0 group-hover:opacity-20'
                            }`} />
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-500 relative z-10 ${
                              isPillarActive 
                                ? 'border-brand-gold bg-gradient-to-br from-[#123e6b] to-[#04101e] shadow-[0_0_15px_rgba(191,160,82,0.5)]' 
                                : 'border-white/10 bg-[#07182b]/70 backdrop-blur-sm group-hover:border-brand-gold/30'
                            }`}>
                              <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 relative z-10 ${
                                isPillarActive ? 'text-white scale-110 drop-shadow-[0_0_8px_#BFA052]' : 'text-brand-gold group-hover:text-white'
                              }`} />
                            </div>
                          </div>

                          {/* Highly polished upper Title heading */}
                          {/* Long titles dynamically scale down their font sizes to avoid wrapping too tightly or clipping */}
                          <h3 className={cn(
                            'font-sans font-bold uppercase tracking-wider text-center leading-tight transition-colors duration-300 w-full px-1',
                            isPillarActive ? 'text-brand-gold drop-shadow-[0_0_4px_rgba(191,160,82,0.25)]' : 'text-white/95',
                            isLongTitle 
                              ? 'text-[7.5px] xs:text-[8.5px] sm:text-[9px] md:text-[10px] lg:text-[10.5px]' 
                              : 'text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] lg:text-[12px]'
                          )}>
                            {pillar.title}
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
