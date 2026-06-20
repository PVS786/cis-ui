'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Base image 1671x941. Container aspect = 1671 / 941 = 1.7758
const CAR = 1671 / 941;
const STEP_DURATION = 3500; // ms per section in auto-play

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
    cx: 11, cy: 28, dw: 34,
    hx: 0, hy: 0, hw: 25, hh: 45,
    panelSide: 'right',
  },
  {
    id: 2,
    title: 'Comprehensive Technical Due Diligence',
    desc: 'Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.',
    imagePath: '/how_we_deliver/HWD_Section_2.png',
    imgW: 1457, imgH: 1079,
    cx: 44, cy: 27, dw: 26,
    hx: 25, hy: 0, hw: 35, hh: 45,
    panelSide: 'right',
  },
  {
    id: 3,
    title: 'Commercial Structuring & Closure',
    desc: 'We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.',
    imagePath: '/how_we_deliver/HWD_Section_3.png',
    imgW: 1448, imgH: 1086,
    cx: 77, cy: 26, dw: 25.5,
    hx: 60, hy: 0, hw: 25, hh: 45,
    panelSide: 'left',
  },
  {
    id: 4,
    title: 'Land Registration & Documentation',
    desc: 'Accurate and timely execution of all legal documentation and registration processes.',
    imagePath: '/how_we_deliver/HWD_Section_4.png',
    imgW: 1448, imgH: 1086,
    cx: 90, cy: 50, dw: 25.5,
    hx: 80, hy: 25, hw: 20, hh: 40,
    panelSide: 'left',
  },
  {
    id: 5,
    title: 'Regulatory Approvals & Clearance',
    desc: 'Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.',
    imagePath: '/how_we_deliver/HWD_Section_5.png',
    imgW: 1433, imgH: 941,
    cx: 81, cy: 73, dw: 29,
    hx: 65, hy: 55, hw: 35, hh: 45,
    panelSide: 'left',
  },
  {
    id: 6,
    title: 'End-to-End Post-Acquisition',
    desc: 'Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.',
    imagePath: '/how_we_deliver/HWD_Section_6.png',
    imgW: 1479, imgH: 941,
    cx: 49, cy: 74, dw: 30,
    hx: 32, hy: 55, hw: 33, hh: 45,
    panelSide: 'right',
  },
  {
    id: 7,
    title: 'Complete Project Execution',
    desc: 'Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution.',
    imagePath: '/how_we_deliver/HWD_Section_7.png',
    imgW: 2390, imgH: 1792,
    cx: 17, cy: 73, dw: 25.5,
    hx: 0, hy: 55, hw: 32, hh: 45,
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

const bgGroupVariants = {
  hidden: { 
    opacity: 0, 
    x: -400,
    skewX: -8,
  },
  visible: {
    opacity: 1, 
    x: 0,
    skewX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 45,
      damping: 16,
      mass: 1.0,
      delay: 0.05,
    }
  }
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
        {/* Faded Background Shape Silhouette (underneath like a 3d shadow) */}
        <motion.path
          d="M -300,5 L 250,5 L 175,105 L -300,105 Z"
          fill="#F3EAD3"
          fillOpacity={0.25}
          variants={bgGroupVariants}
        />

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
  const [cycleKey, setCycleKey] = useState(0);
  const isUserHovering = useRef(false);
  const autoIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isUserHovering.current) return;
      autoIndexRef.current = (autoIndexRef.current + 1) % steps.length;
      setActiveId(steps[autoIndexRef.current].id);
      setCycleKey((k) => k + 1);
    }, STEP_DURATION);
  }, []);

  useEffect(() => {
    setActiveId(steps[0].id);
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleHoverStart = (id: number) => {
    isUserHovering.current = true;
    const idx = steps.findIndex((s) => s.id === id);
    if (idx >= 0) autoIndexRef.current = idx;
    setActiveId(id);
  };

  const handleHoverEnd = () => {
    isUserHovering.current = false;
    setCycleKey((k) => k + 1);
  };

  const active = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section className="bg-transparent w-full relative overflow-x-clip py-16 md:py-24 animate-cycleKey" key={cycleKey}>

      {/* ── HEADER ── */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 pt-8 lg:pt-12 pb-12 relative z-10">
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
              A complete <span className="text-[#BFA052]">lifecycle</span> from strategic land aggregation to project execution.
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

      {/* ── INTEGRATED MAP CONTAINER ── */}
      <div className="relative w-full pb-12 overflow-x-auto overflow-y-visible scrollbar-thin">
        <div
          className="relative w-[1600px] mx-auto flex flex-col overflow-visible px-8 pt-6"
          onMouseLeave={handleHoverEnd}
        >
          {/* BASE IMAGE AREA */}
          <div className="relative w-full overflow-visible bg-transparent">
            <Image
              src="/how_we_deliver/how-we-deliver-base-object.png"
              alt="Conservve Infra Solutions — How We Deliver Base"
              width={1600}
              height={900}
              className="w-full h-auto block select-none"
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

            {/* ALL 7 STAGES DISPLAYED SIMULTANEOUSLY */}
            {steps.map((step) => {
              const isActive = activeId === step.id;
              const { lp, tp } = tlCorner(step.cx, step.cy, step.dw, step.imgW, step.imgH);
              return (
                <div
                  key={`block-${step.id}`}
                  className="absolute pointer-events-none transition-all duration-300"
                  style={{
                    left: `${lp}%`,
                    top: `${tp}%`,
                    width: `${step.dw}%`,
                    zIndex: isActive ? 40 : (step.cy > 50 ? 20 : 10),
                  }}
                >
                  <motion.div
                    animate={{
                      y: isActive ? -24 : 0,
                      scale: isActive ? 1.05 : 1.0,
                      filter: isActive
                        ? 'drop-shadow(0px 24px 20px rgba(12,44,77,0.4)) drop-shadow(0px 4px 10px rgba(191,160,82,0.2))'
                        : 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 25,
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

            {/* SYNCED CENTER CARD */}
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={`card-${active.id}`}
                  initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                  animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                  exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-60%" }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute z-35 bg-white rounded-xl p-5 md:p-6 w-[22%] min-w-[200px] max-w-[280px] border-t-4 border-[#BFA052]"
                  style={{
                    left: '45.5%',
                    top: '52%',
                    boxShadow: '0 20px 40px rgba(12,44,77,0.12), 0 4px 12px rgba(191,160,82,0.06)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#0C2C4D] text-white font-gotham font-black rounded px-2.5 py-1 text-xs tracking-wider">
                      0{active.id}
                    </span>
                    <div className="h-[1px] bg-[#BFA052]/30 flex-1" />
                  </div>
                  <h3 className="font-tibere text-brand-navy font-bold leading-tight mb-2 text-base md:text-lg">
                    {active.title}
                  </h3>
                  <p className="font-poppins text-slate-700 text-[11.5px] md:text-[12.5px] leading-relaxed">
                    {active.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ══ INTEGRATED FLOW BAR ══ */}
        <div className="relative w-[1500px] mx-auto flex bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 min-h-[90px] z-20">
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
          {steps.map((step) => {
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
                  "font-gotham font-normal text-3xl md:text-4xl lg:text-[44px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]", 
                  isActive ? "text-brand-gold scale-[1.2] -translate-y-1 drop-shadow-md" : (isPast ? "text-brand-gold/80" : "text-gray-300")
                )}>
                  0{step.id}
                </span>
                <span className={cn(
                  "font-gotham font-medium text-sm md:text-base lg:text-[17px] text-center leading-tight transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hidden sm:block w-full px-2 origin-top", 
                  isActive ? "text-brand-navy scale-105" : (isPast ? "text-brand-navy/80" : "text-gray-400")
                )}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
