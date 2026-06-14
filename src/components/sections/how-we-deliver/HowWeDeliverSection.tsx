'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Base image 1672×941. Container aspect = 1672/941 ≈ 1.7769
const CAR = 1672 / 941;
const STEP_DURATION = 1500; // ms per section in auto-play

/** Compute top-left corner of block image given its center point and display width */
function tlCorner(cx: number, cy: number, dw: number, imgW: number, imgH: number) {
  const dh = (dw / (imgW / imgH)) * CAR;
  return { lp: cx - dw / 2, tp: cy - dh / 2 };
}

interface Step {
  id: number;
  title: string;
  desc: string;
  imagePath: string;
  imgW: number;
  imgH: number;
  cx: number;
  cy: number;
  dw: number;
  hx: number;
  hy: number;
  hw: number;
  hh: number;
  panelSide: 'left' | 'right';
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Identification & Strategic Aggregation',
    desc: 'We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.',
    imagePath: '/how_we_deliver/HWD_Section_1.png',
    imgW: 1672, imgH: 941,
    cx: 10, cy: 28, dw: 34,
    hx: 0, hy: 0, hw: 22, hh: 57,
    panelSide: 'right',
  },
  {
    id: 2,
    title: 'Comprehensive Technical Due Diligence',
    desc: 'Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.',
    imagePath: '/how_we_deliver/HWD_Section_2.png',
    imgW: 1457, imgH: 1079,
    cx: 29, cy: 27, dw: 34,
    hx: 20, hy: 0, hw: 20, hh: 57,
    panelSide: 'right',
  },
  {
    id: 3,
    title: 'Commercial Structuring & Closure',
    desc: 'We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.',
    imagePath: '/how_we_deliver/HWD_Section_3.png',
    imgW: 1448, imgH: 1086,
    cx: 48, cy: 26, dw: 34,
    hx: 38, hy: 0, hw: 22, hh: 54,
    panelSide: 'right',
  },
  {
    id: 4,
    title: 'Land Registration & Documentation',
    desc: 'Accurate and timely execution of all legal documentation and registration processes.',
    imagePath: '/how_we_deliver/HWD_Section_4.png',
    imgW: 1448, imgH: 1086,
    cx: 78, cy: 25, dw: 34,
    hx: 60, hy: 0, hw: 40, hh: 54,
    panelSide: 'left',
  },
  {
    id: 5,
    title: 'Regulatory Approvals & Clearance',
    desc: 'Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.',
    imagePath: '/how_we_deliver/HWD_Section_5.png',
    imgW: 1433, imgH: 941,
    cx: 81, cy: 73, dw: 34,
    hx: 62, hy: 46, hw: 38, hh: 54,
    panelSide: 'left',
  },
  {
    id: 6,
    title: 'End-to-End Post-Acquisition',
    desc: 'Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.',
    imagePath: '/how_we_deliver/HWD_Section_6.png',
    imgW: 1479, imgH: 941,
    cx: 49, cy: 74, dw: 34,
    hx: 34, hy: 46, hw: 30, hh: 54,
    panelSide: 'right',
  },
  {
    id: 7,
    title: 'Complete Project Execution',
    desc: 'Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution.',
    imagePath: '/how_we_deliver/HWD_Section_7.png',
    imgW: 1448, imgH: 1086,
    cx: 17, cy: 73, dw: 34,
    hx: 0, hy: 46, hw: 35, hh: 54,
    panelSide: 'right',
  },
];

const pathVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -20, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: i * 0.12,
    }
  })
};

const containerVariantsLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

function CornerPattern({ isRight = false }: { isRight?: boolean }) {
  return (
    <div style={{ transform: isRight ? 'scaleX(-1)' : 'none' }} className="overflow-visible">
      <svg
        width="280"
        height="100"
        viewBox="0 0 280 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        {/* Shape 1: Cream bottom-left parallelogram */}
        <motion.path
          d="M 30,49 L 131,49 L 100,90 L 0,90 Z"
          fill="#F3EAD3"
          variants={pathVariants}
          custom={0}
        />
        {/* Shape 2: Navy top-middle parallelogram */}
        <motion.path
          d="M 60,10 L 161,10 L 131,50.5 L 30,50.5 Z"
          fill="#0C2C4D"
          variants={pathVariants}
          custom={1}
        />
        {/* Shape 3: Cream left wedge (triangle pointing up-right) */}
        <motion.path
          d="M 129,50.5 L 161,9.5 L 161,50.5 Z"
          fill="#FFF1D0"
          variants={pathVariants}
          custom={2}
        />
        {/* Shape 4: Cream right wedge (triangle pointing down-left) */}
        <motion.path
          d="M 159.5,9.5 L 159.5,50.5 L 191,9.5 Z"
          fill="#BFA052"
          variants={pathVariants}
          custom={3}
        />
        {/* Shape 5: Gold right-most parallelogram */}
        <motion.path
          d="M 189,9.5 L 231,9.5 L 201,50.5 L 159,50.5 Z"
          fill="#BFA052"
          variants={pathVariants}
          custom={4}
        />
      </svg>
    </div>
  );
}

export function HowWeDeliverSection() {
  const [activeId, setActiveId] = useState<number>(1);
  // cycleKey increments each time auto-play advances → forces progress bar to restart
  const [_cycleKey, setCycleKey] = useState(0);
  // True while the user has their mouse over a block — auto-play pauses
  const isUserHovering = useRef(false);
  const autoIndexRef = useRef(0); // 0-based index into steps[]
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isUserHovering.current) return; // paused — user is hovering
      autoIndexRef.current = (autoIndexRef.current + 1) % steps.length;
      setActiveId(steps[autoIndexRef.current].id);
      setCycleKey((k) => k + 1);
    }, STEP_DURATION);
  }, []);

  // Mount: begin auto-play from step 1
  useEffect(() => {
    setActiveId(steps[0].id);
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleHoverStart = (id: number) => {
    isUserHovering.current = true;
    // Sync auto-index so resume continues from this section
    const idx = steps.findIndex((s) => s.id === id);
    if (idx >= 0) autoIndexRef.current = idx;
    setActiveId(id);
  };

  const handleHoverEnd = () => {
    isUserHovering.current = false;
    // Resume auto-play immediately from the current section
    setCycleKey((k) => k + 1); // restart bar at current position
  };

  const active = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section className="bg-transparent relative overflow-hidden">

      {/* ── HEADER ── */}
      <div className="max-w-[110rem] mx-auto px-4 md:px-8 lg:px-16 pt-8 lg:pt-12 pb-12 relative z-10">
        <div className="relative w-full flex items-center justify-center min-h-[220px]">
          {/* Left Corner Pattern (slides in from left, draws lines) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariantsLeft}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[280px] xl:w-[340px] overflow-visible"
          >
            <CornerPattern isRight={false} />
          </motion.div>

          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl xl:max-w-5xl text-center z-10 mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-xs font-gotham font-bold uppercase tracking-[0.2em] text-brand-navy">
                The Process
              </span>
              <div className="w-10 h-[2px] bg-brand-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl font-tibere font-black text-brand-navy tracking-normal [word-spacing:0.25em] uppercase mb-6">
              HOW WE DELIVER
            </h2>
            <div className="text-xl text-brand-navy font-gotham font-medium leading-relaxed">
              A complete lifecycle from strategic land aggregation to project execution.
            </div>
          </motion.div>

          {/* Right Corner Pattern (slides in from right, draws lines) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariantsRight}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px] xl:w-[340px] overflow-visible"
          >
            <CornerPattern isRight={true} />
          </motion.div>
        </div>
      </div>

      {/* ── INTEGRATED MAP & NAV CONTAINER ── */}
      <div className="relative w-full px-4 md:px-8 lg:px-12 pb-12">
        <div
          className="relative max-w-[110rem] mx-auto rounded-xl shadow-[0_20px_40px_rgba(12,44,77,0.1)] border border-gray-200 overflow-hidden bg-white flex flex-col"
          onMouseLeave={handleHoverEnd}
        >
          {/* BASE IMAGE AREA */}
          <div className="relative w-full overflow-hidden bg-brand-navy">
            <Image
              src="/how-we-deliver.png"
              alt="Conservve Infra Solutions — How We Deliver"
              width={1672}
              height={941}
              className={cn(
                'w-full h-auto block select-none',
                'transition-[filter] duration-500 ease-out',
                'brightness-[0.75] saturate-[0.9]'
              )}
              priority
              sizes="100vw"
              draggable={false}
            />

            {/* HOTSPOT ZONES */}
            {steps.map((step) => (
              <div
                key={step.id}
                className="absolute z-20 cursor-pointer"
                style={{
                  left: `${step.hx}%`,
                  top: `${step.hy}%`,
                  width: `${step.hw}%`,
                  height: `${step.hh}%`,
                }}
                onMouseEnter={() => handleHoverStart(step.id)}
              />
            ))}

            {/* SHADOW PIT — navy blue shadow under lifted block */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={`pit-${active.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute z-[24] pointer-events-none"
                  style={{
                    left: `${active.hx + 2}%`,
                    top: `${active.hy + 4}%`,
                    width: `${active.hw - 4}%`,
                    height: `${active.hh - 6}%`,
                    background:
                      'radial-gradient(ellipse at 50% 60%, rgba(12,44,77,0.82) 20%, rgba(12,44,77,0.45) 60%, transparent 100%)',
                    filter: 'blur(12px)',
                  }}
                />
              )}
            </AnimatePresence>

            {/* RISING BLOCKS — all mounted, z & opacity toggled */}
            {steps.map((step) => {
              const isActive = activeId === step.id;
              const { lp, tp } = tlCorner(step.cx, step.cy, step.dw, step.imgW, step.imgH);
              return (
                <div
                  key={`block-${step.id}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${lp}%`,
                    top: `${tp}%`,
                    width: `${step.dw}%`,
                    zIndex: isActive ? 30 : -1,
                  }}
                >
                  <motion.div
                    animate={{
                      y: isActive ? -32 : 0,
                      opacity: isActive ? 1 : 0,
                      filter: isActive
                        ? 'drop-shadow(0px 28px 20px rgba(12,44,77,0.55)) drop-shadow(0px 4px 12px rgba(191,160,82,0.25))'
                        : 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
                    }}
                    transition={{
                      y: { type: 'spring', stiffness: 280, damping: 26, restDelta: 0.5 },
                      opacity: { duration: 0.18 },
                      filter: { duration: 0.3 },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.imagePath}
                      alt={step.title}
                      className="w-full h-auto block select-none"
                      draggable={false}
                    />
                  </motion.div>
                </div>
              );
            })}

            {/* INFO CARD — positioned relative to block image edges */}
            <AnimatePresence>
              {active && (() => {
                const { lp, tp } = tlCorner(active.cx, active.cy, active.dw, active.imgW, active.imgH);
                const cardTop = `${Math.max(tp + 1, 1)}%`;
                const cardPos = active.panelSide === 'right'
                  ? { left: `${lp + active.dw + 1.5}%` }
                  : { left: `${lp - 1.5}%`, transform: 'translateX(-100%)' };
                return (
                  <motion.div
                    key={`card-${active.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-40 pointer-events-auto w-[240px] lg:w-[272px]"
                    style={{ top: cardTop, ...cardPos }}
                  >
                    <div
                      className="bg-white rounded-sm overflow-hidden"
                      style={{
                        borderLeft: '3px solid #BFA052',
                        boxShadow: '0 4px 16px rgba(12,44,77,0.14), 0 1px 4px rgba(12,44,77,0.08)',
                      }}
                    >
                      <div className="p-5 lg:p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-7 h-7 flex items-center justify-center rounded-sm font-gotham text-white text-xs font-bold shrink-0"
                            style={{ background: '#0C2C4D' }}
                          >
                            {active.id < 10 ? `0${active.id}` : active.id}
                          </div>
                          <div className="h-[1px] flex-1" style={{ background: '#BFA052', opacity: 0.4 }} />
                        </div>
                        <h3
                          className="font-tibere mb-2 leading-snug"
                          style={{ color: '#0C2C4D', fontSize: 'clamp(17px,1.3vw,20px)', letterSpacing: '-0.015em' }}
                        >
                          {active.title}
                        </h3>
                        <div className="mb-3" style={{ width: 32, height: 2, background: '#BFA052', borderRadius: 1 }} />
                        <p
                          className="font-gotham leading-relaxed"
                          style={{ color: '#2E3A4A', fontSize: 13, lineHeight: 1.65 }}
                        >
                          {active.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* ══ INTEGRATED ABSTRACT NAV BAR ══ */}
          <div className="relative w-full flex bg-white border-t border-gray-200 min-h-[90px]">
            
            {/* Abstract Progress Background that spans the entire nav bar */}
            <div className="absolute inset-0 pointer-events-none z-0">
               {/* Continuous Abstract Progress Background */}
               <motion.div 
                 className="absolute top-0 left-0 h-full z-0" 
                 style={{ background: 'rgba(191, 160, 82, 0.08)' }}
                 animate={{ width: `${(activeId / steps.length) * 100}%` }}
                 transition={{ duration: STEP_DURATION / 1000, ease: 'linear' }}
               />
               
               {/* Continuous Thick Gold tracking lines (Top & Bottom) to match logo */}
               <motion.div 
                 className="absolute top-0 left-0 h-[5px] z-30" 
                 style={{ background: '#BFA052' }}
                 animate={{ width: `${(activeId / steps.length) * 100}%` }}
                 transition={{ duration: STEP_DURATION / 1000, ease: 'linear' }}
               />
               <motion.div 
                 className="absolute bottom-0 left-0 h-[5px] z-30" 
                 style={{ background: '#BFA052' }}
                 animate={{ width: `${(activeId / steps.length) * 100}%` }}
                 transition={{ duration: STEP_DURATION / 1000, ease: 'linear' }}
               />
            </div>

            {/* Step Tabs (Text & Content) */}
            {steps.map(step => {
              const isActive = activeId === step.id;
              const isPast = step.id < activeId;
              
              return (
                <button 
                  key={step.id}
                  onMouseEnter={() => handleHoverStart(step.id)}
                  className={cn(
                    "flex-1 relative px-2 py-4 md:py-5 flex flex-col items-center justify-start gap-1.5 md:gap-2 border-r border-gray-100 last:border-r-0 cursor-pointer",
                    isActive ? "z-20" : "z-10",
                    !isActive && !isPast && "hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <span className={cn(
                    "font-tibere text-2xl md:text-3xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]", 
                    isActive ? "text-brand-gold scale-[1.35] -translate-y-1 drop-shadow-md" : (isPast ? "text-brand-gold/80" : "text-gray-300")
                  )}>
                    0{step.id}
                  </span>
                  <span className={cn(
                    "font-gotham text-[10px] md:text-xs lg:text-[13px] text-center leading-tight transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hidden sm:block w-full px-2 origin-top", 
                    isActive ? "text-brand-navy font-bold scale-110" : (isPast ? "text-brand-navy/80 font-medium" : "text-gray-400 font-medium")
                  )}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
