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
// Location data
// x, y     — % position within the 1456 × 727 satellite image
//             (maps 1-to-1 with CSS left / top inside the aspect-ratio div)
// toRight  — info panel opens right (true) or left (false)
// lineH    — vertical leader line height px
// ─────────────────────────────────────────────────────────────────────────────
const LOCATIONS = [
  { id: 'bhiwandi', label: 'Bhiwandi', region: 'Mumbai, Maharashtra',    x: 60.5, y: 49.5, toRight: true,  lineH: 72 },
  { id: 'chakan',   label: 'Chakan',   region: 'Pune, Maharashtra',       x: 61.5, y: 56.5, toRight: true,  lineH: 72 },
  { id: 'talegaon', label: 'Talegaon', region: 'Pune, Maharashtra',       x: 60.8, y: 59.0, toRight: false, lineH: 72 },
  { id: 'hoskote',  label: 'Hoskote',  region: 'Bangalore, Karnataka',    x: 63.5, y: 72.5, toRight: true,  lineH: 52 },
  { id: 'hosur',    label: 'Hosur',    region: 'Krishnagiri, Tamil Nadu', x: 63.0, y: 75.0, toRight: false, lineH: 52 },
] as const;

type LocationId = (typeof LOCATIONS)[number]['id'];

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
// MapMarker
// ─────────────────────────────────────────────────────────────────────────────
interface MarkerProps {
  loc: (typeof LOCATIONS)[number];
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function MapMarker({ loc, isActive, onActivate, onDeactivate }: MarkerProps) {
  const { toRight, lineH } = loc;

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
        width: 12,
        height: 12,
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

      {/* ── Continuous infrastructure pulse ring (always running) ── */}
      <motion.span
        aria-hidden
        animate={{
          scale: [1.0, 2.5],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 2.5,
          ease: 'easeOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `1.5px solid ${GOLD}`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Ambient soft glow disc (intensifies on hover) ── */}
      <motion.span
        aria-hidden
        animate={{
          scale: isActive ? 1.45 : 1,
          opacity: isActive ? 1.0 : 0.65,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,160,82,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Core dot: gold ring + white fill ── */}
      <motion.span
        aria-hidden
        animate={{ scale: isActive ? 1.25 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          display: 'block',
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#FFFFFF',
          border: `3px solid ${GOLD}`,
          position: 'relative',
          zIndex: 2,
          boxShadow: isActive
            ? `0 0 0 4px rgba(191,160,82,0.35), 0 0 16px ${GOLD}`
            : `0 0 8px rgba(191,160,82,0.45)`,
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
            {/* Step 2 — Vertical leader line, grows from dot upward */}
            <motion.span
              style={{
                position: 'absolute',
                bottom: 0,
                left: -1.0,           // centres the 2 px line on the dot's x
                width: 2.0,           // 2px thickness
                height: lineH,
                background: GOLD,
                transformOrigin: 'bottom',
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 }}
            />

            {/* Step 3 — Horizontal connector line (Accent Line 1), extends from line-top */}
            <motion.span
              style={{
                position: 'absolute',
                bottom: lineH,
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
                bottom: lineH,
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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#020c18' }}
    >
      {/* ── Map image — aspect ratio matches native 1456 × 727 proportions ── */}
      <div className="relative w-full" style={{ aspectRatio: '1456 / 727' }}>
        <Image
          src="/map.png"
          alt="India operational presence map — Bhiwandi, Chakan, Talegaon, Hoskote, Hosur"
          fill
          priority
          className="object-cover object-center select-none"
          sizes="100vw"
          draggable={false}
        />

        {/* Left-to-centre gradient for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(2,12,24,0.97) 0%, rgba(2,12,24,0.88) 18%, rgba(2,12,24,0.50) 36%, rgba(2,12,24,0.0) 52%)',
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(2,12,24,0.65) 0%, transparent 10%)' }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(2,12,24,0.75) 0%, transparent 12%)' }}
        />

        {/* ── Left-panel text content ───────────────────────────────────────── */}
        {/* pointer-events-none on the full-bleed wrapper so empty space doesn't
            block marker hover; re-enabled on the actual text box */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full max-w-[1600px] mx-auto px-8 md:px-14 lg:px-20">
            <div
              className="max-w-[430px] xl:max-w-[460px]"
              style={{ pointerEvents: 'auto' }}
            >
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
                  fontFamily: "'Tibere OTW03-Bold', Georgia, serif",
                  color: '#FFFFFF',
                  fontSize: 'clamp(26px, 3vw, 46px)',
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

        {/* ── Map markers ───────────────────────────────────────────────────── */}
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
    </section>
  );
}
