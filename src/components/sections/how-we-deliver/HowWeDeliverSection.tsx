'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Base image 1672×941. Container aspect ratio
const CAR = 1672 / 941;
const STEP_DURATION = 3500; // ms per section in auto-play

/** Compute top-left corner of block image given its content center and target visual width */
function tlCorner(step: Step) {
  const { cx, cy, dw, imgW, imgH, cropX1, cropX2, cropY1, cropY2 } = step;
  const c_w = cropX2 - cropX1 + 1;

  const c_w_frac = c_w / imgW;

  const c_x_center_frac = ((cropX1 + cropX2) / 2) / imgW;
  const c_y_center_frac = ((cropY1 + cropY2) / 2) / imgH;

  // Scale the image display width (img_dw) so visual content width is step.dw
  const img_dw = dw / c_w_frac;
  const img_dh = (img_dw / (imgW / imgH)) * CAR;

  const lp = cx - c_x_center_frac * img_dw;
  const tp = cy - c_y_center_frac * img_dh;

  return { lp, tp, img_dw };
}

interface Step {
  id: number;
  title: string;
  desc: string;
  imagePath: string;
  imgW: number;
  imgH: number;
  cropX1: number;
  cropX2: number;
  cropY1: number;
  cropY2: number;
  cx: number;
  cy: number;
  dw: number;
  panelSide: 'left' | 'right';
}

/*
 * ─── PLACEMENT GEOMETRY ────────────────────────────────────────
 *
 * Uniform visual width dw = 22.0% so 3 blocks (66.0%) fit on the
 * 75%-wide horizontal rail with ~5.5% even gaps.
 *
 * Each block is centered vertically on the conveyor rails:
 *   top rail center  y = 18.6%
 *   bottom rail center y = 77.6%
 *   curve center (rightmost point) = (89.0%, 48.8%)
 * ────────────────────────────────────────────────────────────────
 */
const steps: Step[] = [
  {
    id: 1,
    title: 'Identification & Strategic Aggregation',
    desc: 'We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.',
    imagePath: '/how_we_deliver/HWD_Section_1.png',
    imgW: 1672, imgH: 941,
    cropX1: 176, cropX2: 1334, cropY1: 78, cropY2: 882,
    cx: 13.0, cy: 18.6, dw: 27.12,
    panelSide: 'right',
  },
  {
    id: 2,
    title: 'Comprehensive Technical Due Diligence',
    desc: 'Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.',
    imagePath: '/how_we_deliver/HWD_Section_2.png',
    imgW: 1457, imgH: 1079,
    cropX1: 137, cropX2: 1203, cropY1: 66, cropY2: 999,
    cx: 42.0, cy: 18.6, dw: 23.22,
    panelSide: 'right',
  },
  {
    id: 3,
    title: 'Commercial Structuring & Closure',
    desc: 'We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.',
    imagePath: '/how_we_deliver/HWD_Section_3.png',
    imgW: 1448, imgH: 1086,
    cropX1: 97, cropX2: 1248, cropY1: 80, cropY2: 982,
    cx: 71.0, cy: 18.6, dw: 25.21,
    panelSide: 'left',
  },
  {
    id: 4,
    title: 'Land Registration & Documentation',
    desc: 'Accurate and timely execution of all legal documentation and registration processes.',
    imagePath: '/how_we_deliver/HWD_Section_4.png',
    imgW: 1448, imgH: 1086,
    cropX1: 156, cropX2: 1241, cropY1: 37, cropY2: 934,
    cx: 90.0, cy: 48.8, dw: 21.79,
    panelSide: 'left',
  },
  {
    id: 5,
    title: 'Regulatory Approvals & Clearance',
    desc: 'Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.',
    imagePath: '/how_we_deliver/HWD_Section_5.png',
    imgW: 1433, imgH: 941,
    cropX1: 185, cropX2: 1333, cropY1: 26, cropY2: 910,
    cx: 71.0, cy: 75.5, dw: 25.66,
    panelSide: 'left',
  },
  {
    id: 6,
    title: 'End-to-End Post-Acquisition',
    desc: 'Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.',
    imagePath: '/how_we_deliver/HWD_Section_6.png',
    imgW: 1479, imgH: 941,
    cropX1: 282, cropX2: 1436, cropY1: 91, cropY2: 861,
    cx: 42.0, cy: 75.5, dw: 28.22,
    panelSide: 'right',
  },
  {
    id: 7,
    title: 'Complete Project Execution',
    desc: 'Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution.',
    imagePath: '/how_we_deliver/HWD_Section_7.png',
    imgW: 2390, imgH: 1792,
    cropX1: 74, cropX2: 2360, cropY1: 88, cropY2: 1706,
    cx: 13.0, cy: 75.5, dw: 26.61,
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
    <section className="bg-transparent w-full relative overflow-x-clip pt-8 md:pt-12 pb-16 md:pb-24 animate-cycleKey" key={cycleKey}>

      {/* ── HEADER ── */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 pt-4 lg:pt-6 pb-6 relative z-10">
        <div className="relative w-full flex items-center justify-center min-h-[150px]">
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
      <div className="relative w-full pb-12 overflow-visible">
        <div
          className="relative max-w-[1400px] w-[92%] mx-auto flex flex-col overflow-visible pt-10 md:pt-14"
          onMouseLeave={handleHoverEnd}
        >
          {/* BASE IMAGE AREA */}
          <div className="relative w-full overflow-visible bg-transparent">
            <Image
              src="/how_we_deliver/how-we-deliver-base-object.png"
              alt="Conservve Infra Solutions — How We Deliver Base"
              width={1672}
              height={941}
              className="w-full h-auto block select-none"
              priority
              sizes="(max-width: 1400px) 92vw, 1400px"
              draggable={false}
            />

            {/* HOTSPOT ZONES */}
            {steps.map((step) => {
              const c_w = step.cropX2 - step.cropX1 + 1;
              const c_h = step.cropY2 - step.cropY1 + 1;
              const content_ar = c_w / c_h;
              const target_h = (step.dw / content_ar) * CAR;

              const hx = step.cx - step.dw / 2;
              const hy = step.cy - target_h / 2;
              const hw = step.dw;
              const hh = target_h;

              return (
                <div
                  key={step.id}
                  className="absolute z-20 cursor-pointer"
                  style={{
                    left: `${hx}%`,
                    top: `${hy}%`,
                    width: `${hw}%`,
                    height: `${hh}%`,
                  }}
                  onMouseEnter={() => handleHoverStart(step.id)}
                />
              );
            })}

            {/* ALL 7 STAGES DISPLAYED SIMULTANEOUSLY */}
            {steps.map((step) => {
              const isActive = activeId === step.id;
              const { lp, tp, img_dw } = tlCorner(step);
              return (
                <div
                  key={`block-${step.id}`}
                  className="absolute pointer-events-none transition-all duration-300"
                  style={{
                    left: `${lp}%`,
                    top: `${tp}%`,
                    width: `${img_dw}%`,
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
                  className="absolute z-35 w-[62%] min-w-[700px] max-w-[860px]"
                  style={{
                    left: '44%',
                    top: '46.0%',
                  }}
                >
                  {/* Main curvy rectangular container with two-toned design */}
                  <div 
                    className="relative z-10 w-full h-[115px] bg-[#FAF9F6] border border-[#BFA052]/30 rounded-2xl shadow-2xl overflow-hidden flex"
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(12,44,77,0.5), 0 4px 20px rgba(191,160,82,0.15)',
                    }}
                  >
                    {/* Left Navy section via absolute SVG with sharp slanted cut */}
                    <div className="absolute inset-y-0 left-0 w-[18%] z-0">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Navy fill */}
                        <path 
                          d="M 0,0 L 80,0 L 68,100 L 0,100 Z" 
                          fill="#0C2C4D" 
                        />
                        {/* Gold dividing line */}
                        <motion.path 
                          d="M 80,0 L 68,100" 
                          fill="none" 
                          stroke="#BFA052" 
                          strokeWidth={2}
                          vectorEffect="non-scaling-stroke"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.9, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>

                    {/* Left Column Content (positioned absolutely on top of the Navy section) */}
                    <div className="absolute inset-y-0 left-0 w-[10%] flex flex-col items-center justify-center z-10">
                      <span className="text-3xl md:text-4xl font-gotham font-black text-[#BFA052] leading-none mb-1 select-none">
                        0{active.id}
                      </span>
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                        className="w-6 h-[2px] bg-[#BFA052] origin-center" 
                      />
                    </div>

                    {/* Square Logo Badge (positioned absolutely on the slanted border bulge, no circle) */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-[56px] h-[56px] rounded-lg bg-white border border-[#BFA052]/50 shadow-md flex items-center justify-center"
                      style={{
                        left: '13.5%', // centered precisely on the slant slope at w-[18%]
                      }}
                    >
                      <Image
                        src="/logo-dark-transparent.png"
                        alt="Conservve CI Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </motion.div>

                    {/* Right Column Content (starts after the badge) */}
                    <div className="flex-1 h-full flex flex-col justify-center pl-[20%] pr-6 md:pr-8 z-10 relative">
                      {/* Subtle Watermark on the right */}
                      <div className="absolute right-0 top-0 bottom-0 w-[40px] opacity-[0.03] pointer-events-none select-none z-0">
                        <Image
                          src="/Logo_Distort_BG.png"
                          alt="Watermark"
                          fill
                          className="object-contain object-right"
                        />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="font-tibere text-[#0C2C4D] font-black leading-tight text-[17px] md:text-[20px] lg:text-[22px] uppercase tracking-wider">
                          {active.title}
                        </h3>

                        {/* Premium Animated Divider: Line + Diamond + Line */}
                        <div className="flex items-center gap-2 my-1 w-full overflow-hidden">
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="h-[1px] bg-[#BFA052]/40 flex-1 origin-left" 
                          />
                          <motion.div 
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{ scale: 1, rotate: 45 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                            className="w-1.5 h-1.5 bg-[#BFA052] flex-shrink-0" 
                          />
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="h-[1px] bg-[#BFA052]/40 flex-1 origin-right" 
                          />
                        </div>

                        <p className="font-poppins font-normal text-slate-700 text-[13px] md:text-[14.5px] leading-relaxed antialiased">
                          {active.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ══ INTEGRATED FLOW BAR ══ */}
        <div className="relative max-w-[1400px] w-[92%] mx-auto flex bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 min-h-[90px] z-20">
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

      {/* Symmetrical Bottom Gold Border & Navy Transition Divider to Operational Presence */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#BFA052] z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C2C4D]/10 to-transparent pointer-events-none z-10" />
    </section>
  );
}
