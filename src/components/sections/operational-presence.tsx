'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens
// ─────────────────────────────────────────────────────────────────────────────
const GOLD     = '#BFA052';
const EASE_OUT = [0, 0, 0.2, 1] as const;
const EASE_EXP = [0.16, 1, 0.3, 1] as const;

// Leader-line geometry
const PANEL_W = 220;  // info panel width px

// ─────────────────────────────────────────────────────────────────────────────
const LOCATIONS = [
  { id: 'bhiwandi', label: 'Bhiwandi', region: 'Mumbai, Maharashtra',    x: 59.9, y: 49.1, toRight: true,  lineH: 72, toBottom: false },
  { id: 'chakan',   label: 'Chakan',   region: 'Pune, Maharashtra',       x: 61.5, y: 52.1, toRight: true,  lineH: 72, toBottom: false },
  { id: 'talegaon', label: 'Talegaon', region: 'Pune, Maharashtra',       x: 62.1, y: 54.4, toRight: true,  lineH: 72, toBottom: true },
  { id: 'hoskote',  label: 'Hoskote',  region: 'Bangalore, Karnataka',    x: 67.0, y: 73.0, toRight: true,  lineH: 52, toBottom: false },
  { id: 'hosur',    label: 'Hosur',    region: 'Krishnagiri, Tamil Nadu', x: 67.5, y: 76.4, toRight: true,  lineH: 52, toBottom: true },
] as const;

type LocationId = (typeof LOCATIONS)[number]['id'];

// Helper to calculate a curved quadratic bezier path between two percentage points
function getCurvedPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  
  const dx = x2 - x1;
  const dy = y2 - y1;

  // Arch curvature factor
  const curvature = 0.15;
  
  // Offset perpendicular to the line to create a curve always arcing gently upwards
  const cx = mx + dy * curvature;
  const cy = my - dx * curvature;
  
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE_EXP, delay },
  } as const;
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG Connection Network Overlay
// ─────────────────────────────────────────────────────────────────────────────
const NETWORK_PATHS = [
  // Core operational connections
  { from: [59.9, 49.1], to: [61.5, 52.1], type: 'core' },
  { from: [61.5, 52.1], to: [62.1, 54.4], type: 'core' },
  { from: [62.1, 54.4], to: [67.0, 73.0], type: 'core' },
  { from: [67.0, 73.0], to: [67.5, 76.4], type: 'core' },
  // Outward strategic reach connections
  { from: [59.9, 49.1], to: [61.0, 22.0], type: 'strategic' }, // To Delhi
  { from: [59.9, 49.1], to: [75.0, 44.0], type: 'strategic' }, // To Kolkata
  { from: [67.0, 73.0], to: [68.7, 74.0], type: 'strategic' }, // To Chennai
  { from: [59.9, 49.1], to: [45.0, 45.0], type: 'strategic' }, // Off-screen West (Global)
] as const;

function SVGLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-15"
      viewBox="0 0 2752 1536"
    >
      <defs>
        <filter id="network-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.0" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {NETWORK_PATHS.map((_, idx) => {
          const id = `route-grad-${idx}`;
          return (
            <linearGradient key={id} id={id} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BFA052" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#BFA052" stopOpacity="0.75" />
            </linearGradient>
          );
        })}
      </defs>

      {NETWORK_PATHS.map((path, idx) => {
        const x1 = (path.from[0] * 2752) / 100;
        const y1 = (path.from[1] * 1536) / 100;
        const x2 = (path.to[0] * 2752) / 100;
        const y2 = (path.to[1] * 1536) / 100;
        
        // Calculate the curved quadratic Bezier path
        const d = getCurvedPath(x1, y1, x2, y2);
        const isCore = path.type === 'core';
        
        return (
          <g key={idx}>
            {/* Base connection line with gold-to-white gradient */}
            <motion.path
              d={d}
              stroke={`url(#route-grad-${idx})`}
              strokeWidth={isCore ? 1.5 : 0.8}
              strokeDasharray={isCore ? undefined : "6 6"}
              opacity={isCore ? 0.45 : 0.25}
              fill="none"
            />
            {/* Slow moving light particle traveling along the route */}
            <motion.path
              d={d}
              stroke="#FFFFFF"
              strokeWidth={isCore ? 2.5 : 1.5}
              strokeLinecap="round"
              fill="none"
              filter="url(#network-glow)"
              initial={{ strokeDasharray: isCore ? "8 250" : "5 150", strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -258 }}
              transition={{
                duration: isCore ? 6 : 8,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.5,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MapMarker
// ─────────────────────────────────────────────────────────────────────────────
interface MarkerProps {
  loc: (typeof LOCATIONS)[number];
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function MapMarker({ loc, isActive, onActivate, onDeactivate }: MarkerProps) {
  const { toRight, lineH, toBottom } = loc;

  return (
    <div
      role="button"
      aria-label={`${loc.label} — ${loc.region}`}
      aria-expanded={isActive}
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={() => (isActive ? onDeactivate() : onActivate())}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          isActive ? onDeactivate() : onActivate();
        }
      }}
      style={{
        position: 'absolute',
        left: `${loc.x}%`,
        top: `${loc.y}%`,
        // Centres the dot exactly on the specified coordinate.
        transform: 'translate(-50%, -50%)',
        width: 20,
        height: 20,
        zIndex: isActive ? 40 : 25,
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {/* ── Enlarged transparent hit area for easy hover / tap ── */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: -14,
          borderRadius: '50%',
        }}
      />

      {/* ── Three Concentric breathing rings (Slow 3.6s cycle) ── */}
      {[0, 1.2, 2.4].map((delay, index) => (
        <motion.span
          key={index}
          aria-hidden
          animate={{
            scale: [1.0, 3.2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3.6,
            ease: 'easeOut',
            repeat: Infinity,
            delay: delay,
          }}
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: `1.5px solid rgba(191, 160, 82, 0.4)`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Ambient soft glow disc (intensifies on hover) ── */}
      <motion.span
        aria-hidden
        animate={{
          scale: isActive ? 1.5 : 1,
          opacity: isActive ? 1.0 : 0.75,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 54,
          height: 54,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,160,82,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Core dot: solid gold center dot + white outline ── */}
      <motion.span
        aria-hidden
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          display: 'block',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: GOLD,
          border: `2px solid #FFFFFF`,
          position: 'relative',
          zIndex: 2,
          boxShadow: isActive
            ? `0 0 25px ${GOLD}, 0 0 0 6px rgba(191,160,82,0.35)`
            : `0 0 12px rgba(191,160,82,0.65), 0 0 4px rgba(255,255,255,0.7)`,
          transition: 'box-shadow 0.2s ease',
        }}
      />


      {/* ── Leader-line assembly ───────────────────────────────────────────── */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="assembly"
            aria-hidden
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '50%',
              pointerEvents: 'none',
            }}
          >
            {/* Step 2 — Vertical leader line, grows from dot upward/downward */}
            <motion.span
              style={{
                position: 'absolute',
                top: toBottom ? 0 : 'auto',
                bottom: toBottom ? 'auto' : 0,
                left: -1.0,           // centres the 2 px line on the dot's x
                width: 2.0,           // 2px thickness
                height: lineH,
                background: GOLD,
                transformOrigin: toBottom ? 'top' : 'bottom',
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 }}
            />

            {/* Step 3 — Horizontal connector line (Accent Line 1), extends from line-top/bottom */}
            <motion.span
              style={{
                position: 'absolute',
                top: toBottom ? lineH : 'auto',
                bottom: toBottom ? 'auto' : lineH,
                left: toRight ? 0 : -PANEL_W,
                width: PANEL_W,
                height: 2.0,          // 2px thickness
                background: GOLD,
                transformOrigin: toRight ? 'left' : 'right',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.35 }}
            />

            {/* Step 4 — Information overlay (architectural blueprint style, no container box) */}
            <div
              style={{
                position: 'absolute',
                top: toBottom ? lineH : 'auto',
                bottom: toBottom ? 'auto' : lineH,
                left: toRight ? 0 : -PANEL_W,
                width: PANEL_W,
                pointerEvents: 'none',
                height: 0,
              }}
            >
              {/* City name (positioned above top line) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.55 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: toRight ? 0 : 'auto',
                  right: toRight ? 'auto' : 0,
                  paddingBottom: 8,
                  paddingLeft: toRight ? 10 : 0,
                  paddingRight: toRight ? 0 : 10,
                  whiteSpace: 'nowrap',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Gotham', Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}
                >
                  {loc.label}
                </p>
              </motion.div>

              {/* Location Text (District/State) below top line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.70 }}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: toRight ? 10 : 0,
                    paddingRight: toRight ? 0 : 10,
                    textAlign: toRight ? 'left' : 'right',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Gotham', Arial, sans-serif",
                      fontSize: 11,
                      fontWeight: 400,
                      color: '#FFFFFF',
                      letterSpacing: '0.05em',
                      lineHeight: 1.3,
                    }}
                  >
                    {loc.region}
                  </p>
                </motion.div>

                {/* Accent Line 2 (Bottom line) */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.85 }}
                  style={{
                    width: '100%',
                    height: 2.0,       // 2px thickness
                    backgroundColor: GOLD,
                    transformOrigin: toRight ? 'left' : 'right',
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export function OperationalPresenceSection() {
  const [activeId, setActiveId] = useState<LocationId | null>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  // Debounced deactivation prevents the brief null flash when the pointer
  // moves directly from one marker to another.
  const deactivateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activate = useCallback((id: LocationId) => {
    if (deactivateTimer.current) {
      clearTimeout(deactivateTimer.current);
      deactivateTimer.current = null;
    }
    setActiveId(id);
  }, []);

  const deactivate = useCallback(() => {
    deactivateTimer.current = setTimeout(() => setActiveId(null), 120);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Operational Presence"
      className="relative w-full overflow-hidden bg-[#020c18] flex flex-col lg:block lg:h-[800px] xl:h-[900px]"
    >
      {/* ── Desktop absolute gradient for text legibility ── */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#020c18] via-[#020c18]/95 to-transparent pointer-events-none z-15"
      />
      {/* Top and bottom vignettes to blend map edges on desktop */}
      <div
        className="hidden lg:block absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020c18] to-transparent pointer-events-none z-15"
      />
      <div
        className="hidden lg:block absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020c18] to-transparent pointer-events-none z-15"
      />

      {/* ── Map Container Wrapper ── */}
      {/* Mobile: regular flow, full width. Desktop: absolute, fits viewport height and aligns right */}
      <div className="w-full relative aspect-[2752/1536] lg:aspect-auto lg:absolute lg:inset-0 lg:z-10 lg:flex lg:items-center lg:justify-end pointer-events-none">
        <div className="relative aspect-[2752/1536] w-full h-auto lg:h-full lg:w-auto max-w-full max-h-full flex items-center justify-center pointer-events-auto">
          
          {/* Satellite Map Image */}
          <Image
            src="/map-new.png"
            alt="India operational presence map — Bhiwandi, Chakan, Talegaon, Hoskote, Hosur"
            fill
            priority
            className="object-contain select-none"
            sizes="(max-width: 1024px) 100vw, 75vw"
            draggable={false}
          />

          {/* SVG Connection Network Overlay */}
          <SVGLines />

          {/* Map markers */}
          {LOCATIONS.map((loc) => (
            <MapMarker
              key={loc.id}
              loc={loc}
              isActive={activeId === loc.id}
              onActivate={() => activate(loc.id)}
              onDeactivate={deactivate}
            />
          ))}
        </div>
      </div>

      {/* ── Left-panel text content ── */}
      {/* Mobile: regular flow. Desktop: absolute overlay on the left */}
      <div className="w-full px-8 md:px-14 py-16 relative z-20 pointer-events-none lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:flex lg:items-center lg:py-0">
        <div className="w-full max-w-[1600px] mx-auto lg:px-12 xl:px-20 pointer-events-auto">
          <div className="max-w-[430px] xl:max-w-[460px]">
            {/* Section label */}
            <motion.div
              {...(isInView ? fadeUp(0) : { initial: { opacity: 0, y: 14 } })}
              className="flex items-center gap-3 mb-5"
            >
              <span
                className="block w-8 h-[1.5px]"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ fontFamily: "'Gotham', Arial, sans-serif", color: GOLD }}
              >
                Operational Presence
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...(isInView ? fadeUp(0.1) : { initial: { opacity: 0, y: 14 } })}
              style={{
                fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif",
                color: '#FFFFFF',
                fontSize: 'clamp(26px, 3.2vw, 46px)',
                lineHeight: 1.15,
                fontWeight: 700,
                margin: '0 0 1.3rem',
              }}
            >
              Wherever your vision{' '}
              <span style={{ color: GOLD }}>takes you,</span>
              <br />
              we&apos;re already there
            </motion.h2>

            {/* Body — paragraph 1 */}
            <motion.p
              {...(isInView ? fadeUp(0.2) : { initial: { opacity: 0, y: 14 } })}
              style={{
                fontFamily: "'Gotham', Arial, sans-serif",
                color: 'rgba(255,255,255,0.70)',
                fontSize: 'clamp(12.5px, 1.05vw, 14.5px)',
                lineHeight: 1.78,
                margin: '0 0 0.95rem',
                maxWidth: 400,
              }}
            >
              We&apos;re actively working on mandates across some of India&apos;s most strategic
              industrial corridors, giving you the advantage of strong local presence, faster
              execution, and opportunities that are truly aligned with market realities.
            </motion.p>

            {/* Body — paragraph 2 */}
            <motion.p
              {...(isInView ? fadeUp(0.28) : { initial: { opacity: 0, y: 14 } })}
              style={{
                fontFamily: "'Gotham', Arial, sans-serif",
                color: 'rgba(255,255,255,0.70)',
                fontSize: 'clamp(12.5px, 1.05vw, 14.5px)',
                lineHeight: 1.78,
                margin: 0,
                maxWidth: 400,
              }}
            >
              Whether you&apos;re exploring or ready to move, we collaborate with you on-ground
              to unlock the right possibilities in:
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
