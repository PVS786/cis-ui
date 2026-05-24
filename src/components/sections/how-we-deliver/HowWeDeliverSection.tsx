'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/*
 * ──────────────────────────────────────────────────────────────
 *  "How We Deliver" — Physical Rise Effect
 * ──────────────────────────────────────────────────────────────
 *  On hover, the EXACT zone from the base image physically
 *  lifts up (same visual, same position, just elevated) with a
 *  shadow underneath. Text panel appears beside the risen block.
 *  This creates the illusion that the block detached from the map.
 * ──────────────────────────────────────────────────────────────
 */

interface Step {
  id: number;
  title: string;
  desc: string;
  imagePath: string;
  // Zone coordinates on the base image (percentages)
  x: number;  // left edge
  y: number;  // top edge
  w: number;  // width
  h: number;  // height
  // Which side to show text panel
  panelSide: 'left' | 'right';
}

export function HowWeDeliverSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Zone coordinates: x,y = top-left corner; w,h = size (all in %)
  // Precisely mapped by analyzing the base image layout.
  const steps: Step[] = [
    {
      id: 1,
      title: 'Identification & Strategic Aggregation',
      desc: 'We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.',
      imagePath: '/how_we_deliver/sec_1.png',
      x: 0, y: 2, w: 21, h: 56,
      panelSide: 'right',
    },
    {
      id: 2,
      title: 'Comprehensive Technical Due Diligence',
      desc: 'Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.',
      imagePath: '/how_we_deliver/sec_2.png',
      x: 21, y: 0, w: 17, h: 56,
      panelSide: 'right',
    },
    {
      id: 3,
      title: 'Commercial Structuring & Closure',
      desc: 'We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.',
      imagePath: '/how_we_deliver/sec_3.png',
      x: 38, y: 0, w: 20, h: 54,
      panelSide: 'right',
    },
    {
      id: 4,
      title: 'Land Registration & Documentation',
      desc: 'Accurate and timely execution of all legal documentation and registration processes.',
      imagePath: '/how_we_deliver/sec_4.png',
      x: 60, y: 0, w: 36, h: 52,
      panelSide: 'left',
    },
    {
      id: 5,
      title: 'Regulatory Approvals & Clearance',
      desc: 'Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.',
      imagePath: '/how_we_deliver/sec_5.png',
      x: 64, y: 44, w: 34, h: 56,
      panelSide: 'left',
    },
    {
      id: 6,
      title: 'End-to-End Post-Acquisition',
      desc: 'Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.',
      imagePath: '/how_we_deliver/sec_6.png',
      x: 33, y: 44, w: 31, h: 56,
      panelSide: 'right',
    },
    {
      id: 7,
      title: 'Complete Project Execution',
      desc: 'Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution.',
      imagePath: '/how_we_deliver/sec_7.png',
      x: 2, y: 44, w: 31, h: 56,
      panelSide: 'right',
    },
  ];

  const active = steps.find((s) => s.id === activeId) ?? null;

  return (
    <section className="bg-[#fcfbf9] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(12, 44, 77, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(12, 44, 77, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ─── SECTION HEADER ─── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 lg:pt-24 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold" />
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-navy">
              The Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-sans font-black text-brand-navy tracking-tight mb-6">
            How We Deliver
          </h2>
          <div className="text-xl text-brand-navy font-medium leading-relaxed border-l-4 border-brand-gold pl-6 max-w-3xl">
            A complete lifecycle from strategic land aggregation to project execution.
            <br />
            <span className="text-gray-500 font-normal">
              Hover over each stage to explore our process.
            </span>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
           THE IMMERSIVE CANVAS — with breathing room
           ═══════════════════════════════════════════════════════════ */}
      <div className="relative w-full px-4 md:px-8 lg:px-12 pb-4">
        <div className="relative max-w-[110rem] mx-auto">
        {/* Base World Image */}
        <Image
          src="/how-we-deliver.png"
          alt="Conservve Infra Solutions — How We Deliver"
          width={3840}
          height={2160}
          className={cn(
            'w-full h-auto block transition-all duration-700 ease-out rounded-xl',
            activeId !== null && 'brightness-[0.25] saturate-50'
          )}
          priority
          sizes="100vw"
        />

        {/* ─── Hotspot Zones ─── */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="absolute z-20 cursor-pointer"
            style={{
              left: `${step.x}%`,
              top: `${step.y}%`,
              width: `${step.w}%`,
              height: `${step.h}%`,
            }}
            onMouseEnter={() => setActiveId(step.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Pulsing dot */}
            {activeId === null && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: step.id * 0.08 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_16px_rgba(191,160,82,0.7)]" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-brand-gold/30 animate-ping" />
                </div>
              </motion.div>
            )}
          </div>
        ))}

        {/* ═══════════════════════════════════════════════════════
             THE PHYSICAL RISE EFFECT
             The SAME zone from the base image is clipped and 
             physically elevated — so it looks like that exact block
             is detaching from the map.
             ═══════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={`rise-${active.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-30 pointer-events-none"
            >
              {/* ── THE RISEN BLOCK (clipped from base image) ── */}
              <motion.div
                initial={{ y: 0, scale: 1 }}
                animate={{ y: -20, scale: 1.06 }}
                exit={{ y: 0, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                className="absolute rounded-xl overflow-hidden"
                style={{
                  left: `${active.x}%`,
                  top: `${active.y}%`,
                  width: `${active.w}%`,
                  height: `${active.h}%`,
                  // Heavy shadow to create depth — block is "floating"
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(191,160,82,0.3)',
                }}
              >
                {/* Re-render the base image, positioned so only this zone is visible */}
                <div
                  className="absolute"
                  style={{
                    width: `${100 / (active.w / 100)}%`,
                    height: `${100 / (active.h / 100)}%`,
                    left: `-${active.x / (active.w / 100)}%`,
                    top: `-${active.y / (active.h / 100)}%`,
                  }}
                >
                  <Image
                    src="/how-we-deliver.png"
                    alt=""
                    width={3840}
                    height={2160}
                    className="w-full h-full object-fill brightness-110 contrast-[1.05]"
                    priority
                  />
                </div>
              </motion.div>

              {/* ── SHADOW FOOTPRINT on the base (where it lifted from) ── */}
              <div
                className="absolute rounded-xl bg-black/30 blur-xl"
                style={{
                  left: `${active.x + 1}%`,
                  top: `${active.y + 2}%`,
                  width: `${active.w - 2}%`,
                  height: `${active.h - 2}%`,
                }}
              />

              {/* ── GOLDEN GLOW EDGE around risen block ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute rounded-xl"
                style={{
                  left: `${active.x}%`,
                  top: `${active.y}%`,
                  width: `${active.w}%`,
                  height: `${active.h}%`,
                  transform: 'translateY(-20px) scale(1.06)',
                  boxShadow: '0 0 40px rgba(191,160,82,0.2), inset 0 0 0 1.5px rgba(191,160,82,0.4)',
                }}
              />

              {/* ═══════════════════════════════════════════════
                   TEXT PANEL — beside the risen block
                   Clean white frosted glass for readability.
                   Positioned dynamically based on panelSide.
                   ═══════════════════════════════════════════════ */}
              <motion.div
                initial={{ opacity: 0, x: active.panelSide === 'right' ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={cn(
                  'absolute pointer-events-auto w-[280px] lg:w-[320px]',
                )}
                style={{
                  top: `${active.y}%`,
                  ...(active.panelSide === 'right'
                    ? { left: `${active.x + active.w + 2}%` }
                    : { left: `${active.x - 2}%`, transform: 'translateX(-100%)' }
                  ),
                }}
              >
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-brand-gold/10 rounded-2xl blur-lg" />

                {/* Panel */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/80">
                  
                  {/* Top gold bar */}
                  <motion.div
                    className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />

                  <div className="p-6 lg:p-7">
                    {/* Phase badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center shadow-md">
                        <span className="text-brand-gold font-serif font-bold text-lg">
                          {active.id}
                        </span>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                          Phase 0{active.id}
                        </div>
                        <div className="text-[9px] uppercase tracking-wider text-gray-400">
                          of 07 stages
                        </div>
                      </div>
                    </div>

                    {/* Gold divider */}
                    <motion.div
                      className="w-12 h-[2px] bg-brand-gold mb-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    />

                    {/* Title */}
                    <motion.h4
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                      className="text-xl lg:text-[1.35rem] font-serif font-bold text-brand-navy leading-snug tracking-tight mb-3"
                    >
                      {active.title}
                    </motion.h4>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.3 }}
                      className="text-[13px] text-gray-600 font-sans leading-relaxed"
                    >
                      {active.desc}
                    </motion.p>

                    {/* Progress dots */}
                    <div className="mt-5 flex items-center gap-1.5">
                      {steps.map((s) => (
                        <div
                          key={s.id}
                          className={cn(
                            'h-1 rounded-full transition-all duration-500',
                            s.id === active.id
                              ? 'w-8 bg-brand-gold'
                              : s.id < active.id
                                ? 'w-2.5 bg-brand-gold/30'
                                : 'w-2.5 bg-gray-200'
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>

      {/* ─── BOTTOM PHASE NAV STRIP ─── */}
      <div className="relative z-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            {steps.map((step) => {
              const isActive = activeId === step.id;
              return (
                <button
                  key={step.id}
                  onMouseEnter={() => setActiveId(step.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={cn(
                    'flex-1 relative py-4 md:py-5 flex flex-col items-center gap-1 transition-all duration-500 border-t-[3px] cursor-pointer',
                    isActive
                      ? 'border-brand-gold bg-brand-navy/[0.03]'
                      : 'border-transparent hover:bg-gray-50/80'
                  )}
                >
                  <span
                    className={cn(
                      'text-xs md:text-sm font-bold transition-colors duration-300',
                      isActive ? 'text-brand-gold' : 'text-gray-300'
                    )}
                  >
                    0{step.id}
                  </span>
                  <span
                    className={cn(
                      'text-[8px] md:text-[10px] font-sans font-semibold text-center leading-tight px-1 transition-colors duration-300 hidden sm:block',
                      isActive ? 'text-brand-navy' : 'text-gray-400'
                    )}
                  >
                    {step.title.split(' ').slice(0, 2).join(' ')}
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
