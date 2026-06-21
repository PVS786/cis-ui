'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LandOpportunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const w = dimensions.width;
  const h = dimensions.height;
  const r = 16;
  const inset = -3; // 3px outside the image container to sit exactly as a border covering the image
  const leftX = inset;
  const rightX = w - inset;
  const topY = inset;
  const bottomY = h - inset;
  const innerR = r - inset;

  const P = w && h ? Math.round((w + h) * 2) : 1800;
  const H = w && h ? Math.round(w + h) : 900;

  const pathD = w && h ? `
    M ${leftX + innerR} ${topY}
    L ${rightX - innerR} ${topY}
    A ${innerR} ${innerR} 0 0 1 ${rightX} ${topY + innerR}
    L ${rightX} ${bottomY - innerR}
    A ${innerR} ${innerR} 0 0 1 ${rightX - innerR} ${bottomY}
    L ${leftX + innerR} ${bottomY}
    A ${innerR} ${innerR} 0 0 1 ${leftX} ${bottomY - innerR}
    L ${leftX} ${topY + innerR}
    A ${innerR} ${innerR} 0 0 1 ${leftX + innerR} ${topY}
    Z
  `.replace(/\s+/g, ' ').trim() : '';
  return (
    <section
      className="pt-16 lg:pt-24 pb-4 lg:pb-6 relative overflow-hidden"
    >
      {/* Symmetrical Top Gold Border & Navy Transition Divider from Hero */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#BFA052] z-20" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#020c18]/25 to-transparent pointer-events-none z-10" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(12,44,77,0.06)] flex flex-col lg:flex-row overflow-hidden relative"
        >
          {/* Unique Left Border Accent from Image 2 */}
          <div className="absolute left-0 top-0 bottom-0 w-2 z-20">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '40%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 right-0 bg-brand-gold"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '60%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 bg-brand-navy"
            />
          </div>

          {/* Left Content Area */}
          <div className="lg:w-[60%] p-8 md:p-12 lg:p-14 pl-10 md:pl-16 xl:pl-20 flex flex-col justify-center">



            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-tibere font-black text-brand-navy leading-[1.1] mb-6 tracking-tight"
            >
              TURNING <span className="text-brand-gold">LAND</span><br />
              INTO <span className="text-brand-gold">OPPORTUNITY</span>
            </motion.h2>

            <div className="space-y-6 text-brand-navy/80 leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                Land development is full of promise and full of obstacles nobody warns you about. The right land is hard to find.
                Approvals take longer than they should. And somewhere between the opportunity and the outcome,
                things get complicated in ways that cost you time, money, and momentum.
              </motion.p>

              {/* Highlight Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-xl py-4 px-6 md:px-8 border-l-4 border-l-brand-gold my-6 ml-[-2px]">
                <p className="text-brand-navy font-gotham font-bold text-lg md:text-xl m-0 leading-snug">
                  That&apos;s exactly the gap we exist to close, with you.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                At Conservve Infra Solutions, we partner with landowners, aggregators, investors, and foreign institutional funds across India,
                to handle everything from land acquisition to statutory approvals, turning fragmented processes into a clear,
                confident path forward.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                We bring clarity, speed, and complete accountability to every stage, from the first site visit to the final approval stamp.
                Not just as experts, but as a partner who walks every step alongside you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-10 pt-8 border-t-2 border-brand-navy"
            >
              <h4 className="text-xl md:text-2xl font-tibere font-bold text-brand-navy leading-snug tracking-tight">
                Your project deserves to move.<br />
                <span className="text-brand-gold">Let&apos;s move it together.</span>
              </h4>
            </motion.div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-[500px] flex items-stretch p-2 md:p-3 lg:p-4 overflow-hidden rounded-r-2xl">
            {/* Background design elements to match the exact design in the image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Subtle dot-grid texture on light background */}
              <div
                className="absolute inset-0 bg-[#FCFCFA]"
                style={{
                  backgroundImage: 'radial-gradient(#E5E7EB 1.5px, transparent 1.5px)',
                  backgroundSize: '12px 12px',
                }}
              />
              {/* Navy blue diagonal area and subtle golden line border */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Main Navy Diagonal Block */}
                <polygon points="58,0 100,0 100,100 38,100" fill="#0C2C4D" />
                {/* Thin gold dividing line */}
                <line x1="58" y1="0" x2="38" y2="100" stroke="#BFA052" strokeWidth="0.5" opacity="0.3" />
                {/* Bottom Left Cream Corner Wedge */}
                <polygon points="0,75 0,100 25,100" fill="#F4F4F0" opacity="0.9" />
              </svg>
            </div>

            {/* Glowing gold ambient light behind the card */}
            <div className="absolute inset-4 z-5 rounded-2xl bg-[#BFA052]/10 blur-2xl pointer-events-none" />

            {/* Main Image Container */}
            <motion.div
              ref={containerRef}
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0 25px 60px -15px rgba(12,44,77,0.15), 0 0 30px rgba(191,160,82,0.3)"
              }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-[#BFA052]/30 bg-white z-10 transition-shadow duration-500"
            >
              <Image
                src="/turn-into-land-opp.png"
                alt="Strategic Land Development"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Soft gradient overlay on image to match the refined corporate feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none z-10" />
            </motion.div>

            {/* Animated Snake Border Overlay & Decorative Gold Outline */}
            {w > 0 && h > 0 && (
              <svg
                className="absolute top-2 left-2 right-2 bottom-2 md:top-3 md:left-3 md:right-3 md:bottom-3 lg:top-4 lg:left-4 lg:right-4 lg:bottom-4 pointer-events-none z-20"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <filter id="border-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <style>{`
                  @keyframes snake-clockwise {
                    0% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: 0;
                      opacity: 0;
                    }
                    2% {
                      opacity: 1;
                    }
                    8% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }
                    15% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -30;
                      opacity: 1;
                    }
                    50% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${P - 110};
                      opacity: 1;
                    }
                    55% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${P - 50};
                      opacity: 1;
                    }
                    58% {
                      opacity: 1;
                    }
                    60% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${P};
                      opacity: 0;
                    }
                    100% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${P};
                      opacity: 0;
                    }
                  }
                  @keyframes snake-counter {
                    0% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H};
                      opacity: 0;
                    }
                    2% {
                      opacity: 1;
                    }
                    8% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${H - 50};
                      opacity: 1;
                    }
                    15% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${H - 110};
                      opacity: 1;
                    }
                    50% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${H - P + 30};
                      opacity: 1;
                    }
                    55% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 1;
                    }
                    58% {
                      opacity: 1;
                    }
                    60% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 0;
                    }
                    100% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 0;
                    }
                  }
                  .snake-line-1 {
                    animation: snake-clockwise 5s linear infinite;
                  }
                  .snake-line-2 {
                    animation: snake-counter 5s linear infinite;
                  }
                `}</style>

                {/* Decorative thin gold line that hugs the card with a dot at the top edge */}
                {(() => {
                  const decoOffset = -8;
                  const decoLeft = decoOffset;
                  const decoTop = decoOffset;
                  const decoBottom = h - decoOffset;
                  const decoR = 24; // concentric with card corner radius
                  const startX = w * 0.45;
                  const endX = w * 0.6;

                  const decoPath = `
                    M ${startX} ${decoTop}
                    L ${decoLeft + decoR} ${decoTop}
                    A ${decoR} ${decoR} 0 0 0 ${decoLeft} ${decoTop + decoR}
                    L ${decoLeft} ${decoBottom - decoR}
                    A ${decoR} ${decoR} 0 0 0 ${decoLeft + decoR} ${decoBottom}
                    L ${endX} ${decoBottom}
                  `;

                  return (
                    <g>
                      <path
                        d={decoPath}
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                      <circle
                        cx={startX}
                        cy={decoTop}
                        r="3.5"
                        fill="#BFA052"
                      />
                    </g>
                  );
                })()}

                {/* Snake Border paths */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#BFA052"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#border-glow)"
                  className="snake-line-1"
                />
                <path
                  d={pathD}
                  fill="none"
                  stroke="#BFA052"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#border-glow)"
                  className="snake-line-2"
                />
              </svg>
            )}

            {/* Premium 3D Folded Origami Shape at Bottom Right Corner with Split-Entry motion */}
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-4 lg:right-4 z-30 w-[110px] h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] pointer-events-auto origin-bottom-right">
              {/* Outer wrapper to clip parts for the split/slide-in entry effect */}
              <div className="relative w-full h-full">
                {/* Facet Group 1: The Navy & Left Dark Fold (enters from bottom-left) */}
                <motion.div
                  initial={{ x: -40, y: 40, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 z-10"
                >
                  <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="origami-navy-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#081E33" />
                        <stop offset="100%" stopColor="#1C4B75" />
                      </linearGradient>
                      <linearGradient id="origami-dark-gold" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8C6A23" />
                        <stop offset="100%" stopColor="#D5B05E" />
                      </linearGradient>
                    </defs>
                    {/* Dark Fold Wedge pointing down/left */}
                    <polygon points="0,100 65,65 40,40" fill="url(#origami-dark-gold)" />
                    {/* Main Navy Diagonal backing facet */}
                    <polygon points="0,100 40,40 100,0" fill="url(#origami-navy-grad)" />
                  </svg>
                </motion.div>

                {/* Facet Group 2: The Shiny Golden Folds (enters from top-right) */}
                <motion.div
                  initial={{ x: 40, y: -40, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 z-20"
                >
                  <svg className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="origami-gold-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DFBA6B" />
                        <stop offset="100%" stopColor="#A28038" />
                      </linearGradient>
                      <linearGradient id="origami-gold-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F9DF9D" />
                        <stop offset="100%" stopColor="#B69247" />
                      </linearGradient>
                      <linearGradient id="origami-gold-3" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#FFE8B5" />
                        <stop offset="100%" stopColor="#C8A555" />
                      </linearGradient>
                    </defs>
                    {/* Bottom gold facet */}
                    <polygon points="0,100 100,100 65,65" fill="url(#origami-gold-1)" />
                    {/* Right side gold facet */}
                    <polygon points="100,100 100,0 65,65" fill="url(#origami-gold-2)" />
                    {/* Middle gold facet */}
                    <polygon points="40,40 65,65 100,0" fill="url(#origami-gold-3)" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
