'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens
// ─────────────────────────────────────────────────────────────────────────────
const GOLD     = '#BFA052';
const EASE_OUT = [0, 0, 0.2, 1] as const;
const EASE_EXP = [0.16, 1, 0.3, 1] as const;

// Leader-line geometry

// ─────────────────────────────────────────────────────────────────────────────
const LOCATIONS = [
  { id: 'bhiwandi', label: 'Bhiwandi', region: 'Mumbai, Maharashtra',    x: 60.5, y: 53.3, toRight: true,  lineH: 72, toBottom: false },
  { id: 'chakan',   label: 'Chakan',   region: 'Pune, Maharashtra',       x: 62.5, y: 57.1, toRight: true,  lineH: 72, toBottom: false },
  { id: 'talegaon', label: 'Talegaon', region: 'Pune, Maharashtra',       x: 63.6, y: 59.8, toRight: true,  lineH: 72, toBottom: true },
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
  { from: [60.5, 53.3], to: [62.5, 57.1], type: 'core' },
  { from: [62.5, 57.1], to: [63.6, 59.8], type: 'core' },
  { from: [63.6, 59.8], to: [67.0, 73.0], type: 'core' },
  { from: [67.0, 73.0], to: [67.5, 76.4], type: 'core' },
  // Outward strategic reach connections
  { from: [60.5, 53.3], to: [61.0, 22.0], type: 'strategic' }, // To Delhi
  { from: [60.5, 53.3], to: [75.0, 44.0], type: 'strategic' }, // To Kolkata
  { from: [67.0, 73.0], to: [68.7, 74.0], type: 'strategic' }, // To Chennai
  { from: [60.5, 53.3], to: [45.0, 45.0], type: 'strategic' }, // Off-screen West (Global)
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
        width: 28,
        height: 28,
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

      {/* ── Core marker: CIS Logo Image itself with glowing filter ── */}
      <motion.div
        animate={{ scale: isActive ? 1.4 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 28,
          height: 28,
          position: 'relative',
          zIndex: 2,
          filter: isActive
            ? `drop-shadow(0 0 10px ${GOLD}) drop-shadow(0 0 4px ${GOLD})`
            : `drop-shadow(0 0 4px rgba(191, 160, 82, 0.6))`,
          transition: 'filter 0.2s ease',
        }}
      >
        <Image
          src="/logo-white-transparent.png"
          alt="CIS Logo"
          width={28}
          height={28}
          className="object-contain select-none"
          draggable={false}
        />
      </motion.div>


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
                top: toBottom ? -4 : 'auto',
                bottom: toBottom ? 'auto' : -4,
                left: toRight ? 0 : -2.0, // aligns perfectly with box border edge
                width: 2.0,           // 2px thickness
                height: lineH + 6,
                background: '#FFFFFF', // changed lines to white
                transformOrigin: toBottom ? 'top' : 'bottom',
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 }}
            />

            {/* Junction Corner Node Dot */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.35 }}
              style={{
                position: 'absolute',
                left: toRight ? -2 : -4,
                top: toBottom ? lineH - 3 : 'auto',
                bottom: toBottom ? 'auto' : lineH - 3,
                width: 6,
                height: 6,
                backgroundColor: '#FFFFFF',
                borderRadius: '50%',
                zIndex: 10,
              }}
            />

            {/* Step 3 & 4 — Outer box outline with thin white borders, glass background, and white text */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.35 }}
              style={{
                position: 'absolute',
                left: toRight ? 0 : 'auto',
                right: toRight ? 'auto' : 0,
                width: 'max-content',
                top: toBottom ? lineH : 'auto',
                bottom: toBottom ? 'auto' : lineH,
                // Set transform origin based on the connection point corner so it expands outward
                transformOrigin: `${toBottom ? 'top' : 'bottom'} ${toRight ? 'left' : 'right'}`,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '2px solid #FFFFFF', // full white border outline around the box
                padding: '12px 16px',
                textAlign: toRight ? 'left' : 'right',
                pointerEvents: 'none',
              }}
            >
              {/* City name (in white) */}
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                {loc.label}
              </h4>

              {/* Region / State (in white) */}
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                }}
              >
                {loc.region}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
const PLACES = [
  { id: 'bhiwandi', text: 'Bhiwandi (Mumbai)' },
  { id: 'chakan',   text: 'Chakan (Pune)' },
  { id: 'talegaon', text: 'Talegaon (Pune)' },
  { id: 'hoskote',  text: 'Hoskote (Bangalore)' },
  { id: 'hosur',    text: 'Hosur (Krishnagiri)' },
] as const;

export function OperationalPresenceSection() {
  const [activeId, setActiveId] = useState<LocationId>('bhiwandi');
  const [hoveredId, setHoveredId] = useState<LocationId | null>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  const isUserHovering = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isUserHovering.current) return;
      setActiveId((current) => {
        const currentIndex = LOCATIONS.findIndex((loc) => loc.id === current);
        const nextIndex = (currentIndex + 1) % LOCATIONS.length;
        return LOCATIONS[nextIndex].id;
      });
    }, 4500); // 4.5s cycle for a nice slow counter/rotation
  }, []);

  useEffect(() => {
    if (isInView) {
      startAutoPlay();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, startAutoPlay]);

  const activate = useCallback((id: LocationId) => {
    isUserHovering.current = true;
    setHoveredId(id);
    setActiveId(id); // Align the cycle state with the hovered state
  }, []);

  const deactivate = useCallback(() => {
    isUserHovering.current = false;
    setHoveredId(null);
  }, []);

  const currentActiveId = hoveredId !== null ? hoveredId : activeId;

  return (
    <section
      ref={sectionRef}
      aria-label="Operational Presence"
      className="relative w-full overflow-hidden bg-[#081d33] flex flex-col lg:block lg:h-[800px] xl:h-[900px]"
    >
      {/* ── Desktop absolute gradient for text legibility ── */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#081d33] via-[#081d33]/95 to-transparent pointer-events-none z-15"
      />
      {/* Top and bottom vignettes to blend map edges on desktop */}
      <div
        className="hidden lg:block absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081d33] to-transparent pointer-events-none z-15"
      />
      <div
        className="hidden lg:block absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081d33] to-transparent pointer-events-none z-15"
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
              isActive={currentActiveId === loc.id}
              onActivate={() => activate(loc.id)}
              onDeactivate={deactivate}
            />
          ))}
        </div>
      </div>

      {/* ── Left-panel text content ── */}
      {/* Mobile: regular flow. Desktop: absolute overlay on the left */}
      <div className="w-full py-16 relative z-20 pointer-events-none lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:flex lg:items-center">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 pointer-events-none flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 max-w-[550px] xl:max-w-[620px] pointer-events-auto">
            {/* Heading */}
            <motion.h2
              {...(isInView ? fadeUp(0) : { initial: { opacity: 0, y: 14 } })}
              className="text-4xl sm:text-5xl lg:text-6xl font-tibere font-black uppercase mb-6"
              style={{
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              Our Operational<br />
              <span style={{ color: GOLD }}>Presence</span>
            </motion.h2>

            {/* Subheading with left gold line accent and slide animation */}
            <div className="relative flex items-center self-stretch mb-14">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  backgroundColor: GOLD,
                  transformOrigin: 'top',
                }}
              />
              <div className="overflow-hidden pl-6 py-1">
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="text-xl font-gotham font-medium leading-relaxed"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  Wherever your vision{' '}
                  <span style={{ color: GOLD }}>takes you,</span>
                  <br />
                  we&apos;re <span style={{ color: GOLD }}>already</span> there
                </motion.div>
              </div>
            </div>

            {/* Body — paragraph 1 */}
            <motion.p
              {...(isInView ? fadeUp(0.2) : { initial: { opacity: 0, y: 14 } })}
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.70)',
                fontSize: 'clamp(12.5px, 1.05vw, 14.5px)',
                lineHeight: 1.78,
                margin: '0 0 0.95rem',
                maxWidth: 520,
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
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.70)',
                fontSize: 'clamp(12.5px, 1.05vw, 14.5px)',
                lineHeight: 1.78,
                margin: 0,
                maxWidth: 520,
              }}
            >
              Whether you&apos;re exploring or ready to move, we collaborate with you on-ground
              to unlock the right possibilities in:
            </motion.p>

            {/* Locations list */}
            <motion.div
              {...(isInView ? fadeUp(0.35) : { initial: { opacity: 0, y: 14 } })}
              className="mt-8 border-t-[3px] border-[#BFA052] w-full max-w-[520px] overflow-hidden"
            >
              {PLACES.map((place) => {
                const isActive = currentActiveId === place.id;
                return (
                  <div
                    key={place.id}
                    onMouseEnter={() => activate(place.id as LocationId)}
                    onMouseLeave={deactivate}
                    onClick={() => activate(place.id as LocationId)}
                    className="border-b border-white/10 py-3.5 flex items-center justify-between cursor-pointer group transition-colors duration-300"
                  >
                    <span
                      className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 font-poppins"
                      style={{ color: isActive ? GOLD : 'rgba(255, 255, 255, 0.8)' }}
                    >
                      {place.text}
                    </span>
                    <span
                      className="text-xs transition-all duration-300 font-poppins"
                      style={{ 
                        color: isActive ? GOLD : 'rgba(255, 255, 255, 0.3)',
                        transform: isActive ? 'rotate(45deg)' : 'none'
                      }}
                    >
                      +
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
